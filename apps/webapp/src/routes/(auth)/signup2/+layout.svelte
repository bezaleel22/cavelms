<script lang="ts">
  import CarouselPage from "$lib/components/CarouselPage.svelte";
  import { onMount } from "svelte";
  let ready = false;
  onMount(() => (ready = true));
</script>

<div>
  <div class="container-fluid p-0">
    <div class="row g-0">
      <CarouselPage />
      <div class="col-xl-3">
        <div class="auth-full-page-content p-md-5 p-4">
          <div class="w-100">
            <div class="d-flex flex-column h-100">
              <div class="mb-4 mb-md-5">
                <a href="dashboard" class="d-block auth-logo">
                  <img
                    src="assets/images/logo-dark.png"
                    alt=""
                    height="18"
                    class="auth-logo-dark"
                  />
                  <img
                    src="assets/images/logo-light.png"
                    alt=""
                    height="18"
                    class="auth-logo-light"
                  />
                </a>
              </div>
              <slot />
              {#if ready}
                <div class="mt-4 mt-md-5 text-center">
                  <p class="mb-0">
                    ©{" "}
                    {new Date().getFullYear()}
                    Adullam. Crafted with{" "}
                    <i class="mdi mdi-heart text-danger" /> by Beznet
                  </p>
                </div>
              {/if}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
