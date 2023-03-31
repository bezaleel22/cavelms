<script lang="ts">
export let label:string
export let value:string
</script>

<div class="relative">
  <input
    type="name"
    id="name"
    class=" pt-4 placeholder-transparent peer input input-bordered w-full max-w-xs"
    placeholder="Name"
    autocomplete="off"
  />
  <label
    for="name"
    class="absolute top-0 left-0 h-full px-3 py-3 text-sm  transition-all duration-100 ease-in-out origin-left transform scale-75 translate-x-1 -translate-y-3 opacity-75 pointer-events-none peer-placeholder-shown:opacity-100 peer-focus:opacity-75 peer-placeholder-shown:scale-100 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 peer-focus:translate-x-1"
  >
    Name
  </label>
</div>
