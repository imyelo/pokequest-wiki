<template>
  <Screen :title="dish.name">
    <Main>
      <div class="dish">
        <div class="header">
          <div class="title">
            <div class="id">Dish {{ (100 + dish.id + '').slice(1) }}</div>
            <div class="name">{{ dish.name }}</div>
          </div>
        </div>
        <div class="section">
          <div>{{ dish.description }}</div>
        </div>
        <div class="section">
          <h3>Picture</h3>
          <div class="picture"><img :src="dish.logo" /></div>
        </div>
        <div class="section">
          <h3>Ingredients</h3>
          <div>{{ dish.ingredients }}</div>
        </div>
        <div class="section recipes">
          <h3>Recipes</h3>
          <div v-for="(quality, index) in qualities" :key="index" class="group">
            <h4 :data-anchor="`Quality-${quality.value}`">{{ quality.title }}</h4>
            <div class="pokemons">
              <table>
                <thead>
                  <tr>
                    <th>Pokemon</th>
                    <th>Chance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="pokemon in quality.pokemons" :key="pokemon.id" @click="toPokemon(pokemon.id)" class="pokemon">
                    <td>
                      <div class="avatar">
                        <img :src="pokemon.avatar" />
                      </div>
                    </td>
                    <td>
                      {{ (pokemon.chance * 100).toFixed(2) }}%
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="combinations">
              <h5>Combinations <span class="count">({{ quality.recipes.length }})</span></h5>
              <div v-if="quality.recipes.length === 0" class="ingredients">
                Not exist
              </div>
              <div v-for="recipe in quality.recipes" :key="recipe.id" class="ingredients">
                <div v-for="(ingredient, index) in recipe.ingredients" :key="index" class="ingredient" :class="{ small: ingredient.quality === 1 }">
                  <img :src="ingredient.logo" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
    <Navbar />
  </Screen>
</template>

<script>
import { pokemons, dishes, recipes } from '../data'

const QUALITIES = [
  {
    title: 'Quality: Basic',
    value: 'BASIC',
  },
  {
    title: 'Quality: Good',
    value: 'GOOD',
  },
  {
    title: 'Quality: Very good',
    value: 'VERY_GOOD',
  },
  {
    title: 'Quality: Special',
    value: 'SPECIAL',
  },
]

export default {
  name: 'app',
  computed: {
    dish () {
      return dishes.find((dish) => dish.id === +this.$route.params.id) || {}
    },
    qualities () {
      let matchRecipes = recipes.filter((recipe) => recipe.dish.id === +this.$route.params.id) || []
      return QUALITIES.map((quality) => ({
        ...quality,
        recipes: matchRecipes.filter((recipe) => recipe.quality === quality.value),
        pokemons: pokemons
          .map((pokemon) => {
            let dish = pokemon.dishes.find((dish) => dish.id === +this.$route.params.id && dish.quality === quality.value)
            if (!dish) {
              return
            }
            return {
              ...pokemon,
              chance: dish.chance,
              weight: dish.weight,
            }
          })
          .filter(Boolean)
          .sort((left, right) => right.weight - left.weight),
      }))
    },
  },
  components: {
  },
  methods: {
    toPokemon (id) {
      this.$router.push(`/pokemons/${id}`)
    },
  },
}
</script>

<style lang="postcss" scoped>
@import '../stylesheet/colors.css';

.dish {
  padding: 24px;
  .header {
    font-size: 24px;
    color: #444;
    padding: 48px 0 12px;
    border-bottom: 4px solid #444;
    margin-bottom: 24px;
    display: flex;
    justify-content: left;
    .title {
      .id {
        font-size: 12px;
        line-height: 1em;
      }
      .name {
        font-weight: 800;
        line-height: 1em;
      }
    }
  }
  .section {
    margin: 24px 0;
    padding: 0 0 24px 0;
    font-size: 12px;
    color: #666;
    h3 {
      font-size: 24px;
      margin: 12px 0;
      padding-bottom: 12px;
      border-bottom: 1px solid #444;
      color: #444;
      font-weight: normal;
    }
  }
  .picture {
    background-color: hsl(40,50%,95%);
    width: 100%;
    height: calc(96px * 1.5);
    border-radius: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 4px 0 #fff, 0 8px 0 rgba(0,0,0,0.1);
    img {
      width: 96px;
    }
  }
  .recipes {
    .group {
      margin-bottom: 24px;
      padding: 18px 0;
    }
    h4 {
      margin: 0;
      padding: 0;
      color: #333;
      font-size: 18px;
      font-weight: normal;
      line-height: 2em;
      text-transform: capitalize;
    }
    .pokemons {
      margin: 12px 0;
      border-radius: 8px;
      background-color: hsl(40,50%,95%);
      box-shadow: 0 4px 0 #fff, 0 8px 0 rgba(0,0,0,0.1);
      overflow: hidden;
      table {
        width: 100%;
        border: none;
        border-collapse:collapse;
      }
      tr {
        border-bottom: 1px solid #fff;
      }
      th {
        padding: 12px 0;
        line-height: 2em;
      }
      td {
        text-align: center;
      }
      thead {
        tr {
          background-color: hsl(42,52%,90%);
          border-bottom: none;
        }
      }
      tbody {
        tr {
          cursor: pointer;
          &:nth-child(2n) {
            background-color: hsl(42,52%,96%);
          }
          &:nth-child(2n+1) {
            background-color: hsl(42,52%,98%);
          }
          &:active, &:hover {
            background: hsl(40,63%,76%);
          }
        }
      }
      .avatar {
        width: 48px;
        margin: 8px auto;
        border-radius: 4px;
        background-color: hsl(40,63%,86%);
        box-shadow: 0 2px 0 #fff, 0 4px 0 rgba(0,0,0,0.1);
        overflow: hidden;
        img {
          display: block;
          width: 100%;
        }
      }
    }
    .combinations {
      margin: 18px 0;
      border-radius: 8px;
      background-color: hsl(40,50%,95%);
      box-shadow: 0 4px 0 #fff, 0 8px 0 rgba(0,0,0,0.1);
      overflow: hidden;
      h5 {
        margin: 0;
        padding: 12px 0;
        font-size: 12px;
        font-weight: bold;
        line-height: 2em;
        color: #666;
        text-align: center;
        background-color: hsl(42,52%,90%);
        .count {
          padding-left: 0.5em;
          color: #999;
        }
      }
      .ingredients {
        display: flex;
        justify-content: space-around;
        padding: 24px;
        border-bottom: 1px solid #fff;
        &:nth-child(2n) {
          background-color: hsl(42,52%,96%);
        }
        &:nth-child(2n+1) {
          background-color: hsl(42,52%,98%);
        }
        .ingredient {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 24px;
          img {
            display: block;
            width: 100%;
          }
          &.small {
            img {
              width: 58%;
            }
          }
        }
      }
    }
  }
}
</style>
