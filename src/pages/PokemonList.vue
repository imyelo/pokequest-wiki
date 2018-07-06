<template>
  <div class="view">
    <div class="pokemon-list">
      <div v-for="pokemon in pokemons" :key="pokemon.id" class="pokemon">
        <div class="information">
          <div class="title">{{ pokemon.id }}. {{ pokemon.name }}</div>
          <div class="type-list">
            <div v-for="type of pokemon.type" :key="type" class="type" :class="`type-${type}`">
              {{ type }}
            </div>
          </div>
        </div>
        <div class="picture">
          <div class="sprite"><img :src="pokemon.sprite" /></div>
          <div class="avatar"><img :src="pokemon.avatar" /></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import database from '../assets/database.production.js'

const { pokemons } = database

export default {
  name: 'app',
  data () {
    return {
      pokemons,
    }
  },
  components: {
  }
}
</script>

<style lang="postcss">
@import '../themes/offical.css';

.view {
  background-color: hsl(47, 100%, 70%);
  height: 100%;
  font-family: monospace;
}
.pokemon-list {
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
  .pokemon {
    display: flex;
    justify-content: space-between;
    padding: 24px;
    &:nth-child(2n) {
      background-color: hsl(40, 63%, 86%);
    }
    &:nth-child(2n+1) {
      background-color: hsl(40, 63%, 91%);
    }
    .information {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        font-size: 14px;
        font-weight: bold;
        color: #444;
      }
      .type-list {
        display: flex;
        .type {
          font-size: 10px;
          margin-right: 1em;
          padding: 0.5em 1em;
          background-color: #ddd;
          color: #fff;
          &.type-grass {
            background-color: $type-grass;
          }
          &.type-electric {
            background-color: $type-electric;
          }
          &.type-poison {
            background-color: $type-poison;
          }
          &.type-fire {
            background-color: $type-fire;
          }
          &.type-flying {
            background-color: $type-flying;
          }
          &.type-water {
            background-color: $type-water;
          }
          &.type-bug {
            background-color: $type-bug;
          }
          &.type-normal {
            background-color: $type-normal;
          }
          &.type-ground {
            background-color: $type-ground;
          }
          &.type-fairy {
            background-color: $type-fairy;
          }
          &.type-fighting {
            background-color: $type-fighting;
          }
          &.type-psychic {
            background-color: $type-psychic;
          }
          &.type-rock {
            background-color: $type-rock;
          }
          &.type-steel {
            background-color: $type-steel;
          }
          &.type-ice {
            background-color: $type-ice;
          }
          &.type-ghost {
            background-color: $type-ghost;
          }
          &.type-dragon {
            background-color: $type-dragon;
          }
        }
      }
    }
    .picture {
      display: flex;
      .avatar, .sprite {
        box-shadow: 0 2px 0 #fff, 0 4px 0 rgba(0,0,0,0.1);
        width: 48px;
        height: 48px;
        margin-left: 12px;
        border: 2px solid #fff;
        border-radius: 8px;
        img {
          width: 100%;
          max-width: 100%;
        }
      }
    }
  }
}
</style>
