<script lang="ts">
  export let active: number;
  export let titles: string[];
</script>

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
