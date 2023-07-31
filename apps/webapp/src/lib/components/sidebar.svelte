<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { routes } from "$lib/routes";
  import { user } from "$lib/store/auth";
  import Brand from "./Brand.svelte";
  let expanded: number | null;
  $: ({ pathname } = $page.url);

  const expand = (node: HTMLElement, i: any) => (expanded = expanded != null ? expanded : i);

  $: if (browser) {
    console.log({ $user });
  }
</script>

<div class="drawer-side">
  <label for="my-drawer" class="drawer-overlay" />
  <aside class="w-64 h-screen bg-base-200">
    <div class="flex justify-center">
      <Brand />
    </div>

    <nav class="">
      <div class="flex flex-col items-center mb-5">
        <div class="avatar online placeholder">
          <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
            <span class="uppercase text-3xl">
              {`${$user?.auth?.firstName?.charAt(0)}${$user?.auth?.lastName?.charAt(0)}`}
            </span>
          </div>
        </div>
        <div class="flex flex-col items-center">
          <p class="text-lg font-semibold">
            {`${$user?.auth?.firstName} ${$user?.auth?.lastName}`}
          </p>
          <p class="text-sm opacity-30">Prospetive</p>
        </div>
      </div>

      <ul class="menu bg-base-200 w-64">
        <li class="uppercase bg-base-300 rounded-md mb-10 mx-6">
          <a class:active={pathname == "/"} href="/">
            <span class="i-bx:home text-lg" />
            <span>Dashboard</span>
          </a>
        </li>
        {#each routes as route, i}
          <li>
            <details open>
              <summary>{route.name}</summary>
              <ul>
                {#each route.links as link}
                  <li use:expand={pathname == link.url ? i : null}>
                    <a
                      href={link.url}
                      class:active={pathname == link.url}
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
            </details>
          </li>
        {/each}
        <li>
          <h2 class="menu-title">Settings</h2>
          <ul>
            <li>
              <a href="/settings" class:active={pathname == "/settings"}>
                <span class="i-bx:cog text-lg" />
                <span>System Settings</span>
              </a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="divider m-3" />
    </nav>
  </aside>
</div>
