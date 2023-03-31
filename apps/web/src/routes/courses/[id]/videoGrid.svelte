<script>
  import {
    Card,
    Col,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
  } from "sveltestrap";
  let activeTab = "1";
</script>

<div>
  <Row class="justify-content-center">
    <Col xl={8}>
      <div>
        <Row class="align-items-center">
          <div class="col-4">
            <div>
              <h5 class="mb-0">Blog Grid</h5>
            </div>
          </div>

          <Col xs={8}>
            <div>
              <ul class="nav nav-pills justify-content-end">
                <NavItem>
                  <NavLink class="disabled" href=" " tabIndex="-1">
                    View :
                  </NavLink>
                </NavItem>
                <NavItem>
                  <a class="nav-link" href="blog-list">
                    <i class="mdi mdi-format-list-bulleted" />
                  </a>
                </NavItem>
                <NavItem>
                  <a href="blog-grid " class="nav-link active">
                    <i class="mdi mdi-view-grid-outline" />
                  </a>
                </NavItem>
              </ul>
            </div>
          </Col>
        </Row>

        <hr class="mb-4" />

        <Row>
          <Col sm={6}>
            <Card class="p-1 border shadow-none">
              <div class="p-3">
                <h5>
                  <a href="/blog-details" class="text-dark">
                    Beautiful Day with Friends
                  </a>
                </h5>
                <p class="text-muted mb-0">10 Apr, 2020</p>
              </div>

              <div class="position-relative">
                <img
                  src="assets/images/small/img-2.jpg"
                  alt=""
                  class="img-thumbnail"
                />
              </div>

              <div class="p-3">
                <ul class="list-inline">
                  <li class="list-inline-item me-3">
                    <a href=" " class="text-muted">
                      <i
                        class="bx bx-purchase-tag-alt align-middle text-muted me-1"
                      />{" "}
                      Project
                    </a>
                  </li>
                  <li class="list-inline-item me-3">
                    <a href=" " class="text-muted">
                      <i
                        class="bx bx-comment-dots align-middle text-muted me-1"
                      />{" "}
                      12 Comments
                    </a>
                  </li>
                </ul>
                <p>
                  Neque porro quisquam est, qui dolorem ipsum quia dolor sit
                  amet
                </p>

                <div>
                  <a href=" " class="text-primary">
                    Read more{" "}
                    <i class="mdi mdi-arrow-right" />
                  </a>
                </div>
              </div>
            </Card>
          </Col>

          <Col sm={6}>
            <Card class="p-1 border shadow-none">
              <div class="p-3">
                <h5>
                  <a href="/blog-details" class="text-dark">
                    Drawing a sketch
                  </a>
                </h5>
                <p class="text-muted mb-0">24 Mar, 2020</p>
              </div>

              <div class="position-relative">
                <img
                  src="assets/images/small/img-6.jpg"
                  alt=""
                  class="img-thumbnail"
                />

                <div class="blog-play-icon">
                  <a href=" " class="avatar-sm d-block mx-auto">
                    <span class="avatar-title rounded-circle font-size-18">
                      <i class="mdi mdi-play" />
                    </span>
                  </a>
                </div>
              </div>
              <div class="p-3">
                <ul class="list-inline">
                  <li class="list-inline-item me-3">
                    <a href=" " class="text-muted">
                      <i
                        class="bx bx-purchase-tag-alt align-middle text-muted me-1"
                      />{" "}
                      Development
                    </a>
                  </li>
                  <li class="list-inline-item me-3">
                    <a href=" " class="text-muted">
                      <i
                        class="bx bx-comment-dots align-middle text-muted me-1"
                      />{" "}
                      08 Comments
                    </a>
                  </li>
                </ul>

                <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus
                  quos
                </p>

                <div>
                  <a href=" " class="text-primary">
                    Read more{" "}
                    <i class="mdi mdi-arrow-right" />
                  </a>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col sm={6}>
            <Card class="p-1 border shadow-none">
              <div class="p-3">
                <h5>
                  <a href="/blog-details" class="text-dark">
                    Riding bike on road
                  </a>
                </h5>
                <p class="text-muted mb-0">10 Apr, 2020</p>
              </div>

              <div class="position-relative">
                <img
                  src="assets/images/small/img-1.jpg"
                  alt=""
                  class="img-thumbnail"
                />
              </div>

              <div class="p-3">
                <ul class="list-inline">
                  <li class="list-inline-item me-3">
                    <a href=" " class="text-muted">
                      <i
                        class="bx bx-purchase-tag-alt align-middle text-muted me-1"
                      />{" "}
                      Travel
                    </a>
                  </li>
                  <li class="list-inline-item me-3">
                    <a href=" " class="text-muted">
                      <i
                        class="bx bx-comment-dots align-middle text-muted me-1"
                      />{" "}
                      08 Comments
                    </a>
                  </li>
                </ul>
                <p>Itaque earum rerum hic tenetur a sapiente delectus ut aut</p>

                <div>
                  <a href=" " class="text-primary">
                    Read more{" "}
                    <i class="mdi mdi-arrow-right" />
                  </a>
                </div>
              </div>
            </Card>
          </Col>

          <Col sm={6}>
            <Card class="p-1 border shadow-none">
              <div class="p-3">
                <h5>
                  <a href="/blog-details" class="text-dark">
                    Project discussion with team
                  </a>
                </h5>
                <p class="text-muted mb-0">24 Mar, 2020</p>
              </div>

              <div class="position-relative">
                <img
                  src="assets/images/small/img-2.jpg"
                  alt=""
                  class="img-thumbnail"
                />
              </div>

              <div class="p-3">
                <ul class="list-inline">
                  <li class="list-inline-item me-3">
                    <a href=" " class="text-muted">
                      <i
                        class="bx bx-purchase-tag-alt align-middle text-muted me-1"
                      />{" "}
                      Development
                    </a>
                  </li>
                  <li class="list-inline-item me-3">
                    <a href=" " class="text-muted">
                      <i
                        class="bx bx-comment-dots align-middle text-muted me-1"
                      />{" "}
                      08 Comments
                    </a>
                  </li>
                </ul>

                <p>Sed ut perspiciatis unde omnis iste eaque natus error sit</p>

                <div>
                  <a href=" " class="text-primary">
                    Read more{" "}
                    <i class="mdi mdi-arrow-right" />
                  </a>
                </div>
              </div>
            </Card>
          </Col>
        </Row>

        <hr class="my-4" />

        <div class="text-center">
          <ul class="pagination justify-content-center pagination-rounded">
            <li class="page-item disabled">
              <a href=" " class="page-link">
                <i class="mdi mdi-chevron-left" />
              </a>
            </li>
            <li class="page-item">
              <a href=" " class="page-link">1</a>
            </li>
            <li class="page-item active">
              <a href=" " class="page-link">2</a>
            </li>
            <li class="page-item">
              <a href=" " class="page-link">3</a>
            </li>
            <li class="page-item">
              <a href=" " class="page-link">...</a>
            </li>
            <li class="page-item">
              <a href=" " class="page-link">10</a>
            </li>
            <li class="page-item">
              <a href=" " class="page-link">
                <i class="mdi mdi-chevron-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Col>
  </Row>
</div>
