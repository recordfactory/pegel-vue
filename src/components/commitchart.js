/// CommitChart.js
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  mounted() {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ],
      datasets: [
        {
          label: "Income",
          backgroundColor: "rgb(7, 15, 11 ,0.7)",
          data: [
            40,
            20,
            12,
            39,
            10,
            40,
            39,
            65,
            40,
            20,
            12,
            11
          ]
        }
      ]
    });
  }
};
