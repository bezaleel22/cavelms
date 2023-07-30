<script lang="ts">
  import Profile from "$lib/components/profile.svelte";
  import { TabNav, TabPane } from "$lib/components/tabs";
  import { onMount } from "svelte";
  import Overview from "./account/overview.svelte";

  let active = 0;
  let items = [{ id: "second", title: "Overview", component: Overview }];

  onMount(() => {});
</script>

<svelte:head>
  <title>Dashboard</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="grid grid-cols-4 gap-10">
  <div class="col-span-1">
    <Profile />
  </div>
  <div class="col-span-3">
    <TabNav bind:active {items} />

  </div>
</div>
    <TabPane bind:active {items} />