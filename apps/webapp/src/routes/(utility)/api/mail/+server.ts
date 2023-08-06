import { mail } from "$lib/mail";
import type { RequestEvent } from "./$types";

export const POST = async ({ request }: RequestEvent) => {

  const  html_body = await request.json()
  const message = {
    to: ["beznet22@gmail.com"],
    from: "admin@beznet.org",
    sender: "Adullam",
    subject: "TEST MAIL",
    plain_body: "Hello from sveltkit application for adullam",
    html_body: "<p>Hello from adullam<p>",
  };

  const response = await mail.sendMessage(message);

  return new Response(JSON.stringify({ success: true, response }));
};
