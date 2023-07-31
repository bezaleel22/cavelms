import { SignInStore, SignUpStore, ResetStore, type NewUser } from "$houdini";
import { auth } from "$lib/store/auth";
import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  if (locals?.authUser?.loggedIn) {
    throw redirect(302, "/");
  }
};

const change_password: Action = async (event) => {
  const input = Object.fromEntries(await event.request.formData()) as NewUser;

  const change = new SignUpStore();
  const up = await change.mutate({ input }, { event });
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

  event.cookies.set("token", authUser.refreshToken.token, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: false,
    maxAge: authUser.refreshToken.expiresAt,
  });

  throw redirect(302, "/account");
};

export const actions: Actions = { change_password };
