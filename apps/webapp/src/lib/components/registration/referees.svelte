<script lang="ts">
  // import { enhance } from "$app/forms";
  import { browser } from "$app/environment";
  import { enhance } from "$app/forms";

  let email: string;
  let fullName: string;
  let phone: string;
</script>




<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-6">Referees</h3>
        <p class="mt-1 text-sm">A Brief about your Referees</p>
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-0">
      <div class="flex">
        <form action="?/referees" method="post" use:enhance class="flex-grow">
          <!-- First form content... -->
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="space-y-6 bg-base-100 px-4 py-5 sm:p-6">
              <fieldset>
                <legend class="contents text-sm font-semibold leading-6">
                  First Referees
                </legend>
                <div class="overflow-hidden shadow sm:rounded-md">
                  <div class="bg-base-100 px-4 py-5 sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="relative col-span-6 sm:col-span-6">
                        <input
                          bind:value={email}
                          name="email"
                          type="text"
                          id="email"
                          class="input input-bordered floating-input peer focus:border-accent-focus"
                          placeholder=" "
                        />
                        <label
                          for="email"
                          class="floating-label peer-focus:text-accent-focus"
                        >
                          Referee Email
                        </label>
                      </div>

                      <div class="relative col-span-6 sm:col-span-6">
                        <input
                          bind:value={fullName}
                          name="fullName"
                          type="text"
                          id="fullName"
                          class="input input-bordered floating-input peer focus:border-accent-focus"
                          placeholder=" "
                        />
                        <label
                          for="fullName"
                          class="floating-label peer-focus:text-accent-focus"
                        >
                          Referee Fullname
                        </label>
                      </div>

                      <div class="relative col-span-6 sm:col-span-6">
                        <input
                          bind:value={phone}
                          name="phone"
                          type="text"
                          id="phone"
                          class="input input-bordered floating-input peer focus:border-accent-focus"
                          placeholder=" "
                        />
                        <label
                          for="phone"
                          class="floating-label peer-focus:text-accent-focus"
                        >
                          Referee Phone Number
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div class="text-right mt-4">
                <button class="btn" type="submit">Save</button>
              </div>
            </div>
          </div>
        </form>
<!-- 
        <div class="divider lg:divider-horizontal "></div> -->

        <div class="w-px max-h-32 bg-gray-600 mx-32 md:mx-0  my-20 "></div>

        <form action="?/referees" method="post" use:enhance class="flex-grow">
          <!-- Second form content... -->
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="space-y-6 bg-base-100 px-4 py-5 sm:p-6">
              <fieldset>
                <legend class="contents text-sm font-semibold leading-6">
                  Second Referees
                </legend>
                <div class="overflow-hidden shadow sm:rounded-md">
                  <div class="bg-base-100 px-4 py-5 sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="relative col-span-6 sm:col-span-6">
                        <input
                          bind:value={email}
                          name="email"
                          type="text"
                          id="email"
                          class="input input-bordered floating-input peer focus:border-accent-focus"
                          placeholder=" "
                        />
                        <label
                          for="email"
                          class="floating-label peer-focus:text-accent-focus"
                        >
                          Referee Email
                        </label>
                      </div>

                      <div class="relative col-span-6 sm:col-span-6">
                        <input
                          bind:value={fullName}
                          name="fullName"
                          type="text"
                          id="fullName"
                          class="input input-bordered floating-input peer focus:border-accent-focus"
                          placeholder=" "
                        />
                        <label
                          for="fullName"
                          class="floating-label peer-focus:text-accent-focus"
                        >
                          Referee Fullname
                        </label>
                      </div>

                      <div class="relative col-span-6 sm:col-span-6">
                        <input
                          bind:value={phone}
                          name="phone"
                          type="text"
                          id="phone"
                          class="input input-bordered floating-input peer focus:border-accent-focus"
                          placeholder=" "
                        />
                        <label
                          for="phone"
                          class="floating-label peer-focus:text-accent-focus"
                        >
                          Referee Phone Number
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <div class="text-right mt-4">
                <button class="btn" type="submit">Save</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
