<script lang="ts">
  import { enhance } from "$app/forms";
  import Player from "$lib/components/player.svelte";
  import VideoCard from "$lib/components/video_card.svelte";
  import { medias } from "$lib/store/data";
  import { MediaInfo } from "$lib/mediaplayer";

  let mediaId: number | null;
  let isOpen: boolean;
  let checked = false;
  let errorMessage: string;

  type FormInput = {
    data: FormData;
    action: URL;
    form: HTMLFormElement;
    cancel(): void;
  };

  const onSubmit = async ({ form, action, data, cancel }: FormInput) => {
    const url = data.get("url") as string;
    const info = new MediaInfo(url);
    console.log(info);
    
    info.init((info) => {
      const media = {
        title: info.videoDetails.title,
        description: info.videoDetails.shortDescription,
        category: data.get("category") as string,
        mediaType: "VIDEO",
        playerInfo: {
          currentTime: 0,
          duration: Number(info.videoDetails.lengthSeconds),
          posterUrl: info.videoDetails.thumbnail.thumbnails[4].url,
          thumbnailUrl: info.videoDetails.thumbnail.thumbnails[3].url,
        },
        file: {
          name: "youtube.mp4",
          mimetype: "video/mp4",
          encoding: "",
          size: 0,
          url: url,
        },
      };
      $medias = [...$medias, media];
      checked = false;
    });

    cancel();
    return async ({ result, update }: any) => {
      if (result.data?.id && mediaId) {
        const media = $medias[mediaId];
        $medias = [...$medias, media];
        update();
        return;
      }

      if (result.type == "success") {
        form.reset;
        checked = false;
      }

      if (result.data.error == "P2002" && !mediaId) {
        errorMessage = `${data.get("subject")} is already recorded choose another subject`;
      }

      if (result.data.rating) {
        $medias = [...$medias, result.data.media];
      }

      update();
    };
  };

  const startPlayer = (id: number) => {
    mediaId = id;
    isOpen = !isOpen;
    return {
      destroy: () => (mediaId = null),
    };
  };
</script>

<div class="grid grid-flow-row">
  <div class="mb-4 flex justify-end">
    <label for="my-modal" class="btn font-light uppercase sm:font-bold">
      Add Video
      <div class="i-bx:bx-add-to-queue text-xl text-primary ml-2" />
    </label>
  </div>
  <div class="mb-4 flex justify-between md:flex-row flex-wrap">
    {#each $medias as media, i}
      <a href={null} on:click={() => startPlayer(i)}>
        <VideoCard mediaId={i} />
      </a>
    {/each}
  </div>
</div>

{#if mediaId != null}
  <Player bind:isOpen {mediaId} />
{/if}

<input bind:checked type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Add Course Video</h3>
    {#if checked}
      <form action="?/media" method="post" use:enhance={onSubmit}>
        <div class="mt-4 grid grid-cols-4">
          <div class="relative col-span-4 mb-4">
            <select
              name="category"
              id="category"
              class="input input-bordered floating-input peer focus:border-accent-focus"
              placeholder=" "
            >
              <option selected disabled>Choose Category</option>
              <option>Course Video</option>
            </select>
            <label for="subject" class="floating-label peer-focus:text-accent-focus">
              Catigory
            </label>
          </div>
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
          <label for="" class="label mb-4">
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
    {/if}
  </div>
</div>
