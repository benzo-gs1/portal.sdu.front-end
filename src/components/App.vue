<template>
  <article id="app">
    <div>
      <a href="#" @click="setLocale('en')"><flag iso="us"></flag></a>
      <a href="#" @click="setLocale('ru')"><flag iso="ru"></flag></a>
    </div>
    <h1>{{$t('testing')}}</h1>
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
    if (token && api.validate(token)) this.$router.push("/profile");

    // if it's not valid or doesn't exists
    this.$router.push("/auth");
  },
  methods: {
    setLocale(locale){
      import(`../langs/${locale}.json`).then((msg) => {
        this.$i18n.setLocaleMessage(locale,msg)
        this.$i18n.locale = locale
      })
    }
  },
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
