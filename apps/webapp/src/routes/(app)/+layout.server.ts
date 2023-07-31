import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../(auth)/login/$types";

export const load = (async ({ locals }) => {
  if (!locals?.authUser?.auth?.isAuthenticated) {
    throw redirect(302, "/login");
  }
  return {
    user: locals?.authUser,
  };
}) satisfies PageServerLoad;
