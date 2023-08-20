import { redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals?.authUser) {
    throw redirect(302, "/");
  }
};

export const actions: Actions = {
  default: async (event) => {
    const refreshToken = event.cookies.get("token") as string;
  
    event.cookies.delete("token", {
      path: "/",
      httpOnly: true,
      expires: new Date(0),
    });

    event.locals.authUser = null;
    throw redirect(302, "/login");
  },
};
