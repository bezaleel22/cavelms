import { redirect } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";
import type { $Enums } from "@prisma/client";

export const load = (async ({ locals }) => {
  if (!locals?.authUser) {
    throw redirect(302, "/login");
  }

  const settings = await db.setting.findMany({
    where: {
      roles: {
        hasSome: [locals?.authUser.role?.roleType] as $Enums.RoleType[],
      },
    },
  });

  return {
    user: locals?.authUser,
    routes: locals.routes,
    settings,
  };
}) satisfies LayoutServerLoad;
