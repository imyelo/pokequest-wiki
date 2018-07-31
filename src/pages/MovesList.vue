<template>
  <Screen class="screen">
    <Main class="main">
      <div class="moves-list">
        <table>
          <thead class="title">
            <tr>
              <th class="type" @click="sort('type')">
                {{ $tc('concepts.type') }}
                 <Iconfont class="icon" :type="sorter.field !== 'type' ? 'minus' : sorter.reverse ? 'sort-up' : 'sort-down'" />
              </th>
              <th class="name" @click="sort('name')">
                {{ $tc('concepts.name') }}
                 <Iconfont class="icon" :type="sorter.field !== 'name' ? 'minus' : sorter.reverse ? 'sort-up' : 'sort-down'" />
              </th>
              <th @click="sort('attack', true)">
                {{ $tc('concepts.attack') }}
                 <Iconfont class="icon" :type="sorter.field !== 'attack' ? 'minus' : sorter.reverse ? 'sort-up' : 'sort-down'" />
              </th>
              <th @click="sort('wait')">
                {{ $tc('concepts.wait') }}
                 <Iconfont class="icon" :type="sorter.field !== 'wait' ? 'minus' : sorter.reverse ? 'sort-up' : 'sort-down'" />
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(move, index) of moves" :key="index" class="move">
              <td class="type"><type-capsule :value="move.type" class="capsule" @click.native="switchFilter('type', move.type)" /></td>
              <td class="name">{{ move.name }}</td>
              <td>{{ move.attack }}</td>
              <td>{{ move.wait }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Main>
    <HomeMenu />
  </Screen>
</template>

<script>
import { moves } from '../data'
import TypeCapsule from '../components/TypeCapsule.vue'
import Iconfont from '../components/iconfont/Iconfont.vue'
import HomeMenu from '../components/layout/HomeMenu.vue'

export default {
  name: 'MovesList',
  data () {
    return {
      sorter: {
        field: 'type',
        reverse: false,
      },
    }
  },
  computed: {
    moves () {
      let filtered = moves
      let { field, reverse } = this.sorter
      if (this.filters.type) {
        filtered = filtered.filter((move) => this.filters.type === move.type)
      }
      return filtered.sort((left, right) => {
        let l = left[field]
        let r = right[field]
        if (+l + '' === l) {
          l = +l
        }
        if (+r + '' === r) {
          r = +r
        }
        return (l > r ? 1 : l < r ? -1 : 0) * (reverse ? -1 : 1)
      })
    },
    filters () {
      let { query } = this.$route
      return {
        type: query.type || '',
      }
    },
    hasFilters () {
      return this.filters.type
    },
  },
  components: {
    TypeCapsule,
    Iconfont,
    HomeMenu,
  },
  methods: {
    sort (field, reverseFirst = false) {
      if (this.sorter.field === field) {
        this.sorter.reverse = !this.sorter.reverse
      } else {
        this.sorter = {
          field,
          reverse: reverseFirst,
        }
      }
    },
    switchFilter (filterName, value) {
      let filter = this.filters[filterName]
      if (filterName === 'type') {
        this.updateFilter({
          type: filter === value ? '' : value,
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
  },
}
</script>

<style lang="postcss" scoped>
.moves-list {
  font-size: 12px;
  line-height: 2em;
  height: 100%;
  table {
    width: 100%;
    height: 100%;
    border: none;
    border-collapse: collapse;
    border-radius: 8px;
    background-color: hsl(40,50%,95%);
    box-shadow: 0 4px 0 #fff, 0 8px 0 rgba(0,0,0,0.1);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    table-layout: fixed;
  }
  tr {
    display: table;
    width: 100%;
    min-height: 60px;
    table-layout: fixed;
    border-bottom: 1px solid #fff;
    td, th {
      &:first-child {
        padding-left: 2em;
      }
      &:last-child {
        padding-right: 2em;
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
    text-transform: capitalize;
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
    &.clickable {
      cursor: pointer;
      color: hsl(0,0%,30%);
    }
  }
  th, td {
    width: 40px;
  }
  thead {
    tr {
      background-color: hsl(42,52%,90%);
      border-bottom: none;
    }
  }
  tbody {
    display: block;
    overflow-y: scroll;
    height: 100%;
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
  .name {
    width: 120px;
  }
}
</style>
