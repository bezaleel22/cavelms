<script>
  import { document } from "$lib/store/storable";
</script>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-6">Documents</h3>
        <p class="mt-1 text-sm">
          Upload your educational documentation below. Provide accurate details for each document
          and categorize them for better organization. Select the appropriate document type and fill
          in the required information before uploading the files.
        </p>
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-0">
      <div class="card w-full bg-base-200 text-neutral-content">
        <div class="card-body shadow-lg">
          <fieldset>
            <legend class="contents text-sm font-semibold leading-6">Document Upload </legend>
            <p class="text-sm text-gray-500 pb-5">Upload educational documentation</p>
            <div class="grid grid-cols-6 gap-6">
              <div class="relative col-span-6 sm:col-span-3">
                <input
                  required
                  bind:value={$document.title}
                  type="text"
                  id="title"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                />
                <label for="title" class="floating-label peer-focus:text-accent-focus">
                  Document Title
                </label>
              </div>
              <div class="relative col-span-6 sm:col-span-3">
                <input
                  bind:value={$document.description}
                  type="text"
                  id="description"
                  class=" input input-bordered floating-input peer focus:border-accent-focus"
                  placeholder=" "
                />
                <label for="description" class="floating-label peer-focus:text-accent-focus">
                  Description
                </label>
              </div>
            </div>
            <div class="relative col-span-6 sm:col-span-3">
              <label for="" class="label">
                <span class="label-text">Upload Transcript</span>
              </label>
              <input name="doc" type="file" class="file-input file-input-bordered w-full" />
            </div>
          </fieldset>
        </div>
      </div>
    </div>
  </div>
</div>
