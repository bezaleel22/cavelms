<script>
  import { Badge, Card, CardBody, Col } from "sveltestrap";
  export let projects;
</script>

{#each projects as project}
  <Col xl="4" sm="6">
    <a href={`/courses/${project?.id}`}>
      <Card>
        <CardBody>
          <div class="d-flex">
            <div class="avatar-md me-4">
              <span
                class="avatar-title rounded-circle bg-light text-danger font-size-16"
              >
                <img src={project.img} alt="" height="30" />
              </span>
            </div>

            <div class="flex-grow-1 overflow-hidden">
              <h5 class="text-truncate font-size-15">
                <a href={`/projects-overview/${project.id}`} class="text-dark">
                  {project.name}
                </a>
              </h5>
              <p class="text-muted mb-4">{project.description}</p>

              <div class="avatar-group">
                {#each project.team as team}
                  {#if !team.img || team.img !== "Null"}
                    <div class="avatar-group-item">
                      <a
                        href="/#"
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
                        href="/#"
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
            </div>
          </div>
        </CardBody>
        <div class="px-4 py-3 border-top">
          <ul class="list-inline mb-0">
            <li class="list-inline-item me-3">
              <Badge color={project.color} class={"bg-" + project.color}
                >{project.status}</Badge
              >
            </li>
            {" "}
            <li class="list-inline-item me-3" id="dueDate">
              <i class="bx bx-calendar me-1" />
              {project.dueDate}
            </li>
            {" "}
            <li class="list-inline-item me-3" id="comments">
              <i class="bx bx-comment-dots me-1" />{" "}
              {project.commentsCount}
            </li>
          </ul>
        </div>
      </Card>
    </a>
  </Col>
{/each}
