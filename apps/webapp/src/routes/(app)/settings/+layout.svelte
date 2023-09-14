<script lang="ts">
  import { page } from "$app/stores";
  import Tabs from "$lib/components/Tabs.svelte";
  
  const titles = ["general", "media"];

  $: active = titles.indexOf($page.url.pathname.split("/").pop() as string);
  $: console.log({ active });
</script>

<div class="card w-full bg-base-100 text-neutral-content">
  <div class="card-body shadow-lg p-6 pb-1">
    <Tabs withPane bind:active {titles}>
      <slot />
    </Tabs>
  </div>
</div>
