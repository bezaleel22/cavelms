import { auth } from "$lib/store/auth";
import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  if (locals?.authUser?.loggedIn) {
    throw redirect(302, "/");
  }
};

const login: Action = async (event) => {
  const { email, password } = Object.fromEntries(await event.request.formData());

  if (typeof email !== "string" || typeof password !== "string" || !email || !password) {
    return fail(400, { invalid: true, email, password });
  }

  const authUser = (await auth.signin(event, { email, password })) as AuthUser;
  if (!authUser) {
    return fail(400, { credentials: true });
  }

  if (!authUser.loggedIn) {
    return fail(400, { credentials: true, email, password });
  }

  authUser.isAuthenticated = true;
  event.cookies.set("token", authUser.refreshToken as string, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: false,
    maxAge: authUser.tokenExpiredAt,
  });

  throw redirect(302, "/");
};

export const actions: Actions = { login };
