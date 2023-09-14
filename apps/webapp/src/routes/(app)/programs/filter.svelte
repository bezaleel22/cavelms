<script lang="ts">
  import { enhance } from "$app/forms";
  import type { Courses$result } from "$houdini";
  import { dataStore } from "$lib/store/query";
  import { onMount } from "svelte";

  let form: HTMLFormElement;
  let modal: HTMLDialogElement;
  $: isOpen = false;
  $: program = "PGDT";

  $: onMount(() => {
    modal.showModal();
  });
  const filterUsers = () => {
    isOpen = true;
    const formData = new FormData(form);
    const result = $dataStore as Mutable<Courses$result["coursesCollection"]>;
    const { code } = Object.fromEntries(formData);
    const filtered = result?.edges.filter((edge) => edge.node.code == code);

    if ($dataStore) $dataStore = { ...$dataStore, edges: filtered || [] };
    isOpen = false;
    console.log({ filtered });
  };
</script>

<div class="mb-4 flex justify-between">
  <div class="form-control">
    <input type="text" placeholder="Search" class="input input-bordered" />
  </div>
  <div class="flex space-x-1">
    <details class:dropdown-open={isOpen} class="dropdown dropdown-bottom dropdown-end">
      <summary class="btn btn-primary">
        <span class="i-bx:filter-alt text-lg m-0" />
        Filter
      </summary>
      <div class="dropdown-content w-96 shadow-2xl z-[1] bg-base-200 rounded-box mt-3 p-5">
        <form bind:this={form}>
          <div class="grid grid-flow-row gap-5">
            <div class="relative">
              <select
                name="platform"
                id="type"
                class=" select input-bordered floating-input peer focus:border-accent-focus"
                placeholder=" "
              >
                <option>Online</option>
                <option>On-Site</option>
              </select>
              <label for="type" class="floating-label peer-focus:text-accent-focus"> Status</label>
            </div>
            <div class="relative">
              <select
                name="program"
                id="type"
                class=" select input-bordered floating-input peer focus:border-accent-focus"
                placeholder=" "
              >
                <option>PGDT</option>
                <option>Diploma</option>
              </select>
              <label for="type" class="floating-label peer-focus:text-accent-focus"> Program</label>
            </div>

            <div class="flex justify-end">
              <button type="button" class="btn mr-2">Reset</button>
              <button type="button" on:click={filterUsers} class="btn btn-primary">Apply</button>
            </div>
          </div>
        </form>
      </div>
    </details>
    <button class="btn"> <span class="i-bx:plus text-lg mr-1" />Export</button>
    <button on:click={() => modal.show()} class="btn">
      <span class="i-bx:export text-lg" />
      Add Course
    </button>
  </div>
</div>

