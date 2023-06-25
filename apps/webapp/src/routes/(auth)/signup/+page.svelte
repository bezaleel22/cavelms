<script>
  import { enhance } from "$app/forms";
  import Brand from "$lib/components/brand.svelte";

  let reveal = false;
</script>

<div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Welcome to Adullam!</h1>
      <p class="py-6">
        Experience the Intense Atmosphere of Heaven with Adullam - Where Learning Meets Spiritual
        Impartation
      </p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="font-medium self-center text-xl">
          <Brand />
        </div>
        <form action="?/signup" method="post" use:enhance>
          <div class="relative mb-4">
            <input
              name="fullName"
              type="text"
              id="fullName"
              class=" input input-bordered floating-input peer focus:border-accent-focus"
            />
            <label for="fullName" class=" floating-label peer-focus:text-accent-focus"
              >Full Name</label
            >
          </div>
          <!-- <div class="relative mb-4">
            <input
              name="lastName"
              type="text"
              id="lastName"
              class=" input input-bordered floating-input peer focus:border-accent-focus"
            />
            <label for="lastName" class=" floating-label peer-focus:text-accent-focus"
              >Last Name</label
            >
          </div> -->
          <div class="relative mb-4">
            <input
              name="email"
              type="text"
              id="email"
              class=" input input-bordered floating-input peer focus:border-accent-focus"
            />
            <label for="email" class=" floating-label peer-focus:text-accent-focus">Email</label>
          </div>

          <div class="relative w-full max-w-xs mb-4">
            <div class="input-group">
              <input
                name="password"
                type={reveal ? "text" : "password"}
                id="password"
                class=" input input-bordered floating-input peer focus:border-accent-focus"
                placeholder=" "
              />
              <button on:click={() => (reveal = !reveal)} type="button" class="btn btn-square">
                <div class="{reveal ? 'i-mdi:eye-outline' : 'i-mdi:eye-off-outline'} text-2xl" />
              </button>
            </div>
            <label for="password" class=" floating-label peer-focus:text-accent-focus">
              Password
            </label>
          </div>

          <div class="relative col-span-6 sm:col-span-3">
            <select
              name="program"
              id="program"
              class=" select input-bordered floating-input peer focus:border-accent-focus"
              placeholder=" "
              required
            >
              <option disabled selected>Choose a Program</option>
              <option>PGDT</option>
              <option>Diploma</option>
            </select>
            <label for="program" class="floating-label peer-focus:text-accent-focus">
              Program
            </label>
          </div>

          <div class="form-control mt-2">
            <button class="btn">Signup</button>
          </div>
        </form>
        <span class="text-sm text-center mt-4">
          Already have an account
          <a href="/login" class="text-primary">Login</a>
        </span>
      </div>
    </div>
  </div>
</div>

<!-- <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row-reverse">
    <div class="text-center lg:text-left">
      <h1 class="text-5xl font-bold">Welcome to Adullam!</h1>
      <p class="py-6">
        Experience the Intense Atmosphere of Heaven with Adullam - Where Learning Meets Spiritual
        Impartation
      </p>
    </div>
    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <div class="card-body">
        <div class="font-medium self-center text-xl">
          <Brand />
        </div>
        <form action="?/register" method="post" use:enhance>
          <div class="relative mb-4">
            <input
              name="firstName"
              type="text"
              id="firstName"
              class=" input input-bordered floating-input peer focus:border-accent-focus"
            />
            <label for="firstName" class=" floating-label peer-focus:text-accent-focus"
              >First Name</label
            >
          </div>
          <div class="relative mb-4">
            <input
              name="lastName"
              type="text"
              id="lastName"
              class=" input input-bordered floating-input peer focus:border-accent-focus"
            />
            <label for="lastName" class=" floating-label peer-focus:text-accent-focus"
              >Last Name</label
            >
          </div>
          <div class="relative mb-4">
            <input
              name="email"
              type="text"
              id="email"
              class=" input input-bordered floating-input peer focus:border-accent-focus"
            />
            <label for="email" class=" floating-label peer-focus:text-accent-focus">Email</label>
          </div>

          <div class="relative w-full max-w-xs mb-4">
            <div class="input-group">
              <input
                name="password"
                type={reveal ? "text" : "password"}
                id="password"
                class=" input input-bordered floating-input peer focus:border-accent-focus"
                placeholder=" "
              />
              <button on:click={() => (reveal = !reveal)} type="button" class="btn btn-square">
                <div class="{reveal ? 'i-mdi:eye-outline' : 'i-mdi:eye-off-outline'} text-2xl" />
              </button>
            </div>
            <label for="password" class=" floating-label peer-focus:text-accent-focus">
              Password
            </label>
          </div>

          <div class="form-control mt-2">
            <button class="btn">Register</button>
          </div>
        </form>
        <span class="text-sm text-center mt-4">
          Already have an account
          <a href="/login" class="text-primary">Login</a>
        </span>
      </div>
    </div>
  </div>
</div> -->