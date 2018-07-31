<template>
  <div class="menu">
    <div v-for="(tab, index) of TABS" :key="index" class="item" :class="{ active: $route.path === tab.path }" @click="toPath(tab.path)">
      <Iconfont class="icon" :type="tab.icon" />
    </div>
  </div>
</template>

<script>
import Iconfont from '../iconfont/Iconfont.vue'

const TABS = [
  {
    path: '/pokemon',
    icon: 'home',
  },
  {
    path: '/dishes',
    icon: 'dish',
  },
]

export default {
  name: 'HomeMenu',
  data () {
    return {
      TABS,
    }
  },
  components: {
    Iconfont,
  },
  methods: {
    toPath (path) {
      this.$router.replace(path)
    },
  },
}
</script>

<style lang="postcss" scoped>

$main-color: hsl(48,100%,50%);

.menu {
  height: 60px;
  padding: 8px;
  padding-bottom: env(safe-area-inset-bottom);
  padding-bottom: constant(safe-area-inset-bottom);
  background-color: $main-color;
  box-shadow: 0 -1px 0 4px color($main-color a(50%));
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
    &.active {
      .icon {
        color: color($main-color s(20%) l(20%));
      }
    }
    .icon {
      font-size: 24px;
      color: color($main-color s(50%) l(50%));
    }
  }
}
</style>
