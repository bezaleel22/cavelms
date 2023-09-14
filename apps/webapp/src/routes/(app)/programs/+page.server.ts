import { RoleType, type Prisma } from "@prisma/client";
import { fail, redirect } from "@sveltejs/kit";
import { mkdirSync, writeFileSync } from "fs";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async ({ locals }) => {
  if (!locals?.authUser) {
    throw redirect(302, "/login");
  }
}) satisfies PageServerLoad;

export const actions: Actions = {
  addCourse: async (event) => {
    const userId = event.locals?.authUser?.id as string;
    const formdata = await event.request.formData();
    const cover = formdata.get("cover") as File;
    formdata.delete("cover");

    let data = Object.fromEntries(formdata) as KeyValue;
    const year = event.locals?.settings.find((settings) => settings.key === "year")?.value
    const dir = `static/uploads`;

    try {
      if (cover.size) {
        const ab = await cover.arrayBuffer();
        mkdirSync(dir, { recursive: true });
        writeFileSync(`${dir}/${cover.name}`, Buffer.from(ab));
        data.coverUrl = `/${dir}/${cover.name}`;
      }
    
      // console.log({ data });
      const course = await db.course.create({ data: { userId, year, ...data } as any });
      console.log({ course });
      if (!course) {
        return fail(400, { messaage: `Role: ${RoleType.REFEREE} does not exist` });
      }

      return;
      return { ...course };
    } catch (error: any) {
      console.log(error);
    }
  },
};
