import { auth } from "$lib/store/auth";
import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  if (locals?.auth?.loggedIn) {
    throw redirect(302, "/");
  }
};

const login: Action = async ({ request, cookies }) => {
  const { email, password } = Object.fromEntries(await request.formData());

  if (typeof email !== "string" || typeof password !== "string" || !email || !password) {
    return fail(400, { invalid: true, email, password });
  }

  const user = await auth.signin({ email, password }) as AuthUser;
  if (!user) {
    return fail(400, { credentials: true });
  }

  if (!user.loggedIn) {
    return fail(400, { credentials: true, email, password });
  }

  // console.log(user);

  cookies.set("token", user.refreshToken as string, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: false,
    maxAge: user.tokenExpiredAt,
  });

  throw redirect(302, "/");
};

export const actions: Actions = { login };
