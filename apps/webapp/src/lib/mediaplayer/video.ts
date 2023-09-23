import { browser } from "$app/environment";
import { page } from "$app/stores";
import { get } from "svelte/store";
import { PROXY_URL } from "./constants";
import { MediaInfo } from "./info";
// import RxPlayer from "rx-player";

const VideoPlayer = async () => {
  if (!browser) return;
  const RxPlayer = (await import("rx-player")).default;

  class Player extends RxPlayer {
    video: HTMLVideoElement;
    blob?: Blob;
    info: any;
    src: string;
    constructor(videoElement: HTMLVideoElement, src: string) {
      super({ videoElement, stopAtEnd: false });
      this.video = this.getVideoElement() as HTMLVideoElement;
      this.src = src;
    }

    init = (callback?: (info: any) => void) => {
      const mediaInfo = new MediaInfo(this.src);
      const pageStore = get(page)
      mediaInfo.init((info: any) => {
        let mpd = mediaInfo.getDashManifest(`${pageStore.url.origin}/stream`);
        console.log(mpd);
        this.blob = new Blob([mpd], { type: "application/dash+xml" });
        this.loadVideo({
          url: URL.createObjectURL(this.blob as Blob),
          transport: "dash",
          manualBitrateSwitchingMode: "seamless",
        });
        this.info = info;
        if (callback) callback(info);
      });
    };
  }

  return { Player };
};

export const Player = (await VideoPlayer())?.Player;
