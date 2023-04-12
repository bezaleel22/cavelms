<script lang="ts">
  import Tabs from "$lib/components/tabs.svelte";
  import Assignments from "./assignments.svelte";
  import Documents from "./documents.svelte";
  import Forum from "./forum.svelte";
  import Overview from "./overview.svelte";
  import Videos from "./videos.svelte";

  let items = [
    { label: "Overview", component: Overview },
    { label: "Videos", component: Videos },
    { label: "Documents", component: Documents },
    { label: "Assignments", component: Assignments },
    { label: "Forum", component: Forum },
  ];
</script>

<!-- <div class="i-bx:bxs-file text-6xl text-primary"></div> -->

<!-- hero header -->
<div class="h-24 bg-gradient-to-r from-cyan-500 to-blue-500 md:h-48" />

<!-- course brief -->
<div class="p-3 my-5 flex items-center">
  <div class="bg-current p-5 w-36 rounded-full m-5 hidden sm:block">
    <div class="i-bx:bxs-book text-8xl text-primary" />
  </div>
  <div>
    <p class="text-3xl font-bold my-3">Introduction to Apologetics</p>
    <p class="text-sm w-full sm:w-96 sm:text-base">
      This course understudy the basics of Christian Apologetics and how to give a response for the
      reason you believe what you believe
    </p>
  </div>
</div>

<Tabs {items} />
