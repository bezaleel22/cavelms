<script lang="ts">
  import { browser } from "$app/environment";
  import Info from "$lib/components/Info.svelte";
  import user from "$lib/graphql/user";
  import { auth, userData } from "$lib/helpers/store";
  import type { Profile } from "$lib/interface/user_interface";
  import { onMount } from "svelte";
  import {
    Card,
    CardBody,
    CardTitle,
    Col,
    Label,
    Row,
    Table,
  } from "sveltestrap";

  let edited: string;

  $: if (browser && $auth.loggedIn) {
    localStorage.auth = JSON.stringify($auth);
  }

  $: if (browser && !$userData.user?.id)
    user.query("user", { id: $auth.cred?.id });

  let userdata: any;
  $: userdata = $userData.user;
  // $: console.log(userdata);
</script>

{#if $userData.user?.id}
  <div>
    <!-- <Row>
      <Col lg="4">
        <Card>
          <CardBody>
            <CardTitle class="mb-4 h4">Profile Picture</CardTitle>
            <div class="text-center">
              <div class="avatar-md mb-3">
                {#if !userdata?.avatarUrl}
                  <span class="avatar-title fs-1 rounded-circle">
                    {userdata?.fullName.charAt(0)}
                  </span>
                {:else}
                  <img
                    class="img-thumbnail rounded-circle"
                    src={userdata?.avatarUrl}
                    alt=""
                  />
                {/if}
              </div>
              <div class="avatar-sm w-100" style="cursor:pointer">
                <Label class="avatar-title rounded bg-light">
                  <i class="text-primary fs-1 bx bxs-cloud-upload" />
                  <input hidden type="file" />
                </Label>
              </div>
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col lg="8">
        <Card>
          <CardBody>
            <CardTitle class="mb-4 h4">About Me</CardTitle>
            <p class="text-muted mb-4">
              Hi I'm <span class="fw-bold">{userdata?.fullName}</span>, has been
              the industry's standard dummy text href an English person, it will
              seem like simplified English, as a skeptical Cambridge.
            </p>
          </CardBody>
        </Card>
      </Col>
    </Row> -->

    <Row>
      <Col xs="6">
        <Card>
          <CardBody>
            <Info
              icon="bx bx-user"
              class="mb-3"
              name="Full Name"
              value={userdata?.fullName}
              bind:edited
            />
            <Info
              icon="bx bx-envelope"
              class="mb-3"
              name="Email"
              value={userdata?.email}
              bind:edited
            />
            <Info
              icon="bx bx-phone"
              class="mb-3"
              name="Phone"
              value={userdata?.phone}
              bind:edited
            />
            <Info
              icon="mdi mdi-gender-male-female"
              class="mb-4"
              name="Gender"
              value={userdata?.gender}
              bind:edited
            />
          </CardBody>
        </Card>
      </Col>
      <Col xs="6">
        <Card>
          <CardBody>
            <Info
              icon="bx bx-globe"
              class="mb-3"
              name="Country"
              value={userdata?.country}
              bind:edited
            />
            <Info
              icon="bx bxs-map-pin"
              class="mb-3"
              name="State"
              value={userdata?.state}
              bind:edited
            />
            <Info
              icon="bx bxs-city"
              class="mb-3"
              name="City"
              value={userdata?.city}
              bind:edited
            />
            <Info
              icon="bx bxs-map"
              class="mb-1"
              name="Address"
              value={userdata?.address}
              bind:edited
            />
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xs="12">
        <Card>
          <CardBody>
            <CardTitle class="mb-4 h4"
              >Account of Salvation Experience</CardTitle
            >
            <p class="text-muted mb-4">
              {userdata?.salvationBrief}
            </p>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xs="12">
        <Card>
          <CardBody>
            <CardTitle class="mb-4 h4">Reason for Applying</CardTitle>
            <p class="text-muted mb-4">
              {userdata?.reason}
            </p>
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xs="12">
        <Card>
          <CardBody>
            <CardTitle class="mb-4 h4">Reason for Schorlarship</CardTitle>
            {#if !!userdata?.scholarshipReason}
              <p class="text-muted mb-4">
                {userdata?.scholarshipReason}
              </p>
            {:else}
              <p class="text-muted text-center mb-4">
                No schorlarship request
              </p>
            {/if}
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xs="6">
        <Card>
          <CardBody>
            <CardTitle class="mb-4 h4">Christain Experiences</CardTitle>
            {#if !!userdata.godsWorkings}
              <div class="table-responsive">
                <Table class="table-nowrap mb-0">
                  <tbody>
                    {#each userdata.godsWorkings as workings}
                      <tr>
                        <td>{workings}</td>
                      </tr>
                    {/each}
                  </tbody>
                </Table>
              </div>
            {/if}
          </CardBody>
        </Card>
      </Col>
      <Col xs="6">
        <Card>
          <CardBody>
            <CardTitle class="mb-4 h4">Health Conditions</CardTitle>
            {#if !!userdata.healthConditions}
              <div class="table-responsive">
                <Table class="table-nowrap mb-0">
                  <tbody>
                    {#each userdata.healthConditions as condition}
                      <tr>
                        <td>{condition}</td>
                      </tr>
                    {/each}
                  </tbody>
                </Table>
              </div>
            {/if}
          </CardBody>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col xs="12">
        <Card>
          <CardBody>
            <CardTitle class="mb-4 h4">Ministry Information</CardTitle>
            <div class="table-responsive">
              <Table class="table-nowrap mb-0">
                <tbody>
                  <tr>
                    <th scope="row">Pastor's Full Name :</th>
                    <td>{userdata?.pastorName}</td>
                  </tr>
                  <tr>
                    <th scope="row">Pastor's Email :</th>
                    <td>{userdata?.pastorEmail}</td>
                  </tr>
                  <tr>
                    <th scope="row">Pastor's Phone Number :</th>
                    <td>{userdata?.pastorPhone}</td>
                  </tr>
                  <tr>
                    <th scope="row">Name of Ministry :</th>
                    <td>{userdata?.churchName}</td>
                  </tr>
                  <tr>
                    <th scope="row">Address :</th>
                    <td>{userdata?.churchAddress}</td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </div>
{/if}
