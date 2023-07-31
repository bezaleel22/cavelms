<script lang="ts">
  import { setContext } from "svelte";

  export let active: number;
  export let items: {
    id: string;
    title: string;
    component: ConstructorOfATypedSvelteComponent;
  }[];
</script>

<div class="tabs">
  {#each items as item, i}
    <button
      class:tab-active={active === i}
      class="tab tab-bordered mr-6"
      on:click={() => (active = i)}
    >
      {item.title}
    </button>
  {/each}
</div>
