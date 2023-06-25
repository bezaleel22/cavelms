// import { auth } from "$lib/store/auth";
// import { fail, redirect } from "@sveltejs/kit";
// import type { Action, Actions, PageServerLoad } from "./$types";

// export const load: PageServerLoad = async ({ locals }) => {
//   if (locals?.auth?.loggedIn) {
//     throw redirect(302, "/");
//   }
// };

// const register: Action = async ({ request }) => {
//   const data = await request.formData();
//   const fullName = data.get("fullName");
//   const email = data.get("email");
//   const password = data.get("password");
//   const program = data.get("program");

//   if (!email || !password || typeof email !== "string" || typeof password !== "string") {
//     return fail(400, { invalid: true, email, password });
//   }

//   const user = await auth.signup({ fullName, email, password, program });
//   if (!user) {
//     return fail(400, { credentials: true });
//   }

//   if (!user.loggedIn) {
//     return fail(400, { credentials: true, email, password });
//   }

//   throw redirect(302, "/application");
// };

// export const actions: Actions = { register };





import { auth } from "$lib/store/auth";
import { fail, redirect } from "@sveltejs/kit";
import type { Action, Actions, PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals }) => {
  if (locals?.auth?.loggedIn) {
    throw redirect(302, "/");
  }
};

const register: Action = async ({ request }) => {
  const data = Object.fromEntries(await request.formData())
  const {fullName, email, password } =data;
// console.log(data);
  if (typeof email !== "string" || typeof password !== "string" || !email || !password) {
    return fail(400, { invalid: true, email, password });
   }

  const user = await auth.signup(data);
  if (!user) {
    return fail(400, { credentials: true });
  }

  // if (!user.loggedIn) {
  //   return fail(400, { credentials: true, email, password });
  // }

  throw redirect(302, "/profile");
};

export const actions: Actions = { register };
