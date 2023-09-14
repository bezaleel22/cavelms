<script lang="ts">
  import { enhance } from "$app/forms";
  import { settings } from "$lib/store/auth";

  let loading = false;
</script>

<form
  method="post"
  class="flex flex-col space-y-4"
  use:enhance={({ data }) => {
    loading = true;
    return ({ result, update }) => {
      console.log(result);
      loading = false;
      update();
    };
  }}
>
  <div class="grid grid-cols-12 gap-6">
    <div class="relative col-span-6 sm:col-span-3">
      <input
        type="text"
        name="appName"
        id="appName"
        class=" input input-bordered floating-input peer focus:border-accent-focus"
        placeholder=" "
      />
      <label for="appName" class="floating-label peer-focus:text-accent-focus"> App Name </label>
    </div>
    <div class="relative col-span-6 sm:col-span-3">
      <input
        name="year"
        type="text"
        id="year"
        class=" input input-bordered floating-input peer focus:border-accent-focus"
        placeholder=" "
      />
      <label for="year" class="floating-label peer-focus:text-accent-focus">
        Academic Year
      </label>
    </div>
  </div>
  <div class="relative col-span-6 sm:col-span-3">
    <label for="" class="label">
      <span class="label-text">Upload App Logo</span>
    </label>
    <input type="file" class="file-input file-input-bordered w-full" />
  </div>

  <div class="text-right p-5">
    {#if loading}
      <span class="loading loading-spinner loading-sm" />
    {/if}
    <button class="btn btn-primary">Save</button>
  </div>
</form>
