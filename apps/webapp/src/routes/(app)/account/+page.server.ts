import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async ({ locals }) => {
  if (!locals?.authUser?.auth?.isAuthenticated) {
    throw redirect(302, "/login");
  }
}) satisfies PageServerLoad;

export const actions: Actions = {
  register: async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    return { data };
  },

  spiritual: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());

    return { data };
  },

  health: async ({ request }) => {
    const data = Object.fromEntries(await request.formData());

    return { data };
  },
};
