<script lang="ts">
  import { enhance } from "$app/forms";
  import Brand from "$lib/components/Brand.svelte";
  import type { ActionData } from "./$types";
  let reveal = false;
  let isAlert = false;
  let message: boolean;
  export let form: ActionData;
  let loading = false;
  $: if (form) {
    message = form?.message;
    isAlert = true;
    console.log(form);
  }
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Welcome to Adullam!</h1>
      <p class="py-6">
        Experience the Intense Atmosphere of Heaven with Adullam - Where Learning Meets Spiritual
        Impartation
      </p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="font-medium self-center text-xl">
          <Brand />
        </div>
        {#if isAlert}
          <div class="alert alert-error shadow-lg mb-4">
            <div>
              <div class="i-bx:close" />
              <span>{message}</span>
            </div>
          </div>
        {/if}
        <form
          action="?/login"
          method="post"
          use:enhance={() => {
            loading = true;
            return ({ result, update }) => {
              update();
            };
          }}
        >
          <div class="relative mb-4">
            <input
              name="email"
              type="email"
              id="email"
              class=" input input-bordered floating-input peer focus:border-accent-focus"
            />
            <label for="password" class=" floating-label peer-focus:text-accent-focus">
              Email
            </label>
          </div>

          <div class="relative w-full max-w-xs">
            <div class="input-group">
              <input
                name="password"
                type={reveal ? "text" : "password"}
                id="password"
                class=" input input-bordered floating-input peer focus:border-accent-focus"
                placeholder=" "
              />
              <button on:click={() => (reveal = !reveal)} type="button" class="btn btn-square">
                <div class="{reveal ? 'i-mdi:eye-outline' : 'i-mdi:eye-off-outline'} text-xl" />
              </button>
            </div>
            <label for="password" class=" floating-label peer-focus:text-accent-focus">
              Password
            </label>
          </div>

          <label for="" class="label">
            <a href="/forget" class="label-text-alt link link-hover">Forgot password?</a>
          </label>

          <div class="form-control mt-6">
            <button class="btn">
              {#if loading}
                <span class="loading loading-spinner loading-sm" />
              {/if}
              Login
            </button>
          </div>
        </form>
        <span class="text-sm text-center mt-4">
          Don't have an account?
          <a href="/signup" class="text-primary">SignUp</a>
        </span>
      </div>
    </div>
  </div>
</div>
