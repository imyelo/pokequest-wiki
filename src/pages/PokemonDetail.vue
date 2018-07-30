<template>
  <Screen :title="pokemon.name">
    <Main ref="main">
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
          <TypeCapsule v-for="type of pokemon.type" :key="type" :value="type" class="type" @click.native="toPokemonList({ types: type })" />
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
          <span class="color-capsule" :class="`color-${pokemon.color.toLowerCase()}`" @click="toPokemonList({ color: pokemon.color.toLowerCase() })">{{ pokemon.color }}</span>
        </div>
        <div class="section">
          <h3>Attack mode</h3>
          <Iconfont :type="pokemon.automaticStyle.toLowerCase() === 'melee' ? 'melee' : pokemon.automaticStyle.toLowerCase() === 'range' ? 'bow' : 'question'" class="icon"/>
          {{ pokemon.automaticStyle }}
        </div>
        <div class="section stats">
          <h3>Stats (HP and ATK)</h3>
          <div class="table-container">
            <table>
              <thead class="title">
                <tr>
                  <th :colspan="statsTable.showPotDetail ? 3 : 1" class="group-first-item clickable" @click="statsTable.showPotDetail = !statsTable.showPotDetail">
                    <Iconfont :type="statsTable.showPotDetail ? 'minus-circle-o' : 'plus-circle'" class="icon" /> Pot
                  </th>
                  <th :colspan="statsTable.showBase ? 2 : 1" class="group-first-item clickable" @click="statsTable.showBase = !statsTable.showBase">
                    <Iconfont :type="statsTable.showBase ? 'minus-circle-o' : 'plus-circle'" class="icon" /> {{ statsTable.showBase ? 'Level 0 (Base)' : 'L0' }}
                  </th>
                  <th colspan="2" class="group-first-item" @click="editStatsTableCustomLevel">
                    Level {{ statsTable.customLevel }} <Iconfont type="edit" class="icon" />
                  </th>
                </tr>
                <tr>
                  <th class="group-first-item">Name</th>
                  <th v-show="statsTable.showPotDetail">Bonus</th>
                  <th v-show="statsTable.showPotDetail">IV Range</th>
                  <th v-show="statsTable.showBase" class="group-first-item">HP</th>
                  <th v-show="statsTable.showBase">ATK</th>
                  <th v-show="!statsTable.showBase" @click="statsTable.showBase = true">...</th>
                  <th class="group-first-item">HP</th>
                  <th>ATK</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="pot of pots" :key="pot.id" class="pot">
                  <td class="name group-first-item" :class="`pot-${pot.name}`">{{ pot.name }}</td>
                  <td v-show="statsTable.showPotDetail">{{ pot.statBonus }}</td>
                  <td v-show="statsTable.showPotDetail">{{ pot.ivRange.minimum }} - {{ pot.ivRange.maximum }}</td>
                  <td v-show="statsTable.showBase" class="group-first-item">{{ pokemon.baseHp | statRange(pot) }}</td>
                  <td v-show="!statsTable.showBase" @click="statsTable.showBase = true">...</td>
                  <td v-show="statsTable.showBase">{{ pokemon.baseAtk | statRange(pot) }}</td>
                  <td class="group-first-item">{{ pokemon.baseHp | statRange(pot, statsTable.customLevel) }}</td>
                  <td>{{ pokemon.baseAtk | statRange(pot, statsTable.customLevel) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div v-show="dishes.length > 0" class="section dishes">
          <h3>Dishes</h3>
          <table>
            <thead class="title">
              <tr>
                <th class="logo"></th>
                <th class="name clickable" @click="sortDishes('id')">
                  (ID) Name
                  <Iconfont class="icon" :type="dishesSorter.field !== 'id' ? 'minus' : dishesSorter.reverse ? 'sort-up' : 'sort-down'" />
                </th>
                <th class="quality">
                  Quality
                </th>
                <th class="chance clickable" @click="sortDishes('chance', true)">
                  Chance
                  <Iconfont class="icon" :type="dishesSorter.field !== 'chance' ? 'minus' : dishesSorter.reverse ? 'sort-up' : 'sort-down'" />
                </th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(dish, index) of dishes" :key="index" class="dish" :class="{ 'not-exist': !dish.isExist }" @click="toDish(dish.id, dish.quality)">
                <td class="logo"><img :src="dish.logo" /></td>
                <td class="name">{{ dish.name }}</td>
                <td class="quality">{{ dish.quality }}</td>
                <td class="chance">{{ (dish.chance * 100).toFixed(2) }}%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="section pokemons">
          <h3>See other pokémon</h3>
          <div class="paginations">
            <div v-if="previous.id" class="previous" @click="toPokemon(previous.id)">
              <Iconfont class="icon" type="left" />
              <div class="avatar"><img :src="previous.avatar" /></div>
            </div>
            <div v-if="next.id" class="next" @click="toPokemon(next.id)">
              <div class="avatar"><img :src="next.avatar" /></div>
              <Iconfont class="icon" type="right" />
            </div>
            <Clearfix />
          </div>
        </div>
      </div>
    </Main>
    <Navbar />
  </Screen>
</template>

<script>
import { pokemons, recipes, pots } from '../data'
import TypeCapsule from '../components/TypeCapsule.vue'
import Iconfont from '../components/iconfont/Iconfont.vue'

const DEFAULT_STATS_TABLE_CUSTOM_LEVEL = 100

export default {
  name: 'app',
  data () {
    return {
      pots,
      dishesSorter: {
        field: 'id',
        reverse: false,
      },
      statsTable: {
        showPotDetail: false,
        showBase: false,
        customLevel: DEFAULT_STATS_TABLE_CUSTOM_LEVEL,
      },
    }
  },
  computed: {
    pokemon () {
      return pokemons.find((pokemon) => pokemon.id === +this.$route.params.id) || {}
    },
    dishes () {
      let list = this.pokemon.dishes
      let { field, reverse } = this.dishesSorter
      return list
        .sort((left, right) => (left[field] > right[field] ? 1 : left[field] < right[field] ? -1 : 0) * (reverse ? -1 : 1))
        .map((dish) => ({
          ...dish,
          isExist: recipes.filter((recipe) => recipe.dish.id === dish.id && recipe.quality === dish.quality).length > 0,
        }))
    },
    previous () {
      return pokemons.find((pokemon) => pokemon.id === +this.$route.params.id - 1) || {}
    },
    next () {
      return pokemons.find((pokemon) => pokemon.id === +this.$route.params.id + 1) || {}
    },
  },
  methods: {
    sortDishes (field, reverseFirst = false) {
      if (this.dishesSorter.field === field) {
        this.dishesSorter.reverse = !this.dishesSorter.reverse
      } else {
        this.dishesSorter = {
          field,
          reverse: reverseFirst,
        }
      }
    },
    editStatsTableCustomLevel () {
      let string = window.prompt('Please enter the level you want (from 1 to 100) :', this.statsTable.customLevel)
      if (string === null) {
        return
      }
      let level = parseInt(string)
      if (!level || level < 1 || level > 100) {
        if (window.confirm('This is not a valid level. Would you like to try again?')) {
          this.editStatsTableCustomLevel()
        }
        return
      }
      this.statsTable.customLevel = level
    },
    toDish (id, quality) {
      this.$router.push(`/dishes/${id}?anchor=Quality-${quality}`)
    },
    toPokemon (id) {
      this.$router.push(`/pokemon/${id}`)
      this.$refs.main.scrollTop() // TODO: remove it if page is recreated when router is changed
    },
    toPokemonList (filter) {
      this.$router.push({
        path: '/pokemon',
        query: filter,
      })
    },
  },
  components: {
    TypeCapsule,
    Iconfont,
  },
  filters: {
    statRange (base, pot, level = 0) {
      return `${+base + pot.statBonus + pot.ivRange.minimum + level} - ${ +base + pot.statBonus + pot.ivRange.maximum + level}`
    },
  },
}
</script>

<style lang="postcss" scoped>
@import '../stylesheet/colors.css';

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
    .icon {
      font-size: 12px;
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
      cursor: pointer;
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
      cursor: pointer;
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
  .stats, .dishes {
    line-height: 2em;
    table {
      width: 100%;
      border: none;
      border-collapse: collapse;
      border-radius: 8px;
      background-color: hsl(40,50%,95%);
      box-shadow: 0 4px 0 #fff, 0 8px 0 rgba(0,0,0,0.1);
      overflow: hidden;
    }
    tr {
      border-bottom: 1px solid #fff;
      td, th {
        &:first-child {
          padding-left: 1em;
        }
        &:last-child {
          padding-right: 1em;
        }
      }
      &.not-exist {
        text-decoration: line-through;
        color: hsl(0,0%,80%);
      }
    }
    th {
      padding: 12px 0;
      line-height: 2em;
      .icon {
        font-size: 10px;
      }
      &.clickable {
        cursor: pointer;
        color: hsl(0,0%,30%);
      }
    }
    td {
      text-align: center;
      padding: 12px 0;
    }
    thead {
      tr {
        background-color: hsl(42,52%,90%);
        border-bottom: none;
      }
    }
    tbody {
      tr {
        &:nth-child(2n) {
          background-color: hsl(42,52%,96%);
        }
        &:nth-child(2n+1) {
          background-color: hsl(42,52%,98%);
        }
      }
    }
    .group-first-item {
      padding-left: 1em;
    }
  }
  .stats {
    .table-container {
      overflow-x: scroll;
      padding-bottom: 12px;
    }
    table {
      min-width: 100%;
      width: auto;
      table-layout: fixed;
      td {
        width: 80px;
        min-width: 80px;
        white-space: nowrap;
      }
    }
    .name {
      text-transform: capitalize;
    }
  }
  .dishes {
    tbody {
      tr {
        cursor: pointer;
        &:active, &:hover {
          background: hsl(40,63%,76%);
        }
      }
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
  .pokemons {
    .paginations {
      .previous, .next {
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          font-size: 24px;
          color: #333;
        }
      }
      .previous {
        float: left;
        .icon {
          margin-right: 24px;
        }
      }
      .next {
        float: right;
        .icon {
          margin-left: 24px;
        }
      }
      .avatar {
        width: 42px;
        border: 2px solid #fff;
        border-radius: 8px;
        img {
          display: block;
          width: 100%;
          max-width: 100%;
        }
      }
    }
  }
}
</style>
