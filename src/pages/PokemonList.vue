<template>
  <Screen class="screen">
    <Main class="main" @scroll="handleScroll" ref="main">
      <div class="pokemon-list">
        <div v-if="pokemons.length === 0" class="pokemon" key="NOT_FOUND">
          <div class="information">
            <div class="title invalid">Not found</div>
          </div>
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
        <div class="about">
          <div><a :href="GITHUB_URL" target="_blank">&lt; <Iconfont type="star" class="icon" /> Give me a Star / Fork me &gt; on <Iconfont type="github" class="icon" /> Github</a></div>
          <div>PokeQuest Wiki - Version {{ VERSION }}</div>
        </div>
      </div>

      <div class="toolbar" slot="absolute">
        <transition name="toolbar-button">
          <div key="top" v-if="!isAtTop && !isAtBottom" class="button" @click="scrollToTop"><Iconfont class="icon" type="top" /></div>
        </transition>
        <transition name="toolbar-button">
          <div key="filter" v-if="!showFilters && !isAtBottom" class="button" @click="showFilters = true"><Iconfont class="icon" type="filter" /></div>
        </transition>
      </div>
    </Main>

    <Navbar v-show="hasFilters" />

    <transition name="filter-panel">
      <div v-show="showFilters" class="filters" @click.self="showFilters = false" @touchmove.prevent>
        <div class="panel">
          <h2>
            <Iconfont class="icon" type="filter" /> Pokémon Filter
            <div class="close" @click.prevent="showFilters = false"><Iconfont class="icon" type="close-selected" /></div>
          </h2>
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
              <div v-for="color in POKEMON_COLORS" :key="color" class="option" :class="`color-${color}`" @click="switchFilter('color', color)">
                <span class="check" :class="{ 'is-checked': filters.color === color }"><Iconfont v-if="filters.color === color" class="icon" type="check" /></span>
                {{ color }}
              </div>
            </div>
          </div>
          <div class="filter">
            <h3>Advanced</h3>
            <div class="options">
              <div class="option" @click="switchFilter('summonable')">
                <span class="check" :class="{ 'is-checked': filters.summonable }"><Iconfont v-if="filters.summonable" class="icon" type="check" /></span>
                Summonable
              </div>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </Screen>
</template>

<script>
import debounce from 'just-debounce-it'
import { POKEMON_TYPES, POKEMON_COLORS } from '../constants'
import { pokemons } from '../data'
import TypeCapsule from '../components/TypeCapsule.vue'
import Iconfont from '../components/iconfont/Iconfont.vue'

const VERSION = DEFINED_VERSION
const GITHUB_URL = process.env.VUE_APP_GITHUB_URL

