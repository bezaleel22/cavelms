<script lang="ts">
  import { getContext } from "svelte";

  export let active:number;
  export let items: {
    title: string;
    component: ConstructorOfATypedSvelteComponent;
  }[];

//   $: active = getContext("active");
//   $: console.log(active);
</script>

<div class="w-full">
  {#each items as item, i}
    {#if active == i}
      <div>
        <svelte:component this={item.component} />
      </div>
    {/if}
  {/each}
</div>
