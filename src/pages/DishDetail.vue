<template>
  <div class="view">
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
          <h4>{{ quality.title }} <span class="count">({{ recipes.filter((recipe) => recipe.quality === quality.value).length }})</span></h4>
          <div class="ingredients" v-for="recipe in recipes.filter((recipe) => recipe.quality === quality.value)" :key="recipe.id">
            <div class="ingredient" v-for="(ingredient, index) in recipe.ingredients" :key="index">
              <img :src="ingredient.logo" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { dishes, recipes } from '../data'

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
  data () {
    return {
      qualities: QUALITIES,
    }
  },
  computed: {
    dish () {
      return dishes.find((dish) => dish.id === +this.$route.params.id) || {}
    },
    recipes () {
      return recipes.filter((recipe) => recipe.dish.id === +this.$route.params.id) || []
    },
  },
  methods: {
  },
  components: {
  },
}
</script>

<style lang="postcss" scoped>
@import '../stylesheet/colors.css';

.view {
  background-color: hsl(40,63%,86%);
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
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
      padding: 18px 24px;
      border-radius: 8px;
      background-color: hsl(40,50%,95%);
      box-shadow: 0 4px 0 #fff, 0 8px 0 rgba(0,0,0,0.1);
    }
    h4 {
      margin: 0;
      padding: 0;
      color: #333;
      font-size: 18px;
      font-weight: normal;
      line-height: 2em;
      text-transform: capitalize;
      .count {
        color: #555;
      }
    }
    .ingredients {
      display: flex;
      justify-content: space-around;
      margin: 18px 0;
      padding: 18px;
      border-radius: 8px;
      background-color: hsl(40,63%,86%);
      box-shadow: 0 4px 0 #fff, 0 8px 0 rgba(0,0,0,0.1);
      .ingredient {
        width: 18px;
        img {
          display: block;
          width: 100%;
        }
      }
    }
  }
}
</style>
