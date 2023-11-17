import { ORIGIN } from "$env/static/private";
import { error, type Handle } from "@sveltejs/kit";

const TARGET_BASE_URL = "https://api.my-website.com";
const PROXY_PATH = "/stream/";

const copyHeader = (headerName: string, to: Headers, from: Headers) => {
  const hdrVal = from.get(headerName);
  if (hdrVal) {
    to.set(headerName, hdrVal);
  }
};

export const handleProxy: Handle = async ({ event, resolve }) => {
  const { request, url } = event;

  if (!ORIGIN || new URL(ORIGIN as string).origin !== event.url.origin) {
    throw error(403, "Request Forbidden.");
  }

  // strip `/api-proxy` from the request path
  const strippedPath = event.url.pathname.substring(PROXY_PATH.length);
  // build the new URL path with your API base URL, the stripped path and the query string
  const urlPath = `${strippedPath}${event.url.search}`;
  const proxiedUrl = new URL(urlPath);
  request.headers.delete("connection");

  try {
    // Make the request to YouTube
    console.log({ proxiedUrl });
    const fetchRes = await event.fetch(proxiedUrl.toString(), {
      body: event.request.body,
      method: event.request.method,
      headers: event.request.headers,
    });
    // Construct the return headers
    const headers = new Headers();

    // copy content headers
    copyHeader("content-length", headers, fetchRes.headers);
    copyHeader("content-type", headers, fetchRes.headers);
    copyHeader("content-disposition", headers, fetchRes.headers);
    copyHeader("accept-ranges", headers, fetchRes.headers);
    copyHeader("content-range", headers, fetchRes.headers);

    // Return the proxied response
    return new Response(fetchRes.body, {
      status: fetchRes.status,
      headers: headers,
    });
  } catch (err: any) {
    console.log("Could not proxy API request: ", err);
    throw error(500, err);
  }
};
