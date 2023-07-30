import { browser } from "$app/environment";
import { user } from "$lib/store/auth";
import type { PageLoad } from "./$types";

export const load = (async ({ data, fetch }) => {
  user.set(data?.user || null);
  return {};
}) satisfies PageLoad;
