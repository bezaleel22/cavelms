<script lang="ts">
  import { Player } from "$lib/mediaplayer";

  const initPlayer = (node: HTMLVideoElement, params: string) => {
    if (!Player) return;
    const player = new Player(node, params);
    // player?.init();
  };
</script>

<div>
  <!-- ADD VIDEO -->
  <div class="flex align-end justify-between my-2 md:p-2 md:pr-10">
    <h1 class="text-lg my-5 font-bold sm:text-xl">COURSE VIDEOS</h1>
    <!-- <p class="font-bold uppercase mx-2">Create Course</p> -->
    <label for="my-modal" class="btn font-light uppercase mx-2 sm:font-bold">
      Add Video
      <div class="i-bx:bxs-add-to-queue text-xl text-primary mx-2 sm:text-3xl" />
    </label>
  </div>
</div>

<div class="mx-2 mb-12 flex flex-col md:flex-row flex-wrap">
  <div class="mx-2 my-3 card w-full bg-base-100 shadow-xl md:w-72 cursor-pointer">
    <video use:initPlayer={"https://www.youtube.com/watch?v=aqz-KE-bpKQ"}>
      <track kind="captions" />
    </video>
    <div class="card-body">
      <h2 class="card-title">
        Lesson 6
        <div class="badge badge-secondary">NEW</div>
      </h2>
      <p class="text-sm">Introduction to Apologetics</p>
    </div>
  </div>
</div>

<!-- The Create Course Modal. Put this part before </body> tag -->

<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Create A New Course</h3>

    <form action="#">
      <div class="mt-4 grid grid-cols-4">
        <!-- input -->
        <div class="relative col-span-4 sm:col-span-2 mr-2 mb-4">
          <input
            name="title"
            type="text"
            id="title"
            class=" input input-bordered floating-input peer focus:border-accent-focus"
            placeholder=" "
            required
          />
          <label for="title" class="floating-label peer-focus:text-accent-focus">
            Video Title
          </label>
        </div>
        <!-- end of input -->

        <!-- input -->
        <div class="relative col-span-4 sm:col-span-2 mr-2 mb-4">
          <input
            name="category"
            type="text"
            id="category"
            class=" input input-bordered floating-input peer focus:border-accent-focus"
            placeholder=" "
            required
          />
          <label for="category" class="floating-label peer-focus:text-accent-focus">
            Video Category
          </label>
        </div>
        <!-- end of input -->

        <!-- input -->
        <textarea
          class="textarea textarea-bordered col-span-4 sm:col-span-4 mr-2 mb-4"
          name="description"
          id="description"
          placeholder="Video Description"
        />
        <!-- end of input -->

        <div class="relative col-span-4 sm:col-span-4 mr-2 mb-4">
          <div class="form-control w-full max-w-xs">
            <!-- svelte-ignore a11y-label-has-associated-control -->
            <label class="label"><span class="label-text">Select Lesson Video</span></label>
            <input
              type="file"
              name="coverImageUrl"
              class="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
        </div>
        <!-- end of input -->
      </div>

      <div class="modal-action">
        <button class="btn">Create</button>
        <label for="my-modal" class="btn">Cancel</label>
      </div>
    </form>
  </div>
</div>
