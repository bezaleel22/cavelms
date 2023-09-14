<script lang="ts">
  export let active: number;
  export let titles: string[] = [];
  export let withPane: boolean = false;
</script>

{#if titles.length}
  <div class="tabs">
    {#each titles as title, i}
      <a
        href={title.toLowerCase()}
        class:tab-active={active === i}
        class="tab tab-bordered mr-6"
        on:click={() => (active = i)}
      >
        <span class="capitalize">
          {title}
        </span>
      </a>
    {/each}
  </div>
{/if}

{#if withPane}
  <div class="w-full p-6">
    <slot />
  </div>
{/if}
