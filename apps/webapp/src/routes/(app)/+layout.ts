import { user } from "$lib/store/auth";
import type { LoadEvent } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";

export const load = (async ({ data }: LoadEvent) => {
  user.set(data?.user || {});
  return {};
}) satisfies LayoutLoad;
