import type { Stream } from "./stream"
const PROXY_URL = "http://localhost:8888"

export class Cluster {
  byteStart: number
  byteEnd: number
  timeStart: number
  timeEnd: number
  isInitCluster: boolean
  fileUrl: string
  rendition: any

  queuedTime: number
  requestedTime: number
  data: Uint8Array //cluster data from vid file
  requested: boolean
  queued: boolean
  buffered: boolean

  constructor(opts: any) {
    this.byteStart = opts.start || parseInt(opts.initRange.start) //byte range start inclusive
    this.byteEnd = opts.end || parseInt(opts.initRange.end) //byte range end exclusive
    this.timeStart = opts.timeStart >= 0 ? opts.timeStart / 1000 : -1 //timecode start inclusive
    this.timeEnd = opts.timeEnd ? opts.timeEnd / 1000 : 0 //exclusive
    this.isInitCluster = opts.isInitCluster
    this.fileUrl = `${PROXY_URL}/${opts.url}`
    this.rendition = opts.height
    this.requested = false //cluster download has started
    this.queued = false //cluster has been downloaded and queued to be appended to source buffer
    this.buffered = false //cluster has been added to source buffer
  }

  instance = () => this
  

  download = (callback) => {
    this.requested = true
    this.requestedTime = new Date().getTime()
    this.getClusterData(() => {
      if (callback) {
        callback(this.isInitCluster)
      }
    }, 5)
  }

  makeCacheBuster = () => {
    var text = ""
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
    for (var i = 0; i < 10; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length))
    return text
  }

  getClusterData = (callback, retryCount) => {
    let xhr = new XMLHttpRequest()
    if (retryCount) {
      this.fileUrl += "?v=" + this.makeCacheBuster()
    }
    xhr.open("GET", this.fileUrl, true)
    xhr.responseType = "arraybuffer"
    xhr.timeout = 6000
    xhr.setRequestHeader("Range", "bytes=" + this.byteStart + "-" + this.byteEnd)
    xhr.send()
    xhr.onload = () => {
      if (xhr.status !== 206 && xhr.status !== 304) {
        console.error("media: Unexpected status code " + xhr.status)
        return false
      }
      this.data = new Uint8Array(xhr.response)
      this.queued = true
      this.queuedTime = new Date().getTime()
      callback()
      return
    }
    xhr.ontimeout = () => {
      var retryAmount = !retryCount ? 0 : retryCount
      if (retryCount == 2) {
        console.error("Given up downloading")
      } else {
        this.getClusterData(callback, retryCount++)
      }
    }
  }
}
