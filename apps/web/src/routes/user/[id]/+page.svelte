<script lang="ts">
  import { browser } from "$app/environment";
  import { page } from "$app/stores";
    import Breadcrumb from "$lib/common/Breadcrumb.svelte"
  import user from "$lib/graphql/user";
  import {
    Card,
    CardBody,
    Col,
    Container,
    Dropdown,
    DropdownMenu,
    DropdownToggle,
    Row,
    Table,
  } from "sveltestrap";
  import UserDetail from "./UserDetail.svelte";

  export let data: any[];
  console.log(data);
  let tags = ["penticostal", "catholic", "methodist"];

  const roles = [
    "prospective",
    "student",
    "tutor",
    "faculty",
    "partner",
    "guest",
    "administrator",
  ];

  $: if (browser && $auth.loggedIn) doRefresh($page.url);
  $: if (browser)
    data = $userData.users?.filter((d: any) => d?.role == $page.params.id);
  $: console.log($page.params.id);

  const handleFilter = (filter: string) => {
    if (filter) {
      data = $userData.users?.filter(
        (d: any) => d?.program == filter || d?.platform == filter || !!d[filter]
      );
      return;
    }
    data = $userData.users?.filter((d: any) => d?.role == $page.params.id);
  };

  const doRefresh = (page: any) => user.query("users", {});
</script>

{#if $userData.users?.length > 0 && roles.includes($page.params.id)}
  <div class="page-content">
    <Container fluid>
      <Breadcrumb title="Users" breadcrumbItem={"All Users"} />
      <Row>
        <Col lg="12">
          <Card>
            <CardBody>
              <div class="d-flex flex-wrap">
                <h5 class="font-size-16 me-3">Users</h5>
                <div class="ms-auto">
                  <Dropdown>
                    <DropdownToggle
                      color=""
                      class="fw-medium text-reset text-muted dropdown-toggle"
                      tag="a"
                    >
                      <i class="bx bx-filter-alt" /> Filter
                    </DropdownToggle>

                    <DropdownMenu class="dropdown-menu-end">
                      <a
                        on:click|preventDefault={() => handleFilter("pgdt")}
                        class="dropdown-item"
                        href={""}>PGDT</a
                      >
                      <a
                        on:click|preventDefault={() => handleFilter("diploma")}
                        class="dropdown-item"
                        href={" "}>Diploma</a
                      >
                      <a
                        on:click|preventDefault={() =>
                          handleFilter("On-Campos")}
                        class="dropdown-item"
                        href={" "}>On-Campos</a
                      >
                      <a
                        on:click|preventDefault={() => handleFilter("Online")}
                        class="dropdown-item"
                        href={" "}>Online</a
                      >
                      <a
                        on:click|preventDefault={() =>
                          handleFilter("scholarshipReason")}
                        class="dropdown-item"
                        href={" "}>Schorlarship</a
                      >
                      <div class="dropdown-divider" />
                      <a
                        on:click|preventDefault={() => handleFilter("")}
                        class="dropdown-item"
                        href={"#"}>All</a
                      >
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
              <hr class="mt-2" />
              <Table class="align-middle table-nowrap table-hover">
                <thead class="table-light">
                  <tr>
                    <th scope="col" style="width: 70px;">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Program</th>
                    <th scope="col">Platform</th>
                    <th scope="col">Tags</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {#each data as user}
                    <tr>
                      <td>
                        {#if !user?.img}
                          <div class="avatar-xs">
                            <span class="avatar-title rounded-circle">
                              {user?.fullName.charAt(0)}
                            </span>
                          </div>
                        {:else}
                          <div>
                            <img
                              class="rounded-circle avatar-xs"
                              src={user?.img}
                              alt=""
                            />
                          </div>
                        {/if}
                      </td>
                      <td>
                        <h5 class="font-size-14 mb-1">
                          <a href={`/users/${user?.id}`} class="text-dark"
                            >{user?.fullName}</a
                          >
                        </h5>
                        <p class="text-muted mb-0">{user?.role}</p>
                      </td>
                      <td>{user?.email}</td>
                      <td>{user?.program}</td>
                      <td>{user?.platform}</td>
                      <td>
                        <div>
                          {#each tags as tag, index}
                            {#if index < 2}
                              <a
                                href={"/#"}
                                class="badge badge-soft-primary font-size-11 m-1"
                                >{tag}</a
                              >
                            {/if}
                          {/each}

                          {#if tags.length > 2}
                            <a
                              href="/#"
                              class="badge badge-soft-primary font-size-11 m-1"
                            >
                              {tags.length - 1} + more
                            </a>
                          {/if}
                        </div>
                      </td>
                      <td>
                        <ul class="list-inline font-size-20 contact-as mb-0">
                          <li class="list-inline-item px-2">
                            <a href={""} title="Message"
                              ><i class="bx bx-message-square-dots" /></a
                            >
                          </li>
                          <li class="list-inline-item px-2">
                            <a href={`/users/${user?.id}`} title="Profile"
                              ><i class="bx bx-user-circle" /></a
                            >
                          </li>
                        </ul>
                      </td>
                    </tr>
                  {/each}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  </div>
{:else}
  <UserDetail />
{/if}
