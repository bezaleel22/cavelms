import { load_Users, type Users$result } from "$houdini";
import { get } from "svelte/store";
import type { PageLoad } from "./$houdini";
import { dataStore } from "$lib/store/query";

export const load: PageLoad = async (event) => {
  const { Users } = await load_Users({ event });
  const { data } = get(Users);
  const { usersCollection } = data as Users$result;

  dataStore.set(usersCollection);
  return { Users };
};
