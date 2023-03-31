<script lang="ts">
  import { browser } from "$app/environment"
  import { page } from "$app/stores"

  export let name = "Link"
  export let href = ""

  let active = ""
  $: if (browser) active = href == $page.url.pathname ? "mm-active" : ""
</script>

<div class="ms-5 mb-3">
  <a class="d-none d-sm-inline {active}" {href}>
    <span class="d-none d-sm-inline">{name}</span>
  </a>
</div>
