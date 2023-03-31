<script>
  import Rightbar from "$lib/components/Rightbar.svelte"
  import Footer from "./Footer.svelte"
  import Header from "./Header.svelte"
  import Navbar from "./Navbar.svelte"

  
  let open = false;
 
</script>

<div id="layout-wrapper">
  <Header bind:sidebar={open} />
  <Navbar />
  <div class="main-content" id="maincontent">
    <slot />
  </div>
  <Footer />

  <Rightbar layout="vertical" bind:open />
</div>
