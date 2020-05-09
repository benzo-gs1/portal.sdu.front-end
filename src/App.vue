<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class App extends Vue {}
</script>

<style lang="scss">
@import "globals";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
  border: none;
}

// collecting fonts
@include import-fonts(Gilroy, Bold, Light, Medium, Regular, Semi-bold);

html {
  font-size: 100%;
}

#app {
  width: 100vw;
  height: 100vh;
}
</style>
