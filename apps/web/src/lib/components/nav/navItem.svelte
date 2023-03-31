<script lang="ts">
  import { browser } from "$app/environment"
  import { page } from "$app/stores"
  import { onMount } from "svelte"
  import { Collapse } from "sveltestrap"

  export let text = "Link"
  export let submenu = false
  export let href = ""
  export let badge = ""

  let isOpen = false
  let active = ""
  $: if (browser && !submenu) active = $page.url.pathname == href ? "mm-active" : ""
  $: if (browser && submenu) active = $page.url.pathname.includes(href) ? "mm-active" : ""
  $: if (browser && !active) isOpen = false
  // $: if (browser && submenu) active = $page.url.pathname.includes(href) ? "mm-active" : ""
  onMount(() => {
    isOpen = $page.url.pathname.includes(href)
  })
</script>

{#if submenu}
  <a {href} class="align-middle {active}" on:click|preventDefault={() => (isOpen = !isOpen)}>
    <i class="bx bx-home-circle" />
    <span class="ms-1 d-none d-sm-inline">{text}</span>
    <i class="bx bx-chevron-{isOpen ? 'down' : 'right'} float-end" />
  </a>
  <Collapse class="" {isOpen}>
    <nav id="submenu" class="nav flex-column ms-1 bg-light bg-soft pt-3">
      <slot />
    </nav>
  </Collapse>
{:else}
  <a {href} class="align-middle {active}" on:click={() => (isOpen = !isOpen)}>
    <i class="bx bx-home-circle" />
    <span class="ms-1 d-none d-sm-inline">{text}</span>

    {#if !!badge}
      <span class="badge rounded-pill bg-info float-end">{badge}</span>
    {/if}
  </a>
{/if}
