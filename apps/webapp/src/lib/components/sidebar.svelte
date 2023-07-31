<script lang="ts">
  import { page } from "$app/stores";
  import { routes } from "$lib/routes";
  import Brand from "./brand.svelte";
  let expanded: number | null;
  $: ({ pathname } = $page.url);

  const expand = (node: HTMLElement, i: any) => (expanded = expanded != null ? expanded : i);
</script>

<div class="drawer-side">
  <label for="my-drawer" class="drawer-overlay" />
  <aside class="w-64 h-screen bg-base-200 ">
    <Brand />
    <nav class="">
      <ul class="menu flex flex-col mb-4 w-full p-4 justify-center">
        <li class="uppercase bg-base-300 rounded-md">
          <a class:active={pathname == "/"} href="/">
            <span class="i-bx:home text-lg" />
            <span>Dashboard</span>
          </a>
        </li>
      </ul>

      {#each routes as route, i}
        <ul class="text-sm collapse collapse-arrow">
          <input checked={expanded == i} type="checkbox" class="peer" />
          <li class="collapse-title peer-checked:bg-base-300">
            <span>{route.name}</span>
          </li>
          <ul class="collapse-content menu peer-checked:bg-base-300">
            {#each route.links as link}
              <li
                class:bordered={pathname == link.url}
                use:expand={pathname == link.url ? i : null}
              >
                <a
                  href={link.url}
                  class="flex gap-4"
                  on:click={() => {
                    pathname = link.url;
                    expanded = i;
                  }}
                >
                  <span class="flex-1">{link.name}</span>
                  <span class:hidden={!link.badge} class="badge badge-sm flex-none lowercase">
                    {link.badge}
                  </span>
                </a>
              </li>
            {/each}
          </ul>
        </ul>
      {/each}

      <div class="divider divider-horizontal" />
      <ul class="menu menu-compact">
        <li class="menu-title">
          <span>Settings</span>
        </li>
        <div class="mx-4">
          <li class:bordered={pathname == "/settings"}>
            <a href="/settings">
              <span class="i-bx:cog text-lg" />
              <span>System Settings</span>
            </a>
          </li>
        </div>
      </ul>
    </nav>
  </aside>
</div>


