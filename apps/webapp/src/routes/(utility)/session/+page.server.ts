import { AUTH_SECRET } from "$env/static/private";
import { fail, redirect } from "@sveltejs/kit";
import jwt from "jsonwebtoken";
import type { Action, Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async (event) => {
  const verifyToken = event.url.searchParams.get("token") as string;
  const claim = jwt.verify(verifyToken, AUTH_SECRET) as jwt.JwtPayload;
  const user = await db.user.update({ where: { id: claim.userId }, data: { isVerified: true } });

  return {
    verified: user.isVerified ?? false,
  };
};

const setSession: Action = async (event) => {
  let token = event.cookies.get("token");
  if (!token) {
    throw redirect(302, "/login");
  }

  const user = event.locals.authUser;
  if (!user) {
    return fail(400, { message: "user session is undefined" });
  }

  try {
    const jwtUser = { userId: user.id, email: user.email };
    user.accessToken = jwt.sign(jwtUser, AUTH_SECRET, { expiresIn: "5m" });
  } catch (error: any) {
    return fail(400, { error: error.message });
  }
};

export const actions: Actions = { setSession };
