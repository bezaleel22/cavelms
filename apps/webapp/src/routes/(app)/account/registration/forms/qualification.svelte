<script>
  import { enhance } from "$app/forms";
  import { user } from "$lib/store/auth";
  import { qualification } from "$lib/store/storable";
  import { onMount } from "svelte";
</script>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-6">Qualification</h3>
        <p class="mt-1 text-sm">
          Share your educational qualifications: degree, graduation year, and institution. Accurate
          information helps us understand your academic background.
        </p>
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-0">
      <div class="card w-full bg-base-200 text-neutral-content">
        <div class="card-body shadow-lg">
          <fieldset>
            <legend class="contents text-sm font-semibold leading-6">
              Educational Qualifications
            </legend>
            <p class="text-sm text-gray-500 pb-5">Tell us about your shool</p>

            <div class="grid grid-cols-6 gap-6">
              <div class="relative col-span-6 sm:col-span-3">
                <select
                  bind:value={$qualification.degree}
                  name="degree"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                >
                  <option>Choose a degree</option>
                  <option>SSCE/Secondary Level Education</option>
                  <option>OND/NCE</option>
                  <option>HND</option>
                  <option>BA/BSc</option>
                  <option>Masters</option>
                  <option>PhD</option>
                </select>
                <label for="degree" class="floating-label peer-focus:text-accent-focus">
                  Degree
                </label>
              </div>
              <div class="relative col-span-6 sm:col-span-3">
                <input
                  bind:value={$qualification.graduationYear}
                  name=" graduationYear"
                  type="text"
                  id="graduationYear"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                />
                <label for="graduationYear" class="floating-label peer-focus:text-accent-focus">
                  Graduation Year
                </label>
              </div>

              <div class="relative col-span-6 sm:col-span-6">
                <input
                  bind:value={$qualification.institution}
                  name="institution"
                  type="text"
                  id="institution"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                />
                <label for="institution" class="floating-label peer-focus:text-accent-focus">
                  Institution
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</div>
