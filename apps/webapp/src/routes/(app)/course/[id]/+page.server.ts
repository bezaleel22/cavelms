import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import { page } from "$app/stores";

export const load = (async ({ locals, params }) => {
  const { id } = params;
  throw redirect(302, `/programs/${id}/overview`);
}) satisfies PageServerLoad;
