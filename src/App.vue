<template>
  <div id="app"><HelloWorld /> <axi /><pegel /></div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
//import myvue from "./components/myvue";
//import commitchart from "./components/commitchart";
import axi from "./components/axi";
import pegel from "./components/pegelstaende";
export default {
  name: "App",
  components: {
    HelloWorld,
    //myvue,
    // commitchart,
    axi,
    pegel
  }
};
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
pegel {
  height: 300px;
}
</style>
