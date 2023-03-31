import _ from "lodash-es"
import { Cluster } from "./cluster"
import { VideoInfo } from "./info"

const PROXY_URL = "http://localhost:8888"
const VID_HOST = "www.youtube.com"

export class Stream {
  videoElement: HTMLVideoElement
  mediaSource?: MediaSource
  sourceBuffer?: SourceBuffer
  networkSpeed?: number
  container: HTMLDivElement
  videoId: string

  clusters = []
  renditions = [480]
  rendition = 480
  currentClusters = []
  updating = false
  // clusterFile: any
  finished: boolean

  constructor(videoId: string) {
    this.videoId = videoId
  }

  setState = (state: string) => console.log(state)

  clearUp = () => {
    if (this.videoElement) {
      this.videoElement.remove()
      this.mediaSource = undefined
      this.sourceBuffer = undefined
      this.clusters = []
      this.rendition = 480
      this.networkSpeed = undefined
    }
  }

  initiate = (callback: (media: HTMLElement) => void) => {
    if (!MediaSource) {
      this.setState("Your browser is not supported")
      return
    }

    this.clearUp()
    let isTypeSupported: boolean

    this.setState("Downloading cluster info")
    this.downloadClusterData((format) => {
      isTypeSupported = MediaSource.isTypeSupported(format.mimeType)
      if (!isTypeSupported) return

      this.setState("Creating media source")
      this.mediaSource = new MediaSource() //create the media source
      this.mediaSource.onsourceopen = () => {
        this.setState("Creating source buffer")
        this.createSourceBuffer(format.mimeType) //when the media source is opened create the source buffer
      }
      if (!isTypeSupported) {
        this.setState("Mimetype is not supported")
        return
      }
      let sourceElement = document.createElement("source")
      sourceElement.src = URL.createObjectURL(this.mediaSource)
      this.videoElement = document.createElement("video")
      this.videoElement.appendChild(sourceElement)
      callback(this.videoElement)
    })
  }

  downloadClusterData = (callback) => {
    var xhr = new XMLHttpRequest()

    var url = `${PROXY_URL}/${VID_HOST}/watch?v=${this.videoId}`
    xhr.open("GET", url, true)
    xhr.responseType = "text"

    xhr.send()
    xhr.onload = (e) => {
      let info = new VideoInfo(xhr.response)
      let format = info.getDefaultVideoFormat()
      // console.log(info)
      this.setState("Creating media clusters")
      this.createClusters(format)
      callback(format)
    }
  }

  createClusters = (format) => {
    let diff = format.indexRange.end - format.indexRange.start
    let start = parseInt(format.initRange.end)
    let length = parseInt(format.contentLength)
    let timecode = (format.approxDurationMs * diff) / (length - format.indexRange.end)

    _.each(this.renditions, (rendition) => {
      let cluster = { ...format, isInitCluster: true }
      this.clusters.push(new Cluster(cluster) as never)

      let time = 0
      for (let i = start; i < length; i += diff) {
        cluster = {
          ...format,
          start: i + 1,
          end: i + diff > length ? length : i + diff,
          timeStart: time,
          timeEnd: time + timecode,
          isInitCluster: false,
        }
        time += timecode
        this.clusters.push(new Cluster(cluster) as never)
      }
      // console.log(this.clusters)
    })
  }

