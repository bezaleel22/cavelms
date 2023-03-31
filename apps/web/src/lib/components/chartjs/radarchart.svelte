<script>
  import Radar from "svelte-chartjs/src/Radar.svelte";
  const data = {
    width:474,
    height:300,
    labels: [
      "Eating",
      "Drinking",
      "Sleeping",
      "Designing",
      "Coding",
      "Cycling",
      "Running",
    ],
    datasets: [
      {
        label: "Desktops",
        backgroundColor: "rgba(52, 195, 143, 0.2)",
        borderColor: "#34c38f",
        pointBackgroundColor: "#34c38f",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#34c38f",
        data: [65, 59, 90, 81, 56, 55, 40],
      },
      {
        label: "Tablets",
        backgroundColor: "rgba(85, 110, 230, 0.2)",
        borderColor: "#556ee6",
        pointBackgroundColor: "#556ee6",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "#556ee6",
        data: [28, 48, 40, 19, 96, 27, 100],
      },
    ],
  };
</script>

<Radar {data} width={474} height={300} class="apex-charts" />