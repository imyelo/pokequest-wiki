import flatten from 'just-flatten-it'
import database from '../assets/database.production.js'

export let pokemons = database.pokemons
export let dishes = database.dishes

const DISH_WEIGHT_KEY = {
  MULLIGAN: 'mulligan',
  COLOR: 'color',
  TYPE: 'type',
  LEGENDARY: 'legendary',
}

const QUALITIES = ['BASIC', 'GOOD', 'VERY_GOOD', 'SPECIAL']
// const POINT_OF_QUALITIES = [5, 6, 8, 10]

const MULLIGAN_DISH = dishes[0]
const LEGENDARY_DISH = dishes[17]

/**
 * compute dishes of each pokemon
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
