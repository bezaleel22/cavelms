<script lang="ts">
  import type { PageData } from "./$houdini";
  import type { User$result } from "$houdini";

  export let data: PageData;
  $: ({ User } = data);
  $: ({ user } = $User.data as User$result);

  $: console.log(user);
</script>
