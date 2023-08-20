import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";
import { dev } from "$app/environment";

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { API_USER, AUTH_SECRET } from "$env/static/private";

export const load: PageServerLoad = async ({ locals }) => {
  console.log({user:locals?.authUser})
  if (locals?.authUser) {
    throw redirect(302, "/account/registration");
  }
};

const login: Action = async (event) => {
  const { email, password } = Object.fromEntries(await event.request.formData());

  if (typeof email !== "string" || typeof password !== "string" || !email || !password) {
    return fail(400, { invalid: true, email, password });
  }

  const user = await db.user.findUnique({ where: { email }});
  if (!user) {
    return fail(400, { credentials: false, email, password });
  }

  const match = await bcrypt.compare(password, user?.passwordHash as string);
  if (!match) return fail(400, { invalid: true, password });

  const expiresIn = 24 * 60 * 60 * 14; // 14 days
  const jwtUser = { userId: user?.id, email, role: API_USER };
  const token = jwt.sign(jwtUser, AUTH_SECRET, { expiresIn });

  event.cookies.set("token", token, {
    path: "/",
    httpOnly: true,
    sameSite: "strict",
    secure: !dev,
    maxAge: expiresIn,
  });

  throw redirect(302, "/account/registration");
};

export const actions: Actions = { login };
