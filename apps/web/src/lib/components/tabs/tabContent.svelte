<script lang="ts">
  import { browser } from "$app/environment"
  import { TabContent, TabPane } from "sveltestrap"
  export let active = 0
</script>

<div class="p-3 text-muted ">
  <TabContent class="twitter-bs-wizard-tab-content">
    <TabPane tabId={0} class={active == 0 ? "active" : ""}>
      <slot name="id-1" />
    </TabPane>
    <TabPane tabId={1} class={active == 1 ? "active" : ""}>
      <slot name="id-2" />
    </TabPane>
    <TabPane tabId={2} class={active == 2 ? "active" : ""}>
      <slot name="id-3" />
    </TabPane>
    <TabPane tabId={3} class={active == 3 ? "active" : ""}>
      <slot name="id-4" />
    </TabPane>
    <TabPane tabId={4} class={active == 4 ? "active" : ""}>
      <slot name="id-5" />
    </TabPane>
  </TabContent>
</div>
