<script>
  import Footer from "$lib/components/footer.svelte";
  import Nav from "$lib/components/nav.svelte";
  import Sidebar from "$lib/components/sidebar.svelte";
</script>

<main class="rounded-tr-box rounded-b-box drawer lg:drawer-open drawer-mobile fixed">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />
  <div class="drawer-content bg-base-100">
    <Nav />
    <div class=" pt-0">
      <div class="rounded-3xl">
        <div class="p-5 lg:p-5 bg-partern lg:rounded-3xl">
          <slot />
        </div>
        <footer class="footer p-4 bg-base-100 text-base-content">
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
