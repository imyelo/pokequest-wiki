<template>
  <div class="banners">
    <transition-group name="banner">
      <div class="banner" v-for="(banner, index) in banners" :key="index">
        <div class="text">
          {{ banner.text }}
        </div>
        <div class="actions">
          <div v-if="banner.actions[1]" class="action" @click="handleClickAction(1, banner, index)">{{ banner.actions[1].text }}</div>
          <div v-if="banner.actions[0]" class="action" @click="handleClickAction(0, banner, index)">{{ banner.actions[0].text }}</div>
        </div>
        <Clearfix />
      </div>
    </transition-group>
  </div>
</template>

<script>
import Clearfix from '../../../components/Clearfix.vue'

export default {
  name: 'Banners',
  data () {
    return {
      banners: [],
    }
  },
  components: {
    Clearfix,
  },
  methods: {
    handleClickAction (actionIndex, banner, bannerIndex) {
      let remove = banner.actions[actionIndex].handler(bannerIndex)
      if (remove !== false) {
        this.remove(bannerIndex)
      }
    },
    remove (index) {
      this.banners = [...this.banners.slice(0, index), ...this.banners.slice(index + 1)]
    },
  },
}
</script>

<style lang="postcss" scoped>
.banner {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  min-height: 54px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background-color: hsl(0,0%,20%);
  border-bottom: 1px solid #000;
  font-size: 14px;

  .text {
    color: hsl(0,0%,87%);
    margin: 16px;
    line-height: 20px;
  }

  .actions {
    flex: 1;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    color: hsl(0,0%,87%);
    font-weight: bold;
    margin-left: 36px;
    .action {
      margin: 8px 8px 8px 0;
      padding: 8px;
      line-height: 1em;
      text-transform: uppercase;
      cursor: pointer;
      &:active {
        background-color: rgba(255,255,255,0.1);
      }
    }
  }
}

.banner-enter-active, .banner-leave-active {
  transition: all .4s ease;
}
.banner-enter, .banner-leave-to {
  transform: translate3d(0,-100%,0);
}
</style>
