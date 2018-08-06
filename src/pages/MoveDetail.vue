<template>
  <Screen :title="$t(`moves[${JSON.stringify(move.name)}]`)">
    <Main>
      <div class="move">
        <div class="header">
          <div class="title">
            <div class="name">{{ $t(`moves[${JSON.stringify(move.name)}]`) }}</div>
          </div>
        </div>
        <div class="section">
          <div>{{ move.description }}</div>
        </div>
        <div class="section" data-anchor="Type">
          <h3>{{ $tc('concepts.type') }}</h3>
          <TypeCapsule :value="move.type" class="type" @click.native="toMovesList({ type: move.type })" />
        </div>
        <div class="section stats" data-anchor="Stats">
          <h3>{{ $tc('concepts.stat', 2) }}</h3>
          <table>
            <thead>
              <tr>
                <th>{{ $tc('concepts.attack') }}</th>
                <th>{{ $tc('concepts.wait') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ move.attack }}</td>
                <td>{{ move.wait }}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="section pokemons" data-anchor="Pokemons">
          <h3>{{ $tc('concepts.pokemon', 2) }}</h3>
          <table>
            <thead>
              <tr>
                <th>{{ $tc('concepts.pokemon') }}</th>
                <th>{{ $tc('concepts.learnable') }}</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="pokemon in move.pokemons" :key="pokemon.id" @click="toPokemon(pokemon.id)" class="pokemon">
                <td>
                  <div class="avatar">
                    <img :src="pokemon.avatar" alt="avatar" />
                  </div>
                </td>
                <td>
                  {{ pokemon.move.learnable ? '√' : pokemon.move.method }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Main>
    <Navbar />
  </Screen>
</template>

<script>
import { moves } from '../data'
import TypeCapsule from '../components/TypeCapsule.vue'

export default {
  name: 'MoveDetail',
  computed: {
    move () {
      return moves.find((move) => move.name === this.$route.params.name.replace('--', ' ')) || {}
    },
  },
  components: {
    TypeCapsule,
  },
  methods: {
    toPokemon (id) {
      this.$router.push(`/pokemon/${id}`)
    },
    toMovesList (query) {
      this.$router.push({ path: '/moves', query })
    },
  },
}
</script>

<style lang="postcss" scoped>
@import '../stylesheet/colors.css';

.move {
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
      text-transform: capitalize;
    }
  }
  .type {
    font-size: 18px;
    margin-bottom: 12px;
    width: 100%;
    text-transform: uppercase;
    cursor: pointer;
  }
  .stats, .pokemons {
    table {
      width: 100%;
      border: none;
      border-collapse:collapse;
      margin: 12px 0;
      border-radius: 8px;
      background-color: hsl(40,50%,95%);
      box-shadow: 0 4px 0 #fff, 0 8px 0 rgba(0,0,0,0.1);
      overflow: hidden;
      table-layout: fixed;
    }
    tr {
      border-bottom: 1px solid #fff;
    }
    th {
      padding: 12px 0;
      line-height: 2em;
      text-transform: capitalize;
    }
    td {
      text-align: center;
      width: 50%;
      line-height: 1.5em;
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
  .stats {
    td {
      height: 48px;
    }
  }
  .pokemons {
    tbody {
      tr {
        cursor: pointer;
        &:active, &.hover {
          background: hsl(40,63%,76%);
        }
      }
    }
  }
}
</style>
