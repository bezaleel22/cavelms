<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { onMount } from "svelte";
  import { fade, fly } from "svelte/transition";
  import Program from "./program.svelte";
  import Register from "./register.svelte";
  import Upload from "./upload.svelte";
  import Verify from "./verify.svelte";

  let signup: string;
  let ready = false;
  let response: any;

  onMount(() => (ready = true));
  $: signup = $page.params.slug;
</script>

{#if ready}
  <div class="my-auto">
    {#if signup == "verify"}
      <div in:fly={{ x: -200, duration: 1000 }}>
        <Verify bind:response />
      </div>
    {:else if signup == "program"}
      <div in:fly={{ x: -200, duration: 1000 }}>
        <Program bind:response />
      </div>
    {:else if signup == "upload"}
      <div in:fly={{ x: -200, duration: 1000 }}>
        <Upload bind:response />
      </div>
    {:else}
      <div in:fly={{ x: -200, duration: 1000 }}>
        <Register bind:response />
        
      </div>
    {/if}
  </div>
{/if}

<style>
  /* .transition-container {
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: 1fr;
  }

  .transition-container > * {
    grid-row: 1;
    grid-column: 1;
  } */
</style>
