<template>
  <Screen class="screen">
    <Main>
    <div class="pokemon-list">
      <div v-for="pokemon in pokemons" :key="pokemon.id" class="pokemon" :class="`color-${pokemon.color.toLowerCase()}`" @click="toDetail(pokemon.id)">
        <div class="information">
          <div class="title"><span class="id">No.{{ (1000 + pokemon.id + '').slice(1) }}</span> {{ pokemon.name }}</div>
          <div class="type-list">
            <TypeCapsule v-for="type of pokemon.type" :key="type" :value="type" />
          </div>
        </div>
        <div class="picture">
          <div v-show="picture === 'sprite'" class="sprite" @click="switchPicture"><img :src="pokemon.sprite" /></div>
          <div v-show="picture === 'avatar'" class="avatar" @click="switchPicture"><img :src="pokemon.avatar" /></div>
        </div>
      </div>
    </div>
    </Main>
  </Screen>
</template>

<script>
import { pokemons } from '../data'
import TypeCapsule from '../components/TypeCapsule.vue'
import Screen from '../components/layout/Screen.vue'
import Main from '../components/layout/Main.vue'
import Navbar from '../components/layout/Navbar.vue'

export default {
  name: 'app',
  data () {
    return {
      pokemons,
      picture: 'avatar',
    }
  },
  methods: {
    toDetail (id) {
      this.$router.push(`/pokemons/${id}`)
    },
    switchPicture () {
      this.picture = this.picture === 'avatar' ? 'sprite' : 'avatar'
    },
  },
  components: {
    TypeCapsule,
    Screen,
    Main,
    Navbar,
  },
}
</script>

<style lang="postcss" scoped>
@import '../stylesheet/colors.css';

.screen {
  background-color: hsl(47, 100%, 70%);
}

.pokemon-list {
  .pokemon {
    display: flex;
    justify-content: space-between;
    padding: 24px;
    border-left: 16px solid hsla(0,0%,80%,0.5);
    cursor: pointer;
    &.color-red {
      border-left-color: $color-red;
    }
    &.color-blue {
      border-left-color: $color-blue;
    }
    &.color-yellow {
      border-left-color: $color-yellow;
    }
    &.color-gray {
      border-left-color: $color-gray;
    }
    &:nth-child(2n) {
      background-color: hsl(40,63%,86%);
      &:active, &:hover {
        background-color: hsl(40,63%,76%);
      }
    }
    &:nth-child(2n+1) {
      background-color: hsl(40,63%,91%);
      &:active, &:hover {
        background-color: hsl(40,63%,81%);
      }
    }
    .information {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .title {
        font-size: 14px;
        color: #444;
        .id {
          font-size: 10px;
          font-weight: bold;
        }
      }
      .type-list {
        display: flex;
      }
    }
    .picture {
      display: flex;
      .avatar, .sprite {
        box-shadow: 0 2px 0 #fff, 0 4px 0 rgba(0,0,0,0.1);
        background-color: hsl(40,50%,95%);
        width: 48px;
        height: 48px;
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
