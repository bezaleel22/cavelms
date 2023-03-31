import { auth } from "$lib/server/auth";
import type { Handle } from "@sveltejs/kit";

export const handle = (async ({ event, resolve }) => {
  const user = await auth.refresh();
  if (user?.isAuthenticated) {
    event.locals.user = await auth.refresh();
  }

  const response = await resolve(event);
  return response;
}) satisfies Handle;
