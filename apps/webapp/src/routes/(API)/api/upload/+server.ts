import type { RequestEvent } from "@sveltejs/kit";
import { writeFileSync, readFileSync } from "fs";

export const POST = async ({ request }: RequestEvent) => {
  const data = await request.formData();

  const fetchRes = await fetch("https://www.youtube.com/watch?v=aqz-KE-bpKQ&hl=%22en%22", {
    body: request.body,
    method: request.method,
    headers: request.headers,
  });

  // const file = readFileSync("");
  // writeFileSync(`static/${data.get("name")}`, file, "base64");
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
