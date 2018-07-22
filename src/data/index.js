import flatten from 'just-flatten-it'
import multicombinations from '../utils/multicombinations'

const ENV = process.env.NODE_ENV

const database = require(`./raw/${ENV}`)

export let pokemons = database.pokemons
export let dishes = database.dishes
export let ingredients = database.ingredients
export let recipes

const DISH_WEIGHT_KEY = {
  MULLIGAN: 'mulligan',
  COLOR: 'color',
  TYPE: 'type',
  LEGENDARY: 'legendary',
}

const QUALITIES = ['BASIC', 'GOOD', 'VERY_GOOD', 'SPECIAL']
const POINT_OF_QUALITIES = [5, 6, 8, 10]

const MULLIGAN_DISH = dishes.find((dish) => dish.id === 1)
const LEGENDARY_DISH = dishes.find((dish) => dish.id === 18)

const INGAME_ORDERS_DISHES = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
.map((id) => dishes.find((dish) => dish.id === id))
const DEFAULT_MYSTICAL_DISH = LEGENDARY_DISH
const DEFAULT_DISH = MULLIGAN_DISH
const MATTERIAL_IS_MYSTICAL = 'mystical'

/**
 * compute dishes of each pokemons
 */
pokemons = pokemons.map((pokemon) => {
  let groups = [
    {
      key: DISH_WEIGHT_KEY.MULLIGAN,
      dishes: [MULLIGAN_DISH],
    },
    {
      key: DISH_WEIGHT_KEY.COLOR,
      dishes: dishes.filter((dish) => pokemon.color && pokemon.color.toLowerCase() === dish.pokemonFilter.color.toLowerCase()),
    },
    {
      key: DISH_WEIGHT_KEY.TYPE,
      dishes: dishes.filter((dish) => pokemon.type.length && ~pokemon.type.map((type) => type.toLowerCase()).indexOf(dish.pokemonFilter.type.toLowerCase())),
    },
    {
      key: DISH_WEIGHT_KEY.LEGENDARY,
      dishes: [LEGENDARY_DISH],
    },
  ]

  let result = groups.map(({ key, dishes }) => dishes.map((dish) => pokemon.dishWeight[key].map((value, index) => {
    if (!value) {
      return
    }
    return {
      id: dish.id,
      name: dish.name,
      logo: dish.logo,
      quality: QUALITIES[index],
      weight: +value,
    }
  })))

  result = flatten(result).filter(Boolean)

  return {
    ...pokemon,
    dishes: result,
  }
})

/**
 * compute dishes amount weight
 */
dishes = dishes.map((dish) => ({
  ...dish,
  weights: QUALITIES.map((quality) => {
    return pokemons.reduce((memo, pokemon) => {
      return memo + pokemon.dishes.filter((d) => d.id === dish.id && d.quality === quality).reduce((m, { weight }) => m + weight, 0)
    }, 0)
  }),
}))

/**
 * compute chance of each dishes of each pokemons
 */
pokemons = pokemons.map((pokemon) => ({
  ...pokemon,
  dishes: pokemon.dishes.map((dish) => ({
    ...dish,
    chance: dish.weight / dishes.find(({ id }) => id === dish.id).weights[QUALITIES.indexOf(dish.quality)],
  })),
}))

/**
 * compute ingredients attributes
 */
ingredients = ingredients.map((ingredient) => ({
  ...ingredient,
  attributes: [ingredient.color, ingredient.hardness, ingredient.matterial].filter(Boolean),
}))

/**
 * generate all recipes
 */
recipes = multicombinations(10, 5).map((indexes) => {
  let objects = indexes.map((index) => ingredients[index]).sort((left, right) => left.id - right.id)
  return {
    ingredients: objects,
    dish: getDish(objects),
    quality: getQuality(objects),
  }
})

function getDish (ingredients) {
  for (let index = 0; index < INGAME_ORDERS_DISHES.length; index++) {
    let dish = INGAME_ORDERS_DISHES[index]
    let rules = dish.ingredientRules
    let isMatch = rules.every((rule) => {
      return ingredients.reduce((memo, ingredient) => {
        return memo + (ingredient.attributes.find((attribute) => attribute === rule.attribute) ? 1 : 0)
      }, 0) >= rule.minimum
    })
    if (isMatch) {
      return dish
    }
  }
  if (ingredients.some((ingredient) => ingredient.matterial === MATTERIAL_IS_MYSTICAL)) {
    return DEFAULT_MYSTICAL_DISH
  }
  return DEFAULT_DISH
}

function getQuality (ingredients) {
  let points = ingredients.reduce((memo, ingredient) => memo + ingredient.quality, 0)
  for (let level = POINT_OF_QUALITIES.length - 1; level > 0; level--) {
    if (points >= POINT_OF_QUALITIES[level]) {
      return QUALITIES[level]
    }
  }
  return QUALITIES[0]
}
