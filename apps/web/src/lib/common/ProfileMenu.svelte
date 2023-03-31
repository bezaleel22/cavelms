<script lang="ts">
  import { _ } from "$lib/helpers/store"
  import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from "sveltestrap"
  import Auth from "$lib/graphql/auth"
  import type { Refresh$result } from "$houdini"

  export let user: Refresh$result | null

  const handleLogOut = async () => {
    Auth.queryPublic("signOut", {})
  }
</script>

<Dropdown class="dropdown d-inline-block">
  <DropdownToggle
    class="btn header-item headerbtn"
    id="page-header-user-dropdown"
    tag="button"
    color=""
  >
    {#if !!user && !user?.refresh?.avatarUrl}
      <div class="avatar-xs">
        <span class="avatar-title rounded-circle">
          {user?.refresh?.fullName?.charAt(0)}
        </span>
      </div>
    {:else}
      <div>
        <img class="rounded-circle avatar-xs" src={user?.refresh?.avatarUrl} alt="" />
      </div>
    {/if}
    <!-- <img
      class="rounded-circle header-profile-user"
      src="/assets/images/users/avatar-1.jpg"
      alt="Header Avatar"
    /> -->
    <span class="d-none d-xl-inline-block ms-1"> Admin </span>
    <i class="mdi mdi-chevron-down d-none d-xl-inline-block" />
  </DropdownToggle>

  <DropdownMenu class="dropdown-menu-end">
    <h6 class="dropdown-header">
      {$_.navbar.dropdown.profile.list.welcome}
    </h6>
    <DropdownItem href={"/contacts-profile"}
      ><i class="mdi mdi-account-circle text-muted font-size-16 align-middle me-1" />
      <span class="align-middle">{$_.navbar.dropdown.henry.list.profile}</span>
    </DropdownItem>
    <DropdownItem href={"#"}
      ><i class="mdi mdi-message-text-outline text-muted font-size-16 align-middle me-1" />
      <span class="align-middle">{$_.navbar.dropdown.henry.list.mywallet}</span>
    </DropdownItem>
    <DropdownItem href={"#"}
      ><i class="mdi mdi-calendar-check-outline text-muted font-size-16 align-middle me-1" />
      <span class="align-middle">{$_.navbar.dropdown.henry.list.settings}</span>
    </DropdownItem>
    <DropdownItem href={"/auth-lock-screen"}
      ><i class="mdi mdi-lock text-muted font-size-16 align-middle me-1" />
      <span class="align-middle">{$_.navbar.dropdown.henry.list.lockscreen}</span>
    </DropdownItem>
    <div class="dropdown-divider" />
    <DropdownItem on:click={handleLogOut}
      ><i class="mdi mdi-logout text-muted font-size-16 align-middle me-1" />
      <span class="align-middle">{$_.navbar.dropdown.henry.list.logout}</span>
    </DropdownItem>
  </DropdownMenu>
</Dropdown>
