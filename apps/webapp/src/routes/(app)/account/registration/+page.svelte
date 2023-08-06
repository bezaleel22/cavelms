<script>
  import { enhance } from "$app/forms";
  import { Documents, Health, Personal, Qualification, Referees, Spirituality } from "./forms";
  import { user } from "$lib/store/auth";
  import { storable, qualification, document, ref1, ref2 } from "$lib/store/storable";

</script>

<form
  action="?/register"
  method="post"
  use:enhance={({ data, cancel }) => {
    const userData = $storable;
    data.append("jsonData", JSON.stringify({ $storable, $qualification, $document, $ref1, $ref2 }));
    return ({ result, update }) => {
      console.log(result);
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
    <button class="btn btn-primary">Submit</button>
  </div>
</form>
