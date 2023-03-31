<script>
  import Footer from "$lib/comp/footer.svelte";
  import Nav from "$lib/comp/nav.svelte";
  import Sidebar from "$lib/comp/sidebar.svelte";
</script>

  <main class="bg-main rounded-tr-box bg-cover rounded-b-box drawer drawer-mobile">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content bg-base-100" style="scroll-behavior: smooth; scroll-padding-top: 5rem;">
      <Nav />
      <div class="container-fluid mx-auto p-10 bg-base-200 rounded-xl h-full overflow-auto ">
        <slot />
      </div>
    </div>
    <Sidebar />
  </main>

<style>
  /* .bg-main {
    background-size: 5px 5px;
    background-image: radial-gradient(hsla(var(--bc) / 0.2) 0.5px, hsla(var(--b2) / 1) 0.5px);
  } */
</style>
