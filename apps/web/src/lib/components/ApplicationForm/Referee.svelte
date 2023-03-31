<script lang="ts">
  import mail from "$lib/graphql/mail";
  import referee from "$lib/graphql/referee";
  import { auth } from "$lib/helpers/store";
  import { Col, Modal, Row, Table } from "sveltestrap";
  export let complete: boolean;
  export let alert: boolean;
  export let isRef = false;

  let fullName: string;
  let phone: string;
  let email: string;
  let refs: any;
  let refId: any;
  let loading: boolean;

  let isFinished: boolean;
  const toggleFinishedModal = () => (isFinished = !isFinished);

  let isOpen = false;
  const toggle = () => (isOpen = !isOpen);

  $: alert = refs?.length < 2 && complete;
  $: isOpen = isRef;

  const refModalClosed = async () => {
    if (refs.length >= 2 && !loading && !isOpen) {
      alert = false;
      const resp = await mail.query("send", {
        tpl: "enroll",
        to: [$auth.cred?.email],
        attach: false,
        subject: "Adullam Application",
        body: { fullName: $auth.cred?.fullName },
      });
      isFinished = true;
    }
    isRef = false;
  };

  const handleSubmit = async () => {
    loading = true;
    let resp = await referee.query("create", {
      userId: $auth.cred?.id,
      fullName,
      phone,
      email,
    });

    const { data } = await referee.query("referees", {
      userId: $auth.cred?.id,
    });
    loading = false;
    isOpen = false;
    fullName = phone = email = "";
    refs = data.referees;
  };

  const getReferees = async () => {
    const { data } = await referee.query("referees", {
      userId: $auth.cred?.id,
    });
    refs = data.referees;
  };

  $: if (!refs) getReferees();
</script>

{#if refs?.length > 0}
  <div class="table-responsive">
    {#each refs as ref}
      <Table class="table-nowrap mb-4">
        <tbody>
          <tr>
            <th scope="row">Full Name :</th>
            <td>{ref.fullName}</td>
          </tr>
          <tr>
            <th scope="row">Mobile :</th>
            <td>{ref.phone}</td>
          </tr>
          <tr>
            <th scope="row">E-mail :</th>
            <td>{ref.email}</td>
          </tr>
        </tbody>
      </Table>
    {/each}
  </div>
{/if}

<Row>
  <Col lg={12}>
    {#if $auth.cred?.role == "prospective"}
      <div class="mb-4 text-center">
        <button type="button" class="btn btn-primary btn-sm" on:click={toggle}>
          <i class="bx bx-plus ms-1" />
          Add Referee
        </button>
      </div>
    {:else}
      <div class="mb-4 text-center">
        <p class="text-muted">No Referee Added</p>
      </div>
    {/if}
  </Col>
</Row>

<Modal
  backdrop="static"
  header="Add Referee"
  size="md"
  {isOpen}
  {toggle}
  body
  centered
  on:close={refModalClosed}
>
  <form>
    <div class="row ps-5 pe-5">
      <div class="col-lg-12">
        <div class="form-group form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="fullname"
            placeholder="Fullname"
            bind:value={fullName}
          />
          <label for="fullname">Fullname</label>
        </div>
        <div class="form-group form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="email"
            placeholder="Email"
            bind:value={email}
          />
          <label for="email">Email</label>
        </div>
        <div class="form-group form-floating mb-3">
          <input
            type="text"
            class="form-control"
            id="phone"
            placeholder="Phone Number"
            bind:value={phone}
          />
          <label for="phone">Phone Number</label>
        </div>
      </div>
    </div>
    <div class="text-center">
      <button
        on:click|preventDefault={handleSubmit}
        type="button"
        class="btn btn-primary"
      >
        {#if loading}
          <i class="bx bx-loader bx-spin font-size-16 align-middle me-2" />
          Loading
        {:else}
          Submit
        {/if}
      </button>
    </div>
  </form>
</Modal>

<Modal
  backdrop="static"
  size="md"
  isOpen={isFinished}
  toggle={toggleFinishedModal}
  body
  centered
>
  <div class="row justify-content-center">
    <Col lg="6">
      <div class="text-center mb-5">
        <div class="mb-4">
          <i class="mdi mdi-check-circle-outline text-success display-4" />
        </div>
        <div>
          <h5>Congratulations!</h5>
          <p class="text-muted">
            You have completed the application. Check your email for more
            details
          </p>
        </div>
        <button
          type="button"
          class="btn btn-success btn-md"
          on:click={() => (isFinished = false)}
        >
          Ok, Got it
        </button>
      </div>
    </Col>
  </div>
</Modal>
