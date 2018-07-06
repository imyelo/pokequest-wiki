<template>
  <div class="view">
    <div class="pokemon-list">
      <div v-for="pokemon in pokemons" :key="pokemon.id" class="pokemon">
        <div class="avatar"><img :src="pokemon.avatar" /></div>
        <div class="information">
          <div class="title">{{ pokemon.id }}. {{ pokemon.name }}</div>
          <div class="type-list">
            <div v-for="type of pokemon.type" :key="type" class="type" :class="`type-${type}`">
              {{ type }}
            </div>
          </div>
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
.view {
  background-color: hsl(47, 100%, 70%);
  height: 100%;
  font-family: monospace;
}
.pokemon-list {
  height: 100%;
  overflow-y: scroll;
  .pokemon {
    display: flex;
    padding: 24px;
    &:nth-child(2n) {
      background-color: rgba(255,255,255,0.8);
    }
    &:nth-child(2n+1) {
      background-color: rgba(255,255,255,0.5);
    }
    .avatar {
      width: 48px;
      height: 48px;
      margin-right: 24px;
      border: 2px solid #fff;
      border-radius: 8px;
      img {
        width: 100%;
        max-width: 100%;
      }
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
            background-color: hsl(100,30%,55%);
          }
          &.type-electric {
            background-color: hsl(50,80%,55%);
          }
          &.type-poison {
            background-color: hsl(300,30%,55%);
          }
          &.type-fire {
            background-color: hsl(0,60%,55%);
          }
          &.type-flying {
            background-color: hsl(190,30%,55%);
          }
          &.type-water {
            background-color: hsl(200,60%,55%);
          }
          &.type-bug {
            background-color: hsl(70,30%,55%);
          }
          &.type-normal {
            background-color: hsl(0,0%,65%);
          }
          &.type-ground {
            background-color: hsl(50,30%,55%);
          }
          &.type-fairy {
            background-color: hsl(350,55%,75%);
          }
          &.type-fighting {
            background-color: hsl(0,60%,35%);
          }
          &.type-psychic {
            background-color: hsl(330,60%,65%);
          }
          &.type-rock {
            background-color: hsl(50,30%,35%);
          }
          &.type-steel {
            background-color: hsl(0,0%,85%);
          }
          &.type-ice {
            background-color: hsl(200,60%,75%);
          }
          &.type-ghost {
            background-color: hsl(220,30%,35%);
          }
          &.type-dragon {
            background-color: hsl(200,55%,35%);
          }
        }
      }
    }
  }
}
</style>
