import { mail } from "$lib/mail";
import type { RequestEvent } from "../$types";

export const POST = async ({ request }: RequestEvent) => {
  const msg = await request.json();
  console.log(msg);

  return new Response(JSON.stringify({ success: true }));
};

// {
//   event: 'MessageSent',
//   timestamp: 1691327199.210613,
//   payload: {
//     message: {
//       id: 30,
//       token: 'Qx9IH1cUtC4Y',
//       direction: 'outgoing',
//       message_id: '97021172-ace9-4f1c-be42-0ee8781ef9d7@rp.mail.beznet.org',
//       to: 'beznet22@gmail.com',
//       from: 'admin@adullam.ng',
//       subject: 'Test Message at August 06, 2023 12:57',
//       timestamp: 1691326641.198533,
//       spam_status: 'NotSpam',
//       tag: null
//     },
//     status: 'Sent',
//     details: 'Message for beznet22@gmail.com accepted by gmail-smtp-in.l.google.com (142.250.27.27)',
//     output: '250 2.0.0 OK  1691327199 jt16-20020a170906ca1000b0098dfa5abc0bsi3243311ejb.88 - gsmtp\n',
//     sent_with_ssl: true,
//     timestamp: 1691327199.1132572,
//     time: 0.81
//   },
//   uuid: '6261ce59-d437-475b-aac7-7b7b409aa8e2'
// }