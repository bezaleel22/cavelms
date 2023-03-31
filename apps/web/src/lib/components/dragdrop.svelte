<script lang="ts">
  import { onMount } from "svelte"

  export let name = "Drag and drop File Upload"
  let kb = 1000
  let mb = 1000000
  let selected: HTMLSpanElement
  let selectedContainer: HTMLDivElement
  let sizeinfo: HTMLElement
  let color = "primary"
  let base64: any

  const handleFileDrop = (e) => {
    e.preventDefault()
    if (e.dataTransfer.items) {
      ;[...e.dataTransfer.items].forEach((item, i) => {
        if (item.kind === "file") {
          const file = item.getAsFile()
          selected.innerText = file.name
          selected.hidden = false
          selectedContainer.appendChild(selected)
        }
      })
    } else {
      ;[...e.dataTransfer.files].forEach((file, i) => {
        selected.textContent = file.name
        selected.hidden = false
        selectedContainer.appendChild(selected)
      })
    }
  }

  const handlFileSelected = (e) => {
    let file = e.target.files[0]
    if (file.size > 256 * kb) {
      sizeinfo.innerText = "File too large (File size must be less than 256kb)"
      color = "danger"
      return
    }

    selected.innerText = `${file.name}  [${Math.round(file.size / 1000)}kb]`
    selected.hidden = false
    selectedContainer.appendChild(selected)

    let reader = new FileReader()
    // reader.readAsDataURL(file)
    reader.readAsArrayBuffer(file)
    reader.onload = async (e: any) => {
      base64 = reader.result as ArrayBuffer
      let formData = new FormData()
      formData.append("file", base64.split(",")[1])
      formData.append("name", file.name)

      await fetch(`api/upload`, { method: "POST", body: formData })
    }
  }
</script>

<div class="drag-area">
  <p>{name}</p>
  <label for="upload" class="w-100 border border-dashed border-primary">
    <!-- <a href=" " on:click|preventDefault={handlFileSelected} class="text-secondary opacity-75"> -->
    <div
      class="mx-auto text-center p-3"
      on:dragover|preventDefault={() => {}}
      on:drop|preventDefault={handleFileDrop}
    >
      <i class="bx bx-cloud-upload fs-1 mb-3" />
      <p class="">Drag & Drop to Upload File</p>
    </div>
    <!-- </a> -->
  </label>
  <input
    on:change={handlFileSelected}
    class="position-absolute left-0"
    id="upload"
    type="file"
    hidden
  />
  <small bind:this={sizeinfo} class={`text-${color}`}>
    File size must be less than 256kb, with a dimension of 1080 x 720px
  </small>
  <div bind:this={selectedContainer} class="d-flex w-100 overflow-scroll">
    <span hidden bind:this={selected} class="p-1 m-1 badge rounded-pill bg-primary me-2">
      course banner.jpg 27kb
    </span>
  </div>
</div>

<style>
  label {
    cursor: pointer;
  }
</style>
