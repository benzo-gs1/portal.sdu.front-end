<template>
  <article id="app">
    <router-view></router-view>
  </article>
</template>

<script>
export default {
  name: "App",
  data() {
    return {};
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  outline: none;
  border: none;
  box-sizing: border-box;
}

#app {
  width: 100vw;
  height: 100vh;
}
</style>
