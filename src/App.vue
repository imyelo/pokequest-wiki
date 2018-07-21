<template>
  <router-view />
</template>

<script>
export default {
}
</script>

<style>
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  user-select: none;
  font-family: "Open Sans";
  overflow: hidden;
  background-color: hsl(40,63%,86%);
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
