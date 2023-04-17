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

      data.set("healthConditions", healthConditions)

      return async ({ result, update }) => {
        // `result` is an `ActionResult` object
        // `update` is a function which triggers the logic that would be triggered if this callback wasn't set
        update();
      };
  }
</script>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-6 ">Health</h3>
        <p class="mt-1 text-sm ">Details about your health status. Check any of the following experiences below that apply to you</p>
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-0">
      <form action="?/health" method="POST" use:enhance={onSubmit}>
        <div class="overflow-hidden shadow sm:rounded-md">
          <div class="space-y-6 bg-base-100 px-4 py-5 sm:p-6">

            <fieldset>
              <div class="text-sm font-semibold leading-6 " aria-hidden="true">Health Status</div>
              
              <!-- grid for christian experiences begin -->
              <div class="mt-4 space-y-4 grid grid-cols-3 grid-rows-3">

                <div class="flex items-center">
                  <div class="flex h-6 items-center">
                    <input bind:group={healthConditions} type="checkbox" name="healthConditions" value="I have a disability" class="checkbox" />
                  </div>
                  <div class="ml-3 text-sm leading-6">
                    <p class="text-gray-300">
                      I have a disability
                    </p>
                  </div>
                </div>
                <!-- end of item -->
                <div class="flex items-center">
                  <div class="flex h-6 items-center">
                    <input bind:group={healthConditions} type="checkbox" name="healthConditions" value="I’m on regular medication" class="checkbox" />
                  </div>
                  <div class="ml-3 text-sm leading-6">
                    <p class="text-gray-300">
                      I am on regular medication
                    </p>
                  </div>
                </div>
                <!-- end of item -->
                <div class="flex items-center">
                  <div class="flex h-6 items-center">
                    <input bind:group={healthConditions} type="checkbox" name="healthConditions" value="I have a Nervous/Mental illness" class="checkbox" />
                  </div>
                  <div class="ml-3 text-sm leading-6">
                    <p class="text-gray-300">
                      I have a Nervous/Mental illness
                    </p>
                  </div>
                </div>
                <!-- end of item -->
                <div class="flex items-center">
                  <div class="flex h-6 items-center">
                    <input bind:group={healthConditions} type="checkbox" name="healthConditions" value="I require a special diet" class="checkbox" />
                  </div>
                  <div class="ml-3 text-sm leading-6">
                    <p class="text-gray-300">
                      I require a special diet
                    </p>
                  </div>
                </div>
                <!-- end of item -->
                <div class="flex items-center">
                  <div class="flex h-6 items-center">
                    <input bind:group={healthConditions} type="checkbox" name="healthConditions" value="I am diabetic" class="checkbox" />
                  </div>
                  <div class="ml-3 text-sm leading-6">
                    <p class="text-gray-300">
                      I am diabetic
                    </p>
                  </div>
                </div>
                <!-- end of item -->
                <div class="flex items-center">
                  <div class="flex h-6 items-center">
                    <input bind:group={healthConditions} type="checkbox" name="healthConditions" value="I have a learning disability" class="checkbox" />
                  </div>
                  <div class="ml-3 text-sm leading-6">
                    <p class="text-gray-300">
                      I have a learning disability
                    </p>
                  </div>
                </div>
                <!-- end of item -->
                
                <textarea class="textarea textarea-bordered col-span-3 my-5" name="healthIssueDescription" id="briefExperience" placeholder="Other Health Issues Description"></textarea>

              </div>


              <!-- end of item -->
            </fieldset>
            <!-- end of grid fieldset -->



            <!-- <fieldset>
              <legend class="sr-only">By Email</legend>
              <div class="text-sm font-semibold leading-6 " aria-hidden="true">By Email</div>
              <div class="mt-4 space-y-4">
                <div class="flex items-start">
                  <div class="flex h-6 items-center">
                    <input type="checkbox" checked class="checkbox" />
                  </div>
                  <div class="ml-3 text-sm leading-6">
                    <label for="comments" class="font-medium ">Comments</label>
                    <p class="text-gray-500">
                      Get notified when someones posts a comment on a posting.
                    </p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex h-6 items-center">
                    <input type="checkbox" class="checkbox" />
                  </div>
                  <div class="ml-3 text-sm leading-6">
                    <label for="candidates" class="font-medium ">Candidates</label>
                    <p class="text-gray-500">Get notified when a candidate applies for a job.</p>
                  </div>
                </div>

                <div class="flex items-start">
                  <div class="flex h-6 items-center">
                    <input type="checkbox" checked class="checkbox" />
                  </div>
                  <div class="ml-3 text-sm leading-6">
                    <label for="offers" class="font-medium ">Offers</label>
                    <p class="text-gray-500">
                      Get notified when a candidate accepts or rejects an offer.
                    </p>
                  </div>
                </div>
              </div>
            </fieldset>
            <fieldset>
              <legend class="contents text-sm font-semibold leading-6 ">Push Notifications</legend>
              <p class="text-sm text-gray-500">These are delivered via SMS to your mobile phone.</p>
              <div class="mt-4 space-y-4">
                <div class="flex items-center">
                  <input type="radio" name="radio-1" class="radio" />
                  <label for="push-everything" class="ml-3 block text-sm font-medium leading-6 "
                    >Everything</label
                  >
                </div>
                <div class="flex items-center">
                  <input type="radio" name="radio-1" class="radio" />
                  <label for="push-email" class="ml-3 block text-sm font-medium leading-6 "
                    >Same as email</label
                  >
                </div>
                <div class="flex items-center">
                  <input type="radio" name="radio-1" class="radio" />
                  <label for="push-nothing" class="ml-3 block text-sm font-medium leading-6 "
                    >No push notifications</label
                  >
                </div>
              </div>
            </fieldset> -->
            <div class="text-right">
              <button class="btn">Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
