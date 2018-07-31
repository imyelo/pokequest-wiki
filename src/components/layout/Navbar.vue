<template>
  <div class="navbar">
    <div v-show="!isHome" class="item" @click="toHome">
      <Iconfont class="icon" type="home" />
    </div>
    <div class="item" @click="back">
      <Iconfont class="icon" type="back" />
    </div>
  </div>
</template>

<script>
import Iconfont from '../iconfont/Iconfont.vue'

const HOME_PATH = '/pokemon'

export default {
  name: 'Navbar',
  props: {
    value: String,
  },
  components: {
    Iconfont,
  },
  computed: {
    isHome () {
      return this.$route.path === HOME_PATH
    },
  },
  methods: {
    toHome () {
      this.$router.push('/')
    },
    back () {
      this.$router.back()
    },
  },
}
</script>

<style lang="postcss" scoped>
.navbar {
  height: 60px;
  padding-bottom: 4px;
  padding-bottom: env(safe-area-inset-bottom);
  padding-bottom: constant(safe-area-inset-bottom);
  background-color: hsl(48,100%,50%);
  box-shadow: 0 -1px 0 4px color(hsl(48,100%,50%) a(50%));
  z-index: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  box-sizing: border-box;
  .item {
    height: 100%;
    width: 100%;
    color: #333;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    .icon {
      font-size: 24px;
    }
    .label {
      font-size: 10px;
    }
  }
}
</style>
