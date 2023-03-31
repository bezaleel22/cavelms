import { VideoInfo } from "./info"
import RxPlayer from "rx-player"

const PROXY_URL = "http://localhost:8888/"
const uuidv4 = () => (Math.random() * 1e32).toString(36)

const URLS = Object.freeze({
  YT_BASE: "https://www.youtube.com",
  YT_MUSIC_BASE: "https://music.youtube.com",
  YT_SUGGESTIONS: "https://suggestqueries.google.com/complete/",
  YT_UPLOAD: "https://upload.youtube.com/",
  API: Object.freeze({
    BASE: "https://youtubei.googleapis.com",
    PRODUCTION_1: "https://www.youtube.com/youtubei/",
    PRODUCTION_2: "https://youtubei.googleapis.com/youtubei/",
    STAGING: "https://green-youtubei.sandbox.googleapis.com/youtubei/",
    RELEASE: "https://release-youtubei.sandbox.googleapis.com/youtubei/",
    TEST: "https://test-youtubei.sandbox.googleapis.com/youtubei/",
    CAMI: "http://cami-youtubei.sandbox.googleapis.com/youtubei/",
    UYTFE: "https://uytfe.sandbox.google.com/youtubei/",
  }),
})

export class VideoPlayer {
  videoElement: HTMLVideoElement
  sourceElement: HTMLSourceElement
  audioElement: HTMLAudioElement
  videoId: string
  url: string
  player: any

  constructor(videoId: string) {
    this.videoId = videoId
    this.player = new RxPlayer({ stopAtEnd: false })
    this.videoElement = this.player.getVideoElement()
    this.videoElement.controls = true
    this.videoElement.muted = true
  }

  init = (container: HTMLDivElement) => {
    const videoInfo = new VideoInfo(this.videoId)
    videoInfo.init(async (info: VideoInfo) => {
      let mpd = info.getDashManifest(PROXY_URL)
      let blob = new Blob([mpd], { type: "application/dash+xml" })
      this.url = URL.createObjectURL(blob)

      this.player.loadVideo({
        url: this.url,
        transport: "dash",
        manualBitrateSwitchingMode: "seamless",
      })
      container.appendChild(this.videoElement)
    })
  }

  async upload(file: BodyInit, metadata = {}, auth: any) {
    if (!auth.access_token) throw new Error("You must be signed in to perform this operation.")

    let response
    this.#getInitialUploadData(auth, async (initial_data) => {
      const upload_result = await this.#uploadVideo(auth, initial_data.upload_url, file)
      if (upload_result.status !== "STATUS_SUCCESS") throw new Error("Could not process video.")

      response = await this.#setVideoMetadata(auth, initial_data, upload_result, metadata)
    })

    return response
  }

  async #getInitialUploadData(auth, callback) {
    const frontend_upload_id = `innertube_android:${uuidv4}:0:v=3,api=1,cf=3`

    const payload = {
      frontendUploadId: frontend_upload_id,
      deviceDisplayName: "Pixel 6 Pro",
      fileId: `goog-edited-video://generated?videoFileUri=content://media/external/video/media/${uuidv4()}`,
      mp4MoovAtomRelocationStatus: "UNSUPPORTED",
      transcodeResult: "DISABLED",
      connectionType: "WIFI",
    }

    var xhr = new XMLHttpRequest()
    console.log(`Bearer ${auth.access_token}`)
    var url = `${PROXY_URL}${URLS.YT_UPLOAD}/upload/youtubei`
    xhr.open("POST", url, true)
    xhr.responseType = "json"
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
    xhr.setRequestHeader("x-goog-upload-command", "start")
    xhr.setRequestHeader("x-goog-upload-protocol", "resumable")
    xhr.setRequestHeader("Authorization", `Bearer ${auth.access_token}`)
    xhr.send(JSON.stringify(payload))

    xhr.onload = (e) => {
      console.log(xhr.response)
      let response = {
        frontend_upload_id,
        upload_id: xhr.response.headers.get("x-guploader-uploadid"),
        upload_url: xhr.response.headers.get("x-goog-upload-url"),
        scotty_resource_id: xhr.response.headers.get("x-goog-upload-header-scotty-resource-id"),
        chunk_granularity: xhr.response.headers.get("x-goog-upload-chunk-granularity"),
      }

      // callback(response)
    }
  }

  async #uploadVideo(auth, upload_url: string, file: BodyInit) {
    const response = await fetch(upload_url, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth.access_token}`,
        "Content-Type": "application/x-www-form-urlencoded",
        "x-goog-upload-command": "upload, finalize",
        "x-goog-upload-file-name": `file-${Date.now()}`,
        "x-goog-upload-offset": "0",
      },
      body: file,
    })

    if (!response.ok) throw new Error("Could not upload video")

    const data = await response.json()

    return data
  }

  async #setVideoMetadata(auth, initial_data: any, upload_result: any, metadata) {
    const metadata_payload = {
      resourceId: {
        scottyResourceId: {
          id: upload_result.scottyResourceId,
        },
      },
      frontendUploadId: initial_data.frontend_upload_id,
      initialMetadata: {
        title: {
          newTitle: metadata.title || new Date().toDateString(),
        },
        description: {
          newDescription: metadata.description || "",
          shouldSegment: true,
        },
        privacy: {
          newPrivacy: metadata.privacy || "PRIVATE",
        },
        draftState: {
          isDraft: metadata.is_draft || false,
        },
      },
    }

    const response = await fetch("/upload/createvideo", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(metadata_payload),
    })

    if (!response.ok) throw new Error("Could not upload video")

    const data = await response.json()
    return data
  }
}
