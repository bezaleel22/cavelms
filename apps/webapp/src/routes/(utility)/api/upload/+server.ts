import { writeFileSync, readFileSync } from "fs";

export const POST = async ({ request }) => {
  const data = await request.formData();

  const file = data.get("file");

  // const file = readFileSync("");
  // writeFileSync(`static/${data.get("name")}`, file, "base64");
  return new Response(JSON.stringify({ success: true }), { status: 200 });
};
