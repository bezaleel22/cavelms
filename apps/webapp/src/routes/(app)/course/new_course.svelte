<script lang="ts">
  export let isOpen: boolean;
  let loading: boolean;
  let value: string;
  let selected: [];
  const toggle = () => (isOpen = !isOpen);
  const handleSubmit = async () => {
    loading = true;
    // let payload = { userId, category, file: null };
    // const resp = await file.query("create", payload, uploaded);
    // if (!!resp?.pdata?.createFile) getDocuments();
    loading = false;
    isOpen = !isOpen;
  };
</script>

<!-- <Modal backdrop="static" header="New Course" size="lg" {isOpen} {toggle}>
    <form class="p-5 pt-4 pb-4">
      <Row class="mb-4">
        <Col lg={6}>
          <div class="form-group form-floating">
            <input type="text" class="form-control" id="title" placeholder="title" bind:value />
            <label for="fullname">Course Title</label>
          </div>
        </Col>
        <Col lg={6}>
          <div class="form-group form-floating">
            <input type="text" class="form-control" id="code" placeholder="code" bind:value />
            <label for="fullname">Course Code</label>
          </div>
        </Col>
      </Row>
      <Row class="mb-4">
        <Col lg={12}>
          <Dragdrop name="Upload Course Banner" />
        </Col>
      </Row>
  
      <Row class="mb-4">
        <Col lg={4}>
          <div class="form-group form-floating">
            <select id="basicpill-namecard-input" class="form-select">
              <option hidden>Select Course Type</option>
              <option value="Application">Practicum</option>
              <option value="School">Theory</option>
            </select>
          </div>
        </Col>
        <Col lg={4}>
          <div class="form-group form-floating">
            <select id="basicpill-namecard-input" class="form-select">
              <option hidden>Select Semester</option>
              <option value>First Semester</option>
              <option value>Second Semester</option>
            </select>
          </div>
        </Col>
        <Col lg={4}>
          <div class="form-group form-floating">
            <select id="basicpill-namecard-input" class="form-select">
              <option hidden>Select Program</option>
              <option value>Diploma</option>
              <option value>PGDT</option>
            </select>
          </div>
        </Col>
      </Row>
      <Row class="mb-4">
        <Col lg={12}>
          <MultiSelect name="Add Tutors" {selected}>
            <option value>Darion</option>
            <option value>Mike</option>
            <option value>Daniel</option>
            <option value>Jacobs</option>
            <option value>Darion2</option>
            <option value>Mike2</option>
            <option value>Daniel2</option>
            <option value>Jacobs2</option>
            <option value>Darion3</option>
            <option value>Mike3</option>
            <option value>Daniel3</option>
            <option value>Jacobs3</option>
          </MultiSelect>
        </Col>
      </Row>
      <Row class="mb-4">
        <Col lg={12}>
          <div class="form-group form-floating">
            <input type="text" class="form-control" id="fullname" placeholder="Fullname" bind:value />
            <label for="fullname">Short Description</label>
          </div>
        </Col>
      </Row>
      <Row class="mb-4">
        <Col lg={12}>
          <div class="form-group form-floating">
            <textarea
              style="height: 100px"
              id="address-input1"
              class="form-control"
              rows="3"
              placeholder="Other Health Issues Description"
              bind:value
            />
            <label for="fullname">Long Description</label>
          </div>
        </Col>
      </Row>
  
      <div class="text-center">
        <button
          on:click|preventDefault={handleSubmit}
          type="button"
          class="btn btn-primary ps-5 pe-5"
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
  </Modal> -->
