<script lang="ts">
  import {
    Card,
    CardBody,
    CardSubtitle,
    CardTitle,
    Col,
    Container,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    Row,
  } from "sveltestrap"

  import Breadcrumb from "$lib/common/Breadcrumb.svelte"
  import pdata from "$lib/common/data/projects"
  import Dountchart from "$lib/components/chartjs/dountchart.svelte"
  import { onMount } from "svelte"
  import CourseCard from "./course_card.svelte"
  import NewCourse from "./new_course.svelte"

  let filter = "All"
  let isOpen = true

  onMount(async () => {
    // if (browser) {
    //   const { data } = await GQL_Refresh.fetch()
    //   console.log(data)
    // }
  })

  const handleFilter = (status: string) => {
    if (filter) {
      console.log({ filter, pdata })
      filter = status
      return
    }
  }
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Courses" breadcrumbItem="My Courses" />
    <Row class="mb-4">
      <Col lg={12}>
        <div class="d-flex flex-wrap">
          <div class="ms-auto">
            <button type="button" class="btn btn-primary btn-md" on:click={() => (isOpen = true)}>
              <i class="bx bx-plus font-size-16 align-middle me-2" />
              New Course
            </button>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col lg={4}>
        <Card>
          <CardBody>
            <CardTitle class="fs-1">20</CardTitle>
            <CardSubtitle class="mb-4 text-muted">Current Courses</CardSubtitle>
            <div>
              <Dountchart />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg={4}>
        <Card>
          <CardBody>
            <CardTitle class="fs-1">20</CardTitle>
            <CardSubtitle class="mb-4 text-muted">Current Courses</CardSubtitle>
            <div>
              <Dountchart />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg={4}>
        <Card>
          <CardBody>
            <CardTitle class="fs-1">20</CardTitle>
            <CardSubtitle class="mb-4 text-muted">Current Courses</CardSubtitle>
            <div>
              <Dountchart />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row class="mb-4">
      <Col lg={12}>
        <div class="d-flex flex-wrap">
          <div class="ms-auto">
            <Dropdown>
              <DropdownToggle caret>
                {filter}
                <i class="mdi mdi-chevron-down" />
              </DropdownToggle>

              <DropdownMenu class="dropdown-menu-end">
                <a
                  on:click|preventDefault={() => handleFilter("Active")}
                  class="dropdown-item"
                  href={""}>Active</a
                >
                <a
                  on:click|preventDefault={() => handleFilter("Completed")}
                  class="dropdown-item"
                  href={""}>Completed</a
                >
                <a
                  on:click|preventDefault={() => handleFilter("In Progress")}
                  class="dropdown-item"
                  href={""}>In Progress</a
                >
                <a
                  on:click|preventDefault={() => handleFilter("To Do")}
                  class="dropdown-item"
                  href={" "}>To Do</a
                >
                <div class="dropdown-divider" />
                <a on:click|preventDefault={() => handleFilter("")} class="dropdown-item" href={""}
                  >All</a
                >
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </Col>
    </Row>
    <Row>
      <CourseCard projects={pdata.projects} />
    </Row>

    <Row>
      <Col lg={12}>
        <ul class="pagination pagination-rounded justify-content-center mt-2 mb-5">
          <li class="page-item disabled">
            <a href={"#"} class="page-link"><i class="mdi mdi-chevron-left" /></a>
          </li>
          <li class="page-item">
            <a href={"#"} class="page-link">1</a>
          </li>
          <li class="page-item active">
            <a href={"#"} class="page-link">2</a>
          </li>
          <li class="page-item">
            <a href={"#"} class="page-link">3</a>
          </li>
          <li class="page-item">
            <a href={"#"} class="page-link">4</a>
          </li>
          <li class="page-item">
            <a href={"#"} class="page-link">5</a>
          </li>
          <li class="page-item">
            <a href={"#"} class="page-link"><i class="mdi mdi-chevron-right" /></a>
          </li>
        </ul>
      </Col>
    </Row>
  </Container>

  <div class="course-modal">
    <NewCourse bind:isOpen />
  </div>
</div>
