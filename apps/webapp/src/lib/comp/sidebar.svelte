<script lang="ts">
  import { routes } from "$lib/data/route";
  import Brand from "./brand.svelte";
</script>

<div class="drawer-side">
  <label for="my-drawer" class="drawer-overlay" />
  <aside class="bg-base-100 w-80">
    <Brand />

    <div class="h-4" />
    <nav class="pl-4 pr-4">
      <ul class="menu menu-compact flex flex-col p-0 px-4 mb-4 w-full">
        <li><a href="/dashboard" class="uppercase mx-auto bg-base-300">Dashboard</a></li>
      </ul>

      {#each routes as route}
        <ul class="menu menu-compact flex flex-col p-0 px-4 pb-4">
          <li class={!route.name ? "" : "hidden"} />
          <li class="menu-title {route.name ? '' : 'hidden'}"><span>{route.name}</span></li>
          <li class={route.name ? "" : "hidden"} />
          {#each route.links as link}
            <li>
              <a href={link.url} class="flex gap-4">
                <span class="flex-1">{link.name}</span>
                <span class="{link.badge ? '' : 'hidden'} badge badge-sm flex-none lowercase">{link.badge}</span>
              </a>
            </li>
          {/each}
        </ul>
      {/each}
    </nav>
  </aside>
</div>
