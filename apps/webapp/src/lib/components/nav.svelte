<script lang="ts">
  import { enhance } from "$app/forms";
  import { user } from "$lib/store/auth";
</script>

<nav
  class="navbar bg-base-200 px-5
  sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100
  text-base-content shadow-sm"
>
  <div class="flex-none lg:hidden">
    <label for="my-drawer" class="btn btn-square btn-ghost drawer-button">
      <div class="i-bx:menu text-2xl" />
    </label>
  </div>
  <div class="flex-1">
    <div class="form-control hidden md:block">
      <input type="text" placeholder="Search" class="input input-bordered w-24 md:w-auto" />
    </div>
    <a
      href="/"
      aria-current="page"
      aria-label="Homepage"
      class="flex-0 btn btn-ghost px-2 md:hidden"
    >
      <div class="font-title text-primary inline-flex text-2xl transition-all duration-200">
        <span class="capitalize">Adu</span>
        <span class="text-base-content uppercase">LLAM</span>
      </div>
    </a>
  </div>
  <div class="flex-none gap-2 lg:block">
    <div class="dropdown dropdown-end m-6">
      {#if $user?.auth?.avatarUrl}
        <button tabindex="0" class="btn btn-circle avatar">
          <div class="w-8 rounded-full">
            <img src={`/${$user?.auth?.avatarUrl}`} alt="Avatar Tailwind CSS Component" />
          </div>
        </button>
      {:else}
        <button tabindex="0" class="btn btn-circle avatar placeholder">
          <div class="w-8 rounded-full">
            <span class="uppercase">
              {`${$user?.auth?.firstName?.charAt(0)}${$user?.auth?.lastName?.charAt(0)}`}
            </span>
          </div>
        </button>
      {/if}
      <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
      <ul
        tabindex="0"
        class="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-200 rounded-box w-52"
      >
        <li>
          <a href=" " class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a href=" ">Settings</a></li>
        <li>
          <form action="/logout" method="post" use:enhance>
            <button>Logout</button>
          </form>
        </li>
      </ul>
    </div>
  </div>
</nav>
