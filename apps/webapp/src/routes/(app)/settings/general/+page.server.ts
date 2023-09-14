import { redirect } from "@sveltejs/kit";
import type { PageServerLoad, Actions } from "./$types";
import { Prisma, RoleType, SettingType } from "@prisma/client";

export const load = (async ({ locals }) => {
  if (!locals?.authUser) {
    throw redirect(302, "/login");
  }
}) satisfies PageServerLoad;

export const actions: Actions = {
  default: async (event) => {
    const user = event.locals?.authUser;
    const formdata = await event.request.formData();
    const entries = Object.fromEntries(formdata);

    const data = Object.entries(entries).map(([key, value]) => {
      return {
        key,
        value,
        type: SettingType.GENERAL,
        roles: [RoleType.ADMINISTRATOR, RoleType.SUPERUSER],
      } as Prisma.SettingCreateInput;
    });

    try {
      const setting = await db.setting.createMany({ data });
      return { setting };
    } catch (error: any) {
      console.log(error);
    }
  },
};
