<script>
  import { Card, CardBody, CardTitle, Col, Container, Row } from "sveltestrap";
  //Import Breadcrumb
  import Breadcrumb from "$lib/common/Breadcrumb.svelte";
  //Import Cards
  import CardProject from "./card-project.svelte";
  import data from "$lib/common/data/projects";
  import Dountchart from "$lib/components/chartjs/dountchart.svelte";
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Projects" breadcrumbItem="Projects Grid" />
    <Row>
      <CardProject projects={data.projects} />
    </Row>

    <Row>
      <Col lg={12}>
        <ul
          class="pagination pagination-rounded justify-content-center mt-2 mb-5"
        >
          <li class="page-item disabled">
            <a href={"#"} class="page-link"
              ><i class="mdi mdi-chevron-left" /></a
            >
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
            <a href={"#"} class="page-link"
              ><i class="mdi mdi-chevron-right" /></a
            >
          </li>
        </ul>
      </Col>
    </Row>
  </Container>
</div>
