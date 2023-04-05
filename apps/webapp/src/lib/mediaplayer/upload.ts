import { PROXY_URL, URLS } from "./constants";
import { uuidv4 } from "./utils";

export interface Credentials {
  access_token: string;
  refresh_token: string;
  expires: Date;
}

export interface InitialUploadData {
  frontend_upload_id: string;
  upload_id: string;
  upload_url: string;
  scotty_resource_id: string;
  chunk_granularity: string;
}

export interface UploadedVideoMetadata {
  title?: string;
  description?: string;
  privacy?: "PUBLIC" | "PRIVATE" | "UNLISTED";
  is_draft?: boolean;
}

export interface UploadResult {
  status: string;
  scottyResourceId: string;
}

export class VideoPlayer {
  async upload(file: BodyInit, metadata = {}, auth: Credentials) {
    if (!auth.access_token) throw new Error("You must be signed in to perform this operation.");

    let response;
    this.#getInitialUploadData(auth, async (initial_data) => {
      const upload_result = await this.#uploadVideo(auth, initial_data.upload_url, file);
      if (upload_result.status !== "STATUS_SUCCESS") throw new Error("Could not process video.");

      response = await this.#setVideoMetadata(auth, initial_data, upload_result, metadata);
    });

    return response;
  }

  async #getInitialUploadData(auth: Credentials, callback: (data: InitialUploadData) => void) {
    const frontend_upload_id = `innertube_android:${uuidv4}:0:v=3,api=1,cf=3`;

    const payload = {
      frontendUploadId: frontend_upload_id,
      deviceDisplayName: "Pixel 6 Pro",
      fileId: `goog-edited-video://generated?videoFileUri=content://media/external/video/media/${uuidv4()}`,
      mp4MoovAtomRelocationStatus: "UNSUPPORTED",
      transcodeResult: "DISABLED",
      connectionType: "WIFI",
    };

    let xhr = new XMLHttpRequest();
    console.log(`Bearer ${auth.access_token}`);
    let url = `${PROXY_URL}${URLS.YT_UPLOAD}/upload/youtubei`;
    xhr.open("POST", url, true);
    xhr.responseType = "json";
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("x-goog-upload-command", "start");
    xhr.setRequestHeader("x-goog-upload-protocol", "resumable");
    xhr.setRequestHeader("Authorization", `Bearer ${auth.access_token}`);
    xhr.send(JSON.stringify(payload));

    xhr.onload = (e) => {
      console.log(xhr.response);
      let response = {
        frontend_upload_id,
        upload_id: xhr.response.headers.get("x-guploader-uploadid"),
        upload_url: xhr.response.headers.get("x-goog-upload-url"),
        scotty_resource_id: xhr.response.headers.get("x-goog-upload-header-scotty-resource-id"),
        chunk_granularity: xhr.response.headers.get("x-goog-upload-chunk-granularity"),
      };

      callback(response);
    };
  }

  async #uploadVideo(auth: Credentials, upload_url: string, file: BodyInit) {
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
    });

    if (!response.ok) throw new Error("Could not upload video");

    const data = await response.json();

    return data;
  }

  async #setVideoMetadata(
    auth: Credentials,
    initial_data: InitialUploadData,
    upload_result: UploadResult,
    metadata: UploadedVideoMetadata
  ) {
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
    };

    const response = await fetch("/upload/createvideo", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${auth.access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(metadata_payload),
    });

    if (!response.ok) throw new Error("Could not upload video");

    const data = await response.json();
    return data;
  }
}
