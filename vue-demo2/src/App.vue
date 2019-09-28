<template>
  <div id="app">
    <div id="container"></div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import { Controls, TestControl, NewTestControl } from "react-control";
import { registerControl, renderRuntime, size, pos } from "react-runtime";

registerControl(Controls);
const controls = [
  TestControl.option({
    ...size(400, 300),
    ...pos(50, 50),
    props: {
      text: "123"
    }
  }),
  NewTestControl.option({
    ...size(800, 300),
    ...pos(50, 50)
  })
];
const mount = renderRuntime({
  ...size(1920, 1080),
  controls
});

export default Vue.extend({
  name: "app",
  mounted() {
    const container = document.getElementById("container");
    if (container) {
      mount(container);
    }
  },
  components: {
    HelloWorld
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
