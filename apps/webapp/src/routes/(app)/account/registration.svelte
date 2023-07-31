<script>
  import { browser } from "$app/environment";
  import { enhance } from "$app/forms";
  import {
    Documents,
    Health,
    Personal,
    Referees,
    Spirituality,
  } from "$lib/components/Registration";
  import { user } from "$lib/store/auth";
  import { storable } from "$lib/store/storable";
</script>

<form
  action="?/register&id={$user.auth.id}"
  method="post"
  use:enhance={({ data }) => {
    Object.entries($storable).map(([key, value]) => data.set(key, value));
    return ({ update }) => {
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

  <!-- <div class="p-5">
    <Referees />
  </div>

  <div class="p-5">
    <Documents />
  </div> -->

  <div class="text-right p-5">
    <button class="btn btn-primary">Submit</button>
  </div>
</form>
