<script lang="ts">
  import { goto } from "$app/navigation";
  import user from "$lib/graphql/user";
  import { auth } from "$lib/helpers/store";
  import type { Student } from "$lib/interface/user_interface";
  import { slide } from "svelte/transition";
  let isSchorlarship = false;

  let student: Student = {
    id: "",
    program: "Select Program Option",
    scholarshipReason: "",
    platform: "Select Platform",
  };
  $: student.id = $auth.cred?.id;

  const handleSubmit = async () => {
    const resp = await user.query("update", { data: student });
    if (!!resp?.errors) {
      return;
    }
    console.log(resp?.data);
    if (!!resp?.data) goto("/", { replaceState: true });
  };
</script>

<div>
  <h5 class="text-primary text-center">Accademic Options</h5>
  <p class="text-muted text-center">
    <span class="text-primary">PGDT</span>
    applicants must have a minimum of bachelor’s degree or its equivalent
  </p>
  <p class="text-muted text-center">
    <span class="text-primary">DIPLOMA</span>
    applicants must have a minimum of Secondary School Certificate or its equivalent
  </p>
</div>

<div class="mt-4">
  <form
    on:submit|preventDefault={handleSubmit}
    class="needs-validation"
    novalidate
    action="/"
  >
    <div class="mb-3">
      <label for="">Program Option</label>
      <select bind:value={student.program} class="form-select">
        <option hidden>Select Program Option</option>
        <option value="diploma">Diploma in Theology</option>
        <option value="pgdt">Post Graduate Diploma in Theology</option>
      </select>
    </div>

    <div class="mb-3">
      <label for="">Platform</label>
      <select bind:value={student.platform} class="form-select">
        <option hidden>Select Platform</option>
        <option>On-Campos</option>
        <option>Online</option>
      </select>
    </div>

    <div class="form-check mb-4">
      <input
        class="form-check-input"
        type="checkbox"
        bind:checked={isSchorlarship}
        id="defaultCheck1"
      />
      <label class="form-check-label" for="defaultCheck1">
        Interested in Schorlarship?
      </label>
    </div>

    {#if isSchorlarship}
      <div transition:slide={{ duration: 500 }} class="mb-3">
        <div class="form-floating mb-3">
          <textarea
            style="height: 100px"
            id="address-input1"
            class="form-control"
            rows="3"
            placeholder="Reason for Schorlarship"
            bind:value={student.scholarshipReason}
          />
          <label for="floatingInput">Reason for Schorlarship</label>
        </div>
      </div>
    {/if}

    <div class="mt-4 d-grid">
      <button
        type="submit"
        class="btn btn-primary w-md waves-effect waves-light"
      >
        Submit
      </button>
    </div>
  </form>
</div>
