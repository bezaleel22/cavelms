<script>
  import { onMount } from "svelte";
  import Chart from "chart.js/auto";

  let portfolio = null;
  const data = {
    labels: ["Expenses", "Savings", "Investments"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: ["#7000e1", "#fc8800", "#00b0e8"],
        hoverOffset: 4,
        borderWidth: 0,
      },
    ],
  };
  const config = {
    type: "doughnut",
    data: data,
    options: {
      responsive: true,
      cutout: "80%",
      spacing: 2,
      animation: { animateScale: true },
      plugins: {
        legend: {
          position: "right",
          display: true,
          labels: {
            usePointStyle: true,
            padding: 20,
            font: {
              size: 14,
            },
          },
        },
        title: {
          display: false,
          text: "My Personal Portfolio",
        },
      },
    },
  };
  onMount(() => {
    const ctx = portfolio.getContext("2d");
    let myChart = new Chart(ctx, config);
  });
</script>

<div class="chart-container" style="position: relative; height:50vh">
  <canvas bind:this={portfolio} />
</div>