  createSourceBuffer = (mimeType: string) => {
    if (this.mediaSource) {
      this.sourceBuffer = this.mediaSource.addSourceBuffer(mimeType)
      this.sourceBuffer.onupdateend = () => {
        this.setState("Flushing buffer queue")
        this.flushBufferQueue(true)
        this.updating = false
      }
      this.sourceBuffer.onerror = (e) => {
        // console.error("An error occurred while flushing buffer queue")
        this.downloadCurrentCluster()
      }
    }

    this.setState("Downloading initial clusters")
    this.downloadInitCluster((isInitCluster) => {
      if (isInitCluster) this.flushBufferQueue()
      this.downloadCurrentCluster()
    })

    this.videoElement.ontimeupdate = () => {
      this.setState("ontimeupdate")
      this.downloadUpcomingClusters()
      //   this.#checkBufferingSpeed()
    }

    this.videoElement.onwaiting = () => {
      this.setState("Waiting for more cluster")
      this.downloadCurrentCluster()
    }

    this.videoElement.onplay = () => {
      // this.downloadCurrentCluster()
    }
    this.videoElement.onerror = () => {
      // console.error(
      //   `Error ${this.videoElement.error.code}; details: ${this.videoElement.error.message}`
      // )
    }
  }

  downloadInitCluster = (callback: (isInitCluster: boolean) => void = () => {}) => {
    let cluster = this.clusters.find(
      (cluster: any) => cluster.isInitCluster == true
    ) as unknown as Cluster
    cluster.download(callback)
  }

  downloadCurrentCluster = () => {
    var currentClusters = _.filter(this.clusters, (cluster: any) => {
      return (
        cluster.timeEnd > this.videoElement.currentTime &&
        cluster.timeEnd < this.videoElement.currentTime + 5
      )
    })

    let done = 0
    if (currentClusters.length > 0) {
      _.each(currentClusters, (nextCluster) => {
        nextCluster.download(() => {
          if (done == currentClusters.length - 1) this.flushBufferQueue(true)
          done++
        })
      })
    } else {
      console.error("Something went wrong with download current cluster")
    }
  }

  flushBufferQueue = (updateEnd = false) => {
    if (this.sourceBuffer?.updating && this.updating) return

    var initCluster = this.clusters.find(
      (cluster: any) => cluster.isInitCluster == true
    ) as unknown as Cluster

    if (initCluster.queued || initCluster.buffered) {
      var bufferQueue = _.filter(this.clusters, (cluster) => {
        return (
          cluster.queued === true &&
          cluster.isInitCluster === false &&
          cluster.rendition === this.rendition
        )
      })

      if (!initCluster.buffered) {
        bufferQueue.unshift(initCluster)
      }
      if (bufferQueue.length) {
        var concatData = this.concatClusterData(bufferQueue)
        _.each(bufferQueue, (bufferedCluster) => {
          bufferedCluster.queued = false
          bufferedCluster.buffered = true
        })
        try {
          this.sourceBuffer?.appendBuffer(concatData)
          this.updating = true
        } catch (e: any) {
          console.error(e.name)
        }
      }
    }
  }

  concatClusterData = (clusterList) => {
    var bufferArrayList = []
    _.each(clusterList, (cluster) => {
      bufferArrayList.push(cluster.data as never)
    })
    var arrLength = 0
    _.each(bufferArrayList, (bufferArray: []) => {
      arrLength += bufferArray.length
    })
    var returnArray = new Uint8Array(arrLength)
    var lengthSoFar = 0
    _.each(bufferArrayList, (bufferArray) => {
      returnArray.set(bufferArray, lengthSoFar)
      lengthSoFar += bufferArray.length
    })
    return returnArray
  }

  downloadUpcomingClusters = () => {
    var nextClusters = _.filter(this.clusters, (cluster) => {
      return (
        cluster.requested === false &&
        cluster.rendition === this.rendition &&
        cluster.timeStart > this.videoElement.currentTime &&
        cluster.timeStart <= this.videoElement.currentTime + 10
      )
    })

    let done = 0
    if (nextClusters.length) {
      this.setState("Buffering ahead")
      _.each(nextClusters, (nextCluster) => {
        nextCluster.download(() => {
          if (done == nextClusters.length - 1) this.flushBufferQueue(true)
          done++
        })
      })
    } else {
      if (
        _.filter(this.clusters, (cluster) => {
          return cluster.requested === false
        }).length === 0
      ) {
        this.setState("Finished buffering whole video")
      } else {
        this.finished = true
        this.setState("Finished buffering ahead")
      }
    }
  }

