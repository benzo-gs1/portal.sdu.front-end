<template>
  <div id="test">
    Counter: {{ counter }} <br />
    <button @click="increment">Increment</button>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Test extends Vue {
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
