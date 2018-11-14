<template>
  <div id='app'>
    <heading />
    <aktuell />
    <br>
    <div id="pegeldiagramme">
      <div id="chart">
        <div id="heading2">
          <heading2 title="Lübeck-Bauhof" subtitle="24h"></heading2>
        </div>
        <pegel />
        </div>
    <div id="chart2">
      <div id="heading3">
          <heading2 title="Travemünde" subtitle="24h"></heading2>
      </div>
      <pegel2 />
      </div>
      </div>
  </div>

</template>

<script>
import heading from './components/heading';
import aktuell from './components/pegelaktuell';
import pegel from './components/pegelstaende';
import pegel2 from './components/pegelstaende2';

export default {
  name: 'App',
  components: {
    heading,
    // myvue,
    // commitchart,
    aktuell,
    pegel,
    pegel2,
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
#chart,
#chart2 {
  /*height: 50%;*/
  width: 30%;
  /* height: 250px !important; */
}
#pegeldiagramme {
  width: 100%;
}
</style>
