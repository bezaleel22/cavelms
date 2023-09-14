import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ locals }) => {
    throw redirect(302, "/settings/general");
  
}) satisfies PageServerLoad;

