<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-6 ">Personal Information</h3>
        <p class="mt-1 text-sm ">Use a permanent address where you can receive mail.</p>
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-0">
      <form action="#" method="POST">
        <div class="overflow-hidden shadow sm:rounded-md">
          <div class="bg-base-100 px-4 py-5 sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="relative col-span-6 sm:col-span-3">
                <input
                  name="firstName"
                  type="text"
                  id="firstName"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                />
                <label for="firstName" class="floating-label peer-focus:text-accent-focus">
                  First Name
                </label>
              </div>

              <div class="relative col-span-6 sm:col-span-3">
                <input
                  name="lastName"
                  type="text"
                  id="lastName"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                />
                <label for="lastName" class="floating-label peer-focus:text-accent-focus">
                  Last Name
                </label>
              </div>

              <div class="relative col-span-6 sm:col-span-3">
                <input
                  name="email"
                  type="text"
                  id="email"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                />
                <label for="email" class="floating-label peer-focus:text-accent-focus">
                  Email
                </label>
              </div>

              <div class="relative col-span-6 sm:col-span-3">
                <select
                  name="lastName"
                  id="lastName"
                  class=" select input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                >
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
                <label for="lastName" class="floating-label peer-focus:text-accent-focus">
                  Last Name
                </label>
              </div>

              <div class="relative col-span-6">
                <input
                  name="address"
                  type="text"
                  id="address"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                />
                <label for="address" class="floating-label peer-focus:text-accent-focus">
                  Street address
                </label>
              </div>

              <div class="relative col-span-6 sm:col-span-6 lg:col-span-2">
                <input
                  name="city"
                  type="text"
                  id="city"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                />
                <label for="city" class="floating-label peer-focus:text-accent-focus"> City </label>
              </div>

              <div class="relative col-span-6 sm:col-span-6 lg:col-span-2">
                <input
                  name="region"
                  type="text"
                  id="region"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                />
                <label for="region" class="floating-label peer-focus:text-accent-focus"
                  >State / Province</label
                >
              </div>

              <div class="relative col-span-6 sm:col-span-6 lg:col-span-2">
                <input
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
            </div>

            <div class="text-right mt-4">
              <button class="btn">Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
