<script lang="ts">
  import { browser } from "$app/environment";
  import { onMount } from "svelte";
  let container;

  const options = {
    chart: {
      height: 360,
      type: "bar",
      stacked: !0,
      toolbar: {
        show: !1,
      },
      zoom: {
        enabled: !0,
      },
    },

    plotOptions: {
      bar: {
        horizontal: !1,
        columnWidth: "15%",
        endingShape: "rounded",
      },
    },

    dataLabels: {
      enabled: !1,
    },
    series: [
      {
        name: "Series A",
        data: [44, 55, 41, 67, 22, 43, 36, 52, 24, 18, 36, 48],
      },
      {
        name: "Series B",
        data: [13, 23, 20, 8, 13, 27, 18, 22, 10, 16, 24, 22],
      },
      {
        name: "Series C",
        data: [11, 17, 15, 15, 21, 14, 11, 18, 17, 12, 20, 18],
      },
    ],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    },
    colors: ["#556ee6", "#f1b44c", "#34c38f"],
    legend: {
      position: "bottom",
    },
    fill: {
      opacity: 1,
    },
  };

  onMount(async () => {
    if (browser) {
      const ApexCharts = (await import("apexcharts")).default;
      const chart = new ApexCharts(container, options);
      chart.render();
    }
  });
</script>

<div bind:this={container} class="apex-charts" />
