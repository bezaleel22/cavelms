<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
  import { TabNav, TabPane } from "$lib/components/tabs";
  import type { Course$result } from "$houdini";
  import { dataStore } from "$lib/store/data";

  let titles = ["overview", "videos", "documents", "exercise", "quizzes", "documents", "forum"];
  let active = titles.indexOf($page.url.pathname.split("/").pop() as string);

  export let form: FormData;
  $: if (browser) console.log(form);

  $: course = $dataStore as Course$result["node"];
</script>

<div class="card w-full bg-base-200 text-neutral-content mb-5">
  <div class="card-body shadow-lg p-6 pb-1">
    <div class="grid grid-cols-12 mb-4">
      <div class="avatar col-span-2">
        <div class="w-44 rounded-xl">
          <img src="https://www.adullam.ng/media/category/category3.jpg" alt="" />
        </div>
      </div>
      <div class="flex flex-col col-span-6">
        <div class="flex space-x-5">
          <div class="font-semibold text-xl">{course?.title}</div>
          <div class="badge badge-outline my-auto badge-primary">{course?.status}</div>
        </div>
        <div class="mb-3">
          {course?.code}
        </div>

        <div class="flex opacity-30 mb-8 text-sm font-mono">
          <span class="flex mr-3 justify-center">
            <p class="leading-2">{course?.shortDescription}</p>
          </span>
        </div>

        <div class="flex space-x-6">
          <div class="border border-dotted border-base-content border-opacity-30 rounded p-3">
            <p>{new Date(course?.startDate || "").toDateString()}</p>
            <p class="text-sm opacity-30">Start Date</p>
          </div>
          <div class="border border-dotted border-base-content border-opacity-30 rounded p-2">
            <p>{new Date(course?.dueDate || "").toDateString()}</p>
            <p class="text-sm opacity-30">Due Date</p>
          </div>
          <div class="border border-dotted border-base-content border-opacity-30 rounded p-2">
            <p>{new Date(course?.dueDate || "").toDateString()}</p>
            <p class="text-sm opacity-30">End Date</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col col-span-4 justify-between">
        <div class="flex justify-end space-x-2">
          <button class="btn btn-active btn-sm">Add Target</button>
          <button class="btn btn-sm btn-primary">Add User</button>
          <div class="dropdown dropdown-end">
            <button class="btn btn-sm">
              <div class="i-bx:dots-horizontal-rounded text-xl" />
            </button>
            <ul class="dropdown-content z-[1] menu p-2 shadow bg-neutral m-3 rounded-box w-52">
              <li><button>Item 1</button></li>
              <li><button>Item 2</button></li>
            </ul>
          </div>
        </div>

        <div class="avatar-group justify-end -space-x-6">
          <div class="avatar">
            <div class="w-16">
              <img src="https://i.pravatar.cc/150?img=2" alt="" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-16">
              <img src="https://i.pravatar.cc/150?img=3" alt="" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-16">
              <img src="https://i.pravatar.cc/150?img=4" alt="" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-16">
              <img src="https://i.pravatar.cc/150?img=5" alt="" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-16">
              <img src="https://i.pravatar.cc/150?img=6" alt="" />
            </div>
          </div>
          <div class="avatar">
            <div class="w-16">
              <img src="https://i.pravatar.cc/150?img=6" alt="" />
            </div>
          </div>
          <a href=" ">
            <div class="avatar placeholder">
              <div class="w-16 bg-neutral-focus text-neutral-content">
                <span>+10</span>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div class="divider" />
    <div class="">
      <TabNav bind:active {titles} />
    </div>
  </div>
</div>

<TabPane let:active>
  <div class="p-6">
    <slot />
  </div>
</TabPane>
