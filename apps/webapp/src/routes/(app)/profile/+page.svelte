<script lang="ts">
  import { TabNav, TabPane } from "$lib/components/tabs";
  import Tabs from "$lib/components/tabs.svelte";
  import Activity from "./[id]/activity.svelte";
  import Courses from "./[id]/courses.svelte";
  import Discussion from "./[id]/discussion.svelte";
  import Documents from "./[id]/documents.svelte";
  import Overview from "./[id]/overview.svelte";
  import Registration from "./[id]/registration.svelte";

  let active = 0;
  let items = [
    // { title: "Overview", component: Overview },
    // { title: "Documents", component: Documents },
    // { title: "Courses", component: Courses },
    // { title: "Activity", component: Activity },
    // { title: "Discussions", component: Discussion },
    // { title: "Settings", component: Discussion },
    { title: "Registration", component: Registration },
  ];
</script>

<div class="card w-full bg-base-100 text-neutral-content mb-5">
  <div class="card-body shadow-lg p-6 pb-1">
    <div class="grid grid-cols-12 mb-4">
      <div class="avatar col-span-2">
        <div class="w-44 rounded-xl">
          <img src="https://i.pravatar.cc/150?img=2" alt="" />
        </div>
      </div>
      <div class="flex flex-col col-span-7">
        <div class="font-semibold text-xl mb-2">Max Smith</div>
        <div class="flex opacity-30 mb-8 text-sm font-mono">
          <span class="flex mr-3 justify-center">
            <div class="i-bx:user text-lg leading-2 mr-1 text-primary" />
            <p class="leading-2">Developer</p>
          </span>
          <span class="flex mr-3">
            <div class="i-bx:map text-lg leading-1 mr-1 text-primary" />
            <p class="leading-1">Markudi</p>
          </span>
          <span class="flex mr-3">
            <div class="i-bx:envelope text-lg leading-1 mr-1 text-primary" />
            <p class="">smith@gmail.com</p>
          </span>
        </div>

        <div class="flex">
          <div class="border border-dotted border-opacity-30 mr-4 p-4">
            <span class="flex">
              <div class="i-bx:down-arrow-alt text-lg" />
              <p class="">200</p>
            </span>
            <p class="opacity-30">Developer</p>
          </div>
          <div class="border border-dotted border-opacity-30 mr-4 p-4">
            <span class="flex">
              <div class="i-bx:up-arrow-alt text-lg" />
              <p class="">200</p>
            </span>
            <p class="opacity-30">Developer</p>
          </div>
          <div class="border border-dotted border-opacity-30 mr-4 p-4">
            <span class="flex">
              <div class="i-bx:down-arrow-alt text-lg" />
              <p class="">200</p>
            </span>
            <p class="opacity-30">Developer</p>
          </div>
        </div>
      </div>
      <div class="flex flex-col col-span-3 m-4">
        <div class="btn-group justify-end mb-4">
          <button class="btn btn-active btn-sm">Follow</button>
          <button class="btn btn-sm">Button</button>
          <button class="btn btn-sm">Button</button>
        </div>

        <div class="flex flex-col my-10">
          <div class="flex justify-between">
            <span class="opacity-30">Registration Completion</span>
            <span>70%</span>
          </div>
          <progress class="progress progress-info h-1 bg-info bg-opacity-20" value="70" max="100" />
        </div>
      </div>
    </div>
    <div class="">
      <TabNav bind:active {items} />
    </div>
  </div>
</div>

<TabPane bind:active {items} />
