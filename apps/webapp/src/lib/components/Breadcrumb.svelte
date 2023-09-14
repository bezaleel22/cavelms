<script lang="ts">
  import { page } from "$app/stores";
  import { onMount } from "svelte";

  export let title: string;

  $: ({ id } = $page.params);
  $: ({ pathname } = $page.url);

  $: paths = pathname.split("/");
  $: currentPage = paths.pop();
  $: pages = paths.filter((path) => path != "" && path != id);
</script>

<p class="font-semibold text-xl">{title}</p>
<div class="text-sm breadcrumbs mb-4">
  <ul>
    <li><a href="/">Home</a></li>
    {#each pages as page}
      <li><a href=" " class="capitalize">{page}</a></li>
    {/each}
    <li class="capitalize">{currentPage}</li>
  </ul>
</div>
