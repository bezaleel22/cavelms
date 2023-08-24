<script lang="ts">
  
  export let active = 1;
  export let items: {
    title: string;
    component: ConstructorOfATypedSvelteComponent;
  }[];
</script>

<div class="grid grid-row-2 w-full">
  <div class="mb-4">
    <div class="tabs float-right">
      {#each items as item, i}
        <button
          class="tab tab-bordered lg:mx-8 {active === i ? 'tab-active' : ''}"
          on:click={() => (active = i)}
        >
          {item.title}
        </button>
      {/each}
    </div>
  </div>

  <div class="w-full">
    {#each items as item, i}
      {#if active == i}
        <svelte:component this={item.component} />
      {/if}
    {/each}
  </div>
</div>
