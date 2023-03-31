<div>
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-6 ">Profile</h3>
        <p class="mt-1 text-sm ">
          This information will be displayed publicly so be careful what you share.
        </p>
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-0">
      <form action="#" method="POST">
        <div class="shadow sm:overflow-hidden sm:rounded-md">
          <div class="space-y-6 bg-base-100 px-4 py-5 sm:p-6">
            <div class="relative mb-4">
              <input
                name="social"
                type="text"
                id="social"
                class=" input input-bordered floating-input peer focus:border-accent-focus"
                placeholder=" "
              />
              <label for="social" class=" floating-label peer-focus:text-accent-focus">
                Social Media
              </label>
            </div>

            <div class="relative mb-4">
              <textarea
                name="about"
                id="about"
                class="textarea textarea-bordered floating-input peer focus:border-accent-focus"
                placeholder=" "
              />
              <label for="about" class=" floating-label peer-focus:text-accent-focus">
                About
              </label>
            </div>

            <div class="">
              <p class="block text-sm font-medium leading-6 ml-3">Photo</p>
              <div class="mt-2 flex items-center">
                <div class="avatar placeholder">
                  <div class="bg-neutral-focus text-neutral-content rounded-full w-16">
                    <span class="text-xl">JO</span>
                  </div>
                </div>
                <button class="btn btn-sm btn-outline ml-5"> Change </button>
              </div>
            </div>

            <div>
              <p class="block text-sm font-medium leading-6 ">Cover photo</p>
              <div
                class="mt-2 flex justify-center rounded-md border-2 border-dashed px-6 pt-5 pb-6"
              >
                <div class="space-y-1 text-center">
                  <svg
                    class="mx-auto h-12 w-12 "
                    stroke="currentColor"
                    fill="none"
                    viewBox="0 0 48 48"
                    aria-hidden="true"
                  >
                    <path
                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <div class="flex text-sm ">
                    <label
                      for="file-upload"
                      class="relative cursor-pointer rounded-md bg-base-100 text-accent hover:accent-focus"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                    </label>
                    <p class="pl-1">or drag and drop</p>
                  </div>
                  <p class="text-xs">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>
            </div>
            <div class="text-right">
              <button class="btn">Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
