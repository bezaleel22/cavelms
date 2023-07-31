import { AuthStore, setSession } from "$houdini";
import { MailClient } from "$lib/mail";
import type { Handle } from "@sveltejs/kit";
import { env } from "$env/dynamic/private";

export const handle = (async ({ event, resolve }) => {
  const refreshToken = event.cookies.get("token");
  if (!refreshToken) {
    return await resolve(event);
  }

  const auth = new AuthStore();
  const resp = await auth.mutate({ refreshToken }, { event });
  const authUser = resp.data?.auth;

  if (!authUser?.isAuthenticated) {
    return await resolve(event);
  }

  event.locals.authUser = resp.data;
  setSession(event, { authUser });

  const response = await resolve(event);
  return response;
}) satisfies Handle;
