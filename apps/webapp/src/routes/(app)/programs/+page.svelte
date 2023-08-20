<div class="overflow-x-auto">
  <div class="flex align-end justify-between my-2 md:p-2 md:pr-10">
    <h1 class="text-lg my-5 font-bold sm:text-xl">ALL COURSES</h1>
    <!-- <p class="font-bold uppercase mx-2">Create Course</p> -->
    <label for="my-modal" class="btn font-light uppercase mx-2 sm:font-bold">
      Create Course
      <div class="i-bx:bxs-add-to-queue text-xl text-primary mx-2 sm:text-3xl" />
    </label>
  </div>

  <!-- Table to display all courses -->

  <table class="table table-zebra w-full">
    <!-- head -->
    <thead>
      <tr>
        <th>SN</th>
        <th>Course</th>
        <th class="hidden md:block">Type</th>
        <th>Instructor</th>
      </tr>
    </thead>
    <tbody>
      <!-- row 1 -->

      <tr>
        <th>1</th>
        <td><a href=" ">Introduction to Apologetics</a></td>
        <td class="hidden md:block">Short Course</td>
        <td>Rev. Dan Ogidi</td>
      </tr>

      <!-- row 2 -->
      <tr>
        <th>2</th>
        <td><a href=" ">New Testament Survey</a></td>
        <td class="hidden md:block">Short Course</td>
        <td>Rev. George Agbike</td>
      </tr>
      <!-- row 3 -->
      <tr>
        <th>3</th>
        <td><a href=" ">Cross Cultural Missions</a></td>
        <td class="hidden md:block">Short Course</td>
        <td>Evang. Shaala Uka</td>
      </tr>
      <!-- row 4 -->
      <tr>
        <th>4</th>
        <td><a href=" ">Cross Cultural Missions</a></td>
        <td class="hidden md:block">Short Course</td>
        <td>Evang. Shaala Uka</td>
      </tr>
    </tbody>
  </table>

  <!-- The Create Course Modal. Put this part before </body> tag -->

  <input type="checkbox" id="my-modal" class="modal-toggle" />
  <div class="modal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Create A New Course</h3>

      <form action="#">
        <div class="mt-4 grid grid-cols-4">
          <!-- input -->
          <div class="relative col-span-4 sm:col-span-2 mr-2 mb-4">
            <input
              name="code"
              type="text"
              id="code"
              class=" input input-bordered floating-input peer focus:border-accent-focus"
              placeholder=" "
              required
            />
            <label for="code" class="floating-label peer-focus:text-accent-focus">
              Course Code
            </label>
          </div>
          <!-- end of input -->

          <!-- input -->
          <div class="relative col-span-4 sm:col-span-2 mr-2 mb-4">
            <input
              name="title"
              type="text"
              id="title"
              class=" input input-bordered floating-input peer focus:border-accent-focus"
              placeholder=" "
              required
            />
            <label for="title" class="floating-label peer-focus:text-accent-focus">
              Course Title
            </label>
          </div>
          <!-- end of input -->

          <!-- input -->
          <div class="relative col-span-4 sm:col-span-2 mr-2 mb-4">
            <select
              name="programType"
              id="programType"
              class=" select input-bordered floating-input peer focus:border-accent-focus"
              placeholder=" "
              required
            >
              <option value="diploma">Diploma</option>
              <option value="pgdt">PGDT</option>
            </select>
            <label for="programType" class="floating-label peer-focus:text-accent-focus">
              Program Type
            </label>
          </div>
          <!-- end of input -->

          <!-- input -->
          <div class="relative col-span-4 sm:col-span-2 mr-2 mb-4">
            <select
              name="type"
              id="type"
              class=" select input-bordered floating-input peer focus:border-accent-focus"
              placeholder=" "
              required
            >
              <option value="lessons">Lessons</option>
              <option value="practicum">Practicum</option>
              <option value="short_Course">Short Course</option>
            </select>
            <label for="type" class="floating-label peer-focus:text-accent-focus">
              Course Type
            </label>
          </div>
          <!-- end of input -->

          <!-- input -->
          <div class="relative col-span-4 sm:col-span-2 mr-2 mb-4">
            <select
              name="instructorIds"
              id="instructorIds"
              class=" select input-bordered floating-input peer focus:border-accent-focus"
              placeholder=" "
              required
            >
              <option value="rev dan">Rev. Dan Ogidi</option>
              <option value="rev george">Rev. George Agbike</option>
            </select>
            <label for="gender" class="floating-label peer-focus:text-accent-focus">
              Instructor
            </label>
          </div>
          <!-- end of input -->

          <!-- input -->
          <div class="relative col-span-4 sm:col-span-2 mr-2 mb-4">
            <select
              name="semester"
              id="semester"
              class=" select input-bordered floating-input peer focus:border-accent-focus"
              placeholder=" "
              required
            >
              <option value="first">First</option>
              <option value="second">Second</option>
            </select>
            <label for="semester" class="floating-label peer-focus:text-accent-focus">
              Semester
            </label>
          </div>
          <!-- end of input -->

          <!-- input -->
          <div class="relative col-span-4 sm:col-span-2 mr-2 mb-4">
            <input
              name="startDate"
              type="date"
              id="startDate"
              class=" input input-bordered floating-input peer focus:border-accent-focus"
              placeholder=" "
              required
            />
            <label for="startDate" class="floating-label peer-focus:text-accent-focus">
              Start Date
            </label>
          </div>
          <!-- end of input -->

          <!-- input -->
          <div class="relative col-span-4 sm:col-span-2 mr-2 mb-4">
            <input
              name="endDate"
              type="date"
              id="endDate"
              class=" input input-bordered floating-input peer focus:border-accent-focus"
              placeholder=" "
              required
            />
            <label for="endDate" class="floating-label peer-focus:text-accent-focus">
              End Date
            </label>
          </div>
          <!-- end of input -->

          <!-- input -->
          <textarea
            class="textarea textarea-bordered col-span-4 sm:col-span-4 mr-2 mb-4"
            name="description"
            id="description"
            placeholder="Course Description"
          />
          <!-- end of input -->

          <div class="relative col-span-4 sm:col-span-4 mr-2 mb-4">
            <div class="form-control w-full max-w-xs">
              <!-- svelte-ignore a11y-label-has-associated-control -->
              <label class="label"><span class="label-text">Course Flyer</span></label>
              <input
                type="file"
                name="coverImageUrl"
                class="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
          </div>
          <!-- end of input -->
        </div>

        <div class="modal-action">
          <button class="btn">Create</button>
          <label for="my-modal" class="btn">Cancel</label>
        </div>
      </form>
    </div>
  </div>
</div>