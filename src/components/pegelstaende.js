import axios from "axios";
import { Line } from "vue-chartjs";
import moment from "moment";
import DateFilter from "../filters/date";

var _ = require("lodash");

const url =
  "https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/f4f9f7fb-eeff-46dc-9727-04d8aa56240a/W/measurements.json?start=P1D";

export default {
  extends: Line,
  data() {
    return {
      time: null,
      peg: null
    };
  },
  mounted() {
    axios
      .get(url)

      .then(response => {
        if (response.data) {
          //var ar = response.data;
          var peg = [];
          var time = [];
          var fd;
          response.data.forEach(function(element) {
            peg.push(element.value);
            var tt = element.timestamp;
            fd = new Date(tt).toLocaleDateString(["de-DE"], {
              month: "short",
              day: "2-digit",
              year: "2-digit",
              hour: "2-digit",
              minute: "2-digit"
            });
            time.push(fd);
          });
          var filteredPeg = _.filter(peg, function(o) {
            return o < 650;
          });

          this.renderChart({
            labels: time,
            datasets: [
              {
                label: "Pegel",
                borderColor: "green",
                borderWidth: "1",
                pointBorderWidth: "0.5",
                pointRadius: "2",
                data: filteredPeg
              }
            ]
          });
        }
      })
      .catch(error => {
        console.log("error:   ", error);
      });
  }
};
