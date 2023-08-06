import { SignInStore, SignUpStore, type NewUser } from "$houdini";
import { mail } from "$lib/mail";
import { renderTemplate } from "$lib/mail/renderer";
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
  const { signUp } = resp.data;
  console.log({ token: signUp?.verifycationToken.token });
  const html = await renderTemplate("http://localhost:8080/email/signup.html", {
    fullname: `${signUp?.firstName} ${signUp?.lastName}`,
    link: `http://localhost:8080/?token=${signUp?.verifycationToken.token}`,
  });

  const response = await mail.sendMessage({
    to: [`${signUp?.email}`],
    from: "admin@beznet.org",
    sender: "Adullam",
    subject: "TEST MAIL",
    plain_body: "Hello from sveltkit application for adullam",
    html_body: html,
  });

  throw redirect(302, `/verify?email=${signUp?.email}&token=${signUp?.verifycationToken.token}`);
};

export const actions: Actions = { signup };
