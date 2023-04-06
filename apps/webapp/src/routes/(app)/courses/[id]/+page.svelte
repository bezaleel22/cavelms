<script lang="ts">
  import Assignments from "./assignments.svelte";
  import type { PageData } from "./$types";
  import Videos from "./videos.svelte";
  import Documents from "./documents.svelte";
  import Forum from "./forum.svelte";
  import Tabs from "$lib/components/tabs/tabs.svelte";
  import Overview from "./overview.svelte";
  export let data: PageData;

  let items = [
    { label: "Overview", value: 1, component: Overview },
    { label: "Videos", value: 2, component: Videos },
    { label: "Documents", value: 3, component: Documents },
    { label: "Assignments", value: 3, component: Assignments },
    { label: "Forum", value: 3, component: Forum },
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


