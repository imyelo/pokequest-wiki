<template>
  <i class="iconfont" :class="`icon-${type}`" />
</template>

<script>
export default {
  name: 'Iconfont',
  props: {
    type: String,
  },
}
</script>

<style lang="postcss" >
@import './iconfont.css';

</style>
