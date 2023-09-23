<script lang="ts">
  import { getContext } from "svelte";
  import { exclude } from "./utils";
  import type { Writable } from "svelte/store";

  const name: string = getContext("datepicker-name");
  const error: Writable<string | undefined> = getContext("datepicker-error");

  const defaultClass = "block text-sm font-medium text-secondary-content";
  const errorClass = "text-danger";
</script>

<label
  for="{name}-visual"
  class={$error && $error.length > 0 ? errorClass : defaultClass}
  {...exclude($$props, ["use", "class"])}
>
  <slot />
</label>
