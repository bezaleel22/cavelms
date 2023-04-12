<script>
  export let items = [];
  export let activeTab = 1;

  const handleClick = (tabValue) => () => (activeTab = tabValue);
</script>

<div class="tabs my-8">
  {#each items as item}
    <a
      href=" "
      class="tab tab-bordered lg:mr-10 {activeTab === item.value ? 'tab-active' : ''}"
      on:click={handleClick(item.value)}
    >
      {item.label}
    </a>
  {/each}
</div>

{#each items as item}
  {#if activeTab== item.value}
    <div class="box">
      <svelte:component this={item.component} />
    </div>
  {/if}
{/each}
