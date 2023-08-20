import { mail } from "$lib/mail";
import { renderTemplate, renderText } from "$lib/mail/renderer";
import { fail, redirect } from "@sveltejs/kit";
import { RoleType, type Prisma, AllowedPermission, AllowedModel } from "@prisma/client";
import type { Action, Actions, PageServerLoad } from "./$types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { convert } from "html-to-text";
import { AUTH_SECRET } from "$env/static/private";

export const load: PageServerLoad = async ({ locals }) => {
  if (locals.authUser) {
    throw redirect(302, "/");
  }
};

const signup: Action = async (event) => {
  const formData = await event.request.formData();
  const data = Object.fromEntries(formData) as KeyValue;
  const { firstName, lastName, email, password, platform, program } = data;

  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(password as string, salt);

  // const role = await db.role.findUnique({ where: { roleType: RoleType.PROSPECTIVE } });
  // if (!role) {
  //   return fail(400, { messaage: `Role: ${RoleType.PROSPECTIVE} does not exist` });
  // }

  const user = await db.user.create({
    data: {
      fullName: `${firstName} ${lastName}`,
      firstName,
      lastName,
      email,
      passwordHash,
      enrollments: { create: [{ platform, program }] },
      role: { connect: { roleType: RoleType.PROSPECTIVE } },
    },
  });

  if (!user) {
    return fail(400, { messaage: "User not found" });
  }

  const jwtUser = { email };
  const verifyToken = jwt.sign(jwtUser, AUTH_SECRET, { expiresIn: "7d" });

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

  console.log({ verifyToken });

  await mail.sendMessage(messaage);
  throw redirect(302, `/verification/notice?email=${user?.email}`);
};

export const actions: Actions = { signup };
