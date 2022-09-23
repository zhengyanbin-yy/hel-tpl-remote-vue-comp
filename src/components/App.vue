<template>
  <div id="app">
    <img alt="Vue logo" src="../assets/logo.png" />
    <h2>name: {{name}}</h2>
    <HelloWorld msg="Welcome to view project hel-tpl-remote-vue-comp ( from unpkg deploy )" />
  </div>
</template>

<script>
import HelloWorld from "./HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  props: {
    name: String,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
