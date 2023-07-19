<script lang="ts">
  import type { User$result } from "$houdini";

  export let users: User$result[] | undefined;

  const searchUser = () => {
    console.log(users);
  };
</script>

<div class="card-body">
  <h3 class="card-title">Filter Options</h3>
  <div class="divider" />
  <div class="grid grid-flow-row space-y-8">
    <div class="relative">
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
      <label for="type" class="floating-label peer-focus:text-accent-focus"> Status</label>
    </div>
    <div class="relative">
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
      <label for="type" class="floating-label peer-focus:text-accent-focus"> Program</label>
    </div>
    <div class="relative">
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
      <label for="type" class="floating-label peer-focus:text-accent-focus"> Platform </label>
    </div>
    <div class="flex justify-end">
      <button class="btn mr-2">Reset</button>
      <button on:click={searchUser} class="btn">Apply</button>
    </div>
  </div>
</div>
