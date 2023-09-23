import { RoleType, type Prisma, CourseType, CourseStatus } from "@prisma/client";
import { fail, redirect } from "@sveltejs/kit";
import { mkdirSync, writeFileSync } from "fs";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async ({ locals }) => {
  if (!locals?.authUser) {
    throw redirect(302, "/login");
  }
}) satisfies PageServerLoad;

export const actions: Actions = {
  matching: async (event) => {
    const userId = event.locals?.authUser?.id as string;
    const formdata = await event.request.formData();

    let data = Object.fromEntries(formdata) as KeyValue;

    try {
      return { data };
    } catch (error: any) {
      console.log(error);
    }
  },
};
