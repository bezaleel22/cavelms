<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  $: ({ verified } = data);
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Email Verification</h1>
      {#if verified}
        <p class="py-6">Your Email has been successfully verified</p>
        <a href="/login" class="btn btn-primary mb-4">Login</a>
      {:else}
        <p class="py-6 text-error">Somthing went wrong, please contact adullam support</p>
      {/if}
    </div>
  </div>
</div>
