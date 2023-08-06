import { SignInStore, SignUpStore, VerificationStore, type NewUser } from "$houdini";
import { mail } from "$lib/mail";
import { renderTemplate } from "$lib/mail/renderer";
import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
  const refreshToken = event.url.searchParams.get("token") as string;
  const verify = new VerificationStore();
  const resp = await verify.mutate({ refreshToken }, { event });
  const isVerified = resp.data?.verifyEmail?.isVerified;

  return {
    verified: isVerified ?? false,
  };
};

const resend: Action = async (event) => {
  const input = Object.fromEntries(await event.request.formData());

  const html = await renderTemplate(new URL("http://localhost:8080/email/signup.html"), {
    fullname: input?.fullName as string,
    link: `http://localhost:8080/?token${input.token}`,
  });

  const response = await mail.sendMessage({
    to: [`${input.email}`],
    from: "admin@beznet.org",
    sender: "Adullam",
    subject: "TEST MAIL",
    plain_body: "Hello from sveltkit application for adullam",
    html_body: html,
  });
};

export const actions: Actions = { resend };
