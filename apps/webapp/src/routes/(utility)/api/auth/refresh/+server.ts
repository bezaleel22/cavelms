import type { RequestEvent } from "./$types";

export const POST = async ({ request }: RequestEvent) => {
  console.log(request);
  return new Response(JSON.stringify({ success: true }));
};
