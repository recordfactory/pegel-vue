<template>
  <div>
    {{ datum | date }} <br />
    <br />
    {{ pegel / 100 }} m <br />
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";

const url =
  "https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/L%C3%9CBECK-BAUHOF/W/currentmeasurement.json";

export default {
  data() {
    return {
      datum: null,
      pegel: null
    };
  },
  mounted() {
    axios
      .get(url)
      .then(
        response =>
          (this.datum = response.data.timestamp) +
          (this.pegel = response.data.value)
      );
  }
};
</script>
