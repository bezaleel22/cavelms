import { load_Users, type Users$result } from "$houdini";
import { dataList } from "$lib/store/query";
import { get } from "svelte/store";
import type { PageLoad } from "./$houdini";

export const load: PageLoad = async (event) => {
  const { Users } = await load_Users({ event });
  const { data } = get(Users);
  const { usersCollection } = data as Users$result;

  dataList.set(usersCollection);
  return { Users };
};
