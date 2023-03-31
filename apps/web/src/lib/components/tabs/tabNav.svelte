<script lang="ts">
  import { Nav, NavItem, NavLink } from "sveltestrap"
  export let menus: string[]
  export let active = 0
</script>

<Nav tabs class="nav-tabs-custom border-0 mt-3">
  {#each menus as menu, i}
    <NavItem class={active == i ? "current" : ""}>
      <NavLink on:click={() => (active = i)} active={active == i}>
        <span class="d-block d-sm-none">
          <i class="fas fa-home" />
        </span>
        <span class="fs-5 d-none d-sm-block text-muted fw-normal">{menu}</span>
      </NavLink>
    </NavItem>
  {/each}
</Nav>
