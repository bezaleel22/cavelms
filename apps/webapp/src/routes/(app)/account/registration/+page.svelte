<script lang="ts">
  import { enhance } from "$app/forms";

  import {
    personal,
    spirit,
    health,
    qualification,
    document,
    ref1,
    ref2,
  } from "$lib/store/storable";
  import { Documents, Health, Personal, Qualification, Referees, Spirituality } from "./forms";

  let loading = false;
</script>

<form
  action="?/register"
  method="post"
  use:enhance={({ data, cancel }) => {
    loading = true;
    const userData = { $personal, $spirit, $health, $qualification, $document, $ref1, $ref2 };
    data.append("jsonData", JSON.stringify({ ...userData }));

    return ({ result, update }) => {
      console.log(result);
      loading = false;
      update();
    };
  }}
>
  <div class="p-5">
    <Personal />
  </div>
  <div class="divider" />
  <div class="p-5">
    <Spirituality />
  </div>
  <div class="divider" />
  <div class="p-5">
    <Health />
  </div>
  <div class="divider" />
  <div class="p-5">
    <Qualification />
  </div>
  <div class="divider" />
  <div class="p-5">
    <Referees />
  </div>
  <div class="divider" />
  <div class="p-5">
    <Documents />
  </div>
  <div class="divider" />
  <div class="text-right p-5">
    {#if loading}
      <span class="loading loading-spinner loading-sm" />
    {/if}
    <button class="btn btn-primary">Submit</button>
  </div>
</form>
