<script lang="ts">
 import { enhance } from "$app/forms";

  let category: string;
  let description: string;
</script>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-6">Application Document</h3>
        <p class="mt-1 text-sm">
          Upload all required document for your application (Certificate, Application fees, School fees, Health Insurance e.t.c)
        </p>
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-0">
      <form action="?/documents" method="post" use:enhance>
        <div class="overflow-hidden shadow sm:rounded-md">
          <div class="space-y-6 bg-base-100 px-4 py-5 sm:p-6">
            <fieldset>
              <legend class="contents text-sm font-semibold leading-6"
                >Application Document</legend
              >
              <p class="text-sm text-gray-500">
                Upload all the required Document.
              </p>

              <div class="overflow-hidden shadow sm:rounded-md">
                <div class="bg-base-100 px-4 py-5 sm:p-6">
                  <div class="grid grid-cols-6 gap-6">
                    <div class="relative col-span-6 sm:col-span-3">
                      <select
                        bind:value={category}
                        name="category"
                        id="category"
                        class=" select input-bordered floating-input peer focus:border-accent-focus"
                        placeholder=" "
                        required
                      >
                        <option value="Degree">Degree Certificate</option>
                        <option value="app fees">Application Fees</option>
                        <option value="insurance">Health Insurance</option>
                        <option value="School fees">School Fees</option>
                        <option value="acc fees">Accomodation Fees</option>
                        <option value="grad fees">Graduation</option>
                        <option value="Transcript Fees">Transcript</option>
                      </select>
                      <label
                        for="category"
                        class="floating-label peer-focus:text-accent-focus"
                      >
                        Gender
                      </label>
                    </div>
                    <div class="relative col-span-6 sm:col-span-3">
                      <input
                        bind:value={description}
                        name="description"
                        type="text"
                        id="description"
                        class=" input input-bordered floating-input peer focus:border-accent-focus"
                        placeholder=" "
                      />
                      <label
                        for="description"
                        class="floating-label peer-focus:text-accent-focus"
                      >
                        Document Description
                      </label>
                    </div>

                    <div class="relative col-span-6 sm:col-span-3">
                      <input
                        name="file"
                        type="file"
                        id="fi"
                        class=" input input-bordered floating-input peer focus:border-accent-focus"
                        placeholder=" "
                      />
                      <label
                        for="fi"
                        class="floating-label peer-focus:text-accent-focus"
                      >
                        Select a file
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
      </form>
    </div>
  </div>
</div>
