<script>
  // @ts-nocheck

  import { enhance } from "$app/forms";

  let healthConditions = [];

  const onSubmit = ({ form, data, action, cancel, submitter }) => {
    // `form` is the `<form>` element
    // `data` is its `FormData` object
    // `action` is the URL to which the form is posted
    // `cancel()` will prevent the submission
    // `submitter` is the `HTMLElement` that caused the form to be submitted

    data.set("healthConditions", healthConditions);

    return async ({ result, update }) => {
      // `result` is an `ActionResult` object
      // `update` is a function which triggers the logic that would be triggered if this callback wasn't set
      update();
    };
  };
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
      <div class="card w-full bg-base-100 text-neutral-content mb-4">
        <div class="card-body shadow-lg p-6 pb-0">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="space-y-6 px-4 py-5 sm:p-6">
              <fieldset>
                <div class="text-sm font-semibold leading-6" aria-hidden="true">Health Status</div>
                <div class="mt-4 space-y-4 grid grid-cols-3 grid-rows-3">
                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={healthConditions}
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
                  <!-- end of item -->
                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={healthConditions}
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
                  <!-- end of item -->
                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={healthConditions}
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
                  <!-- end of item -->
                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={healthConditions}
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
                  <!-- end of item -->
                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={healthConditions}
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
                  <!-- end of item -->
                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={healthConditions}
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

                  <textarea
                    class="textarea textarea-bordered col-span-3 my-5"
                    name="healthIssueDescription"
                    id="briefExperience"
                    placeholder="Other Health Issues Description"
                  />
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
