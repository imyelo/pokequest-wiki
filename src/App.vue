<template>
  <router-view />
</template>

<script>
export default {
}
</script>

<style>
body, html {
  height: 100%;
  margin: 0;
  padding: 0;
  user-select: none;
  font-family: "Open Sans";
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
}

* {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}

input, textarea {
  -webkit-user-select: text;
     -moz-user-select: text;
          user-select: text;
}

::-webkit-scrollbar{
  display: none;
}
</style>
