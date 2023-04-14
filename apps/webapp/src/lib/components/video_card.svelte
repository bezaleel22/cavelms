<script lang="ts">
  import { medias } from "$lib/data";

  export let mediaId: string;
  let media = medias.find((media) => media.id == mediaId);
</script>

<div class="card card-normal w-full bg-base-100 shadow-xl mx-2 my-3 md:w-72">
  <img src={media?.playerInfo.thumbnailUrl} alt="thumbnail" class="rounded-xl cursor-pointer"/>
  <div class="card-body">
    <h2 class="card-title">
      Lesson 6
      <div class="badge badge-secondary">NEW</div>
    </h2>
    <p class="text-sm">{media?.title}</p>
    <div class="card-actions justify-end">
      <div class="badge badge-outline">Fashion</div>
      <div class="badge badge-outline">Products</div>
    </div>
  </div>
</div>
