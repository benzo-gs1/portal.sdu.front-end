<template>
  <div id="test">
    Counter: {{ counter }}
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  public counter: number = -1;

  created() {
    this.counter = 0;
  }

  increment() {
    this.counter++;
  }
}
</script>

<style scoped lang="scss"></style>
