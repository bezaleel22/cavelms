<script lang="ts">
  export let text: string;
  export let badge: string;
  export let changeClassAttribute: (attr: string) => void;
  export let path: string;
</script>

<li>
  <a
    href={path}
    class="waves-effect side-nav-link-ref"
    on:click={() => changeClassAttribute("dashboards")}
  >
    <i class="bx bx-home-circle" /><span
      class="badge rounded-pill bg-info float-end">{badge}</span
    >
    <span>{text}</span>
  </a>
</li>
