import { AUTH_SECRET } from "$env/static/private";
import { mail } from "$lib/mail";
import { renderTemplate } from "$lib/mail/renderer";
import { fail } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";
import jwt from "jsonwebtoken";
import { convert } from "html-to-text";

export const load: PageServerLoad = async (event) => {
  return {};
};

const resend: Action = async ({ url, request }) => {
  const { email } = Object.fromEntries(await request.formData()) as KeyValue;

  const user = await db.user.findUnique({ where: { email } });

  if (!user) {
    return fail(400, { message: "user session is undefined" });
  }

  const jwtUser = { tokenId: user.id };
  const verifyToken = jwt.sign(jwtUser, AUTH_SECRET, { expiresIn: "7d" });
  try {
    const html_body = await renderTemplate("http://localhost:8080/email/signup.html", {
      fullname: `${user?.firstName} ${user?.lastName}`,
      link: `http://localhost:8080/verification/verified?token=${verifyToken}`,
    });

    const messaage = {
      to: [`${user?.email}`],
      subject: "Email Verification",
      plain_body: convert(html_body),
      html_body,
    };
    const resend = await mail.sendMessage(messaage);
  //  console.log({ resend })
    return { email };
  } catch (error: any) {
    return fail(400, { error: error.message });
  }
};

export const actions: Actions = { resend };
