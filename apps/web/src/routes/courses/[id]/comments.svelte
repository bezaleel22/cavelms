<script>
  import { Card, CardBody, CardTitle } from "sveltestrap";
  export let comments;
</script>

<Card>
  <CardBody>
    <CardTitle class="mb-4">Comments</CardTitle>
    {#each comments as comment}
      <div class="d-flex mb-4">
        <div class="flex-shrink-0 me-3">
          {#if comment.userImg}
            <img
              class="d-flex-object rounded-circle avatar-xs"
              alt=""
              src={comment.userImg}
            />
          {:else}
            <div class="avatar-xs">
              <span
                class="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-16"
              >
                {comment.username.charAt(0)}
              </span>
            </div>
          {/if}
        </div>
        <div class="flex-grow-1">
          <h5 class="font-size-13 mb-1">{comment.username}</h5>
          <p class="text-muted mb-1">{comment.comment}</p>
          {#if comment.reply}
            <div class="d-flex mt-3">
              <div class="avatar-xs me-3">
                {#if comment.reply.userImg}
                  <img
                    class="media-object rounded-circle avatar-xs"
                    alt=""
                    src={comment.userImg}
                  />
                {:else}
                  <span
                    class="avatar-title rounded-circle bg-primary bg-soft text-primary font-size-16"
                  >
                    {comment.reply.username.charAt(0)}
                  </span>
                {/if}
              </div>
              <div class="flex-grow-1">
                <h5 class="font-size-13 mb-1">Jeffrey Walker</h5>
                <p class="text-muted mb-1">as a skeptical Cambridge friend</p>
              </div>
              <div class="ms-3">
                <a href="/#" class="text-primary">Reply</a>
              </div>
            </div>
          {/if}
        </div>
        <div class="ms-3">
          <a href="/#" class="text-primary">Reply</a>
        </div>
      </div>
    {/each}
    <div class="text-center mt-4 pt-2">
      <a href="/#" class="btn btn-primary btn-sm">View more</a>
    </div>
  </CardBody>
</Card>
