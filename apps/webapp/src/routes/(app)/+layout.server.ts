import { auth } from "$lib/store/auth";
import { fail, redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../(auth)/login/$types";

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals.auth?.loggedIn) {
    // throw redirect(302, "/login");
  }
};
