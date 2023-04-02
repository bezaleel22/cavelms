<script>
  import { enhance } from "$app/forms";
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
        <form action="?/login" method="post" use:enhance>
          <div class="relative  mb-4">
            <input
              name="email"
              type="email"
              id="email"
              class=" input input-bordered floating-input peer focus:border-accent-focus "
            />
            <label for="password" class=" floating-label peer-focus:text-accent-focus">
              Email
            </label>
          </div>
          <div class="relative w-full max-w-xs">
            <input
            name="password"
              type="password"
              id="password"
              class=" input input-bordered floating-input peer focus:border-accent-focus"
              placeholder=" "
            />
            <label for="password" class=" floating-label peer-focus:text-accent-focus">
              Password
            </label>
          </div>
          <label for="" class="label">
            <a href="/forget" class="label-text-alt link link-hover">Forgot password?</a>
          </label>

          <div class="form-control mt-6">
            <button class="btn">Login</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
