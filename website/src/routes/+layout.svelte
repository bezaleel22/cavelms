<script lang="ts">
  import { afterNavigate, beforeNavigate } from "$app/navigation";
  import Footer from "$lib/componentes/footer.svelte";
  import PageHeader from "$lib/componentes/pageheader.svelte";
  import Headermain from "$lib/componentes/headermain.svelte";
  import { loading } from "$lib/store";
  import { fade } from "svelte/transition";
  import "./styles.css";
  import { onMount } from "svelte";

  export let data;
  $: ({ isHome } = data);

  // beforeNavigate(() => ($loading = true));
  // afterNavigate(() => ($loading = false));

  onMount(() => {
    if (document.readyState === "loading") {
      // Loading hasn't finished yet
      document.addEventListener("DOMContentLoaded", () => {
        console.log("DOM fully loaded and parsed");
        $loading = false;
      });
    } else {
      // `DOMContentLoaded` has already fired
      $loading = false;
    }
  });
</script>

<svelte:head>
  <meta name="description" content="RCN Theological Seminary - Adullam" />
</svelte:head>

<div class="app">
  {#if $loading}
    <div id="preloader" class="preloader" out:fade={{ duration: 1000 }}>
      <div class="loaders loader-1">
        <div class="loader-outter" />
        <div class="loader-inner" />
      </div>
    </div>
  {:else}
    <div id="wrapper" class="wrapper">
      {#if isHome}
        <Headermain />
      {:else}
        <PageHeader />
      {/if}

      <main>
        <slot />
      </main>
    </div>

    <Footer />
  {/if}
</div>
