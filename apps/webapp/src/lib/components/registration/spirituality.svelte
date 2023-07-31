<script>
  import { storable } from "$lib/store/storable";
  $storable.godsWorkings = $storable.godsWorkings ?? [];
</script>

<div class="mt-10 sm:mt-0">
  <div class="md:grid md:grid-cols-3 md:gap-6">
    <div class="md:col-span-1">
      <div class="px-4 sm:px-0">
        <h3 class="text-base font-semibold leading-6">Spirituality</h3>
        <p class="mt-1 text-sm">A Brief about your walk with God and Spiritual Experiences</p>
      </div>
    </div>
    <div class="mt-5 md:col-span-2 md:mt-0">
      <div class="card w-full bg-base-100 text-neutral-content mb-4">
        <div class="card-body shadow-lg p-6 pb-0">
          <div class="overflow-hidden shadow sm:rounded-md">
            <div class="space-y-6 px-4 py-5 sm:p-6">
              <fieldset>
                <legend class="sr-only">Your Christian Experience(s)</legend>
                <div class="text-sm font-semibold leading-6" aria-hidden="true">
                  Your Christian Experience(s)
                </div>
                <div class="mt-4 space-y-4 grid grid-cols-3 grid-rows-3">
                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={$storable.godsWorkings}
                        type="checkbox"
                        name="godsWorkings"
                        value="born again"
                        checked
                        class="checkbox"
                      />
                    </div>
                    <div class="ml-3 text-sm leading-6">
                      <p class="text-gray-300">I am Born Again</p>
                    </div>
                  </div>
                  <!-- end of item -->
                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={$storable.godsWorkings}
                        type="checkbox"
                        name="godsWorkings"
                        value="water baptism"
                        class="checkbox"
                      />
                    </div>
                    <div class="ml-3 text-sm leading-6">
                      <p class="text-gray-300">I am baptized in water</p>
                    </div>
                  </div>
                  <!-- end of item -->
                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={$storable.godsWorkings}
                        type="checkbox"
                        name="godsWorkings"
                        value="holy ghost baptism"
                        class="checkbox"
                      />
                    </div>
                    <div class="ml-3 text-sm leading-6">
                      <p class="text-gray-300">I am baptized in the Holy Spirit</p>
                    </div>
                  </div>
                  <!-- end of item -->
                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={$storable.godsWorkings}
                        type="checkbox"
                        name="godsWorkings"
                        value="speak in tongues"
                        class="checkbox"
                      />
                    </div>
                    <div class="ml-3 text-sm leading-6">
                      <p class="text-gray-300">I speak in tongues</p>
                    </div>
                  </div>
                  <!-- end of item -->
                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={$storable.godsWorkings}
                        type="checkbox"
                        name="godsWorkings"
                        value="spiritual gift"
                        class="checkbox"
                      />
                    </div>
                    <div class="ml-3 text-sm leading-6">
                      <p class="text-gray-300">I have at least one spiritual gift</p>
                    </div>
                  </div>
                  <!-- end of item -->
                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={$storable.godsWorkings}
                        type="checkbox"
                        name="godsWorkings"
                        value="church worker"
                        class="checkbox"
                      />
                    </div>
                    <div class="ml-3 text-sm leading-6">
                      <p class="text-gray-300">I am a Church Worker</p>
                    </div>
                  </div>
                  <!-- end of item -->
                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={$storable.godsWorkings}
                        type="checkbox"
                        name="godsWorkings"
                        value="call of God"
                        class="checkbox"
                      />
                    </div>
                    <div class="ml-3 text-sm leading-6">
                      <p class="text-gray-300">I have a call of God</p>
                    </div>
                  </div>
                  <!-- end of item -->
                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={$storable.godsWorkings}
                        type="checkbox"
                        name="godsWorkings"
                        value="serving in a ministry"
                        class="checkbox"
                      />
                    </div>
                    <div class="ml-3 text-sm leading-6">
                      <p class="text-gray-300">I am serving in a Ministry</p>
                    </div>
                  </div>
                  <!-- end of item -->
                  <div class="flex items-center">
                    <div class="flex h-6 items-center">
                      <input
                        bind:group={$storable.godsWorkings}
                        type="checkbox"
                        name="godsWorkings"
                        value="founder and pioneer of a ministry"
                        class="checkbox"
                      />
                    </div>
                    <div class="ml-3 text-sm leading-6">
                      <p class="text-gray-300">I am a founder/pioneer of a Ministry</p>
                    </div>
                  </div>
                  <!-- end of item -->

                  <textarea
                    class="textarea textarea-bordered col-span-3 my-5"
                    name="salvationBrief"
                    id="briefExperience"
                    placeholder="A Brief account of your Salvation Experience"
                  />

                  <textarea
                    class="textarea textarea-bordered col-span-3 my-5"
                    name="reason"
                    id="whyAdullam"
                    placeholder="Why do you want to attend Adullam?"
                  />
                </div>

                <!-- end of item -->
              </fieldset>
              <!-- end of grid fieldset -->

              <fieldset>
                <legend class="contents text-sm font-semibold leading-6"
                  >Ministry/Church Details</legend
                >
                <p class="text-sm text-gray-500">
                  Let's get in touch with where you are coming from.
                </p>

                <div class="overflow-hidden shadow sm:rounded-md">
                  <div class="bg-base-100 px-4 py-5 sm:p-6">
                    <div class="grid grid-cols-6 gap-6">
                      <div class="relative col-span-6 sm:col-span-3">
                        <input
                          name="pastorName"
                          type="text"
                          id="pastorName"
                          class=" input input-bordered floating-input peer focus:border-accent-focus"
                          placeholder=" "
                        />
                        <label for="pastorName" class="floating-label peer-focus:text-accent-focus">
                          Pastor Name
                        </label>
                      </div>

                      <div class="relative col-span-6 sm:col-span-3">
                        <input
                          name="pastorEmail"
                          type="text"
                          id="pastorEmail"
                          class=" input input-bordered floating-input peer focus:border-accent-focus"
                          placeholder=" "
                        />
                        <label
                          for="pastorEmail"
                          class="floating-label peer-focus:text-accent-focus"
                        >
                          Pastor's Email
                        </label>
                      </div>

                      <div class="relative col-span-6 sm:col-span-3">
                        <input
                          name="pastorPhone"
                          type="text"
                          id="pastorPhone"
                          class=" input input-bordered floating-input peer focus:border-accent-focus"
                          placeholder=" "
                        />
                        <label
                          for="pastorPhone"
                          class="floating-label peer-focus:text-accent-focus"
                        >
                          Pastor's Phone Number
                        </label>
                      </div>

                      <div class="relative col-span-6 sm:col-span-3">
                        <input
                          name="churchName"
                          type="text"
                          id="churchName"
                          class=" input input-bordered floating-input peer focus:border-accent-focus"
                          placeholder=" "
                        />
                        <label for="churchName" class="floating-label peer-focus:text-accent-focus">
                          Name of Ministry
                        </label>
                      </div>

                      <div class="relative col-span-6">
                        <input
                          name="churchAddress"
                          type="text"
                          id="churchAddress"
                          class=" input input-bordered floating-input peer focus:border-accent-focus"
                          placeholder=" "
                        />
                        <label
                          for="churchAddress"
                          class="floating-label peer-focus:text-accent-focus"
                        >
                          Ministry Address
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </fieldset>
              <!-- <div class="text-right">
              <button class="btn">{!firstTime ? "submit" : "save"}</button>
            </div> -->
            </div>
          </div>
        </div>
      </div>

      <!-- </form> -->
    </div>
  </div>
</div>
