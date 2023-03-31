import { auth } from "$lib/server/auth";
import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  if (locals.user) {
    throw redirect(302, "/");
  }
};

const register: Action = async ({ request }) => {
  const data = await request.formData();
  const { email, password } = Object.fromEntries(data);

  if (typeof email !== "string" || typeof password !== "string" || !email || !password) {
    return fail(400, { invalid: true, email, password });
  }

  const user = await auth.signup(data);
  if (!user) {
    return fail(400, { credentials: true });
  }

  if (!user.isAuthenticated) {
    return fail(400, { credentials: true, email, password });
  }

  throw redirect(302, "/application");
};

export const actions: Actions = { register };
