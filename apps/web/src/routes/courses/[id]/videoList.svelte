<script>
// @ts-nocheck

  import { browser } from "$app/environment";
  // import Player from "$lib/components/player.svelte";
  import { onMount } from "svelte";
  import {
    Card,
    Col,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
  } from "sveltestrap";
  let videoId = "aqz-KE-bpKQ";
</script>

<div>
  <Row class="justify-content-center">
    <Col xl={8}>
      <div>
        <Row class="align-items-center">
          <Col xs={4}>
            <div>
              <h5 class="mb-0">Course Videos</h5>
            </div>
          </Col>

          <Col xs={8}>
            <div>
              <ul class="nav nav-pills justify-content-end">
                <NavItem>
                  <NavLink class="disabled" href=" " tabIndex="-1">
                    View :
                  </NavLink>
                </NavItem>
                <NavItem>
                  <a class="nav-link active" href="blog-list">
                    <i class="mdi mdi-format-list-bulleted" />
                  </a>
                </NavItem>
                <NavItem>
                  <a href="blog-grid" class="nav-link">
                    <i class="mdi mdi-view-grid-outline" />
                  </a>
                </NavItem>
              </ul>
            </div>
          </Col>
        </Row>

        <hr class="mb-4" />

        <div>
          <h5>
            <a href="blog-details" class="text-dark">
              Beautiful Day with Friends
            </a>
          </h5>
          <p class="text-muted">10 Apr, 2020</p>

          <!-- <Player {videoId} /> -->

          <ul class="list-inline">
            <li class="list-inline-item me-3">
              <a href=" " class="text-muted">
                <i
                  class="bx bx-purchase-tag-alt align-middle text-muted me-1"
                />{" "}
                Project
              </a>
            </li>
            {" "}
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
            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet,
            consectetur, adipisci velit, aliquam quaerat voluptatem. Ut enim ad
            minima veniam, quis
          </p>

          <div>
            <a href=" " class="text-primary">
              Read more <i class="mdi mdi-arrow-right" />
            </a>
          </div>
        </div>

        <hr class="my-5" />

        <div>
          <h5>
            <a href="/blog-details" class="text-dark">
              Project discussion with team
            </a>
          </h5>
          <p class="text-muted">24 Mar, 2020</p>

          <div class="position-relative mb-3">
            <img
              src="/assets/images/small/img-6.jpg"
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
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores similique sunt in culpa qui officia deserunt mollitia animi
            est
          </p>

          <div>
            <a href=" " class="text-primary">
              Read more <i class="mdi mdi-arrow-right" />
            </a>
          </div>
        </div>

        <hr class="my-5" />

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
