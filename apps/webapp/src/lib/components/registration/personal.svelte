<script>
  import { storable } from "$lib/store/storable";
  $storable.gender = $storable.gender ?? "male";
</script>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-6">Personal Information</h3>
        <p class="mt-1 text-sm">
          Your Contact and personal information are very important and should be accurate.
        </p>
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-0">
      <div class="card w-full bg-base-200 text-neutral-content mb-4">
        <div class="card-body shadow-lg p-6 pb-0">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="px-4 py-5 sm:p-6">
              <div class="grid grid-cols-6 gap-6">
                <div class="relative col-span-6 sm:col-span-3">
                  <input
                    bind:value={$storable.firstName}
                    name="firstName"
                    type="text"
                    id="firstName"
                    class=" input input-bordered floating-input peer focus:border-accent-focus"
                    placeholder=" "
                    required
                  />
                  <label for="firstName" class="floating-label peer-focus:text-accent-focus">
                    First Name
                  </label>
                </div>

                <div class="relative col-span-6 sm:col-span-3">
                  <input
                    bind:value={$storable.lastName}
                    name="lastName"
                    type="text"
                    id="lastName"
                    class=" input input-bordered floating-input peer focus:border-accent-focus"
                    placeholder=" "
                    required
                  />
                  <label for="lastName" class="floating-label peer-focus:text-accent-focus">
                    Last Name
                  </label>
                </div>

                <div class="relative col-span-6 sm:col-span-3">
                  <input
                    bind:value={$storable.middleName}
                    name="middleName"
                    type="text"
                    id="middleName"
                    class=" input input-bordered floating-input peer focus:border-accent-focus"
                    placeholder=" "
                    required
                  />
                  <label for="middleName" class="floating-label peer-focus:text-accent-focus">
                    Middle Name
                  </label>
                </div>

                <!-- <div class="relative col-span-6 sm:col-span-3">
                  <select
                    bind:value={$storable.gender}
                    name="gender"
                    id="gender"
                    class=" select input-bordered floating-input peer focus:border-accent-focus"
                    placeholder=" "
                    required
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </select>
                  <label for="gender" class="floating-label peer-focus:text-accent-focus">
                    Gender
                  </label>
                </div> -->

                <fieldset class="relative col-span-6 sm:col-span-6">
                  <legend class="">Gender</legend>
                  <div class="mt-4 space-y-3 grid grid-rows-3">
                    <div class="flex items-center">
                      <div class="flex h-6 items-center">
                        <input
                          bind:group={$storable.gender}
                          type="radio"
                          name="gender"
                          value="male"
                          checked
                          class="checkbox"
                        />
                      </div>
                      <div class="ml-3 text-sm leading-6">
                        <p class="text-gray-300">Male</p>
                      </div>
                    </div>
                    <div class="flex items-center">
                      <div class="flex h-6 items-center">
                        <input
                          bind:group={$storable.gender}
                          type="radio"
                          name="gender"
                          value="female"
                          class="checkbox"
                        />
                      </div>
                      <div class="ml-3 text-sm leading-6">
                        <p class="text-gray-300">Female</p>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <div class="relative col-span-6 sm:col-span-3">
                  <input
                    bind:value={$storable.dob}
                    name="dob"
                    type="date"
                    id="dob"
                    class=" input input-bordered floating-input peer focus:border-accent-focus"
                    placeholder=" "
                    required
                  />
                  <label for="dob" class="floating-label peer-focus:text-accent-focus">
                    Date of Birth
                  </label>
                </div>

                <div class="relative col-span-6 sm:col-span-3">
                  <input
                    bind:value={$storable.email}
                    name="email"
                    type="email"
                    id="email"
                    class=" input input-bordered floating-input peer focus:border-accent-focus"
                    placeholder=" "
                    required
                  />
                  <label for="email" class="floating-label peer-focus:text-accent-focus">
                    Email
                  </label>
                </div>

                <div class="relative col-span-6 sm:col-span-3">
                  <input
                    bind:value={$storable.phone}
                    name="phone"
                    type="text"
                    id="phoneNo"
                    class=" input input-bordered floating-input peer focus:border-accent-focus"
                    placeholder=" "
                    required
                  />
                  <label for="phoneNo" class="floating-label peer-focus:text-accent-focus">
                    Phone Number
                  </label>
                </div>

                <div class="relative col-span-6 lg:col-span-3">
                  <input
                    bind:value={$storable.address}
                    name="address"
                    type="text"
                    id="address"
                    class=" input input-bordered floating-input peer focus:border-accent-focus"
                    placeholder=" "
                    required
                  />
                  <label for="address" class="floating-label peer-focus:text-accent-focus">
                    Street address
                  </label>
                </div>

                <div class="relative col-span-6 sm:col-span-6 lg:col-span-3">
                  <input
                    bind:value={$storable.city}
                    name="city"
                    type="text"
                    id="city"
                    class=" input input-bordered floating-input peer focus:border-accent-focus"
                    placeholder=" "
                    required
                  />
                  <label for="city" class="floating-label peer-focus:text-accent-focus">
                    City
                  </label>
                </div>

                <div class="relative col-span-6 sm:col-span-6 lg:col-span-3">
                  <input
                    bind:value={$storable.zip}
                    name="zip"
                    type="text"
                    id="zip"
                    class=" input input-bordered floating-input peer focus:border-accent-focus"
                    placeholder=" "
                  />
                  <label for="zip" class="floating-label peer-focus:text-accent-focus">
                    ZIP / Postal code
                  </label>
                </div>

                <div class="relative col-span-6 sm:col-span-6 lg:col-span-3">
                  <input
                    bind:value={$storable.state}
                    name="state"
                    type="text"
                    id="region"
                    class=" input input-bordered floating-input peer focus:border-accent-focus"
                    placeholder=" "
                    required
                  />
                  <label for="region" class="floating-label peer-focus:text-accent-focus"
                    >State / Province</label
                  >
                </div>

                <div class="relative col-span-6 sm:col-span-3">
                  <input
                    bind:value={$storable.country}
                    name="country"
                    type="text"
                    id="country"
                    class=" input input-bordered floating-input peer focus:border-accent-focus"
                    placeholder=" "
                    required
                  />
                  <label for="country" class="floating-label peer-focus:text-accent-focus">
                    Country
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
