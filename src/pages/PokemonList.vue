<template>
  <Screen class="screen">
    <Main class="main">
      <div class="pokemon-list">
        <div class="filter">
          <div class="button" @click="filters.show = true"><Iconfont class="icon" type="filter" /> Filter</div>
        </div>
        <div v-for="pokemon in pokemons" :key="pokemon.id" class="pokemon" :class="`color-${pokemon.color.toLowerCase()}`" @click="toDetail(pokemon.id)">
          <div class="information">
            <div class="title"><span class="id">No.{{ (1000 + pokemon.id + '').slice(1) }}</span> {{ pokemon.name }}</div>
            <div class="type-list">
              <TypeCapsule v-for="type of pokemon.type" :key="type" :value="type" class="type" />
            </div>
          </div>
          <div class="picture">
            <div v-show="picture === 'sprite'" class="sprite" @click.stop="switchPicture"><img :src="pokemon.sprite" /></div>
            <div v-show="picture === 'avatar'" class="avatar" @click.stop="switchPicture"><img :src="pokemon.avatar" /></div>
          </div>
        </div>
      </div>

      <transition name="filter-panel">
        <div v-show="filters.show" class="filters" @click.self="filters.show = false" @touchmove.prevent>
          <div class="panel">
            <h2><Iconfont class="icon" type="filter" /> Pokemon Filter</h2>
            <div class="filter">
              <h3>Type</h3>
              <div class="options">
                <div v-for="type in POKEMON_TYPES" :key="type" class="option" :class="`type-${type}`" @click="switchFilter('types', type)">
                  <span class="check" :class="{ 'is-checked': ~filters.types.indexOf(type) }"><Iconfont v-if="~filters.types.indexOf(type)" class="icon" type="check" /></span>
                  {{ type }}
                </div>
              </div>
            </div>
            <div class="filter">
              <h3>Color</h3>
              <div class="options">
                <div v-for="color in POKEMON_COLORS" :key="color" class="option" :class="`color-${color}`" @click="switchFilter('colors', color)">
                  <span class="check" :class="{ 'is-checked': ~filters.colors.indexOf(color) }"><Iconfont v-if="~filters.colors.indexOf(color)" class="icon" type="check" /></span>
                  {{ color }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </Main>
  </Screen>
</template>

<script>
import { POKEMON_TYPES, POKEMON_COLORS } from '../constants'
import { pokemons } from '../data'
import TypeCapsule from '../components/TypeCapsule.vue'
import Iconfont from '../components/iconfont/Iconfont.vue'

export default {
  name: 'app',
  data () {
    return {
      picture: 'avatar',
      POKEMON_TYPES,
      POKEMON_COLORS,
      filters: {
        show: false,
        types: [],
        colors: [],
      },
    }
  },
  computed: {
    pokemons () {
      let filtered = pokemons
      if (this.filters.types.length) {
        filtered = filtered.filter((pokemon) => pokemon.type.some((type) => ~this.filters.types.indexOf(type)))
      }
      if (this.filters.colors.length) {
        filtered = filtered.filter((pokemon) => ~this.filters.colors.indexOf(pokemon.color.toLowerCase()))
      }
      return filtered
    },
  },
  methods: {
    toDetail (id) {
      this.$router.push(`/pokemons/${id}`)
    },
    switchPicture () {
      this.picture = this.picture === 'avatar' ? 'sprite' : 'avatar'
    },
    switchFilter (filterName, value) {
      let filter = this.filters[filterName]
      if (!Array.isArray(filter)) {
        throw new Error('Invalid filter')
      }
      let index = filter.indexOf(value)
      this.filters[filterName] = ~index ? [...filter.slice(0, index), ...filter.slice(index + 1)] : [...filter, value]
    },
  },
  components: {
    TypeCapsule,
    Iconfont,
  },
}
</script>

<style lang="postcss" scoped>
@import '../stylesheet/themes/offical.css';
@import '../stylesheet/colors.css';

.screen {
  background-color: hsl(47, 100%, 70%);
}
.main {
  position: relative;
}

.pokemon-list {
  padding-bottom: 50px;
  .filter {
    height: 48px;
    background-color: hsl(48,100%,50%);
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-shadow: 0 4px 0 4px rgb(235, 188, 0);
    margin-bottom: 8px;
    .button {
      background: hsl(48,50%,93%);
      color: hsl(48,50%,40%);
      min-width: 36px;
      height: 18px;
      padding: 0 1em;
      display: flex;
      justify-content: center;
      align-items: center;
      border: 2px solid hsl(48,50%,80%);
      border-radius: 8px;
      box-shadow: 0 1px 0 hsl(48,50%,80%), 0 2px 0 rgba(0,0,0,0.1);
      margin-right: 24px;
      font-size: 14px;
    }
    .icon {
      font-size: 14px;
      color: #666;
      display: inline-block;
      margin-right: 0.5em;
    }
  }
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
        .type {
          margin-right: 1em;
        }
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

.filters {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255,255,255,0.5);
  overflow: hidden;
  .panel {
    position: absolute;
    background-color: hsla(0,0%,95%,0.95);
    width: 100%;
    min-height: 300px;
    max-height: 100%;
    overflow-y: scroll;
    top: 0;
    padding: 36px 24px;
    box-sizing: border-box;
    box-shadow: 0 2px 32px 4px rgba(0,0,0,0.1);
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    h2 {
      font-size: 24px;
      font-weight: normal;
      color: #333;
      margin: 0 0 24px;
      .icon {
        font-size: 24px;
      }
    }
    .filter {
      margin-top: 24px;
      padding-top: 24px;
      box-shadow: 0 -1px 0 0 #ddd, 0 1px 0 0 #fff inset;
    }
    h3 {
      margin: 0 0 1em;
      font-weight: normal;
      font-size: 18px;
      color: #333;
    }
    .options {
      display: flex;
      flex-wrap: wrap;
      justify-content: left;
      .option {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        padding: 0.5em 1em;
        box-sizing: border-box;
        color: #fff;
        border: 2px solid #fff;
        border-radius: 8px;
        text-transform: capitalize;
        box-shadow: 0 1px 0 #fff, 0 2px 0 rgba(0,0,0,0.1);
        margin: 4px;
        .check {
          border-radius: 50%;
          background-color: #fff;
          border: 2px solid #666;
          display: inline-block;
          font-size: 10px;
          width: 1em;
          height: 1em;
          margin-right: 0.5em;
          line-height: 1em;
          text-align: center;
          &.is-checked {
            border-color: #333;
          }
          .icon {
            color: #333;
            font-size: 8px;
          }
        }
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
}

.filter-panel-enter-active, .filter-panel-leave-active {
  &, .panel {
    transition: all .4s ease;
  }
}
.filter-panel-enter, .filter-panel-leave-to {
  opacity: 0;
  .panel {
    transform: translateY(-10%);
  }
}
</style>