import * as utils from "./utils";
import { DOMParser } from "linkedom";
import type { XMLDocument } from "linkedom/types/xml/document";

const INITIAL_PLAYER_RESPONSE = /\bytInitialPlayerResponse\s*=\s*\{/i;
const PROXY_URL = "http://localhost:8080/stream";
const VID_HOST = "www.youtube.com";
const BASE_URL = "https://www.youtube.com/watch?v=";
const UPLOAD_URL = "https://studio.youtube.com/channel/UCDipfu1a-S7pjQwej0RvNpQ";
export class MediaInfo {
  adaptiveFormats: any[];
  format?: string;
  info?: any;
  url: string;
  #cpn: string = "";

  constructor(url: string) {
    this.url = url;
    this.adaptiveFormats = [];
  }

  init(callback: (info: any) => void) {
    var xhr = new XMLHttpRequest();

    var url = `${PROXY_URL}/${this.url}&hl="en"`;
    xhr.open("GET", url, true);
    xhr.responseType = "text";

    xhr.send();
    xhr.onload = (e) => {
      let info = this.#scrapeVideoInfo(xhr.response);
      this.adaptiveFormats = info.streamingData.adaptiveFormats;
      this.format = info.streamingData.format;
      this.info = info;
      callback(this.info);
    };
  }

  #scrapeVideoInfo = (body: string) => {
    let jsonStr = utils.between(body, INITIAL_PLAYER_RESPONSE, "</script>");
    if (!jsonStr) {
      throw Error(`Could not find player response in watch.html`);
    }
    jsonStr = utils.cutAfterJS(`{${jsonStr}`);
    return utils.parseJSON("watch.html", "player_response", jsonStr);
  };

  getDefaultVideoFormat() {
    return this.adaptiveFormats.find((format: any) => format.itag == 22);
  }

  getDefaultAudioFormat() {
    return this.adaptiveFormats.find((format: any) => format.itag == 22);
  }

  getVideoFormats() {
    let formats = this.adaptiveFormats.filter((format: any) => !!format.qualityLabel);
    return formats.sort((a: any, b: any) => a.bitrate - b.bitrate);
  }

  getAudioFormats() {
    let formats = this.adaptiveFormats.filter((format: any) => !!format.audioQuality);
    return formats.sort((a: any, b: any) => a.bitrate - b.bitrate);
  }

  #el(
    document: XMLDocument,
    tag: string,
    attrs: Record<string, string | undefined>,
    children: Node[] = []
  ) {
    const el = document.createElement(tag);
    for (const [key, value] of Object.entries(attrs)) {
      el.setAttribute(key, value);
    }
    for (const child of children) {
      if (typeof child === "undefined") continue;
      el.appendChild(child as any);
    }
    return el as any;
  }

  getDashManifest(proxUrl = "") {
    if (!this.adaptiveFormats)
      throw new Error(`Streaming data not available (${{ video_id: this.info.id }})`);

    const length = this.adaptiveFormats[0].approxDurationMs / 1000;
    const document = new DOMParser().parseFromString("", "text/xml");
    const period = document.createElement("Period");

    const attrs = {
      xmlns: "urn:mpeg:dash:schema:mpd:2011",
      minBufferTime: "PT1.500S",
      profiles: "urn:mpeg:dash:profile:isoff-main:2011",
      type: "static",
      mediaPresentationDuration: `PT${length}S`,
      "xmlns:xsi": "http://www.w3.org/2001/XMLSchema-instance",
      "xsi:schemaLocation":
        "urn:mpeg:dash:schema:mpd:2011 http://standards.iso.org/ittf/PubliclyAvailableStandards/MPEG-DASH_schema_files/DASH-MPD.xsd",
    };

    document.appendChild(this.#el(document, "MPD", attrs, [period] as any[]));

    this.#generateAdaptationSet(document, period as any, this.adaptiveFormats, proxUrl);

    return `${document}`;
  }

  #generateAdaptationSet(document: XMLDocument, period: Element, formats: any[], proxUrl: string) {
    const mimeTypes: string[] = [];
    const mimeObjects: any[][] = [[]];

    formats.forEach((format) => {
      if (!format.indexRange || !format.initRange) {
        return;
      }
      const mimeType = format.mimeType;
      const mimeTypeIndex = mimeTypes.indexOf(mimeType);
      if (mimeTypeIndex > -1) {
        mimeObjects[mimeTypeIndex].push(format);
      } else {
        mimeTypes.push(mimeType);
        mimeObjects.push([]);
        mimeObjects[mimeTypes.length - 1].push(format);
      }
    });

    for (let i = 0; i < mimeTypes.length; i++) {
      const set = this.#el(document, "AdaptationSet", {
        id: `${i}`,
        mimeType: mimeTypes[i].split(";")[0],
        startWithSAP: "1",
        subsegmentAlignment: "true",
      });
      period.appendChild(set as any);
      mimeObjects[i].forEach((format) => {
        if (format?.qualityLabel) {
          this.#generateRepresentationVideo(document, set, format, proxUrl);
        } else {
          // console.log({ format, mime: format.mimeType })
          this.#generateRepresentationAudio(document, set, format, proxUrl);
        }
      });
    }
  }

  #generateRepresentationVideo(document: XMLDocument, set: Element, format: any, proxUrl: string) {
    // console.log({ mimeType: format.mimeType })
    const codecs = utils.getStringBetweenStrings(format.mimeType, 'codecs="', '"');
    if (!format.indexRange || !format.initRange)
      throw new Error(`Index and init ranges not available, ${{ format: format }}`);

    const url = new URL(format.url);
    url.searchParams.set("cpn", this.#cpn || "");
    let attrs = {
      id: format.itag,
      codecs,
      bandwidth: format.bitrate,
      width: format.width,
      height: format.height,
      maxPlayoutRate: "1",
      frameRate: format.fps,
    };
    console.log({ proxUrl, url: `${proxUrl}/${url.toString()}` });
    let children = [
      this.#el(document, "BaseURL", {}, [
        document.createTextNode(`${proxUrl}/${url.toString()}`),
      ] as any),
      this.#el(
        document,
        "SegmentBase",
        {
          indexRange: `${format.indexRange.start}-${format.indexRange.end}`,
        },
        [
          this.#el(document, "Initialization", {
            range: `${format.initRange.start}-${format.initRange.end}`,
          }),
        ]
      ),
    ];

    set.appendChild(this.#el(document, "Representation", attrs, children));
  }

  #generateRepresentationAudio(document: XMLDocument, set: Element, format: any, proxUrl: string) {
    const codecs = utils.getStringBetweenStrings(format.mimeType, 'codecs="', '"');
    if (!format.indexRange || !format.initRange)
      throw new Error(`Index and init ranges not available, ${{ format: format }}`);

    const url = new URL(format.url);
    url.searchParams.set("cpn", this.#cpn || "");

    set.appendChild(
      this.#el(
        document,
        "Representation",
        {
          id: format.itag,
          codecs,
          bandwidth: format.bitrate,
        },
        [
          this.#el(document, "AudioChannelConfiguration", {
            schemeIdUri: "urn:mpeg:dash:23003:3:audio_channel_configuration:2011",
            value: format.audio_channels || "2",
          }),
          this.#el(document, "BaseURL", {}, [
            document.createTextNode(`${proxUrl}/${url.toString()}`),
          ] as any),
          this.#el(
            document,
            "SegmentBase",
            {
              indexRange: `${format.indexRange.start}-${format.indexRange.end}`,
            },
            [
              this.#el(document, "Initialization", {
                range: `${format.initRange.start}-${format.initRange.end}`,
              }),
            ]
          ),
        ]
      )
    );
  }
}
