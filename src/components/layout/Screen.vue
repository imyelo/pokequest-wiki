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

<style scoped>
.screen {
  background-color: hsl(40,63%,86%);
  height: 100%;
  max-width: 1125px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
</style>
