import { auth } from "$lib/server/auth";
import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  if (locals.user) {
    throw redirect(302, "/");
  }
};

const login: Action = async ({ request }) => {
  const { email, password } = Object.fromEntries(await request.formData());

  if (typeof email !== "string" || typeof password !== "string" || !email || !password) {
    return fail(400, { invalid: true, email, password });
  }

  const user = await auth.signin({ email, password });
  if (!user) {
    return fail(400, { credentials: true });
  }

  if (!user.isAuthenticated) {
    return fail(400, { credentials: true, email, password });
  }

  throw redirect(302, "/");
};

export const actions: Actions = { login };
