import { browser } from "$app/environment";
import { PROXY_URL } from "./constants";
import { MediaInfo } from "./info";

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

    init = () => {
      const mediaInfo = new MediaInfo(this.src);
      mediaInfo.init((info: any) => {
        let mpd = mediaInfo.getDashManifest(PROXY_URL);
        this.blob = new Blob([mpd], { type: "application/dash+xml" });
        this.loadVideo({
          url: URL.createObjectURL(this.blob as Blob),
          transport: "dash",
          manualBitrateSwitchingMode: "seamless",
        });
        this.info = info;
      });
    };
  }

  return { Player };
};

export const Player = (await VideoPlayer())?.Player;
