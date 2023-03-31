<script lang="ts">
  import education from "$lib/graphql/education";
  import referee from "$lib/graphql/referee";
  import { auth } from "$lib/helpers/store";
  import { Col, Modal, Row, Table } from "sveltestrap";

  let degree: string;
  let institution: string;
  let graduationYear: string;
  let refs: any;

  let isOpen = false;
  const toggle = () => (isOpen = !isOpen);

  const handleSubmit = () => {
    education.query("create", {
      userId: $auth.cred?.id,
      degree,
      institution,
      graduationYear,
    });
    isOpen = !isOpen;
  };

  const getEducation = async () => {
    const { data } = await education.query("educations", {
      userId: $auth.cred?.id,
    });
    refs = data.educations;
  };

  $: if (!refs) getEducation();
</script>

{#if refs}
  <div class="mb-4">
    <ul class="verti-timeline list-unstyled">
      {#each refs as ref}
        <li class="event-list active">
          <div class="event-timeline-dot">
            <i class="bx bx-right-arrow-circle bx-fade-right" />
          </div>
          <div class="d-flex">
            <div class="flex-shrink-0 me-3">
              <i class="bx bx-server h4 text-primary" />
            </div>
            <div class="flex-grow-1">
              <div>
                <h5 class="font-size-15">
                  <a href={"/#"} class="text-dark">{ref?.degree}</a>
                </h5>
                <span class="text-primary">{ref?.graduationYear}</span>
              </div>
            </div>
          </div>
        </li>
      {/each}
    </ul>
  </div>
{/if}

<Row>
  <Col lg={12}>
    <div class="mb-4 text-center">
      <button type="button" class="btn btn-primary btn-sm" on:click={toggle}>
        <i class="bx bx-plus ms-1" />
        Add Qualification
      </button>
    </div>
  </Col>
</Row>

<Modal
  backdrop="static"
  header="Add Qualification"
  size="md"
  {isOpen}
  {toggle}
  body
  centered
>
  <form>
    <div class="row ps-5 pe-5">
      <div class="col-lg-12">
        <div class="form-group mb-3">
          <select
            bind:value={degree}
            id="basicpill-namecard-input"
            class="form-select"
          >
            <option>Select Degree</option>
            <option>SSCE</option>
            <option>HND</option>
            <option>BSc/BA</option>
            <option>MSc/MA</option>
            <option>PhD</option>
          </select>
        </div>
        <div class="form-group form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="degree"
            placeholder="Enter Your Name on Card"
            bind:value={institution}
          />
          <label for="basicpill-namecard-input112">Name of Instutution</label>
        </div>
        <div class="form-group form-floating mb-3">
          <input
            class="form-control"
            type="month"
            id="date"
            bind:value={graduationYear}
          />

          <label for="date">Year of Graduation</label>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button
        on:click|preventDefault={handleSubmit}
        type="button"
        class="btn btn-primary"
      >
        Submit
      </button>
    </div>
  </form>
</Modal>
