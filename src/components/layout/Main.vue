<template>
  <div class="main">
    <div class="absolute">
      <slot name="absolute" />
    </div>
    <div class="scroller" @scroll="handleScroll" ref="scroller">
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import scroll from 'scroll'

export default {
  name: 'Main',
  methods: {
    handleScroll (event) {
      this.$emit('scroll', event)
    },
    scrollTop (y = 0) {
      scroll.top(this.$refs.scroller, y)
    },
  },
}
</script>

<style lang="postcss" scoped>
@import '../../stylesheet/size.css';

.main {
  flex: 1;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  /**
   * Extra absolute positioning areas outside the scroll area can help the browser render the page more easily.
   * But also be aware that you need to add additional z-index to each absolute positioning layer
  */
  .absolute {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    max-width: $main-max-width;
    margin: 0 auto;
  }
  .scroller {
    position: relative;
    width: 100%;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    justify-content: center;
    -webkit-overflow-scrolling: touch;
    .content {
      width: 100%;
      max-width: $main-max-width;
    }
  }
}
</style>
