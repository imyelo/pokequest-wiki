<template>
  <Screen class="screen">
    <Main class="main">
      <div class="dish-list">
        <div v-for="dish in dishes" :key="dish.id" class="dish" @click="toDetail(dish.id)">
          <div class="id">{{ $tc('concepts.dish') }} {{ (100 + dish.id + '').slice(1) }}</div>
          <div class="picture"><img :src="dish.logo" alt="logo" /></div>
          <div class="title">{{ $t(`dishes[${JSON.stringify(dish.name)}]`) }}</div>
        </div>
      </div>
    </Main>
    <HomeMenu />
  </Screen>
</template>

<script>
import { dishes } from '../data'
import HomeMenu from '../components/layout/HomeMenu.vue'

export default {
  name: 'DishesList',
  data () {
    return {
      dishes,
    }
  },
  methods: {
    toDetail (id) {
      this.$router.push(`/dishes/${id}`)
    },
  },
  components: {
    HomeMenu,
  },
}
</script>

<style lang="postcss" scoped>
.dish-list {
  background-color: hsl(40,63%,91%);
  padding-bottom: 12px;
  .dish {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 48px 48px 60px;
    cursor: pointer;
    margin-bttom: 24px;
    &:nth-child(2n) {
      background-color: hsl(40,63%,86%);
      &:active {
        background-color: hsl(40,63%,76%);
      }
    }
    &:nth-child(2n+1) {
      background-color: hsl(40,63%,91%);
      &:active {
        background-color: hsl(40,63%,81%);
      }
    }
    .id {
      font-size: 10px;
      color: #666;
      margin-bottom: 24px;
      text-transform: capitalize;
    }
    .picture {
      width: 64px;
      margin-bottom: 12px;
      img {
        width: 100%;
        max-width: 100%;
      }
    }
    .title {
      font-size: 12px;
      color: #444;
    }
  }
}
</style>
