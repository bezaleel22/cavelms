import { SignInStore } from "$houdini";
import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";
import { dev } from "$app/environment";

export const load: PageServerLoad = async ({ locals }) => {
  if (locals?.authUser?.auth?.isAuthenticated) {
    throw redirect(302, "/");
  }
};

const login: Action = async (event) => {
  const { email, password } = Object.fromEntries(await event.request.formData());

  if (typeof email !== "string" || typeof password !== "string" || !email || !password) {
    return fail(400, { invalid: true, email, password });
  }

  const signin = new SignInStore();
  const response = await signin.mutate({ input: { email, password } }, { event });
  const authUser = response.data?.signIn;
  if (!authUser) {
    return fail(400, { response, credentials: true });
  }

  if (!authUser.isAuthenticated) {
    return fail(400, { response, credentials: true, email, password });
  }

  event.cookies.set("token", authUser.refreshToken.token, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: !dev,
    maxAge: authUser.refreshToken.expiresAt,
  });

  throw redirect(302, "/");
};

export const actions: Actions = { login };
