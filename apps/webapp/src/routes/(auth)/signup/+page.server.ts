import { SignInStore, SignUpStore, type NewUser } from "$houdini";
import { auth } from "$lib/store/auth";
import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  if (locals?.authUser?.loggedIn) {
    throw redirect(302, "/");
  }
};

const signup: Action = async (event) => {
  const input = Object.fromEntries(await event.request.formData()) as NewUser;

  const signup = new SignUpStore();
  const up = await signup.mutate({ input }, { event });
  if (!up.data) {
    return fail(400, { ...input });
  }

  const { email, password } = input;
  const signin = new SignInStore();
  const response = await signin.mutate({ input: { email, password } }, { event });

  if (!response.data) return fail(400, { ...response });
  const authUser = response.data.signIn;

  if (!authUser?.isAuthenticated) {
    return fail(400, { ...response });
  }

<<<<<<< HEAD
  if (!user.loggedIn) {
    return fail(400, { credentials: true, data });
  }
=======
  event.cookies.set("token", authUser.refreshToken.token, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: false,
    maxAge: authUser.refreshToken.expiresAt,
  });
>>>>>>> 2e7e4d4d248d03120f5fa9e1b700d3a1f7d067e3

  throw redirect(302, "/account");
};

<<<<<<< HEAD
export const actions: Actions = { signup };
=======
export const actions: Actions = { signup };
>>>>>>> 2e7e4d4d248d03120f5fa9e1b700d3a1f7d067e3
