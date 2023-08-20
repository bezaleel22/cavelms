import { user } from "$lib/store/auth";
import type { LoadEvent } from "@sveltejs/kit";
import type { LayoutLoad } from "./$types";
import { routes } from "$lib/store/routes";

export const load = (async ({ data }: LoadEvent) => {
  user.set(data?.user || {});
  routes.set(data?.routes || []);
  return {};
}) satisfies LayoutLoad;
