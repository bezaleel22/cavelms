<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
</script>


<div class="i-bx:bxs-user-plus text-6xl text-primary"></div>

<div class="tabs">
  <a class="tab tab-lifted">Tab 1</a> 
  <a class="tab tab-lifted tab-active">Tab 2</a> 
  <a class="tab tab-lifted">Tab 3</a>
</div>

<!-- The button to open modal -->
<label for="my-modal" class="btn">open modal</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my-modal" class="modal-toggle" />
<div class="modal">
  <div class="modal-box">
    <h3 class="font-bold text-lg">Congratulations random Internet user!</h3>
    <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
    <div class="modal-action">
      <label for="my-modal" class="btn">Yay!</label>
    </div>
  </div>
</div>