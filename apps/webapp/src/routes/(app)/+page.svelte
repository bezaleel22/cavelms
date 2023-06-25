<script lang="ts">
  import Graph from "$lib/components/graph.svelte";
  import Profile from "$lib/components/profile.svelte";
  import Stats from "$lib/components/stats.svelte";
  import UserTable from "$lib/components/userTable.svelte";
  import { onMount } from "svelte";

  onMount(() => {});
</script>

<svelte:head>
  <title>Dashboard</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<!-- <div class="grid grid-cols-4 gap-4 border mb-4">
  <div>01</div>

  <div>09</div>
</div> -->

<div class="grid grid-cols-4 gap-4">
  <div class="">
    <Profile />
  </div>

  <div class="col-span-3 ">
    <div class="flex mb-4">
      <Stats />
    </div>
    <div class="flex flex-col m-3">
      <Graph />
    </div>
    <div class="flex flex-col m-3">
      <UserTable />
    </div>
  </div>
</div>

<!-- {#if $auth.isFetching}
  <Dashboard />
{/if} -->