  checkBufferingSpeed = () => {
    var secondsToDownloadPerByte = this.getDownloadTimePerByte()
    var nextCluster = this.getNextCluster()
    var upcomingBytesPerSecond =
      (nextCluster.byteEnd - nextCluster.byteStart) / (nextCluster.timeEnd - nextCluster.timeStart)
    var estimatedSecondsToDownloadPerSecondOfPlayback =
      secondsToDownloadPerByte * upcomingBytesPerSecond

    var overridenFactor = this.networkSpeed
      ? this.networkSpeed
      : Math.round(estimatedSecondsToDownloadPerSecondOfPlayback * 10000) / 10000

    console.log({ overridenFactor })

    var lowClusters = this.getClustersSorted("180")
    if (lowClusters.length) {
      console.log({ end_180: Math.round(lowClusters[lowClusters.length - 1].timeEnd * 10) / 10 })
      console.log({
        start_180:
          lowClusters[0].timeStart === -1 ? "0.0" : Math.round(lowClusters[0].timeStart * 10) / 10,
      })
    }

    var highClusters = this.getClustersSorted("1080")
    if (highClusters.length) {
      console.log({
        end_1080: Math.round(lowClusters[lowClusters.length - 1].timeEnd * 10) / 10,
      })
      console.log({
        start_1080:
          lowClusters[0].timeStart === -1 ? "0.0" : Math.round(lowClusters[0].timeStart * 10) / 10,
      })
    }

    if (overridenFactor > 0.8) {
      if (this.rendition !== 480) {
        this.switchRendition(480)
      }
    } else {
      //do this if you want to move rendition up automatically
      //if (this.#rendition !== "1080") {
      //    this.#switchRendition("1080")
      //}
    }
  }

  getDownloadTimePerByte() {
    //seconds per byte
    var mapOut = this.downloadTimeMR(
      _.filter(this.clusters, (cluster) => {
        return cluster.queued || cluster.buffered
      })
    )
    var res = mapOut.time / 1000 / mapOut.size
    return res
  }
  // map reduce function to get download time per byte
  downloadTimeMR = _.memoize(
    (downloadedClusters) => {
      return _.chain(
        downloadedClusters
          .map((cluster) => {
            return {
              size: cluster.byteEnd - cluster.byteStart,
              time: cluster.queuedTime - cluster.requestedTime,
            }
          })
          .reduce(
            (memo, datum) => {
              return {
                size: memo.size + datum.size,
                time: memo.time + datum.time,
              }
            },
            { size: 0, time: 0 }
          )
      ).value()
    },
    (downloadedClusters) => {
      return downloadedClusters.length //hash function is the length of the downloaded clusters as it should be strictly increasing
    }
  )

  getNextCluster = () => {
    var unRequestedUpcomingClusters = _.chain(this.clusters)
      .filter((cluster) => {
        return (
          !cluster.requested &&
          cluster.timeStart >= this.videoElement.currentTime &&
          cluster.rendition === this.rendition
        )
      })
      .sortBy((cluster) => {
        return cluster.byteStart
      })
      .value()
    if (unRequestedUpcomingClusters.length) {
      return unRequestedUpcomingClusters[0]
    } else {
      this.setState("Completed video buffering")
      throw new Error("No more upcoming clusters")
    }
  }

  getClustersSorted = (rendition) => {
    return _.chain(this.clusters)
      .filter((cluster) => {
        return (
          cluster.buffered === true &&
          cluster.rendition == rendition &&
          cluster.isInitCluster === false
        )
      })
      .sortBy((cluster) => {
        return cluster.byteStart
      })
      .value()
  }

  switchRendition = (rendition) => {
    this.rendition = rendition
    this.downloadInitCluster()
    this.downloadUpcomingClusters()
    // $("#rendition").val(rendition)
  }
}
