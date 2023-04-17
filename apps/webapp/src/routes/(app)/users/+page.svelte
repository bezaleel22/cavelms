<div class="dropdown">
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label tabindex="0" class="btn m-1">Click</label>
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <div
    tabindex="0"
    class="dropdown-content card card-compact w-64 p-2 shadow bg-primary text-primary-content"
  >
    <div class="card-body">
      <h3 class="card-title">Card title!</h3>
      <p>you can use any element as a dropdown.</p>
    </div>
  </div>
</div>

<div class="card w-full bg-base-100 text-neutral-content">
  <div class="card-body items-center text-center">
    <div class="grid grid-flow-row w-full">
      <div class="mb-4 flex justify-between">
        <div class="form-control">
          <input type="text" placeholder="Search" class="input input-bordered" />
        </div>
        <div class="btn-group btn-group-vertical lg:btn-group-horizontal">
          <div class="dropdown dropdown-bottom dropdown-end m-1">
            <button tabindex="0" class="btn btn-primary">
              <span class="i-bx:filter-alt text-lg mr-1" />
              Filter
            </button>
            <div
              tabindex="0"
              class="dropdown-content card card-compact w-64 p-2 shadow-2xl bg-base-100"
            >
              <div class="card-body">
                <h3 class="card-title">Card title!</h3>
                <p>you can use any element as a dropdown.</p>
              </div>
            </div>
          </div>

          <button class="btn m-1"><span class="i-bx:export text-lg mr-1" />Export</button>
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
