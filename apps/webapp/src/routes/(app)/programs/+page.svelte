<script lang="ts">
  import { onMount } from "svelte";
  import type { PageData } from "./$houdini";
  import Filter from "./filter.svelte";
  import { dataList, dataStore } from "$lib/store/query";
  import type { Courses$result } from "$houdini";

  $: data = $dataList as Courses$result["coursesCollection"];
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
                <th>Course Title</th>
                <th>Status</th>
                <th>Program</th>
                <th>Platform</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {#each data.edges as course}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" class="checkbox" />
                    </label>
                  </th>
                  <td>
                    <a href="/programs/{course.node.nodeId}" class="flex items-center space-x-3">
                      {#if !!course.node.thumbnailUrl}
                        <div class="avatar">
                          <div class="mask mask-squircle w-12 h-12">
                            <img
                              src={course.node?.thumbnailUrl}
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
                        <div class="font-bold">{course.node.title}</div>
                        <div class="text-sm opacity-50">{course.node.code || ""}</div>
                      </div>
                    </a>
                  </td>
                  <td class="flex">
                    <span class="badge badge-secondary badge-outline badge-sm">
                      {course.node.status}
                    </span>
                  </td>

                  <td>{course.node.program ?? ""}</td>
                  <th>{course.node.platform ?? ""}</th>
                  <th>
                    <div class="dropdown dropdown-left">
                      <button class="btn btn-xs">Action</button>
                      <ul class="dropdown-content menu p-2 shadow-2xl bg-base-200 rounded-box w-52">
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
                <th>Course Title</th>
                <th>Status</th>
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
