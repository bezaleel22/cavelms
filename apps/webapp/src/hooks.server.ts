import { dev } from "$app/environment";
import { API_KEY, AUTH_SECRET } from "$env/static/private";
import { db } from "$lib/server/database";
import { RBAC } from "$lib/store/routes";
import type { $Enums } from "@prisma/client";
import { error, type Handle } from "@sveltejs/kit";
import jwt from "jsonwebtoken";

const TARGET_BASE_URL = "https://api.my-website.com";
const PROXY_PATH = "/stream/";

export const handle = (async ({ event, resolve }) => {
  if (event.url.pathname.startsWith(PROXY_PATH)) {
    return await handleProxy({ event, resolve });
  }

  if (!API_KEY && dev) {
    const jwtUser = { role: "beznet", email: "beznet22@gmail.com" };
    const ENV_API_KEY = jwt.sign(jwtUser, AUTH_SECRET, { expiresIn: "90d" });
    console.log({ ENV_API_KEY });
  }

  let token = event.cookies.get("token");
  if (!token) {
    return await resolve(event);
  }

  let claim = jwt.verify(token, AUTH_SECRET) as jwt.JwtPayload;
  let id = claim.userId;
  const user = await db.user.findUnique({ where: { id }, include: { role: true } });
  if (!user) {
    return await resolve(event);
  }

  const jwtUser = { role: "beznet", email: user.email };
  user.accessToken = jwt.sign(jwtUser, AUTH_SECRET, { expiresIn: "1m" });
  event.locals.authUser = user;

  const modules = import.meta.glob("./routes/**/**.svelte");
  const { granted, routes } = RBAC({
    routId: event.params.id as string,
    path: event.url.pathname,
    role: user.role?.roleType as string,
  });

  event.locals.routes = routes;
  return await resolve(event);
}) satisfies Handle;

const handleProxy: Handle = async ({ event }) => {
  const origin = event.request.headers.get("Origin");

  console.log({ origin, url: event.url.origin });
  // // reject requests that don't come from the webapp, to avoid your proxy being abused.
  if (!origin || new URL(origin as string).origin !== event.url.origin) {
    throw error(403, "All Request Forbidden.");
  }



  // strip `/api-proxy` from the request path
  const strippedPath = event.url.pathname.substring(PROXY_PATH.length);

  // build the new URL path with your API base URL, the stripped path and the query string
  const urlPath = `${strippedPath}${event.url.search}`;
  const proxiedUrl = new URL(urlPath);
  // Strip off header added by SvelteKit yet forbidden by underlying HTTP request
  // library `undici`.
  // https://github.com/nodejs/undici/issues/1470
  event.request.headers.delete("connection");

  return fetch(proxiedUrl.toString(), {
    // propagate the request method and body
    body: event.request.body,
    method: event.request.method,
    headers: event.request.headers,
  }).catch((err) => {
    console.log("Could not proxy API request: ", err);
    throw err;
  });
};
