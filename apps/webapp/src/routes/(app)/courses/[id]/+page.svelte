<script lang="ts">
	import Assignments from './assignments.svelte';
  import type { PageData } from "./$types";
  import Videos from "./videos.svelte";
  import Documents from "./documents.svelte";
  import Forum from './forum.svelte';
  export let data: PageData;

// $: console.log(data)
</script>


<!-- <div class="i-bx:bxs-file text-6xl text-primary"></div> -->

<!-- hero header -->
<div class="h-24 bg-gradient-to-r from-cyan-500 to-blue-500 md:h-48"></div>

<!-- course brief -->
<div class="p-3 my-5 flex items-center">
  <div class="bg-current p-5 w-36 rounded-full m-5 hidden sm:block">
    <div class="i-bx:bxs-book text-8xl text-primary"></div>
  </div>
  <div>
    <p class="text-3xl font-bold my-3">Introduction to Apologetics</p>
    <p class="text-sm w-full sm:w-96 sm:text-base">This course understudy the basics of Christian Apologetics and how to give a response for the reason you believe what you believe</p>
  </div>
</div>

<!-- TABS -->
<div class="tabs my-8">
  <a href=" " class="tab tab-bordered tab-active lg:mr-10">Overview</a> 
  <a href=" " class="tab tab-bordered lg:mr-10">Videos</a> 
  <a href=" " class="tab tab-bordered lg:mr-10">Documents</a>
  <a href=" " class="tab tab-bordered lg:mr-10">Assignments</a>
  <a href=" " class="tab tab-bordered lg:mr-10">Forum</a>
  <a href=" " class="tab tab-bordered lg:mr-10">Exam</a>
</div>

<!-- overview -->
<div class="stats shadow flex flex-wrap md:flex-nowrap mt-5">
  
  <div class="stat my-3">
    <div class="stat-figure text-primary">
      <div class="i-bx:bxs-video text-3xl text-primary"></div>
    </div>
    <div class="stat-title">Total Videos</div>
    <div class="stat-value text-primary">6 Lectures</div>
    <div class="stat-desc">On-demand Videos, with Pre-requisites</div>
  </div>
  
  <div class="stat my-3">
    <div class="stat-figure text-secondary">
      <div class="i-bx:bxs-file text-3xl text-primary"></div>
    </div>
    <div class="stat-title">Assignments</div>
    <div class="stat-value text-secondary">4 Tasks</div>
    <div class="stat-desc">21% more than last month</div>
  </div>
  
  <div class="stat">
    <div class="stat-figure text-secondary">
    </div>
    <div class="stat-value text-3xl">Rev. Daniel Ogidi</div>
    <div class="stat-title text-light">Course Instructor</div>
    <div class="stat-desc text-secondary">infoinstructor@email.com</div>
  </div>
  
</div>

<div class="overflow-x-auto mt-3 mb-12">
  <table class="table w-full">
    <!-- head -->
    <thead>
      <tr>
        <th></th>
        <th>Modules</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>1</th>
        <td>Introduction</td>
      </tr>
      <tr class="active">
        <th>2</th>
        <td>Fundamentals of Apologetics</td>
      </tr>
      <tr>
        <th>3</th>
        <td>Christian Apologetics</td>
      </tr>
    </tbody>
  </table>
</div>

<!-- Components -->

<Videos />
<!-- <Documents /> -->
<!-- <Assignments /> -->
<!-- <Forum /> -->