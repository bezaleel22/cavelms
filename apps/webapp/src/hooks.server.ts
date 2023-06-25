import { auth } from "$lib/store/auth";
import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
  // const token = event.cookies.get("token");
  // if (!token) {
  //   // if there is no token load page as normal
  //   return await resolve(event);
  // }
  
  // event.locals.auth = await auth.refresh();

  const response = await resolve(event);
  // response.headers.set("x-custom-header", "potato");

  return response;
}) satisfies Handle;
