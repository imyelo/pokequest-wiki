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
  display: flex;
  flex-direction: column;
}
</style>
