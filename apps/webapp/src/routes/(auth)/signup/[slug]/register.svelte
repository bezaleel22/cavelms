<script lang="ts">
  import { goto } from "$app/navigation";
  import Auth from "$lib/graphql/auth";
  import type { User } from "$lib/interface/user_interface";
  import { Button, Input } from "sveltestrap";
  export let response: any;
  let loading = false;
  let isValid = true;
  let visible = false;
  let isExited = false;
  let regx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  let user: User = {
    fullName: "",
    email: "",
    password: "",
    role: "prospective",
  };

  const handleSubmit = async (e: any) => {
    isValid = !!user.email.toLowerCase().match(regx);
    if (isValid) {
      loading = true;
      response = await Auth.queryPublic("signUp", user);
      loading = false;
      // console.log(response);
    }
    if (!!response?.errors && response?.errors[0]?.message.includes("E11000")) {
      isExited = true;
      return;
    }
    response = response.data?.signUp;
    if (!!response) goto("/signup/verify");
  };

  $: if (visible) {
    setTimeout(() => {
      visible = false;
    }, 3000);
  }
</script>

<div>
  <h5 class="text-primary text-center">Sign Up</h5>
  <p class="text-muted text-center">
    Applicants should select <span class="text-primary"
      >Prospective Student</span
    >
    as Account Type in order to gain access to the Application form
  </p>
</div>
{#if isExited}
  <p class="text-danger text-center">
    An account with this email allready exist
  </p>
{/if}

<div class="mt-4">
  <form
    on:submit|preventDefault={handleSubmit}
    class="needs-validation"
    novalidate
  >
    <div class="mb-3">
      <label for="">Account Type</label>
      <select bind:value={user.role} class="form-select">
        <option value="prospective">Prospective Student</option>
        <!-- <option value="partner">Partner</option>
        <option value="staff">Staff</option> -->
      </select>
    </div>
    <hr />
    <div class="form-floating mb-3">
      <input
        type="text"
        class="form-control"
        id="fullname"
        placeholder="Enter fullname"
        bind:value={user.fullName}
        required
      />
      <label for="fullname" class="form-label">Full Name</label>
      <div class="invalid-feedback">Please Enter Username</div>
    </div>

    <div class="form-floating mb-3">
      <input
        type="email"
        class={`form-control ${isValid ? "" : "is-invalid"}`}
        id="email"
        placeholder="Enter email"
        bind:value={user.email}
        required
      />
      <label for="useremail" class="form-label"> Email </label>
      <div class="invalid-feedback">Email address isValid</div>
    </div>

    <div class="form-floating input-group mb-3">
      <Input
        type={visible ? "text" : "password"}
        class="form-control"
        id="userpassword"
        placeholder="Enter password"
        bind:value={user.password}
        required
      />
      <label for="userpassword" class="form-label">Password</label>
      <Button
        class="input-group-text"
        on:click={() => (visible = !visible)}
        color="light"
        type="button"
      >
        <i
          class={visible ? "mdi mdi-eye-outline" : "mdi mdi-eye-off-outline"}
        />
      </Button>
    </div>

    <!-- <div class="invalid-feedback">Please Enter Password</div> -->

    <div>
      <p class="mb-0">
        By registering you agree to the Skote <a href={"#"} class="text-primary"
          >Terms of Use</a
        >
      </p>
    </div>

    <div class="mt-4 d-grid">
      <button type="submit" class="btn btn-primary">
        {#if loading}
          <i class="bx bx-loader bx-spin font-size-16 align-middle me-2" />
          Loading
        {:else}
          Register
        {/if}
      </button>
      <div class="mt-4 text-center">
        <h5 class="font-size-14 mb-3">Sign up using</h5>

        <ul class="list-inline">
          <li class="list-inline-item">
            <a
              href={"#"}
              class="social-list-item bg-primary text-white border-primary"
            >
              <i class="mdi mdi-facebook" />
            </a>
          </li>
          <li class="list-inline-item">
            <a
              href={"#"}
              class="social-list-item bg-info text-white border-info"
            >
              <i class="mdi mdi-twitter" />
            </a>
          </li>
          <li class="list-inline-item">
            <a
              href={"#"}
              class="social-list-item bg-danger text-white border-danger"
            >
              <i class="mdi mdi-google" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </form>

  <div class="mt-5 text-center">
    <p>
      Already have an account ?{" "}
      <a href="/login" class="fw-medium text-primary">
        {" "}
        Login
      </a>{" "}
    </p>
  </div>
</div>
