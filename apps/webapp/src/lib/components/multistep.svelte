<script lang="ts">
  import { enhance } from "$app/forms";
  import type { ActionResult } from "@sveltejs/kit";
  import { onMount } from "svelte";
  export let steps: string[];

  let active = 0;
  let maxstep = steps.length - 1;
  let activeTab: HTMLDivElement;
  let tabs: HTMLDivElement;

  onMount(() => {
    activeTab.innerHTML = tabs.children[active].outerHTML;
  });

  const setTab = (tab: number) => {
    active = active + tab;
    active = active <= 0 ? 0 : active;
    active = active >= maxstep ? maxstep : active;
    activeTab.innerHTML = tabs.children[active].outerHTML;
  };

  const onSuccess = async ({ result, update }: any) => {
    setTab(+1);
    update();
  };
</script>

<div hidden bind:this={tabs}><slot /></div>
<form method="POST" use:enhance={() => onSuccess}>
  <div class="flex flex-row">
    <div class="basis-1/4">
      <ul class="steps steps-vertical border-r pr-10">
        {#each steps as step, i}
          <li class="step {active == i ? 'step-primary' : ''}">{step}</li>
        {/each}
      </ul>
    </div>
    <div class=" basis-3/4" bind:this={activeTab} />
  </div>

  <div class="flex flex-row float-right">
    <button on:click={() => setTab(-1)} class="btn mr-2" type="button"
      >Back</button
    >
    {#if active == maxstep}
      <button class="btn">Submit</button>
    {:else}
      <button class="btn">Next</button>
    {/if}
  </div>
</form>
