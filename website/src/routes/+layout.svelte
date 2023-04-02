<script>
  import { page } from "$app/stores";
  import Footer from "$lib/componentes/footer.svelte";
  import Headermain from "$lib/componentes/headermain.svelte";
  import Header from "$lib/componentes/headermain.svelte";
  import "./styles.css";
</script>

<div class="app">
  <div id="preloader" class="preloader">
    <div class="loaders loader-1">
      <div class="loader-outter" />
      <div class="loader-inner" />
    </div>
  </div>
  <div id="wrapper" class="wrapper">
    
    {#if $page.url.pathname == "/"}
      <Headermain />
    {:else}
      <Header />
    {/if}

    <main>
      <slot />
    </main>
  </div>

  <Footer />
</div>
