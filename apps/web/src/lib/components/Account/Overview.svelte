<script lang="ts">
  import { browser } from "$app/environment";
  import user from "$lib/graphql/user";
  import { auth, userData } from "$lib/helpers/store";
  import { Card, CardBody, CardTitle, Col, Row } from "sveltestrap";
  import { onMount } from "svelte";

  $: if (browser && $auth.loggedIn) {
    localStorage.auth = JSON.stringify($auth);
  }

  $: if (browser && !$userData.user?.id)
    user.query("user", { id: $auth.cred?.id });

  // onMount(async () => {
  //   $: if (browser && $userData.user?.id) {
  //     const ApexCharts = (await import("apexcharts")).default;
  //     const chart = new ApexCharts(container, data.options);
  //     chart.render();
  //   }
  // });

  var emailid = "admin@themesbrand.com";
</script>

{#if $userData.user?.id}
  <div>
    <Card>
      <CardBody>
        <CardTitle class="mb-4 h4">Attendant Stats</CardTitle>
        <!-- <div
                      bind:this={container}
                      id="revenue-chart"
                      class="apex-charts"
                    /> -->
      </CardBody>
    </Card>
    <Card>
      <CardBody>
        <CardTitle class="mb-4 h4">My Courses</CardTitle>
        <!-- <div class="table-responsive">
                      <Table class="table-nowrap table-hover mb-0">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Courses</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">Deadline</th>
                            <th scope="col">Code</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>Skote admin UI</td>
                            <td>2 Sep, 2019</td>
                            <td>20 Oct, 2019</td>
                            <td>506</td>
                          </tr>

                          <tr>
                            <th scope="row">2</th>
                            <td>Skote admin Logo</td>
                            <td>1 Sep, 2019</td>
                            <td>2 Sep, 2019</td>
                            <td>94</td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>Redesign - Landing page</td>
                            <td>21 Sep, 2019</td>
                            <td>29 Sep, 2019</td>
                            <td>156</td>
                          </tr>
                          <tr>
                            <th scope="row">4</th>
                            <td>App Landing UI</td>
                            <td>29 Sep, 2019</td>
                            <td>04 Oct, 2019</td>
                            <td>122</td>
                          </tr>
                          <tr>
                            <th scope="row">5</th>
                            <td>Blog Template</td>
                            <td>05 Oct, 2019</td>
                            <td>16 Oct, 2019</td>
                            <td>164</td>
                          </tr>
                          <tr>
                            <th scope="row">6</th>
                            <td>Redesign - Multipurpose Landing</td>
                            <td>17 Oct, 2019</td>
                            <td>05 Nov, 2019</td>
                            <td>192</td>
                          </tr>
                          <tr>
                            <th scope="row">7</th>
                            <td>Logo Branding</td>
                            <td>04 Nov, 2019</td>
                            <td>05 Nov, 2019</td>
                            <td>94</td>
                          </tr>
                        </tbody>
                      </Table>
                    </div> -->
      </CardBody>
    </Card>
  </div>
{/if}
