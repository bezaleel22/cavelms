<script lang="ts">
  import { browser } from "$app/environment";
  import { enhance } from "$app/forms";
  import { page } from "$app/stores";
  import { TabNav, TabPane } from "$lib/components/tabs";
  import { user } from "$lib/store/auth";
  import { routes } from "$lib/store/routes";

  const titles = $routes
    .find((route) => route.name == "Account")
    .links.map((link: any) => link.name.toLowerCase());

  let active = titles.indexOf($page.url.pathname.split("/").pop() as string);

  export let form: FormData;
  $: if (browser) console.log(form);

  const runMaizzle = async () => {
    const resp = await fetch("/api/maizzle");
    const data = await resp.text();
    console.log(data);
  };
</script>

<div class="card w-full bg-base-200 text-neutral-content mb-5">
  <div class="card-body shadow-lg p-6 pb-1">
    <div class="grid grid-cols-12 mb-4">
      <div class="col-span-2">
        {#if $user?.avatarUrl}
          <div class="avatar">
            <div class="w-44 rounded-xl">
              <img src="https://i.pravatar.cc/150?img=2" alt="" />
            </div>
          </div>
        {:else}
          <div class="avatar placeholder">
            <div class="bg-neutral-focus text-neutral-content rounded-xl w-44">
              <span class="text-6xl">
                {`${$user?.firstName?.charAt(0)}${$user?.lastName?.charAt(0)}`}
              </span>
            </div>
          </div>
        {/if}
      </div>

      <div class="flex flex-col col-span-7">
        <div class="font-semibold text-xl mb-2">{$user?.fullName}</div>
        <div class="flex opacity-30 mb-8 text-sm font-mono">
          <span class="flex mr-3 justify-center">
            <div class="i-bx:user text-lg leading-2 mr-1 text-primary" />
            <p class="leading-2">{$user?.role?.name}</p>
          </span>
          {#if $user?.city}
            <span class="flex mr-3">
              <div class="i-bx:map text-lg leading-1 mr-1 text-primary" />
              <p class="leading-1">{$user?.city}</p>
            </span>
          {/if}

          <span class="flex mr-3">
            <div class="i-bx:envelope text-lg leading-1 mr-1 text-primary" />
            <p class="">{$user?.email}</p>
          </span>
        </div>

        <div class="flex">
          <div class="border border-dotted border-opacity-30 mr-4 p-4">
            <span class="flex">
              <div class="i-bx:down-arrow-alt text-lg" />
              <p class="">200</p>
            </span>
            <p class="opacity-30">Developer</p>
          </div>
          <div class="border border-dotted border-opacity-30 mr-4 p-4">
            <span class="flex">
              <div class="i-bx:up-arrow-alt text-lg" />
              <p class="">200</p>
            </span>
            <p class="opacity-30">Developer</p>
          </div>
          <div class="border border-dotted border-opacity-30 mr-4 p-4">
            <span class="flex">
              <div class="i-bx:down-arrow-alt text-lg" />
              <p class="">200</p>
            </span>
            <p class="opacity-30">Developer</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col col-span-3 m-4">
        <div class="btn-group justify-end mb-4">
          <form action="?/personal" method="post" use:enhance>
            <button class="btn btn-active btn-sm">Follow</button>
          </form>

          <button class="btn btn-sm">Button</button>
          <button class="btn btn-sm">Maizzle</button>
        </div>

        <div class="flex flex-col my-10">
          <div class="flex justify-between">
            <span class="opacity-30">Registration Completion</span>
            <span>70%</span>
          </div>
          <progress class="progress progress-info h-1 bg-info bg-opacity-20" value="70" max="100" />
        </div>
      </div>
    </div>
    <div class="">
      <TabNav bind:active {titles} />
    </div>
  </div>
</div>

<TabPane let:active>
  <div class="p-6">
    <slot />
  </div>
</TabPane>
