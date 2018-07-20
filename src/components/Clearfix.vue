<template>
  <div class="clearfix" />
</template>

<script>
export default {
  name: 'Clearfix',
}
</script>

<style scoped>
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
</style>
