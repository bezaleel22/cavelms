<script lang="ts">
  import { medias } from "$lib/data";
  import { Player } from "$lib/mediaplayer";

  export let mediaId: string | null;
  export let isOpen: boolean;

  const initPlayer = (node: HTMLVideoElement) => {
    let media = medias.find((media) => media.id == mediaId);
    if (!Player || !media) return;
    const player = new Player(node, media.file.url);
    player.video.poster = media.playerInfo.posterUrl;
    player?.init();

    return {
      destroy: () => player.dispose(),
    };
  };
</script>

<input bind:checked={isOpen} type="checkbox" id="player-modal" class="modal-toggle" />
<label for="player-modal" class="modal">
  <div class="modal-box w-11/12 max-w-3xl max-h-screen">
    {#if isOpen}
      <video autoplay controls class="artboard artboard-horizontal phone-5" use:initPlayer>
        <track kind="captions" />
      </video>
    {/if}
  </div>
</label>
