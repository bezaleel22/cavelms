<script lang="ts">
  import { slide } from "svelte/transition";

  let className = "";
  export { className as class };
  export let name: string;
  export let value: string;
  export let icon: string;
  export let edited: string;

  let isEdit: boolean = false;
  $: isEdit = edited != name ? false : true;
</script>

<div class={`${className} d-flex flex-row `}>
  <i class={`${icon} font-size-20`} />
  <div class="ms-3  flex-grow-1">
    <h5 class="font-size-14">{name}</h5>
    <p class="text-muted">
      {value}
    </p>
    {#if isEdit}
      <input
        transition:slide={{ duration: 500 }}
        type="text"
        class="form-control"
        on:blur={() => (isEdit = false)}
        bind:value
      />
    {/if}
  </div>
  <a
    href="/"
    on:click|preventDefault={() => {
      edited = name;
      isEdit = !isEdit;
    }}
  >
    <i class="bx bx-pencil text-primary ms-1" />
  </a>
</div>
