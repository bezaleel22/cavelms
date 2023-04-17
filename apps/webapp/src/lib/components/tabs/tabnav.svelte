<script lang="ts">
  import { setContext } from "svelte";

  export let active: number;
  export let items: {
    title: string;
    component: ConstructorOfATypedSvelteComponent;
  }[];

  //   $: setContext("active", active);
</script>

<div class="tabs">
  {#each items as item, i}
    <button
      class="tab tab-bordered lg:mr-6 {active === i ? 'tab-active' : ''}"
      on:click={() => (active = i)}
    >
      {item.title}
    </button>
  {/each}
</div>
