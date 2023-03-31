<script>
  import Pie from "svelte-chartjs/src/Pie.svelte";
  const data = {
    width : 474,
    height: 300,
    labels: ["Desktops", "Tablets"],
    datasets: [
      {
        data: [300, 180],
        backgroundColor: ["#34c38f", "#ebeff2"],
        hoverBackgroundColor: ["#34c38f", "#ebeff2"],
        hoverBorderColor: "#fff",
      },
    ],
  };
</script>

<Pie {data} width={474} height={300} class="apex-charts" />