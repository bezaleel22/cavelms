<script lang="ts">
  import { onDestroy, onMount } from "svelte";
  import { tweened } from "svelte/motion";
  import { cubicOut } from "svelte/easing";
  import { fetching } from "$lib/store/loader";
  import { fade } from "svelte/transition";

  const progress = tweened(0, {
    duration: 3500,
    easing: cubicOut,
  });

  const unsubscribe = fetching.subscribe((state) => {
    if (state === false) {
      progress.set(1, { duration: 1000 });
    }
  });

  onMount(() => {
    progress.set(0.7);
  });



  onDestroy(() => {
    unsubscribe();
  });
</script>

<div class="progress-bar">
  <div class="progress-sliver bg-primary" style={`--width: ${$progress * 100}%`} />
</div>

<style>
  .progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    height: 0.1rem;
  }
  .progress-sliver {
    width: var(--width);
    height: 100%;
  }
</style>
