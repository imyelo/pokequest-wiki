<template>
  <div class="screen">
    <Headful :title="fullTitle" />
    <slot />
  </div>
</template>

<script>
import Headful from 'vue-headful'

const SITE_TITLE = 'PokeQuest Wiki'

export default {
  name: 'Screen',
  props: {
    title: String,
  },
  computed: {
    fullTitle () {
      let { title } = this
      if (!title) {
        return SITE_TITLE
      }
      return `${title} - ${SITE_TITLE}`
    },
  },
  components: {
    Headful,
  },
}
</script>

<style lang="postcss" scoped>
.screen {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: hsl(40,63%,86%);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
