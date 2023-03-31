<script lang="ts">
  export let stat: string;
  export let name: string;
</script>

<div class="d-flex">
  <div class="flex-grow-1">
    <p class="text-muted fw-medium mb-2">{name}</p>
    <h4 class="mb-0">{stat}</h4>
  </div>

  <div class="flex-shrink-0 align-self-center">
    <div class="avatar-sm mini-stat-icon rounded-circle bg-primary">
      <span class="avatar-title">
        <slot name="icon" />
      </span>
    </div>
  </div>
</div>
