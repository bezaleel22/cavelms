import { SignInStore, SignUpStore, type NewUser } from "$houdini";
import { mail } from "$lib/mail";
import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  if (locals.authUser?.auth?.isAuthenticated) {
    throw redirect(302, "/");
  }
};

const signup: Action = async (event) => {
  const input = Object.fromEntries(await event.request.formData()) as NewUser;

  const signup = new SignUpStore();
  const resp = await signup.mutate({ input }, { event });
  if (!resp.data) {
    return fail(400, { ...resp });
  }

  const response = await mail.sendMessage({
    to: ["beznet22@gmail.com"],
    from: "admin@beznet.org",
    sender: "Adullam",
    subject: "TEST MAIL",
    plain_body: "Hello from sveltkit application for adullam",
    html_body: "<p>Hello from adullam<p>",
  });

  throw redirect(302, "/verify/notification");
};

export const actions: Actions = { signup };
