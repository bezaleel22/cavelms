<script lang="ts">
  import {
    Card,
    CardBody,
    Col,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    Nav,
    NavItem,
    NavLink,
    Row,
  } from "sveltestrap"
  export let project

  const handleFilter = (action: string) => {
    if (action) {
      console.log({ action })
      return
    }
  }
</script>

{#if project}
  <!-- <div class="cover-img" style="background-image: url(/assets/images/small/img-6.jpg)"> -->
  <Row class="mb-4">
    <Col md="3">
      <div
        class="cover-img rounded"
        style="background-image: url({'/assets/images/small/img-6.jpg'})"
      />
    </Col>
    <Col md="9">
      <Row>
        <Col xs="6">
          <h5 class="text-truncate fs-3">{project.name}</h5>
          <p class="">{project.description}</p>
        </Col>
        <Col xs="6">
          <!-- <Button color="light" class="position-relative p-0 avatar-xs rounded-circle" /> -->
          <Dropdown style="z-index:1000" class="float-end">
            <DropdownToggle class="p-0 avatar-xs rounded-circle" color="light" caret>
              <span class="avatar-title bg-transparent text-reset">
                <i class="bx bx-menu" />
              </span>
            </DropdownToggle>
            <DropdownMenu class="dropdown-menu-end">
              <a
                on:click|preventDefault={() => handleFilter("View Offline")}
                class="dropdown-item"
                href={""}>View Offline</a
              >
              <a
                on:click|preventDefault={() => handleFilter("Shear")}
                class="dropdown-item"
                href={""}>Shear</a
              >
              <div class="dropdown-divider" />
              <a
                on:click|preventDefault={() => handleFilter("Download Course")}
                class="dropdown-item"
                href={""}>Download Course</a
              >
            </DropdownMenu>
          </Dropdown>
        </Col>
      </Row>

      <Row class="task-dates mx-auto">
        <Col sm="4" xs="6">
          <div class="mt-4 border-dashed border-primary p-2 rounded">
            <h5 class="font-size-14">
              <i class="bx bx-calendar me-1 text-primary" /> Start Date
            </h5>
            <p class="text-muted mb-0">{project.startDate}</p>
          </div>
        </Col>
        <Col sm="4" xs="6">
          <div class="mt-4 border-dashed border-primary p-2 rounded">
            <h5 class="font-size-14">
              <i class="bx bx-calendar-check me-1 text-primary" /> Due Date
            </h5>
            <p class="text-muted mb-0">{project.dueDate}</p>
          </div>
        </Col>
        <Col sm="4" xs="6">
          <div class="mt-4 border-dashed border-primary p-2 rounded">
            <h5 class="font-size-14">
              <i class="bx bx-calendar-check me-1 text-primary" /> Due Date
            </h5>
            <p class="text-muted mb-0">{project.dueDate}</p>
          </div>
        </Col>
      </Row>
      <Row>
        <Col sm="12" xs="6">
          <div class="avatar-group pt-4">
            {#each project.team as team}
              {#if team.img}
                <div class="avatar-group-item">
                  <a href="/#" class="d-inline-block" id={"member" + team.id}>
                    <img src={team.img} class="rounded-circle avatar-xs" alt="" />
                  </a>
                </div>
              {:else}
                <div class="avatar-group-item">
                  <a href="/#" class="d-inline-block" id={"member" + team.id}>
                    <div class="avatar-xs">
                      <span class={"avatar-title rounded-circle fs-6"}>
                        {team?.fullname.charAt(0)}
                      </span>
                    </div>
                  </a>
                </div>
              {/if}
            {/each}
            <div class="avatar-group-item">
              <a href="/#" class="d-inline-block">
                <div class="avatar-xs">
                  <span class={"avatar-title rounded-circle bg-white text-black f-6"}>
                    {"+20"}
                  </span>
                </div>
              </a>
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  </Row>
  <!-- </div> -->



  <Row>
    <Col sm="12">
      <h5 class="text-muted fs-5">Description</h5>
      <p>{project.projectDetails.description}</p>
    </Col>
  </Row>
{/if}

<style>
  .cover-img {
    background-size: cover;
    min-height: 100%;
    background-blend-mode: multiply;
  }
</style>
