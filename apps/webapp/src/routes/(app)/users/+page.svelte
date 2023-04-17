<script>
  import { enhance } from "$app/forms";
  import UserFilter from "$lib/components/user_filter.svelte";
  let checked = false;
</script>

<div class="card w-full bg-base-100 text-neutral-content">
  <div class="card-body items-center text-center">
    <div class="grid grid-flow-row w-full">
      <div class="mb-4 flex justify-between">
        <div class="form-control">
          <input type="text" placeholder="Search" class="input input-bordered" />
        </div>
        <div class="btn-group btn-group-vertical lg:btn-group-horizontal">
          <div class="dropdown dropdown-bottom dropdown-end m-1">
            <button class="btn btn-primary">
              <span class="i-bx:filter-alt text-lg mr-1" />
              Filter
            </button>
            <div class="dropdown-content card card-compact w-80 p-2 shadow-2xl bg-base-100">
              <UserFilter />
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
              <th>Job</th>
              <th>Favorite Color</th>
              <th />
            </tr>
          </thead>
          <tbody>
            <!-- row 1 -->
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.pravatar.cc/150?img=1"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Hart Hagerty</div>
                    <div class="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>
              <td>
                Zemlak, Daniel and Leannon
                <br />
                <span class="badge badge-ghost badge-sm">Desktop Support Technician</span>
              </td>
              <td>Purple</td>
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            <!-- row 2 -->
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.pravatar.cc/150?img=1"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Brice Swyre</div>
                    <div class="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>
                Carroll Group
                <br />
                <span class="badge badge-ghost badge-sm">Tax Accountant</span>
              </td>
              <td>Red</td>
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            <!-- row 3 -->
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.pravatar.cc/150?img=3"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Marjy Ferencz</div>
                    <div class="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>
                Rowe-Schoen
                <br />
                <span class="badge badge-ghost badge-sm">Office Assistant I</span>
              </td>
              <td>Crimson</td>
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
            <!-- row 4 -->
            <tr>
              <th>
                <label>
                  <input type="checkbox" class="checkbox" />
                </label>
              </th>
              <td>
                <div class="flex items-center space-x-3">
                  <div class="avatar">
                    <div class="mask mask-squircle w-12 h-12">
                      <img
                        src="https://i.pravatar.cc/150?img=4"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div class="font-bold">Yancy Tear</div>
                    <div class="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>
                Wyman-Ledner
                <br />
                <span class="badge badge-ghost badge-sm">Community Outreach Specialist</span>
              </td>
              <td>Indigo</td>
              <th>
                <button class="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          </tbody>
          <!-- foot -->
          <tfoot>
            <tr>
              <th />
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th />
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  </div>
</div>

<input bind:checked type="checkbox" id="export" class="modal-toggle" />
<label for="export" class="modal cursor-pointer">
  <div class="modal-box w-5/12 max-w-5xl">
    <h3 class="font-bold text-lg mb-4">Export Users</h3>
    <form action="" use:enhance>
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
  </div>
</label>
