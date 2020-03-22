<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ['dates', 'chartData', 'country', 'type'],
  mounted() {

    this.renderChart(
      {
        labels: this.dates,
        datasets: [
          {
            label: this.type,
            data: this.chartData,
            backgroundColor: "transparent",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "rgba(171, 71, 188, 1)"
          }
        ]
      },
      {
        responsive: true,
        maintainAspectRatio: false,
        title: {
          display: true,
          text: this.country
        }
      }
    );
  }
};
</script>