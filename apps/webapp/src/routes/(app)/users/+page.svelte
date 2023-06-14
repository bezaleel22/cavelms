<script>
  import { enhance } from "$app/forms";
  import UserFilter from "./user_filter.svelte";
  export let data;
  $: ({ Users } = data);
  $: ({ users } = $Users.data);

  // $: console.log(Users);
  // $: console.log(users);
  let checked = false;
</script>

<div class="card w-full bg-base-100 text-neutral-content">
  <div class="card-body items-center text-center">
    <div class="grid grid-flow-row w-full">
      <div class="mb-4 flex justify-between">
        <div class="form-control">
          <input type="text" placeholder="Search" class="input input-bordered" />
        </div>
        <div class="flex">
          <div class="dropdown dropdown-bottom dropdown-end m-1">
            <button class="btn btn-primary">
              <span class="i-bx:filter-alt text-lg mr-1" />
              Filter
            </button>
            <div class="dropdown-content card card-compact w-96 p-2 shadow-2xl bg-base-100">
              <UserFilter {users} />
            </div>
          </div>
          <label for="export" class="btn m-1">
            <span class="i-bx:export text-lg mr-1" />
            Export
          </label>
          <button class="btn m-1"><span class="i-bx:plus text-lg mr-1" />Add User</button>
        </div>
      </div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <!-- head -->
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <th>Name</th>
              <th>Contact</th>
              <th>Program</th>
              <th>Platform</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            {#each users as user}
              <tr>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <td>
                  <a href="/users/{user.id}" class="flex items-center space-x-3">
                    {#if !!user.avatarUrl}
                      <div class="avatar">
                        <div class="mask mask-squircle w-12 h-12">
                          <img
                            src={user.avatarUrl}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    {:else}
                      <div class="avatar placeholder">
                        <div class="bg-neutral-focus text-neutral-content rounded-full w-12">
                          <span class="text-xl">K</span>
                        </div>
                      </div>
                    {/if}

                    <div>
                      <div class="font-bold">{user.fullName}</div>
                      <div class="text-sm opacity-50">{user.country}</div>
                    </div>
                  </a>
                </td>
                <td>
                  {user.email}
                  <br />
                  <span class="badge badge-secondary badge-outline  badge-sm">{user.phone}</span>
                </td>
                <td>{user.program}</td>
                <th>{user.platform}</th>
                <th>
                  <div class="dropdown dropdown-end">
                    <button class="btn btn-xs">Action</button>
                    <ul class="dropdown-content menu p-2 shadow-2xl bg-base-100 rounded-box w-52">
                      <li><button>Edit</button></li>
                      <li><button>Delete</button></li>
                    </ul>
                  </div>
                </th>
              </tr>
            {/each}
          </tbody>
          <!-- foot -->
          <tfoot>
            <tr>
              <th />
              <th>Name</th>
              <th>Contact</th>
              <th>Program</th>
              <th>Platform</th>
              <th>Actions</th>
              <th />
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</div>

<input type="checkbox" id="export" class="modal-toggle" />
<label for="export" class="modal cursor-pointer">
  <label class=" modal-box w-5/12 max-w-5xl relative">
    <h3 class="font-bold text-lg mb-4">Export Users</h3>
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
        <button for="export" class="btn">Export</button>
      </div>
    </form>
  </label>
</label>
