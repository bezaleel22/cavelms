<script lang="ts">
  import { medias } from "$lib/store/data";

  export let mediaId: number;
  let media = $medias[mediaId];
</script>

<div class="card card-normal w-full bg-base-100 shadow-xl md:w-72">
  <img src={media?.playerInfo.thumbnailUrl} alt="thumbnail" class="rounded-xl cursor-pointer" />
  <div class="card-body">
    <h2 class="card-title">
      Lesson 6
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p class="text-sm truncate">{media?.title}</p>
    <div class="flex flex-col w-full">
      <div class="flex justify-between text-sm">
        <span class="opacity-30">Progress</span>
        <span>70%</span>
      </div>
      <progress class="progress progress-info h-1 bg-info bg-opacity-20" value="70" max="100" />
    </div>
  </div>
</div>
