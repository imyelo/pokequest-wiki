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
  height: 100%;
  overflow-y: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
