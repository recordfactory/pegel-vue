<template>
  <div id="chart" class="myvue">
    <h1>{{ company }}</h1>
    <span
      ><a href="#chart">{{ business }}</a></span
    >
    <div>
      <h4>{{ year }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "myvue",
  data() {
    return {
      company: "Shmockotronics Inc.",
      business: "Hullabaloo Sales",
      year: "2017"
    };
  }
};
</script>

<!--
  Add "scoped" attribute to limit CSS to this component only
-->
<style scoped>
h1,
h2 {
  font-weight: bold;
}
span {
  color: red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