<dialog bind:this={modal} class="modal modal-bottom sm:modal-middle">
  <form action="?/addCourse" method="post" class="modal-box w-11/12 max-w-5xl" use:enhance>
    <button
      on:click={() => modal.close()}
      type="button"
      class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button
    >
    <h3 class="font-bold text-lg py-6 text-left">Add Course</h3>

    <div class="grid grid-cols-6 gap-6">
      <div class="relative col-span-6 sm:col-span-3">
        <input
          name="title"
          type="text"
          id="title"
          class=" input input-bordered floating-input peer focus:border-accent-focus"
          placeholder=" "
        />
        <label for="title" class="floating-label peer-focus:text-accent-focus">
          Course Title
        </label>
      </div>

      <div class="relative col-span-6 sm:col-span-3">
        <input
          name="code"
          type="text"
          id="code"
          class=" input input-bordered floating-input peer focus:border-accent-focus"
          placeholder=" "
        />
        <label for="code" class="floating-label peer-focus:text-accent-focus"> Course Code </label>
      </div>

      <div class="relative col-span-6 lg:col-span-3">
        <select
          name="semester"
          id="type"
          class=" select input-bordered floating-input peer focus:border-accent-focus"
          placeholder=" "
        >
          <option>Select Course Type</option>
          <option value="THEORY">Theory</option>
          <option value="PRACTICUM">Practicum</option>
          <option value="REGULAR">Regular Course</option>
          <option value="OTHERS">Others</option>
        </select>
        <label for="type" class="floating-label peer-focus:text-accent-focus">Course Type</label>
      </div>

      <div class="relative col-span-6 lg:col-span-3">
        <select
          name="semester"
          id="type"
          class=" select input-bordered floating-input peer focus:border-accent-focus"
          placeholder=" "
        >
          <option>Select Semester</option>
          <option value="FIRST">First Semester</option>
          <option value="SECOND">Second Semester</option>
        </select>
        <label for="type" class="floating-label peer-focus:text-accent-focus">Semester</label>
      </div>
      <div class="relative col-span-6 sm:col-span-6">
        <label class="label cursor-pointer flex justify-end space-x-2">
          <span class="label-text text-primary">Student Should Register</span>
          <input name="enroll" type="checkbox" class="toggle toggle-primary" />
        </label>
      </div>
      <div class="relative col-span-6 sm:col-span-6">
        <textarea
          class="textarea textarea-bordered w-full"
          name="shortDescription"
          placeholder="Short Description"
        />
      </div>

      <fieldset class="relative col-span-6 sm:col-span-3">
        <div class="flex space-x-3">
          <div class="flex items-center">
            <div class="flex h-6 items-center">
              <input
                bind:group={program}
                type="radio"
                name="program"
                value="PGDT"
                class="checkbox"
              />
            </div>
            <div class="ml-3 text-sm leading-6">
              <p class="text-gray-300">PGDT</p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex h-6 items-center">
              <input
                bind:group={program}
                type="radio"
                name="program"
                value="Diploma"
                class="checkbox"
              />
            </div>
            <div class="ml-3 text-sm leading-6">
              <p class="text-gray-300">Diploma</p>
            </div>
          </div>
        </div>
      </fieldset>

      <fieldset class="relative col-span-6 sm:col-span-3">
        <div class="flex space-x-3">
          <div class="flex items-center">
            <div class="flex h-6 items-center">
              <input type="radio" name="platform" value="Online" checked class="checkbox" />
            </div>
            <div class="ml-3 text-sm leading-6">
              <p class="text-gray-300">Online</p>
            </div>
          </div>
          <div class="flex items-center">
            <div class="flex h-6 items-center">
              <input type="radio" name="platform" value="On-Site" class="checkbox" />
            </div>
            <div class="ml-3 text-sm leading-6">
              <p class="text-gray-300">On-Site</p>
            </div>
          </div>
        </div>
      </fieldset>

      <div class="relative col-span-6 sm:col-span-6">
        <label for="" class="label">
          <span class="label-text">Upload Thumbnail</span>
        </label>
        <input name="cover" type="file" class="file-input file-input-bordered w-full" />
      </div>

      <div class="relative col-span-6 sm:col-span-6">
        <input
          name="creditHours"
          type="number"
          class=" input input-bordered floating-input peer focus:border-accent-focus"
          placeholder=" "
        />
        <label for="creditHours" class="floating-label peer-focus:text-accent-focus"
          >Credit Hours</label
        >
      </div>

      <div class="relative col-span-6 sm:col-span-3">
        <input
          name="startDate"
          type="date"
          id="startDate"
          class=" input input-bordered floating-input peer focus:border-accent-focus"
          placeholder=" "
        />
        <label for="startDate" class="floating-label peer-focus:text-accent-focus">Start Date</label
        >
      </div>

      <div class="relative col-span-6 sm:col-span-3">
        <input
          name="dueDate"
          type="date"
          id="dueDate"
          class=" input input-bordered floating-input peer focus:border-accent-focus"
          placeholder=" "
        />
        <label for="dueDate" class="floating-label peer-focus:text-accent-focus">Due Date</label>
      </div>

      <div class="relative flex justify-between col-span-6 sm:col-span-6">
        <label class="label cursor-pointer flex space-x-2">
          <span class="label-text">Lock Course</span>
          <input name="locked" type="checkbox" class="toggle toggle-primary" />
        </label>
      </div>
    </div>
    <div class="modal-action">
      <button class="btn">Submit</button>
    </div>
  </form>
</dialog>
