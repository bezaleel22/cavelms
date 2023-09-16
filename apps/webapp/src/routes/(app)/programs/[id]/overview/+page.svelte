<script lang="ts">
  import { Datepicker } from "$lib/datepicker";
  import { onMount } from "svelte";
  let date: Element;

  onMount(() => {
        let dp = new Datepicker(date);

  });
</script>

<div class="container">
  <div class="grid grid-cols-4 gap-4">
    <div class="col-span-3 border">full Description</div>
    <div class="">
      <div bind:this={date} />
    </div>
  </div>
</div>
