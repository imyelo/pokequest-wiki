<template>
  <Screen class="screen">
    <Main class="main">
      <div class="dish-list">
        <div v-for="dish in dishes" :key="dish.id" class="dish" @click="toDetail(dish.id)">
          <div class="picture">
            <div class="logo"><img :src="dish.logo" alt="logo" /></div>
          </div>
          <div class="information">
            <div class="id">Dish {{ (100 + dish.id + '').slice(1) }}</div>
            <div class="title">{{ $t(`dishes[${JSON.stringify(dish.name)}]`) }}</div>
          </div>
        </div>
      </div>
    </Main>
    <Navbar />
  </Screen>
</template>

<script>
import { dishes } from '../data'
import Iconfont from '../components/iconfont/Iconfont.vue'

export default {
  name: 'DishList',
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
  },
}
</script>

<style lang="postcss" scoped>
.dish-list {
  background-color: hsl(40,63%,91%);
  padding-bottom: 12px;
  .dish {
    display: flex;
    justify-content: flex-start;
    padding: 18px 24px;
    cursor: pointer;
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
    .picture {
      display: flex;
      .logo {
        width: 48px;
        padding: 6px 14px 0 0;
        border-radius: 8px;
        img {
          width: 100%;
          max-width: 100%;
        }
      }
    }
    .information {
      display: flex;
      flex-direction: column;
      justify-content: center;
      .id {
        font-size: 10px;
        color: #666;
        line-height: 1em;
      }
      .title {
        font-size: 14px;
        color: #444;
      }
    }
  }
}
</style>
