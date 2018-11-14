<template>
  <div id='app'>

    <heading />
    <aktuell />
    <br>
    <div id="chart">
      <div id="heading2">
  <heading2 title="Lübeck-Bauhof" subtitle="Ganglinie"></heading2>
</div>
<pegel />
</div>
  </div>
</template>

<script>
import heading from './components/heading';
import aktuell from './components/pegelaktuell';
import pegel from './components/pegelstaende';

export default {
  name: 'App',
  components: {
    heading,
    // myvue,
    // commitchart,
    aktuell,
    pegel,
  },
};
</script>
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
#chart {
  /*height: 50%;*/
  width: 30%;
  /* height: 250px !important; */
}
</style>
