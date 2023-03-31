<script lang="ts">
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  import { Card, CardBody, CardTitle } from "sveltestrap";

  let container: any;
  var options = {
    chart: {
      height: 290,
      type: "bar",
      toolbar: {
        show: !1,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: "14%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: !1,
    },

    series: [
      {
        name: "Overview",
        data: [42, 56, 40, 64, 26, 42, 56, 35, 62],
      },
    ],
    grid: {
      yaxis: {
        lines: {
          show: !1,
        },
      },
    },
    yaxis: {
      title: {
        text: "% (Percentage)",
      },
    },
    xaxis: {
      labels: {
        rotate: -90,
      },
      categories: ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
      title: {
        text: "Week",
      },
    },
    colors: ["#556ee6"],
  };

  onMount(async () => {
    if (browser) {
      const ApexCharts = (await import("apexcharts")).default;
      const chart = new ApexCharts(container, options);
      chart.render();
    }
  });
</script>

<Card>
  <CardBody>
    <CardTitle class="mb-4">Overview</CardTitle>
    <div class="apex-charts">
      <!-- <div use:chart={options} /> -->
      <div bind:this={container} />
    </div>
  </CardBody>
</Card>
