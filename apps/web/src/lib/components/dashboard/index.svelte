<script lang="ts">
  import { Alert, Card, CardBody, CardTitle, Col, Container, Modal, Row } from "sveltestrap"
  import ActivityComp from "./ActivityComp.svelte"
  import MonthlyEarning from "./MonthlyEarning.svelte"
  import SocialSource from "./SocialSource.svelte"
  import TopCities from "./TopCities.svelte"
  import WelcomeComp from "./WelcomeComp.svelte"
  import { browser } from "$app/environment"
  import Breadcrumbs from "$lib/common/Breadcrumb.svelte"
  import user from "$lib/graphql/user"
  import { auth, userData } from "$lib/helpers/store"
  import { slide } from "svelte/transition"

  let subscribemodal: boolean
  let userdata: any
  let isRef: boolean
  $: userdata = $userData.user

  const togglesubscribemodal = () => (subscribemodal = !subscribemodal)

  const reports = [
    { title: "Completed Courses", iconClass: "bx-copy-alt", description: "0" },
    {
      title: "Pending Courses",
      iconClass: "bx-archive-in",
      description: "0",
    },
    {
      title: "New Converts",
      iconClass: "bx-purchase-tag-alt",
      description: "0",
    },
  ]

  $: if ($userData.user.id) {
    userdata = $userData.user
    setTimeout(() => {
      subscribemodal = userdata.progress >= 100 ? false : true
    }, 1000)
  }

  $: if (browser && !$userData.user?.id) getUserData($auth.cred?.id)

  const getUserData = async (id: string) => {
    const resp = await user.query("user", { id })
    if (resp?.data?.user?.progress < 100) {
      subscribemodal = true
    }
  }

  let alert = false
  const toggleRefereeModal = () => (isRef = !isRef)
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumbs title="Home" breadcrumbItem="Dashboard" />
    {#if alert}
      <div transition:slide={{ duration: 500 }}>
        <Alert color="info" class="alert-dismissible fade show mb-4" role="alert">
          <div class="d-flex">
            <i class="mdi mdi-alert-circle-outline me-2 fs-1" />
            <p class="my-auto">
              A maximum of two referees are reqiured, please click on
              <button on:click={toggleRefereeModal} class="btn btn-link alert-link p-0"
                >Add Referee</button
              >
              to add another referee in order to complete your Adullam Application
            </p>
          </div>
        </Alert>
      </div>
    {/if}
    <Row>
      <Col xl="4">
        <WelcomeComp />
        <MonthlyEarning />
      </Col>
      <Col xl="8">
        <Row>
          {#each reports as report}
            <Col md="4">
              <Card class="mini-stats-wid">
                <CardBody>
                  <div class="d-flex">
                    <div class="flex-grow-1">
                      <p class="text-muted fw-medium">
                        {report.title}
                      </p>
                      <h4 class="mb-0">{report.description}</h4>
                    </div>
                    <div
                      class="mini-stat-icon avatar-sm rounded-circle bg-primary align-self-center"
                    >
                      <span class="avatar-title">
                        <i class={"bx " + report.iconClass + " font-size-24"} />
                      </span>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          {/each}
        </Row>

        <Card>
          <CardBody>
            <div class="d-sm-flex flex-wrap">
              <CardTitle class="card-title mb-4 h4">Lecture Attended</CardTitle>
              <div class="ms-auto">
                <ul class="nav nav-pills">
                  <li class="nav-item">
                    <a class="nav-link" href="/">Week</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link" href="/">Month</a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" href="/">Year</a>
                  </li>
                </ul>
              </div>
            </div>
            <div class="clearfix" />
            <!-- <StackedColumnChart /> -->
          </CardBody>
        </Card>
      </Col>
    </Row>

    <Row>
      <Col xl="4">
        <SocialSource />
      </Col>
      <Col xl="4">
        <ActivityComp />
      </Col>
      <Col xl="4">
        <TopCities />
      </Col>
    </Row>
    <Row>
      <Col lg="12">
        <!-- <LatestTranaction /> -->
      </Col>
    </Row>
  </Container>
</div>

<Modal
  isOpen={subscribemodal}
  toggle={togglesubscribemodal}
  role="dialog"
  autoFocus={true}
  centered
>
  <div class="modal-content">
    <div class="modal-header border-bottom-0">
      <button
        type="button"
        class="btn-close"
        on:click={togglesubscribemodal}
        data-bs-dismiss="modal"
        aria-label="Close"
      />
    </div>
    <div class="modal-body">
      <div class="text-center mb-4">
        <div class="row justify-content-center">
          <div class="col-xl-10">
            <div class="my-auto">
              <div class="text-center">
                <div class="avatar-md mx-auto">
                  <div class="avatar-title rounded-circle bg-light">
                    <i class="bx bx-mail-send h1 mb-0 text-primary" />
                  </div>
                </div>
                <div class="p-2 mt-4">
                  <h4>Welcome to Adullam!</h4>
                  <p class="text-muted">
                    You are required to complete the application form before you can be considered
                    for admission, click the <span class="text-primary">Get Started</span>
                    button below to start the application process.
                  </p>
                  <div class="mt-4">
                    <a href="account" class="btn btn-success"> Get started </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</Modal>
