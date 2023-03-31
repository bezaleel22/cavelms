<script>
  import { a } from "svelte-routing";
  import {
    Badge,
    Col,
    Container,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Row,
    Table,
    Dropdown,
  } from "sveltestrap";
  import Breadcrumb from "../../lib/common/Breadcrumb.svelte";
  import data from "../../lib/common/data/projects";
</script>

<div class="page-content">
  <Container fluid>
    <Breadcrumb title="Projects" breadcrumbItem="Projects List" />

    <Row>
      <Col lg="12">
        <div class="">
          <div class="table-responsive">
            <Table
              class="project-list-table table-nowrap align-middle table-borderless"
            >
              <thead>
                <tr>
                  <th scope="col" style="width:100px"> # </th>
                  <th scope="col">Projects</th>
                  <th scope="col">Due Date</th>
                  <th scope="col">Status</th>
                  <th scope="col">Team</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {#each data.projects as project}
                  <tr>
                    <td>
                      <img src={project.img} alt="" class="avatar-sm" />
                    </td>
                    <td>
                      <h5 class="text-truncate font-size-14">
                        <a to={"/#"} class="text-dark">
                          {project.name}
                        </a>
                      </h5>
                      <p class="text-muted mb-0">
                        {project.description}
                      </p>
                    </td>

                    <td>
                      {project.dueDate}
                    </td>
                    <td>
                      <Badge
                        color={project.color}
                        class={"bg-" + project.color}
                      >
                        {project.status}
                      </Badge>
                    </td>
                    <td>
                      <div class="avatar-group">
                        {#each project.team as team}
                          {#if !team.img || team.img !== "Null"}
                            <div class="avatar-group-item">
                              <a
                                to="#"
                                class="d-inline-block"
                                id={"member" + team.id}
                              >
                                <img
                                  src={team.img}
                                  class="rounded-circle avatar-xs"
                                  alt=""
                                />
                              </a>
                            </div>
                          {:else}
                            <div class="avatar-group-item">
                              <a
                                to="#"
                                class="d-inline-block"
                                id={"member" + team.id}
                              >
                                <div class="avatar-xs">
                                  <span
                                    class={"avatar-title rounded-circle bg-" +
                                      team.color +
                                      " text-white font-size-16"}
                                  >
                                    {team.name}
                                  </span>
                                </div>
                              </a>
                            </div>
                          {/if}
                        {/each}
                      </div>
                    </td>
                    <td>
                      <Dropdown>
                        <DropdownToggle
                          href="#"
                          color=""
                          class="btn btn- card-drop"
                          tag="a"
                        >
                          <i class="mdi mdi-dots-horizontal font-size-18" />
                        </DropdownToggle>
                        <DropdownMenu class="dropdown-menu-end">
                          <DropdownItem href="#">
                            <i
                              class="mdi mdi-pencil font-size-16 text-success me-1"
                            />{" "}
                            Edit
                          </DropdownItem>
                          <DropdownItem href="#">
                            <i
                              class="mdi mdi-trash-can font-size-16 text-danger me-1"
                            />{" "}
                            Delete
                          </DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </td>
                  </tr>
                {/each}
              </tbody>
            </Table>
          </div>
        </div>
      </Col>
    </Row>

    <Row>
      <Col xs="12">
        <div class="text-center my-3">
          <a href="/#" class="text-success">
            <i class="bx bx-loader bx-spin font-size-18 align-middle me-2" />
            Load more
          </a>
        </div>
      </Col>
    </Row>
  </Container>
</div>
