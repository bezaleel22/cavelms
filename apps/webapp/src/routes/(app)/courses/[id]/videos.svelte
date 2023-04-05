<script lang="ts">
  import { Player } from "$lib/mediaplayer";

  const initPlayer = (node: HTMLVideoElement, params: string) => {
    if (!Player) return;
    // const player = new Player(node, params);
    // player?.init();
  };
</script>

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
