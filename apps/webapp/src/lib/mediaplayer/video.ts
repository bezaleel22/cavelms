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
    thumbnails?: any[];
    constructor(videoElement: HTMLVideoElement, source: string) {
      super({ videoElement, stopAtEnd: false });
      this.video = this.getVideoElement() as HTMLVideoElement;
      this.video.muted = true;

      const mediaInfo = new MediaInfo(source);
      mediaInfo.init((info: any) => {
        let mpd = mediaInfo.getDashManifest(PROXY_URL);
        this.blob = new Blob([mpd], { type: "application/dash+xml" });
        this.info = info;
        this.thumbnails = info.videoDetails.thumbnail.thumbnails;
        if (this.thumbnails) this.video.poster = this.thumbnails[1].url;
      });
    }

    init = () => {
      this.loadVideo({
        url: URL.createObjectURL(this.blob as Blob),
        transport: "dash",
        manualBitrateSwitchingMode: "seamless",
      });
    };

    setThumbnail = (width: 720 | 1920 | 336 | 168 | 196 | 246) => {
      if (!this.thumbnails) return;
      const thumbnail = this.thumbnails.find((thumbnail) => thumbnail.width === width);
      this.video.poster = thumbnail.url;
    };
  }

  return { Player };
};

export const Player = (await VideoPlayer())?.Player;
