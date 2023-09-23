<script lang="ts">
  import CourseCard from "$lib/components/CourseCard.svelte";
  import type { Courses$result } from "$houdini";
  import { dataList } from "$lib/store/data";

  $: data = $dataList as Courses$result["coursesCollection"];
</script>

{#if data?.edges}
  <div class="grid grid-cols-3 gap-10">
    {#each data?.edges as course}
      <div class="col-span-1">
        <a href="/programs/{course.node.nodeId}">
          <CourseCard />
        </a>
      </div>
    {/each}

    <!-- <div class="col-span-1">
    <a href="/programs/sytdf5esgdgdysL">
      <CourseCard />
    </a>
  </div>
  <div class="col-span-1">
    <a href="/programs/sytdf5esgdgdysL">
      <CourseCard />
    </a>
  </div>
  <div class="col-span-1">
    <a href="/programs/sytdf5esgdgdysL">
      <CourseCard />
    </a>
  </div>
  <div class="col-span-1">
    <a href="/programs/sytdf5esgdgdysL">
      <CourseCard />
    </a>
  </div>
  <div class="col-span-1">
    <a href="/programs/sytdf5esgdgdysL">
      <CourseCard />
    </a>
  </div>
  <div class="col-span-1">
    <a href="/programs/sytdf5esgdgdysL">
      <CourseCard />
    </a>
  </div>
  <div class="col-span-1">
    <a href="/programs/sytdf5esgdgdysL">
      <CourseCard />
    </a>
  </div>
  <div class="col-span-1">
    <a href="/programs/sytdf5esgdgdysL">
      <CourseCard />
    </a>
  </div> -->
  </div>
  <!-- <div class="flex justify-end mt-5">
  <div class="join">
    <button class="join-item btn bg-base-200">«</button>
    <button class="join-item btn bg-base-200">1</button>
    <button class="join-item btn btn-active">2</button>
    <button class="join-item btn bg-base-200">3</button>
    <button class="join-item btn bg-base-200">»</button>
  </div>
</div> -->
{/if}
