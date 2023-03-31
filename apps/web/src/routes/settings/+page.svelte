<script lang="ts">
  import { browser } from "$app/environment"
  import { goto } from "$app/navigation"
  import { page } from "$app/stores"
  import Breadcrumb from "$lib/common/Breadcrumb.svelte"
  import { Oauth2 } from "$lib/helpers/store"
  import { Video } from "$lib/mediaplayer"
  import { VideoInfo } from "$lib/mediaplayer/info"
  import { onMount } from "svelte"
  import { Col, Container, Row } from "sveltestrap"
  import { Innertube } from "youtubei.js/bundle/browser"

  let video: HTMLDivElement
  let interval: any

  onMount(async () => {
    const events = new EventSource("/api/user123")
    events.onmessage = (event) => {
      console.log(JSON.parse(event.data))
    }
  })

  const handlFileSelected = (e) => {
    let file = e.target.files[0]
    let reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onload = async (e: any) => {
      let buffer = reader.result as ArrayBuffer
      const player = new Video("41hv2tW5Lc4")
      player.upload(
        buffer,
        {
          title: "Wow!",
          description: new Date().toString(),
          privacy: "UNLISTED",
        },
        $Oauth2
      )
    }
  }
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Youtube" breadcrumbItem="API Demo" />
    <Row>
      <Col lg="12" class="mx-auto">
        <div class="form-group form-floating">
          <input type="file" class="form-control" on:change={handlFileSelected} />
          <label for="fullname">Upload File</label>
        </div>
        <div class="ratio ratio-16x9" bind:this={video} />
      </Col>
    </Row>
  </Container>
</div>
