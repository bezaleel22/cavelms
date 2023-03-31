<script lang="ts">
  import Breadcrumb from "$lib/common/Breadcrumb.svelte"
  import { Card, CardBody, Col, Container, Row } from "sveltestrap"

  import { browser } from "$app/environment"
  import { page } from "$app/stores"
  import data from "$lib/common/data/projects"
  import TabContent from "$lib/components/tabs/tabContent.svelte"
  import TabNav from "$lib/components/tabs/tabNav.svelte"
  import { _ } from "$lib/helpers/store"
  import AttachedFiles from "./attachedFiles.svelte"
  import Comments from "./comments.svelte"
  import CourseDetail from "./courseDetail.svelte"
  import OverviewChart from "./overviewChart.svelte"
  import VideoList from "./videoList.svelte"

  // $: console.log($page.params.id)
  let active = 1
  let menus: string[] = [
    "Overview",
    "Videos",
    "Documents",
    "Activity",
    "Practicums",
    "Students",
    "Settings",
  ]

  let namedParam: any
  $: if (browser)
    namedParam = $_.menuitems.course.list.find(({ path }) => path.includes($page.params.id))

</script>

{#if !!namedParam}
  <div class="page-content">
    <Container fluid>
      <Breadcrumb title="Course" breadcrumbItem={namedParam.name} />
    </Container>
  </div>
{:else}
  <div class="page-content">
    <Container fluid>
      <Breadcrumb title="Projects" breadcrumbItem="Course Overview" />
      <Row>
        <Col lg="12">
          <Card>
            <CardBody class="pb-1">
              <CourseDetail project={data.projects[$page.params.id]} />
              <hr />
              <TabNav {menus} bind:active />
            </CardBody>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg="12">
          <TabContent bind:active>
            <div slot="id-1">
              <Row>
                <Col lg="4">
                  <OverviewChart />
                </Col>

                <Col lg="4">
                  <AttachedFiles files={data.projects[0].files} />
                </Col>

                <Col lg="4">
                  <Comments comments={data.projects[0].comments} />
                </Col>
              </Row>
            </div>

            <div slot="id-2">
              <Row>
                <Col xl={12} lg={12}>
                  <Card class="p-4">
                    <VideoList />
                  </Card>
                </Col>
              </Row>
            </div>
          </TabContent>
          <!-- <Tabs {menus} {active}>
            <div slot="id-1">
              <Row>
                <Col lg="4">
                  <OverviewChart />
                </Col>

                <Col lg="4">
                  <AttachedFiles files={data.projects[0].files} />
                </Col>

                <Col lg="4">
                  <Comments comments={data.projects[0].comments} />
                </Col>
              </Row>
            </div>

            <div slot="id-2">
              <Row>
                <Col xl={12} lg={12}>
                  <Card class="p-4">
                    <VideoList />
                  </Card>
                </Col>
              </Row>
            </div>
          </Tabs> -->
        </Col>
      </Row>
    </Container>
  </div>
{/if}
