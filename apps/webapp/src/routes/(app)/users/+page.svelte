<script lang="ts">
  import { onMount } from "svelte";
  import Filter from "./filter.svelte";
  import { dataList, dataStore } from "$lib/store/query";
  import type { Users$result } from "$houdini";

  $: data = $dataList as Users$result["usersCollection"];
  onMount(() => {
    // console.log({ edges });
  });
</script>

<div class="card w-full bg-base-100 text-neutral-content">
  <div class="card-body items-center text-center">
    <div class="grid grid-flow-row w-full">
      <Filter />

      {#if data?.edges}
        <div class="overflow-x-auto">
          <table class="table w-full">
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
              {#each data?.edges as user}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </th>
                  <td>
                    <a href="/users/{user.node.id}" class="flex items-center space-x-3">
                      {#if !!user.node.avatarUrl}
                        <div class="avatar">
                          <div class="mask mask-squircle w-12 h-12">
                            <img src={user.node?.avatarUrl} alt="Avatar Tailwind CSS Component" />
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
                        <div class="font-bold">{user.node.fullName}</div>
                        <div class="text-sm opacity-50">{user.node.country || ""}</div>
                      </div>
                    </a>
                  </td>
                  <td>
                    {user.node.email}
                    <br />
                    {#if user.node.phone}
                      <span class="badge badge-secondary badge-outline badge-sm">
                        {user.node.phone}
                      </span>
                    {/if}
                  </td>

                  <td>{user.node.enrollments?.program ?? ""}</td>
                  <th>{user.node.enrollments?.platform ?? ""}</th>
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
      {/if}
    </div>
  </div>
</div>
