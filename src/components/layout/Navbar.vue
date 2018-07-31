<template>
  <transition name="navbar" mode="out-in">
    <div v-if="isHome && !backable" key="homebar" class="homebar">
      <div v-for="(tab, index) of HOME_MENU_TABS" :key="index" class="item" :class="{ active: $route.path === tab.path }" @click="switchTo(tab.path)">
        <Iconfont class="icon" :type="tab.icon" />
      </div>
    </div>
    <div v-if="!isHome || backable" key="navbar" class="navbar">
      <div v-show="!isHome" class="item" @click="toHome">
        <Iconfont class="icon" type="home" />
      </div>
      <div class="item" @click="back">
        <Iconfont class="icon" type="back" />
      </div>
    </div>
  </transition>
</template>

<script>
import Iconfont from '../iconfont/Iconfont.vue'
import { HOME_MENU_TABS } from '../../constants'

export default {
  name: 'Navbar',
  props: {
    backable: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return {
      HOME_MENU_TABS,
    }
  },
  components: {
    Iconfont,
  },
  computed: {
    isHome () {
      return !!~HOME_MENU_TABS.map((tab) => tab.path).indexOf(this.$route.path)
    },
  },
  methods: {
    toHome () {
      this.$router.push('/')
    },
    back () {
      this.$router.back()
    },
    switchTo (path) {
      this.$router.replace(path)
    },
  },
}
</script>

<style lang="postcss" scoped>
$main-color: hsl(48,100%,50%);

.homebar, .navbar {
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
    .icon {
      font-size: 24px;
    }
  }
}
.homebar {
  .item {
    &.active {
      .icon {
        color: color($main-color s(20%) l(20%));
      }
    }
    .icon {
      color: color($main-color s(50%) l(50%));
    }
  }
}
.navbar {
  .item {
    color: color($main-color s(35%) l(35%));
  }
}

.navbar-enter-active, .navbar-leave-active {
  transition: all .4s ease;
}
.navbar-enter, .navbar-leave-to {
  opacity: 0;
  transform: translate3d(0,100%,0);
}
</style>
