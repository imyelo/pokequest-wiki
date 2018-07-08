<template>
  <div class="view">
    <div class="pokemon" :class="`color-${pokemon.color.toLowerCase()}`">
      <div class="title">
        <div class="id">No.{{ (1000 + pokemon.id + '').slice(1) }}</div>
        <div class="name">{{ pokemon.name }}</div>
      </div>
      <div class="picture">
        <div class="avatar"><img :src="pokemon.avatar" /></div>
        <div class="sprite"><img :src="pokemon.sprite" /></div>
      </div>
      <div class="type-list">
        <TypeCapsule v-for="type of pokemon.type" :key="type" :value="type" />
      </div>
    </div>
  </div>
</template>

<script>
import database from '../assets/database.production.js'
import TypeCapsule from '../components/TypeCapsule.vue'

const { pokemons } = database

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
@import '../themes/offical.css';

.view {
  background-color: hsl(47, 100%, 70%);
  height: 100%;
}
.pokemon {
  padding: 24px;
  .title {
    font-size: 32px;
    color: #444;
    padding: 48px 0 12px;
    border-bottom: 4px solid #444;
    margin-bottom: 24px;
    .id {
      font-size: 12px;
      line-height: 1em;
    }
    .name {
      font-weight: 800;
      line-height: 1em;
    }
  }
  .picture {
    display: flex;
    margin-bottom: 24px;
    .avatar, .sprite {
      box-shadow: 0 4px 0 #fff, 0 8px 0 rgba(0,0,0,0.1);
      background-color: hsl(40,50%,95%);
      width: 96px;
      height: 96px;
      border: 4px solid #fff;
      border-radius: 8px;
      margin-right: 24px;
      img {
        width: 100%;
        max-width: 100%;
      }
    }
  }
  .type-list {
    display: flex;
  }
}
</style>
