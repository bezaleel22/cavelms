<script lang="ts">
  import { enhance } from "$app/forms";

  let plus = 0;
  let matches: number[] = [1,2,3,4];
  let options: string[] = ["A", "B", "C", "D"];
  let answers: string[] = [];
  let matchModal: HTMLDialogElement;

  const answer = (node: any, index: number) => {
    answers = [...answers, options[index]];
  };

  const setMatches = (index: number) => {
    if (index > 0) {
      matches.splice(index, 1);
      matches = [...matches];
      console.log(matches);
      return;
    }

    if (matches.length != options.length) matches = [...matches, index];
  };

  const onchange = (e: Event) => {};
</script>

<div class="flex justify-end">
  <button class="btn" on:click={() => matchModal.show()}>open modal</button>
</div>

<div class="card w-full bg-base-200 text-neutral-content">
  <div class="card-body shadow-lg p-6">
    <h4 class="font-bold text-lg">Match the following items as they are related</h4>
    <span class="badge badge-outline">Matching</span>
    <div class="flex justify-between">
      <h4 class="opacity-30 mb-4">Base on where each animals leaves, match the following</h4>
      <span class="badge badge-primary btn-sm">
        {"5 Marks"}
      </span>
    </div>

    <ul>
      {#each matches as match, i}
        <div use:answer={i} class="grid grid-cols-9 gap-6 mt-4">
          <div class="relative my-auto col-span-6 sm:col-span-2">
            <li>{`Item-${i}`}</li>
          </div>

          <div class="relative col-span-6 sm:col-span-4">
            <select
              name="degree"
              class=" input input-bordered floating-input peer focus:border-accent-focus"
            >
              <option>Choose a match</option>
              <option>OND/NCE</option>
              <option>HND</option>
              <option>BA/BSc</option>
              <option>Masters</option>
              <option>PhD</option>
            </select>
            <label for="degree" class="floating-label peer-focus:text-accent-focus"> Answer </label>
          </div>

          <div class="flex justify-end my-auto col-span-6 sm:col-span-1">
            <span class="badge badge-primary btn-sm btn-square m:col-span-1">{options[i]}</span>
          </div>

          <div class="relative col-span-6 my-auto sm:col-span-2">
            <li>{`Match-${i}`}</li>
          </div>
        </div>
      {/each}
    </ul>
  </div>
</div>

<dialog bind:this={matchModal} id="my_modal_3" class="modal">
  <div class="modal-box w-6/12 max-w-5xl">
    <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h3 class="font-bold text-lg mb-4">Matching Pair Question Type</h3>
    <form
      action="?/matching"
      method="post"
      use:enhance={({ data, cancel }) => {
        console.log(Object.fromEntries(data));
        cancel();
      }}
    >
      <fieldset class="grid grid-cols-6 gap-4 mb-4">
        <div class="relative col-span-6 sm:col-span-6">
          <input
            name="question"
            type="text"
            class=" input input-bordered floating-input peer focus:border-accent-focus"
            placeholder=" "
          />
          <label for="lastName" class="floating-label peer-focus:text-accent-focus">Question</label>
        </div>

        <div class="relative col-span-6 lg:col-span-6">
          <textarea
            name="description"
            class=" textarea textarea-bordered floating-input peer focus:border-accent-focus"
            placeholder="Description the question"
          />
        </div>
      </fieldset>

      <h3 class="mb-4">Matching Answers</h3>
      <div class="divider" />
      {#each matches as match, i}
        <fieldset use:answer={i} class="grid grid-cols-12 gap-6 mt-4">
          <span class="badge badge-primary my-auto btn-sm btn-square m:col-span-1">
            {options[i]}
          </span>
          <div class="relative col-span-6 sm:col-span-4">
            <input
              name={`item-${options[i]}`}
              type="text"
              class=" input input-bordered floating-input peer focus:border-accent-focus"
              placeholder=" "
            />
            <label for="lastName" class="floating-label peer-focus:text-accent-focus"> Item </label>
          </div>

          <div class="relative col-span-6 sm:col-span-4">
            <input
              name={`match-${options[i]}`}
              type="text"
              class=" input input-bordered floating-input peer focus:border-accent-focus"
              placeholder=" "
            />
            <label for="lastName" class="floating-label peer-focus:text-accent-focus">
              Match
            </label>
          </div>

          <div class="relative col-span-6 lg:col-span-2">
            <input
              name={`score-${options[i]}`}
              type="number"
              class=" input input-bordered floating-input peer focus:border-accent-focus"
              placeholder=" "
            />
            <label for="score" class="floating-label peer-focus:text-accent-focus"> Score </label>
          </div>

          <button
            type="button"
            on:click={() => setMatches(i)}
            class="btn btn-outline my-auto btn-sm btn-square col-span-6 sm:col-span-1"
          >
            {plus == i ? "+" : "-"}
          </button>
        </fieldset>
      {/each}
      <div class="modal-action">
        <button class="btn">Close</button>
      </div>
    </form>
  </div>
</dialog>
