import { mail } from "$lib/mail";
import type { RequestEvent } from "../$types";

export const POST = async ({ request }: RequestEvent) => {
  const html_body = await request.json();
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

// {
//   status: "success",
//   time: 0.05,
//   flags: {},
//   data: {
//     message_id: "333d2bff-7ca7-4463-99f1-85c057024bae@rp.mail.beznet.org",
//     messages: { "onosbrown.saved@gmail.com": { id: 33, token: "IxpBhriuTyKV" } },
//   },
// };
