import type { RequestEvent } from "../routes/$types";

export const handleLoginRedirect = (
  event: RequestEvent,
  message: string = "You must be logged in to access this page"
) => {
  const redirectTo = event.url.searchParams.get("redirectTo");
  if (redirectTo) return `/${redirectTo.slice(1)}`;

  const fromUrl = event.url.pathname + event.url.search;
  return `/login?redirectTo=${fromUrl}&message=${message}`;
};
