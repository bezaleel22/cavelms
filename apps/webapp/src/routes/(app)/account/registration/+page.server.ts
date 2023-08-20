import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { mkdirSync, writeFileSync } from "fs";
import { RoleType, EnrollmentStatus, AllowedModel } from "@prisma/client";
import { renderTemplate, renderText } from "$lib/mail/renderer";
import { mail } from "$lib/mail";
import { convert } from "html-to-text";
import { AUTH_SECRET } from "$env/static/private";
import jwt from "jsonwebtoken";
import { getFirstName, getLastName, splitName } from "$lib/utils";

export const load = (async ({ locals }) => {
  if (!locals?.authUser) {
    throw redirect(302, "/login");
  }
}) satisfies PageServerLoad;

export const actions: Actions = {
  register: async (event) => {
    const userId = event.locals?.authUser?.id as string;
    const formdata = await event.request.formData();
    const data = Object.fromEntries(formdata);
    const userData = JSON.parse(data.jsonData as string);
    const photo = formdata.get("photo") as File;
    const doc = formdata.get("doc") as File;

    const { $personal, $spirit, $health, $qualification, $ref1, $ref2 } = userData;
    const dir = `static/uploads`;

    try {
      if (photo.size) {
        const ab = await photo.arrayBuffer();
        mkdirSync(dir, { recursive: true });
        writeFileSync(`${dir}/${photo.name}`, Buffer.from(ab));
        $personal.avatarUrl = `/${dir}/${photo.name}`;
      }

      if (doc.size) {
        const ab = await doc.arrayBuffer();
        mkdirSync(dir, { recursive: true });
        writeFileSync(`${dir}/${doc.name}`, Buffer.from(ab));
      }

      const user = await db.user.update({ where: { id: userId }, data: { ...$personal } });
      await db.enrollment.update({
        where: { userId: user.id },
        data: {
          status: EnrollmentStatus.COMPLETED,
          qualifications: { create: [{ ...$qualification }] },
          document: {
            create: {
              name: doc.name,
              mimetype: doc.type,
              size: doc.size,
              url: `/${dir}/${doc.name}`,
            },
          },
          ...$health,
          ...$spirit,
        },
      });

      const studentId = user.id;
      const role = await db.role.findUnique({ where: { roleType: RoleType.REFEREE } });
      if (!role) {
        return fail(400, { messaage: `Role: ${RoleType.REFEREE} does not exist` });
      }

      let names = splitName($ref1.fullName);
      await db.user.create({
        data: { studentId, roleId: role.id, ...names, disbled: true, ...$ref1 },
      });

      names = splitName($ref2.fullName);
      await db.user.create({
        data: { studentId, roleId: role.id, ...names, disbled: true, ...$ref2 },
      });

      let html_body = await renderTemplate("http://localhost:8080/email/enroll.html", {
        fullname: `${user?.firstName} ${user?.lastName}`,
      });

      let messaage = {
        to: [user.email],
        subject: "Adullam Enrollment",
        plain_body: convert(html_body),
        html_body,
      };
      await mail.sendMessage(messaage);

      const emailToken = jwt.sign({ studentId }, AUTH_SECRET);
      html_body = await renderTemplate("http://localhost:8080/email/reference.html", {
        fullname: `${user?.firstName} ${user?.lastName}`,
      });

      messaage = {
        to: [$ref1?.email, $ref2?.email],
        subject: "Adullam Enrollment",
        plain_body: convert(html_body),
        html_body,
      };
      await mail.sendMessage(messaage);

      return { ...user };
    } catch (error: any) {
      console.log(error);
    }
  },
};
