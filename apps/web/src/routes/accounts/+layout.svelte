<script lang="ts">
  import { browser } from "$app/environment"
  import profileImg from "$lib/assets/images/profile-img.png"
  import Breadcrumb from "$lib/common/Breadcrumb.svelte"
  import Referee from "$lib/components/ApplicationForm/Referee.svelte"
  import SpiritBackground from "$lib/components/ApplicationForm/SpiritBackground.svelte"
  import MiniStats from "$lib/components/MiniStats.svelte"
  import Tabs from "$lib/components/Tabs.svelte"
  import Wizard from "$lib/components/Wizard.svelte"
  import user from "$lib/graphql/user"
  import { auth, userData } from "$lib/helpers/store"
  import type { Profile } from "$lib/interface/user_interface"
  import { onMount } from "svelte"
  import { fade, fly, scale, slide } from "svelte/transition"
  import { Alert, Card, CardBody, CardTitle, Col, Container, Modal, Row } from "sveltestrap"
  import Education from "$lib/components/ApplicationForm/Education.svelte"
  import HealthInfo from "$lib/components/ApplicationForm/HealthInfo.svelte"
  import PersonalInfo from "$lib/components/ApplicationForm/PersonalInfo.svelte"
  import Document from "$lib/components/Account/Document.svelte"
  import Overview from "$lib/components/Account/Overview.svelte"
  import ProfileInfo from "$lib/components/Account/ProfileInfo.svelte"
  import { page } from "$app/stores"
  import referee from "$lib/graphql/referee"

  let profile: Profile = {
    id: "",
    firstName: "",
    lastName: "",
    middleName: "",
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    gender: "",
    address: "",
    city: "",
    state: "",
    country: "",
    zip: "",
    progress: 0,
    godsWorkings: [],
    salvationBrief: "",
    churchName: "",
    churchAddress: "",
    pastorName: "",
    pastorEmail: "",
    pastorPhone: "",
    reason: "",
    healthConditions: [],
    healthIssueDescription: "",
  }
  let alert: false
  let subscribemodal = false
  let nextTab = false
  let complete: boolean
  let userdata: any
  let active = 0
  let ready = false
  let isRef: boolean
  let platform = "On-Campos"
  let isCondition: boolean
  let isExp: boolean
  $: platform = userdata?.platform

  let titles: string[] = ["Bio Data", "Spirituality", "Health"]
  $: if (userdata?.platform == "Online") titles = titles.filter((item) => item !== "Health")

  let menus: string[] = [
    // "Overview",
    "Profile",
    "Documents",
    // "Activity",
    // "Practicums",
    // "Settings",
  ]

  $: if (nextTab) {
    const middleName = profile.middleName
    delete profile.middleName
    const data = Object.entries(profile)
    let total = data.filter(([key]) => key != "progress")
    let val = total.filter(([key, val]) => !!val?.length)
    profile.progress = Math.round((val.length / total.length) * 100)
    profile.id = $auth.cred?.id
    profile.middleName = middleName

    if (isExp === false) {
      console.log(Math.round(total.length / 100) * total.length)
      profile.progress = profile.progress + Math.round((total.length / 100) * total.length)
    }
    if (isCondition === false || $userData.user?.platform == "Online") {
      console.log(Math.round(total.length / 100) * total.length)
      profile.progress = profile.progress + Math.round((total.length / 100) * total.length)
      profile.progress = profile.progress + Math.round((total.length / 100) * total.length)
    }

    user.query("update", { data: profile })

    data.forEach(([key, value]) => {
      if (typeof val != "number" && !!value?.length) {
        userData.update((data) => ({
          ...data,
          user: { ...data.user, [key]: value },
        }))
      }
    })

    complete = profile.progress >= 100 ? true : false
    nextTab = false
  }

  $: if (browser && $auth.loggedIn) {
    localStorage.auth = JSON.stringify($auth)
  }

  $: if ($userData.user.id && !ready) {
    userdata = $userData.user
    Object.keys(profile).forEach((key) => (profile[key] = userdata[key]))
    complete = profile.progress >= 100 ? true : false
    subscribemodal = !complete
    ready = true
    console.log(profile.progress)
  }

  const togglesubscribemodal = () => (subscribemodal = !subscribemodal)
  const onModalClosed = () => {
    nextTab = true
    isRef = complete ? true : false
  }

  $: if (browser && !$userData.user?.id) getUserData($auth.cred?.id)

  const getUserData = async (id: string) => {
    const resp = await user.query("user", { id })
    if (resp?.data?.user?.progress < 100) {
      subscribemodal = true
    }
  }

  const toggleRefereeModal = () => (isRef = !isRef)
