<script lang="ts">
  import { preloadCode, preloadData } from "$app/navigation";
  import Breadcrumb from "$lib/components/Breadcrumb.svelte";
  import Nav from "$lib/components/Nav.svelte";
  import PageLoader from "$lib/components/PageLoader.svelte";
  import Sidebar from "$lib/components/Sidebar.svelte";
  import { fetching } from "$lib/store/loader";
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  onMount(() => {
    // preloadData("/programs");
  });
</script>

<div class="sticky top-0 z-30 flex flex-col space-x-1">
  {#if $fetching}
    <div class="m-1" out:fade={{ delay: 500 }}>
      <PageLoader />
    </div>
  {/if}
  
  <Nav />
</div>

<main class="rounded-tr-box rounded-b-box drawer lg:drawer-open drawer-mobile">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content">
    <div class="pr-10 pt-0">
      <div class="rounded-3xl">
        <div class="p-5 lg:p-5 bg-partern lg:rounded-3xl">
          <Breadcrumb title="Dashboard" />
          <slot />
        </div>
        <footer class="footer p-4 text-base-content">
          <div>
            <p>Copyright © 2023 - All right reserved by Beznet. All rights reservedLtd</p>
          </div>
        </footer>
      </div>
    </div>
  </div>
  <Sidebar />
</main>

<style>
  .bg-partern {
    background-size: 5px 5px;
    background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
  }
</style>
