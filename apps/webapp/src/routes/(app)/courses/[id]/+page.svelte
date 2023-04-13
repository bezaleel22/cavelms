<script lang="ts">
  import Tabs from "$lib/components/tabs.svelte";
  import Assignments from "./assignments.svelte";
  import Documents from "./documents.svelte";
  import Forum from "./forum.svelte";
  import Overview from "./overview.svelte";
  import Videos from "./videos.svelte";

  let items = [
    { title: "Overview", component: Overview },
    { title: "Videos", component: Videos },
    { title: "Documents", component: Documents },
    { title: "Assignments", component: Assignments },
    { title: "Forum", component: Forum },
  ];
</script>

<!-- <div class="i-bx:bxs-file text-6xl text-primary"></div> -->

<!-- hero header -->
<div class="h-24 bg-gradient-to-r from-cyan-500 to-blue-500 md:h-48 mb-4" />

<!-- course brief -->
<div class="flex items-center mb-4">
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

<div class="mb-4">
<Tabs {items} />
</div>

