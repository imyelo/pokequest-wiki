<template>
  <div class="main">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Main',
}
</script>

<style scoped>
.main {
  flex: 1;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
