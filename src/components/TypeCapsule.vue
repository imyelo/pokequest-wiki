<template>
  <div class="capsule" :class="`type-${value}`">
    {{ value }}
  </div>
</template>

<script>
export default {
  name: 'TypeCapsule',
  props: {
    value: String,
  },
}
</script>

<style lang="postcss" scoped>
@import '../themes/offical.css';

.capsule {
  font-family: "Open Sans";
  text-transform: capitalize;
  font-size: 10px;
  margin-right: 1em;
  padding: 0.5em 1em;
  background-color: #ddd;
  color: #fff;
  border-radius: 8px;
  &.type-grass {
    background-color: $type-grass;
  }
  &.type-electric {
    background-color: $type-electric;
  }
  &.type-poison {
    background-color: $type-poison;
  }
  &.type-fire {
    background-color: $type-fire;
  }
  &.type-flying {
    background-color: $type-flying;
  }
  &.type-water {
    background-color: $type-water;
  }
  &.type-bug {
    background-color: $type-bug;
  }
  &.type-normal {
    background-color: $type-normal;
  }
  &.type-ground {
    background-color: $type-ground;
  }
  &.type-fairy {
    background-color: $type-fairy;
  }
  &.type-fighting {
    background-color: $type-fighting;
  }
  &.type-psychic {
    background-color: $type-psychic;
  }
  &.type-rock {
    background-color: $type-rock;
  }
  &.type-steel {
    background-color: $type-steel;
  }
  &.type-ice {
    background-color: $type-ice;
  }
  &.type-ghost {
    background-color: $type-ghost;
  }
  &.type-dragon {
    background-color: $type-dragon;
  }
}
</style>
