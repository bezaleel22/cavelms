import { browser } from "$app/environment";
import { load_Users, type Users$result } from "$houdini";
import { get } from "svelte/store";
import type { PageLoad } from "./$houdini";

export const load: PageLoad = async (event) => {
  if (browser) {
    const { Users } = await load_Users({ event });
    const { data } = get(Users);
    const { usersCollection } = data as Users$result;
    // const result: Mutable<Users$result["usersCollection"] | null> = usersCollection;
    console.log({ usersCollection });
  }

  return {};
};
