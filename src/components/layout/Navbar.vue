<template>
  <div class="navbar">
    <div class="item" @click="toHome">
      <Iconfont class="icon" type="home" />
    </div>
  </div>
</template>

<script>
import Iconfont from '../iconfont/Iconfont.vue'

export default {
  name: 'Navbar',
  props: {
    value: String,
  },
  components: {
    Iconfont,
  },
  methods: {
    toHome () {
      this.$router.push('/')
    },
  },
}
</script>

<style lang="postcss" scoped>
.navbar {
  height: 42px;
  padding-bottom: 4px;
  background-color: hsl(48,100%,50%);
  box-shadow: 0 -4px 0 4px color(hsl(48,100%,50%)  l(- 4%));
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .item {
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    .icon {
      font-size: 24px;
    }
    .label {
      font-size: 10px;
    }
  }
}
</style>
