<script>
  import { ref2, ref1 } from "$lib/store/storable";
</script>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-6">Referees Information</h3>
        <p class="mt-1 text-sm">
          Share your referees' details: full name, email, and phone number for both first and second
          referees. Accuracy is crucial for effective communication during the application process.
        </p>
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-0">
      <div class="card w-full bg-base-200 text-neutral-content mb-4">
        <div class="card-body shadow-lg p-6 pb-0">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="px-4 py-5 sm:p-6">
              <div class="grid grid-cols-11 gap-6">
                <fieldset class="grid grid-rows-4 gap-6 col-span-5">
                  <h3 class="text-base font-semibold">First Referee</h3>
                  <div class="relative col-span-3 sm:col-span-3">
                    <input
                      bind:value={$ref1.fullName}
                      name="ref1[fullName]"
                      type="text"
                      id="ref1_fullName"
                      class="input input-bordered floating-input peer focus:border-accent-focus"
                      placeholder=" "
                      required
                    />
                    <label for="ref1_fullName" class="floating-label peer-focus:text-accent-focus">
                      Full Name
                    </label>
                  </div>

                  <div class="relative col-span-3 sm:col-span-3">
                    <input
                      bind:value={$ref1.email}
                      name="ref1[email]"
                      type="text"
                      id="ref1_email"
                      class=" input input-bordered floating-input peer focus:border-accent-focus"
                      placeholder=" "
                      required
                    />
                    <label for="ref1_email" class="floating-label peer-focus:text-accent-focus">
                      Email
                    </label>
                  </div>

                  <div class="relative col-span-3 sm:col-span-3">
                    <input
                      bind:value={$ref1.phone}
                      name="ref2[phone]"
                      type="text"
                      id="ref1_phone"
                      class=" input input-bordered floating-input peer focus:border-accent-focus"
                      placeholder=" "
                      required
                    />
                    <label for="ref1_phone" class="floating-label peer-focus:text-accent-focus">
                      Phone Number
                    </label>
                  </div>
                </fieldset>

                <div class="divider divider-horizontal col-span-1" />
                <fieldset class="grid grid-rows-4 gap-6 col-span-5">
                  <h3 class="font-semibold">Second Referee</h3>
                  <div class="relative col-span-3 sm:col-span-3">
                    <input
                      bind:value={$ref2.fullName}
                      name="ref2[fullName]"
                      type="text"
                      id="ref2_fullName"
                      class=" input input-bordered floating-input peer focus:border-accent-focus"
                      placeholder=" "
                      required
                    />
                    <label for="ref1[email]" class="floating-label peer-focus:text-accent-focus">
                      Full Name
                    </label>
                  </div>

                  <div class="relative col-span-3 sm:col-span-3">
                    <input
                      bind:value={$ref2.email}
                      name="ref2[phone]"
                      type="text"
                      id="ref2_email"
                      class=" input input-bordered floating-input peer focus:border-accent-focus"
                      placeholder=" "
                      required
                    />
                    <label for="ref2_email" class="floating-label peer-focus:text-accent-focus">
                      Email
                    </label>
                  </div>

                  <div class="relative col-span-3 sm:col-span-3">
                    <input
                      bind:value={$ref2.phone}
                      name="ref2_phone"
                      type="text"
                      id="ref2_phone"
                      class=" input input-bordered floating-input peer focus:border-accent-focus"
                      placeholder=" "
                      required
                    />
                    <label for="ref2_phone" class="floating-label peer-focus:text-accent-focus">
                      Phone Number
                    </label>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
