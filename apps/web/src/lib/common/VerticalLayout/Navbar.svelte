<script lang="ts">
  import Link from "$lib/components/nav/link.svelte"
  import NavItem from "$lib/components/nav/navItem.svelte"
  import { _ } from "$lib/helpers/store"


</script>

{#if !!$_}
  <!-- ========== Left Sidebar Start ========== -->
  <div class="vertical-menu">
    <div data-simplebar class="h-100">
      <!--- Sidemenu -->
      <div id="sidebar-menu">
        <!-- Left Menu Start -->
        <ul
          class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start"
          id="side-menu"
        >
          <lebel class="menu-title">{$_.menuitems.menu.text}</lebel>
          <li class="w-100">
            <NavItem href="/" text={$_.menuitems.dashboards.text} />
          </li>

          <lebel class="menu-title">{$_.menuitems.section.features}</lebel>
          <li class="w-100">
            <NavItem submenu href="/account" text={$_.menuitems.account.text}>
              {#each $_.menuitems.account.list as route}
                <Link href={route.path} name={route.name} />
              {/each}
            </NavItem>
          </li>
          <li class="w-100">
            <NavItem submenu href="/courses" text={$_.menuitems.course.text}>
              {#each $_.menuitems.course.list as route}
                <Link href={route.path} name={route.name} />
              {/each}
            </NavItem>
          </li>
          <li class="w-100">
            <NavItem submenu href="/users" text={$_.menuitems.user.text}>
              {#each $_.menuitems.user.list as route}
                <Link href={route.path} name={route.name} />
              {/each}
            </NavItem>
          </li>

          <lebel class="menu-title">{$_.menuitems.section.links}</lebel>
          <li class="w-100">
            <a href="https://wwww.adulam.ng" class="align-middle">
              <i class="bx bx-home-circle" />
              <span class="ms-1 d-none d-sm-inline">Adullam</span>
            </a>
          </li>
        </ul>
      </div>
      <!-- Sidebar -->
    </div>
  </div>
  <!-- Left Sidebar End -->
{/if}
