<template>
  <div id="app">
    <heading /> <aktuell /><pegel />
  </div>
</template>

<script>
import heading from "./components/heading";
//import myvue from "./components/myvue";
//import commitchart from "./components/commitchart";
import aktuell from "./components/pegelaktuell";
import pegel from "./components/pegelstaende";
export default {
  name: "App",
  components: {
    heading,
    //myvue,
    // commitchart,
    aktuell,
    pegel
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial,
    sans-serif;
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
