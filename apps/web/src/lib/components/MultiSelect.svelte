<script lang="ts">
  import { onMount } from "svelte"
  import { fly } from "svelte/transition"
  import { Dropdown, DropdownMenu, DropdownToggle } from "sveltestrap"

  export let selected: [] | any = []
  export let name = "Multi Select"

  let isOption = true
  let isOpen = false
  let slot: HTMLSelectElement
  let allOpts: [] | any = []
  let options: [] | any = []


  onMount(() => {
    const opts = [...slot.querySelectorAll("option")]
    allOpts = opts.map((o) => ({ name: o.textContent, value: o.value })) as any
    options = allOpts
  })

  const toggle = () => (isOpen = !isOpen)

  const handleAdd = (opt) => {
    if (!opt.name) return
    selected = [...selected, opt] as any
    options = options.filter((e: any) => e.name !== opt.name) as any
    isOpen = !options.length ? false : true
  }

  const handleRemove = (opt) => {
    selected = selected.filter((s) => s.name !== opt.name) as any
    let entry = allOpts.find((e: any) => e.name === opt.name) as any
    options = entry ? [...options, entry] : (options as any)
    isOpen = true
  }

  const handleClear = () => {
    options = [...options, ...selected]
    selected = []
    isOpen = false
  }
</script>

<select hidden bind:this={slot} multiple><slot /></select>
<p>{name}</p>
<Dropdown {isOpen} {toggle} class="form-control d-flex p-0">
  <DropdownToggle color="" class="w-100 d-flex ps-1 overflow-auto" tag="a">
    {#each selected as val}
      <button
        on:click|preventDefault={() => handleRemove(val)}
        class="mt-2 mb-2 me-1 d-flex btn-rounded btn btn-light btn-sm"
      >
        <span class="">{val.name}</span>
        <i class="mdi mdi-close ms-1" />
      </button>
    {/each}
    <input type="text" class="bg-transparent m-1 form-control border-0" />
  </DropdownToggle>
  {#if selected.length}
    <button
      on:click|preventDefault={handleClear}
      class="m-1 position-relative avatar-xs rounded-circle btn btn-light"
    >
      <span class="avatar-title bg-transparent text-reset">
        <i class="mdi mdi-close" />
      </span>
    </button>
  {/if}
  <span class="p-2">
    <i class="bx bx-chevron-down fs-3" />
  </span>
  <DropdownMenu class="dropdown-menu-end w-100">
    {#if isOption}
      <div transition:fly={{ duration: 200, y: 5 }} class="rounded list-group">
        {#each options as opt, i}
          <a on:click|preventDefault={() => handleAdd(opt)} class="dropdown-item" href={""}>
            {opt?.name}
          </a>
        {/each}
      </div>
    {/if}
  </DropdownMenu>
</Dropdown>
