<template>
  <div id="welcome-page" class="flex-down">
    <img
      class="logo"
      src="@/assets/icons/sign-in/sdu-logo.svg"
      alt="sdu-logo icon"
    />

    <article class="group-wrapper">
      <p class="text">Developed by</p>
      <h2 class="team">BGS Limited</h2>
    </article>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
class WelcomePage extends Vue {}

export default WelcomePage;
</script>

<style lang="scss" scoped>
@import "globals";

#welcome-page {
  height: 100%;
  padding: 1em;

  background-color: $sduBlue;
}

.logo {
}
</style>