export default {
  name: 'app',
  data () {
    return {
      picture: 'avatar',
      POKEMON_TYPES,
      POKEMON_COLORS,
      showFilters: false,
      isAtTop: true,
      isAtBottom: false,
      GITHUB_URL,
      VERSION,
    }
  },
  computed: {
    pokemons () {
      let filtered = pokemons
      if (this.filters.summonable) {
        filtered = filtered.filter((pokemon) => pokemon.dishes.length > 0)
      }
      if (this.filters.types.length) {
        filtered = filtered.filter((pokemon) => this.filters.types.every((type) => ~pokemon.type.indexOf(type)))
      }
      if (this.filters.color) {
        filtered = filtered.filter((pokemon) => this.filters.color === pokemon.color.toLowerCase())
      }
      return filtered
    },
    filters () {
      let { query } = this.$route
      return {
        types: query.types ? query.types.split(',') : [],
        color: query.color || '',
        summonable: query.summonable + '' === 'true',
      }
    },
    hasFilters () {
      return this.filters.types.length > 0 || this.filters.color || this.filters.summonable
    },
  },
  watch: {
    filters () {
      this.scrollToTop()
    },
  },
  methods: {
    toDetail (id) {
      this.$router.push(`/pokemon/${id}`)
    },
    switchPicture () {
      this.picture = this.picture === 'avatar' ? 'sprite' : 'avatar'
    },
    switchFilter (filterName, value) {
      let filter = this.filters[filterName]
      if (filterName === 'types') {
        let index = filter.indexOf(value)
        this.updateFilter({
          types: (~index ? [...filter.slice(0, index), ...filter.slice(index + 1)] : [...filter, value]).join(','),
        })
        return
      }
      if (filterName === 'color') {
        this.updateFilter({
          color: filter === value ? '' : value,
        })
        return
      }
      if (filterName === 'summonable') {
        this.updateFilter({
          summonable: !filter,
        })
        return
      }
      throw new Error('Invalid filter')
    },
    updateFilter (patch) {
      let query = {
        ...this.$route.query,
        ...patch,
      }
      for (let key in query) {
        if (Array.isArray(patch[key]) && patch[key].length === 0) {
          delete query[key]
        } else if (typeof patch[key] === 'string' && patch[key] === '') {
          delete query[key]
        } else if (typeof patch[key] === 'boolean' && patch[key] === false) {
          delete query[key]
        }
      }
      if (this.hasFilters) {
        this.$router.replace({
          query,
        })
      } else {
        this.$router.push({
          query,
        })
      }
    },
    handleScroll: debounce(function ({ target }) {
      this.isAtTop = target.scrollTop === 0
      this.isAtBottom = target.scrollTop + target.clientHeight === target.scrollHeight
    }, 200),
    scrollToTop () {
      this.$refs.main.scrollTop()
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
  background-color: hsl(39,64%,88%);
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
        &.invalid {
          color: #aaa;
        }
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
  .about {
    font-size: 8px;
    color: hsl(0, 0%, 45%);
    text-align: center;
    padding: 100px 0;
    line-height: 2em;
    a {
      font-size: 10px;
      color: hsl(0, 0%, 45%);
      text-decoration: none;
    }
    .icon {
      font-size: 12px;
    }
  }
}

.toolbar {
  position: absolute;
  z-index: 10;
  bottom: 0;
  right: 0;
  height: 90px;
  background-color: transparent;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 12px;
  box-sizing: border-box;
  .button {
    background: hsl(0,0%,95%);
    color: hsl(0,0%,55%);
    height: 36px;
    padding: 0 1em;
    line-height: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid hsl(0,0%,75%);
    border-radius: 8px;
    box-shadow: 0 4px 0 hsl(0,0%,75%), 0 8px 0 rgba(0,0,0,0.25), 0 0 12px 2px rgba(0,0,0,0.1);
    font-size: 14px;
    margin: 0 8px 8px;
  }
  .icon {
    font-size: 14px;
    line-height: 1em;
    color: hsl(0,0%,55%);
    display: inline-block;
  }
}

.filters {
  position: absolute;
  z-index: 10;
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
    bottom: 0;
    padding: 36px 24px;
    box-sizing: border-box;
    box-shadow: 0 2px 32px 4px rgba(0,0,0,0.1);
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    h2 {
      font-size: 24px;
      font-weight: normal;
      color: #333;
      margin: 0 0 24px;
      line-height: 1em;
      .icon {
        font-size: 24px;
      }
      .close {
        float: right;
        padding-left: 16px;
        cursor: pointer;
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
        background-color: hsl(30,8%,55%);
        box-shadow: 0 1px 0 #fff, 0 2px 0 rgba(0,0,0,0.1);
        margin: 4px;
        cursor: pointer;
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

.toolbar-button-enter-active, .toolbar-button-leave-active {
  transition: all 400ms;
}
.toolbar-button-enter, .toolbar-button-leave-to {
  opacity: 0;
  transform: translate3d(10px, 0, 0);
}

.filter-panel-enter-active, .filter-panel-leave-active {
  &, .panel {
    transition: all .4s ease;
  }
}
.filter-panel-enter, .filter-panel-leave-to {
  opacity: 0;
  .panel {
    transform: translate3d(0,10%,0);
  }
}
</style>
