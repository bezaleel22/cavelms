<script lang="ts">
  import CourseCard from "$lib/components/CourseCard.svelte";
  import DonutChart from "$lib/components/DonutChart.svelte";
</script>

<svelte:head>
  <title>Dashboard</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<div class="flex justify-between">
  <div class="flex flex-col">
    <div class="text-xl font-semibold leading-3">My course</div>
    <div class="text-sm breadcrumbs mb-5">
      <ul>
        <li>Home</li>
        <li>Documents</li>
        <li>Add Document</li>
      </ul>
    </div>
  </div>
  <div class="flex space-x-2">
    <button class="btn btn-active">Add User</button>
    <button class="btn btn-primary">Add Course</button>
  </div>
</div>

<div class="grid grid-cols-3 gap-10">
  <div class="col-span-1">
    <div class="card card-normal w-full bg-base-200 shadow-xl">
      <div class="card-body">
        <DonutChart />
      </div>
    </div>
  </div>

  <div class="col-span-1">
    <CourseCard />
  </div>
  <div class="col-span-1">
    <CourseCard />
  </div>
</div>
<div class="flex space-x-2 my-5">
  <div class="text-xl font-semibold leading-3">course</div>
  <div class="text-sm opacity-30 leading-0">By Status</div>
</div>

<div class="grid grid-cols-3 gap-10">
  <div class="col-span-1">
    <a href="/course/sytdf5esgdgdysL">
      <CourseCard />
    </a>
  </div>
  <div class="col-span-1">
    <a href="/course/sytdf5esgdgdysL">
      <CourseCard />
    </a>
  </div>
  <div class="col-span-1">
    <a href="/course/sytdf5esgdgdysL">
      <CourseCard />
    </a>
  </div>
  <div class="col-span-1">
    <a href="/course/sytdf5esgdgdysL">
      <CourseCard />
    </a>
  </div>
  <div class="col-span-1">
    <a href="/course/sytdf5esgdgdysL">
      <CourseCard />
    </a>
  </div>
  <div class="col-span-1">
    <a href="/course/sytdf5esgdgdysL">
      <CourseCard />
    </a>
  </div>
  <div class="col-span-1">
    <a href="/course/sytdf5esgdgdysL">
      <CourseCard />
    </a>
  </div>
  <div class="col-span-1">
    <a href="/course/sytdf5esgdgdysL">
      <CourseCard />
    </a>
  </div>
  <div class="col-span-1">
    <a href="/course/sytdf5esgdgdysL">
      <CourseCard />
    </a>
  </div>
</div>
<div class="flex justify-end mt-5">
  <div class="join">
    <button class="join-item btn bg-base-200">«</button>
    <button class="join-item btn bg-base-200">1</button>
    <button class="join-item btn btn-active">2</button>
    <button class="join-item btn bg-base-200">3</button>
    <button class="join-item btn bg-base-200">»</button>
  </div>
</div>
