<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-6 ">Notifications</h3>
        <p class="mt-1 text-sm ">Decide which communications you'd like to receive and how.</p>
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-0">
      <form action="#" method="POST">
        <div class="overflow-hidden shadow sm:rounded-md">
          <div class="space-y-6 bg-base-100 px-4 py-5 sm:p-6">
            <fieldset>
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
            </fieldset>
            <div class="text-right">
              <button class="btn">Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
