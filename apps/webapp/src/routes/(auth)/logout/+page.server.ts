import { SignOutStore } from "$houdini";
import { fail, redirect } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  if (!locals?.authUser) {
    throw redirect(302, "/");
  }
};

export const actions: Actions = {
  default: async (event) => {
    const refreshToken = event.cookies.get("token") as string;
  
    const signout = new SignOutStore();
    const response = await signout.mutate({ refreshToken }, { event });
    const authUser = response.data?.signOut;

    if (authUser?.isAuthenticated) {
      return fail(400, { success: false });
    }

    event.cookies.delete("token", {
      path: "/",
      httpOnly: true,
      expires: new Date(0),
    });

    event.locals.authUser = null;
    throw redirect(302, "/login");
  },
};
