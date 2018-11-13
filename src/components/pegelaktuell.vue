<template>
  <div>
    {{ datum | date }} <br />
    <br />
    {{ pegel / 100 }} m <br />
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      datum: null,
      pegel: null
    };
  },
  mounted() {
    axios
      .get(
        "https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/L%C3%9CBECK-BAUHOF/W/currentmeasurement.json"
        //"https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/L%C3%9CBECK-BAUHOF/W/measurements.json?start=P15D"
      )
      .then(response => (this.datum = response.data.timestamp) & (this.pegel = response.data.value))

      .catch(error => console.log(error));
  }
};
</script>
