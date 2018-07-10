<template>
  <div class="view">
    <div class="pokemon">
      <div class="header">
        <div class="avatar"><img :src="pokemon.avatar" /></div>
        <div class="title">
          <div class="id">No.{{ (1000 + pokemon.id + '').slice(1) }}</div>
          <div class="name">{{ pokemon.name }}</div>
        </div>
      </div>
      <div class="section classification">{{ pokemon.classification }}</div>
      <div class="section type-list">
        <h3>Type</h3>
        <TypeCapsule v-for="type of pokemon.type" :key="type" :value="type" class="type" />
      </div>
      <div class="section picture">
        <h3>Sprite</h3>
        <div class="sprite"><img :src="pokemon.sprite" /></div>
      </div>
      <div v-show="pokemon.evolution" class="section evolution">
        <h3>Evolution</h3>
        {{ pokemon.evolution }}
      </div>
      <div v-show="pokemon.color !== 'unknown'" class="section color">
        <h3>Color</h3>
        <span class="color-capsule" :class="`color-${pokemon.color.toLowerCase()}`">{{ pokemon.color }}</span>
      </div>
      <div class="section">
        <h3>Automatic Style</h3>
        {{ pokemon.automaticStyle }}
      </div>
      <div v-show="pokemon.dishes.length > 0" class="section dishes">
        <h3>Dishes</h3>
        <table>
          <thead class="title">
            <tr>
              <th class="logo"></th>
              <th class="name">Name</th>
              <th class="quality">Quality</th>
              <th class="chance">Chance</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(dish, index) of pokemon.dishes" :key="index" class="dish">
              <td class="logo"><img :src="dish.logo" /></td>
              <td class="name">{{ dish.name }}</td>
              <td class="quality">{{ dish.quality }}</td>
              <td class="chance">{{ (dish.chance * 100).toFixed(2) }}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { pokemons } from '../data'
import TypeCapsule from '../components/TypeCapsule.vue'

export default {
  name: 'app',
  data () {
    return {
      pokemon: pokemons.find((pokemon) => pokemon.id === +this.$route.params.id) || {},
    }
  },
  methods: {
  },
  components: {
    TypeCapsule,
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
.pokemon {
  padding: 24px;
  .header {
    font-size: 32px;
    color: #444;
    padding: 48px 0 12px;
    border-bottom: 4px solid #444;
    margin-bottom: 24px;
    display: flex;
    justify-content: left;
    .avatar {
      width: 42px;
      margin-right: 12px;
      border: 2px solid #fff;
      border-radius: 8px;
      img {
        display: block;
        width: 100%;
        max-width: 100%;
      }
    }
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
    .sprite {
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
  }
  .type-list {
    .type {
      font-size: 18px;
      margin-bottom: 12px;
      width: 100%;
      text-transform: uppercase;
    }
  }
  .color {
    .color-capsule {
      display: block;
      font-size: 14px;
      font-weight: bold;
      text-align: center;
      line-height: 3em;
      color: #fff;
      border: 2px solid #fff;
      border-radius: 8px;
      text-transform: uppercase;
      box-shadow: 0 4px 0 #fff, 0 8px 0 rgba(0,0,0,0.1);
      &.color-red {
        background-color: $color-red;
      }
      &.color-blue {
        background-color: $color-blue;
      }
      &.color-yellow {
        background-color: $color-yellow;
      }
      &.color-gray {
        background-color: $color-gray;
      }
    }
  }
  .dishes {
    line-height: 2em;
    table {
      width: 100%;
      border: none;
    }
    th {
      min-height: 32px;
    }
    .logo {
      width: 24px;
      padding: 12px 6px 0 0;
      img {
        width: 100%;
        max-width: 100%;
      }
    }
    .name, .quality {
      text-align: left;
    }
    .chance {
      text-align: right;
    }
  }
}
</style>
