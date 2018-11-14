<template>
  <div class='hello'>
    <h1>{{ titel }}</h1>
    <h2>{{ messstelle }}</h2>
  </div>
</template>

<script>
export default {
  name: 'heading',
  data() {
    return {
      titel: 'Pegel der Trave',
      messstelle: 'Lübeck-Bauhof, aktuell',
    };
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
