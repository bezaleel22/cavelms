import { auth } from "$lib/store/auth";
import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
  const token = event.cookies.get("token");
  if (!token) {
    return await resolve(event);
  }

  event.setHeaders({ Authorization: "Bearer " + token });
  const authUser = await auth.refresh(event);
  if (!authUser?.loggedIn) {
    return await resolve(event);
  }

  event.locals.authUser = authUser;
  const response = await resolve(event);

  return response;
}) satisfies Handle;
