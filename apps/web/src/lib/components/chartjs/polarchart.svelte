<script>
   import Polar from "svelte-chartjs/src/Polar.svelte"

   const data = {
     width:474,
     height:300,
      datasets: [
        {
          data: [11, 16, 7, 18],
          backgroundColor: ["#f46a6a", "#34c38f", "#f1b44c", "#556ee6"],
          label: "My dataset", // for legend
          hoverBorderColor: "#fff",
        },
      ],
      labels: ["Series 1", "Series 2", "Series 3", "Series 4"],
    };

</script>

<Polar data={data} width={474} height={300} class="apex-charts" />