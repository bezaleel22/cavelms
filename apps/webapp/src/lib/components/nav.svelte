<script lang="ts">
</script>

<nav
  class="navbar bg-base-100
  sticky top-0 z-30 flex h-16 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100
  text-base-content shadow-sm
  "
>
  <div class="flex flex-1 md:gap-1 lg:gap-2">
    <div class="flex items-center gap-2 lg:hidden">
      <label
        for="my-drawer"
        class="i-bx:menu text-2xl text-primary drawer-button tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
      />
      <a href="/" aria-current="page" aria-label="Homepage" class="flex-0 btn btn-ghost px-2"
        ><div
          class="font-title text-primary inline-flex text-lg transition-all duration-200 md:text-3xl"
        >
          <span class="capitalize">Adu</span>
          <span class="text-base-content uppercase">LLAM</span>
        </div></a
      >
    </div>
    <div class="form-control">
      <input type="text" placeholder="Search" class="input input-bordered" />
    </div>
  </div>
  <div class="flex-none">
    <div class="dropdown dropdown-end">
      <button class="btn btn-ghost btn-circle">
        <div class="indicator">
          <div class="i-bx:cart text-2xl" />
          <span class="badge badge-sm indicator-item">8</span>
        </div>
      </button>
      <div class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow">
        <div class="card-body">
          <span class="font-bold text-lg">8 Items</span>
          <span class="text-info">Subtotal: $999</span>
          <div class="card-actions">
            <button class="btn btn-primary btn-block">View cart</button>
          </div>
        </div>
      </div>
    </div>
    <div class="dropdown dropdown-end">
      <button class="btn btn-ghost btn-circle avatar">
        <div class="w-10 rounded-full">
          <div class="i-bx:user text-3xl mx-auto my-1" />
        </div>
      </button>
      <ul class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a href="/account/profile" class="justify-between">
            Profile
            <span class="badge">New</span>
          </a>
        </li>
        <li><a href="/account/settings">Settings</a></li>
        <li><a href="/logout">Logout</a></li>
      </ul>
    </div>
  </div>
</nav>
