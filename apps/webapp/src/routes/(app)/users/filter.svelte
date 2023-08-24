<script lang="ts">
  import { enhance } from "$app/forms";
  import { dataStore } from "$lib/store/query";

  let form: HTMLFormElement;
  $: isOpen = false;
  const filterUsers = () => {
    isOpen = true;
    const formData = new FormData(form);
    const { platform, program } = Object.fromEntries(formData);
    const filtered = $dataStore?.edges.filter(
      (edge) =>
        edge.node.enrollments?.platform == platform && edge.node.enrollments?.program == program
    );

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
    <div class:dropdown-open={isOpen} class="dropdown dropdown-bottom dropdown-end">
      <button tabindex={0} class="btn btn-primary">
        <span class="i-bx:filter-alt text-lg m-0" />
        Filter
      </button>
      <div class="dropdown-content w-96 shadow-2xl z-[1] bg-base-200 rounded-box mt-3 p-5">
        <form bind:this={form}>
          <div class="grid grid-flow-row gap-5">
            <div class="relative">
              <select
                name="platform"
                id="type"
                class=" select input-bordered floating-input peer focus:border-accent-focus"
                placeholder=" "
                required
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
                required
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
    </div>
    <button class="btn"> <span class="i-bx:plus text-lg mr-1" />Export</button>
    <label for="add_user" class="btn">
      <span class="i-bx:export text-lg" />
      Add User
    </label>
  </div>
</div>

<input type="checkbox" id="add_user" class="modal-toggle" />
<label for="add_user" class="modal cursor-pointer">
  <label class=" modal-box w-5/12 max-w-5xl relative">
    <h3 class="font-bold text-lg mb-4">Add User</h3>
    <form action="" method="post" use:enhance>
      <div class="grid grid-cols-2">
        <div class="relative mr-3">
          <select
            name="type"
            id="type"
            class=" select input-bordered floating-input peer focus:border-accent-focus"
            placeholder=" "
            required
          >
            <option value="lessons">Lessons</option>
            <option value="practicum">Practicum</option>
            <option value="short_Course">Short Course</option>
          </select>
          <label for="type" class="floating-label peer-focus:text-accent-focus">
            Course Type
          </label>
        </div>
        <div class="relative mb-3">
          <select
            name="type"
            id="type"
            class=" select input-bordered floating-input peer focus:border-accent-focus"
            placeholder=" "
            required
          >
            <option value="lessons">Lessons</option>
            <option value="practicum">Practicum</option>
            <option value="short_Course">Short Course</option>
          </select>
          <label for="type" class="floating-label peer-focus:text-accent-focus">
            Course Type
          </label>
        </div>
      </div>
      <div class="modal-action">
        <button class="btn">Add User</button>
      </div>
    </form>
  </label>
</label>
