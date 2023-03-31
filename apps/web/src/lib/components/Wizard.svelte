<script lang="ts">
  import {
    Container,
    Row,
    Col,
    Card,
    CardBody,
    TabContent,
    TabPane,
    NavItem,
    NavLink,
    Button,
    Input,
  } from "sveltestrap";
  export let nextTab: boolean;
  export let complete: boolean;
  export let titles: string[];
  export let subscribemodal: boolean;

  let active: number = 0;
  let end: number = titles.length;
  let previous: boolean = true;
  let next: boolean = false;

  $: previous = active == 0 ? true : false;
  $: next = active >= end ? complete : false;
  // $: console.log(next);

  const toggleTab = (tab: any, t: boolean = false) => {
    active = tab;
    nextTab = t;
  };
</script>

<div>
  <Container fluid={true}>
    <Row>
      <Col lg="12">
        <Card>
          <CardBody>
            <!-- <Row>
              <Col xs="12">
                <div
                  class="form-check form-switch form-switch-md float-end m-4 mt-0"
                >
                  <input
                    disabled={editable}
                    class="form-check-input"
                    type="checkbox"
                    bind:checked={isEdit}
                  />
                  <label class="form-check-label" for="customSwitchsizemd">
                    Edit Profile
                  </label>
                </div>
              </Col>
            </Row> -->
            <div class="vertical-wizard wizard clearfix vertical">
              <div class="steps clearfix">
                <ul>
                  {#each titles as title, i}
                    <NavItem class={active == i ? "current" : ""}>
                      <NavLink
                        on:click={() => (active = i)}
                        active={active == i}
                      >
                        <span class="number">{i + 1}.</span>{" "}
                        {title}
                      </NavLink>
                    </NavItem>
                  {/each}
                  {#if complete}
                    <NavItem class={active == titles.length ? "current" : ""}>
                      <NavLink
                        on:click={() => (active = titles.length)}
                        active={active == titles.length}
                      >
                        <span class="number">{titles.length + 1}</span>{" "}
                        Complete
                      </NavLink>
                    </NavItem>
                  {/if}
                </ul>
              </div>

              <div class="content clearfix">
                <TabContent class="twitter-bs-wizard-tab-content">
                  <TabPane tabId={0} class={active == 0 ? "active" : ""}>
                    <slot name="slot1" />
                  </TabPane>
                  <TabPane tabId={1} class={active == 1 ? "active" : ""}>
                    <slot name="slot2" />
                  </TabPane>
                  <TabPane tabId={2} class={active == 2 ? "active" : ""}>
                    <slot name="slot3" />
                  </TabPane>
                  <TabPane tabId={3} class={active == 3 ? "active" : ""}>
                    <slot name="slot4" />
                  </TabPane>
                  <TabPane tabId={4} class={active == 4 ? "active" : ""}>
                    <slot name="slot5" />
                  </TabPane>
                  <TabPane
                    tabId={5}
                    class={active == titles.length ? "active" : ""}
                  >
                    <div class="row justify-content-center">
                      <Col lg="6">
                        <div class="text-center mb-5">
                          <div class="mb-4">
                            <i
                              class="mdi mdi-check-circle-outline text-success display-4"
                            />
                          </div>
                          <div>
                            <h5>Congratulations!</h5>
                            <p class="text-muted">
                              Your Application is complete. Proceed to the
                              profile page and add your Referees in the Referee
                              section if you have not done so yet.
                            </p>
                          </div>
                          <button
                            type="button"
                            class="btn btn-success btn-md"
                            on:click={() => (subscribemodal = false)}
                          >
                            Go to Profile
                          </button>
                        </div>
                      </Col>
                    </div>
                  </TabPane>
                </TabContent>
              </div>

              <div class="actions clearfix">
                <ul role="menu" aria-label="Pagination">
                  <li class="previous">
                    <Button
                      disabled={previous}
                      color="primary"
                      on:click={() => toggleTab(active - 1)}
                    >
                      Previous
                    </Button>
                  </li>
                  <li class="next">
                    <Button
                      disabled={next}
                      color="primary"
                      on:click={() =>
                        toggleTab(
                          !next ? active + 1 : active,
                          (nextTab = true)
                        )}
                    >
                      Next
                    </Button>
                  </li>
                </ul>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
</div>
