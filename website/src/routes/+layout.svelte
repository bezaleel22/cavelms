<script>
  import Footer from "$lib/componentes/footer.svelte";
  import Header from "$lib/componentes/header.svelte";
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
    <Header />
    <main>
      <slot />
    </main>
  </div>

  <Footer />
</div>
