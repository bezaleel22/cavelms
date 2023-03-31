<script lang="ts">
  import file from "$lib/graphql/file";

  let uploaded: any;
  let title: string;

  const handleSubmit = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get("id");

    let payload = { userId: id, title, category: "Others", file: null };
    file.query("create", payload, uploaded);
  };

  const onFileSelected = (e: any) => {
    uploaded = e.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(uploaded);
    reader.onload = (e: any) => {
      let preview = e.target.result;
    };
  };

</script>

<div>
  <h5 class="text-primary text-center">Referee Form Upload</h5>
  <p class="text-muted text-center">
    Upload the completed filled referee form here
  </p>
</div>

<div class="mt-4">
  <form>
    <div class="row">
      <div class="col-lg-12">
        <div class="form-group mb-3">
          <input
            class="form-control"
            type="file"
            id="formFile"
            on:change={(e) => onFileSelected(e)}
          />
        </div>
      </div>
    </div>
    <div class="text-center">
      <button
        on:click|preventDefault={handleSubmit}
        type="button"
        class="btn btn-primary"
      >
        Submit
      </button>
    </div>
  </form>
</div>
