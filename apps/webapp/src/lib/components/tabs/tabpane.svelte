<script>
  export let items = [];
  export let activeTab = 1;

  const handleClick = (tabIndex) => () => (activeTab = tabIndex);
</script>

<div class="grid grid-row-2 w-full">
  <div class="mb-4">
    <div class="tabs float-right">
      {#each items as item}
        <button
    
          class="tab tab-bordered lg:mr-10 {activeTab === item.value ? 'tab-active' : ''}"
          on:click={handleClick(item.value)}
        >
          {item.label}
        </button>
      {/each}
    </div>
  </div>

  <div class="w-full">
    {#each items as item}
      {#if activeTab == item.value}
        <svelte:component this={item.component} />
      {/if}
    {/each}
  </div>
</div>
