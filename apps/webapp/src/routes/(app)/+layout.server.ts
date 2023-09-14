import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../(auth)/login/$types";

export const load = (async ({ locals }) => {
  if (!locals?.authUser) {
    throw redirect(302, "/login");
  }

  return {
    user: locals?.authUser,
    routes: locals.routes,
    settings: locals.settings,
  };
}) satisfies PageServerLoad;
