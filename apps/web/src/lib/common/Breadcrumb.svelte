<script lang="ts">
  import { Row, Col, BreadcrumbItem } from "sveltestrap";

  export let title: string;
  export let breadcrumbItem: string;
</script>

<Row>
  <Col xs="12">
    <div
      class="page-title-box d-sm-flex align-items-center justify-content-between"
    >
      <h4 class="mb-sm-0 font-size-18">{breadcrumbItem}</h4>
      <div class="page-title-right">
        <ol class="breadcrumb m-0">
          <BreadcrumbItem>
            <a href="/#">{title}</a>
          </BreadcrumbItem>
          <BreadcrumbItem active>
            <a href="/#">{breadcrumbItem}</a>
          </BreadcrumbItem>
        </ol>
      </div>
    </div>
  </Col>
</Row>
