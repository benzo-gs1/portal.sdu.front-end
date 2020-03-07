<template>
  <article id="app">
    <router-view></router-view>
  </article>
</template>

<script>
import api from "@/api";

export default {
  name: "App",
  data() {
    return {};
  },
  created() {
    // obtain local token
    const token = this.$cookies.get("token");
    if (token && api.validate(token)) this.$router.push("/homePage");

    // if it's not valid or doesn't exists
    this.$router.push("/auth");
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
