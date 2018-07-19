<template>
  <div class="screen">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'Screen',
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
