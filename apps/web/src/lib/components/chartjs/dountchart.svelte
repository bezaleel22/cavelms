<script lang="ts">
  import Chart from "chart.js/auto";
  import { onMount } from "svelte";

  let labels = ["Pending", "Completed", "Pending"];
  let values = [10, 4, 6];
  let container: any;

  onMount(async () => {
    const ctx = container.getContext("2d");
    new Chart(ctx, {
      type: "doughnut",
      data: {
        labels: labels,
        datasets: [
          {
            backgroundColor: ["#556ee6", "#ebeff2", "#558fff"],
            hoverBackgroundColor: ["#556ee6", "#ebeff2", "#558fff"],
            hoverBorderColor: "#fff",
            data: values,
            borderWidth: 0,
          },
        ],
      },
      options: {
        aspectRatio: 1,
        cutout: 50,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: "right",
            labels: {
              usePointStyle: true,
              pointStyle: "rectRounded",
              boxHeight: 10,
              boxWidth: 20,
              padding: 20,
            },
          },
        },
      },
    });
  });
</script>

<canvas height="150" bind:this={container} id="myChart" />
