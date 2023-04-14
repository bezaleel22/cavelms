<script lang="ts">
  import Player from "$lib/components/player.svelte";
  import VideoCard from "$lib/components/video_card.svelte";
  import { medias } from "$lib/data";

  let mediaId: string;
  let isOpen: boolean;

  const startPlayer = (id: string) => {
    mediaId = id;
    isOpen = !isOpen;
  };
</script>

<div class="mb-4 flex justify-end">
  <label for="my-modal" class="btn font-light uppercase sm:font-bold">
    Add Video
    <div class="i-bx:bx-add-to-queue text-xl text-primary ml-2" />
  </label>
</div>

<div class="mx-2 mb-4 flex flex-col md:flex-row flex-wrap">
  {#each medias as media}
    <a href={null} on:click={() => startPlayer(media.id)}>
      <VideoCard mediaId={media.id} />
    </a>
  {/each}
</div>

{#if mediaId}
  <Player bind:isOpen {mediaId} />
{/if}


<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Add Course Video</h3>
    <form action="#">
      <div class="mt-4 grid grid-cols-4">
        <div class="relative col-span-4">
          <input
            name="url"
            type="text"
            id="url"
            class=" input input-bordered floating-input peer focus:border-accent-focus"
            placeholder=" "
            required
          />
          <label for="title" class="floating-label peer-focus:text-accent-focus">
            Video Link
          </label>
        </div>
        <label for="" class="label">
          <a
            href="https://www.youtube.com/upload"
            target="_blank"
            class="label-text-alt link link-hover text-primary"
          >
            Go to YouTube
          </a>
        </label>
        <div class="col-span-4">
          <button class="btn float-right">Add</button>
        </div>
      </div>
    </form>
  </div>
</div>
