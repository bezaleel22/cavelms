<script lang="ts">
  import { Row, Col, Card, CardBody } from "sveltestrap";
  import { auth } from "$lib/store/authentication";
  import { onMount } from "svelte";

  let user: any;
  onMount(async () => {
    user = await auth.refresh();
  });
</script>

<Card class="overflow-hidden">
  <div class="bg-primary bg-soft">
    <Row>
      <Col xs="7">
        <div class="text-primary p-3">
          <h5 class="text-primary">Welcome Back !</h5>
          <p>Adullam Dashboard</p>
        </div>
      </Col>
      <Col xs="5" class="align-self-end">
        <img src="/assets/images/profile-img.png" alt="" class="img-fluid" />
      </Col>
    </Row>
  </div>
  <CardBody class="pt-0">
    <Row>
      <Col sm="4">
        <div class="avatar-md profile-user-wid mb-4">
          {#if !user?.avatarUrl}
            <span class="avatar-title fs-1 rounded-circle">
              {user?.fullName.charAt(0)}
            </span>
          {:else}
            <img class="img-thumbnail rounded-circle" src={user?.avatarUrl} alt="" />
          {/if}
        </div>
        <h5 class="font-size-15 text-truncate">{user?.fullName}</h5>
        <p class="text-muted mb-0 text-truncate text-capitalize">
          {user?.role}
        </p>
      </Col>

      <Col sm="8">
        <div class="pt-4">
          <Row>
            <Col xs="6">
              <h5 class="font-size-15">0</h5>
              <p class="text-muted mb-0">Courses</p>
            </Col>
            <Col xs="6">
              <h5 class="font-size-15">0</h5>
              <p class="text-muted mb-0">Practicums</p>
            </Col>
          </Row>
          <div class="mt-4">
            <a href="/account" class="btn btn-primary btn-sm">
              View Profile {" "}<i class="mdi mdi-arrow-right ms-1" />
            </a>
          </div>
        </div>
      </Col>
    </Row>
  </CardBody>
</Card>