</script>

{#if $userData.user?.id}
  <div class="page-content">
    <Container fluid>
      <Breadcrumb title="Contacts" breadcrumbItem="Profile" />
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
          <Card class="overflow-hidden">
            <div class="bg-primary bg-soft">
              <Row>
                <Col xs="7">
                  <div class="text-primary p-3">
                    <h5 class="text-primary">Welcome Back !</h5>
                    <p>It will seem like simplified</p>
                  </div>
                </Col>
                <Col xs="5" class="align-self-end">
                  <img src={profileImg} alt="" class="img-fluid" />
                </Col>
              </Row>
            </div>
            <CardBody class="pt-0">
              <Row>
                <Col sm="4">
                  <div class="avatar-md profile-user-wid mb-4">
                    {#if !userdata?.avatarUrl}
                      <span class="avatar-title fs-1 rounded-circle">
                        {userdata?.fullName.charAt(0)}
                      </span>
                    {:else}
                      <img class="img-thumbnail rounded-circle" src={userdata?.avatarUrl} alt="" />
                    {/if}
                  </div>
                  <h5 class="font-size-15 text-truncate">
                    {userdata?.fullName}
                  </h5>
                  <p class="text-muted mb-0 text-truncate text-capitalize">
                    {userdata?.role}
                  </p>
                </Col>

                <Col sm={8}>
                  <div class="pt-4">
                    <Row>
                      <Col xs="6">
                        <h5 class="font-size-15">0</h5>
                        <p class="text-muted mb-0">Courses</p>
                      </Col>
                      <Col xs="6">
                        <h5 class="font-size-15">0</h5>
                        <p class="text-muted mb-0">Practicums</p>
                      </Col>
                    </Row>
                    {#if $userData.user?.role == "prospective"}
                      <div class="mt-4">
                        <button
                          type="button"
                          class="btn btn-primary btn-sm"
                          on:click={togglesubscribemodal}
                        >
                          Edit Profile
                          <i class="mdi mdi-arrow-right ms-1" />
                        </button>
                      </div>
                    {/if}
                  </div>
                </Col>
              </Row>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle class="mb-4 h4">Referees</CardTitle>
              <Referee bind:complete bind:alert bind:isRef />
            </CardBody>
          </Card>
        </Col>

        <Col xl="8">
          <!-- <Row>
            <Col md={4}>
              <Card class="mini-stats-wid">
                <CardBody>
                  <MiniStats name="Completed Courses" stat="0">
                    <i slot="icon" class="bx bx-check-circle font-size-24" />
                  </MiniStats>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card class="mini-stats-wid">
                <CardBody>
                  <MiniStats name="Pending Courses" stat="0">
                    <i slot="icon" class="bx bx-hourglass font-size-24" />
                  </MiniStats>
                </CardBody>
              </Card>
            </Col>
            <Col md={4}>
              <Card class="mini-stats-wid">
                <CardBody>
                  <MiniStats name="New Converts" stat="0">
                    <i slot="icon" class="bx bx-package font-size-24" />
                  </MiniStats>
                </CardBody>
              </Card>
            </Col>
          </Row> -->
          <div class="mt-4">
            <Tabs {menus} {active}>
              <!-- <div slot="id-1">
                <Overview />
              </div> -->
              <div slot="id-1">
                <ProfileInfo />
              </div>
              <div slot="id-2">
                <Document userId={$page.params?.id ?? $auth.cred?.id} />
              </div>
            </Tabs>
          </div>
        </Col>
      </Row>
    </Container>
  </div>
{/if}

{#if $userData.user.id}
  <Modal
    size="xl"
    isOpen={subscribemodal}
    toggle={togglesubscribemodal}
    backdrop="static"
    centered
    on:close={onModalClosed}
  >
    <div class="modal-content">
      <div class="modal-header border-bottom-0">
        <h5 class="modal-title">Edit Profile</h5>
        <button
          type="button"
          class="btn-close"
          on:click={togglesubscribemodal}
          data-bs-dismiss="modal"
          aria-label="Close"
        />
      </div>
      <div class="modal-body">
        <Wizard bind:nextTab bind:subscribemodal {complete} {titles}>
          <PersonalInfo bind:profile slot="slot1" />
          <SpiritBackground bind:isExp bind:profile slot="slot2" />

          <HealthInfo bind:isCondition bind:platform bind:profile slot="slot3" />
        </Wizard>
      </div>
    </div>
  </Modal>
{/if}
