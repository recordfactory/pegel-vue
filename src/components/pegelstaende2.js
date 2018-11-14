import axios from 'axios';
import { Line } from 'vue-chartjs';
import { urlTravemuende } from '../main';

const _ = require('lodash');

const peg = [];
const time = [];
let fd;


/* const url =
  'https://www.pegelonline.wsv.de/webservices/rest-api/v2/stations/f4f9f7fb-eeff-46dc-9727-04d8aa56240a/W/measurements.json?start=P1D'; */

export default {
  extends: Line,
  data() {
    return {
      time: null,
      peg: null,
    };
  },
  mounted() {
    axios
      .get(urlTravemuende)
      .then((response) => {
        if (response.data) {
          // var ar = response.data;
          // eslint-disable-next-line func-names
          response.data.forEach((element) => {
            peg.push(element.value / 100);
            // eslint-disable-next-line vars-on-top
            const tt = element.timestamp;
            fd = new Date(tt).toLocaleDateString(['de-DE'], {
              month: 'short',
              day: '2-digit',
              year: '2-digit',
              hour: '2-digit',
              minute: '2-digit',
            });

            time.push(fd);
          });
          const filteredPeg = _.filter(peg, o => o < 650);

          this.renderChart({
            labels: time,
            datasets: [
              {
                label: 'Wasserstand in m',
                borderColor: '#234970',
                borderWidth: '1',
                pointBorderWidth: '0.5',
                pointRadius: '2',
                data: filteredPeg,
                responsive: true,
                maintainAspectRatio: false,
              },
            ],
          });
        }
      });
  },
};
