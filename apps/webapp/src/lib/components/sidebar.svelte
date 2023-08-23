<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { routes } from "$lib/store/routes";
  import { user } from "$lib/store/auth";
  import Brand from "./Brand.svelte";
  import { RoleType } from "@prisma/client";
  let expanded: number | null;

  $: ({ pathname } = $page.url);

  const expand = (node: HTMLElement, i: any) => (expanded = expanded != null ? expanded : i);

  $: if (browser) {
    console.log({ $routes });
  }
  const granted = [RoleType.PROSPECTIVE].includes($user?.role?.roleType as never);
</script>

<div class="drawer-side">
  <label for="my-drawer" class="drawer-overlay" />
  <aside class="w-64 h-screen bg-base-200">
    <div class="flex justify-center">
      <Brand />
    </div>

    <div class="flex flex-col gap-3 items-center mb-5">
      <div class="avatar online placeholder">
        <div class="bg-neutral-focus text-neutral-content rounded-full w-24">
          <span class="uppercase text-3xl">
            {`${$user?.firstName?.charAt(0)}${$user?.lastName?.charAt(0)}`}
          </span>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <p class="text-lg font-semibold">
          {`${$user?.firstName} ${$user?.lastName}`}
        </p>
        <p class="text-sm opacity-30">{$user?.role?.roleType}</p>
      </div>
    </div>

    <nav class="overflow-auto">
      <ul class="menu bg-base-200 overflow-auto">
        {#if granted}
          <li class="uppercase bg-base-300 rounded-md mb-10 mx-6">
            <a class:active={pathname == "/"} href="/">
              <span class="i-bx:home text-lg" />
              <span>Dashboard</span>
            </a>
          </li>
        {/if}

        {#each $routes as route, i}
          <li>
            <details open>
              <summary class="opacity-30">{route.name}</summary>
              <ul>
                {#each route.links as link}
                  {#if link.visible}
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
                  {/if}
                {/each}
              </ul>
            </details>
          </li>
        {/each}
        {#if granted}
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
        {/if}
      </ul>
      <div class="divider m-3" />
    </nav>
  </aside>
</div>
