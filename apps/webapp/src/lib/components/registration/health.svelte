<script>
  import { storable } from "$lib/store/storable";
  $storable.healthConditions = $storable.healthConditions ?? [];
</script>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-6">Health</h3>
        <p class="mt-1 text-sm">
          Details about your health status. Check any of the following experiences below that apply
          to you
        </p>
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-0">
      <div class="card w-full bg-base-200 text-neutral-content mb-4">
        <div class="card-body shadow-lg p-6 pb-0">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="space-y-6 px-4 py-5 sm:p-6">
              <fieldset>
                <div class="text-sm font-semibold leading-6" aria-hidden="true">Health Status</div>
                <div class="mt-4 space-y-3 grid grid-cols-3">
                  <div class="flex items-center">
                    <div class="flex items-center">
                      <input
                        bind:group={$storable.healthConditions}
                        type="checkbox"
                        name="healthConditions"
                        value="I have a disability"
                        class="checkbox"
                      />
                    </div>
                    <div class="ml-3 text-sm leading-6">
                      <p class="text-gray-300">I have a disability</p>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={$storable.healthConditions}
                        type="checkbox"
                        name="healthConditions"
                        value="I’m on regular medication"
                        class="checkbox"
                      />
                    </div>
                    <div class="ml-3 text-sm leading-6">
                      <p class="text-gray-300">I am on regular medication</p>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={$storable.healthConditions}
                        type="checkbox"
                        name="healthConditions"
                        value="I have a Nervous/Mental illness"
                        class="checkbox"
                      />
                    </div>
                    <div class="ml-3 text-sm leading-6">
                      <p class="text-gray-300">I have a Nervous/Mental illness</p>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={$storable.healthConditions}
                        type="checkbox"
                        name="healthConditions"
                        value="I require a special diet"
                        class="checkbox"
                      />
                    </div>
                    <div class="ml-3 text-sm leading-6">
                      <p class="text-gray-300">I require a special diet</p>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={$storable.healthConditions}
                        type="checkbox"
                        name="healthConditions"
                        value="I am diabetic"
                        class="checkbox"
                      />
                    </div>
                    <div class="ml-3 text-sm leading-6">
                      <p class="text-gray-300">I am diabetic</p>
                    </div>
                  </div>

                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={$storable.healthConditions}
                        type="checkbox"
                        name="healthConditions"
                        value="I have a learning disability"
                        class="checkbox"
                      />
                    </div>
                    <div class="ml-3 text-sm leading-6">
                      <p class="text-gray-300">I have a learning disability</p>
                    </div>
                  </div>
                </div>

                <textarea
                  class="textarea textarea-bordered w-full mt-5"
                  name="healthIssueDescription"
                  id="healthIssueDescription"
                  placeholder="Describe any Other Health Issues "
                />
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
