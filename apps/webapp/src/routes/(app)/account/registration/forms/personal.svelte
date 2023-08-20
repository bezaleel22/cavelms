<script>
  import { user } from "$lib/store/auth";
  import { personal } from "$lib/store/storable";;
  $personal.gender = $personal.gender ?? "MALE";
  $personal.email = $user.email;
  $personal.firstName = $user.firstName;
  $personal.lastName = $user.lastName;

</script>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-6">Personal Information</h3>
        <p class="mt-1 text-sm">
          Please provide your accurate contact and personal information in the form below. Your
          details are important and will be used for communication and identification purposes.
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
                    bind:value={$personal.firstName}
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
                    bind:value={$personal.lastName}
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
                <fieldset class="relative col-span-6 sm:col-span-6">
                  <legend class="">Gender</legend>
                  <div class="mt-4 space-y-3 grid grid-rows-3">
                    <div class="flex items-center">
                      <div class="flex h-6 items-center">
                        <input
                          bind:group={$personal.gender}
                          type="radio"
                          name="gender"
                          value="MALE"
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
                          bind:group={$personal.gender}
                          type="radio"
                          name="gender"
                          value="FEMALE"
                          class="checkbox"
                        />
                      </div>
                      <div class="ml-3 text-sm leading-6">
                        <p class="text-gray-300">Female</p>
                      </div>
                    </div>
                  </div>
                </fieldset>

                <div class="relative col-span-6 sm:col-span-6">
                  <label for="" class="label">
                    <span class="label-text">Upload Passport Photo</span>
                  </label>
                  <input
                    name="photo"
                    type="file"
                    class="file-input file-input-bordered w-full"
                  />
                </div>

                <div class="relative col-span-6 sm:col-span-3">
                  <input
                    bind:value={$personal.dob}
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
                    readonly
                    bind:value={$personal.email}
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
                    bind:value={$personal.phone}
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
                    bind:value={$personal.address}
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
                    bind:value={$personal.city}
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
                    bind:value={$personal.zip}
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
                    bind:value={$personal.state}
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
                    bind:value={$personal.country}
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
