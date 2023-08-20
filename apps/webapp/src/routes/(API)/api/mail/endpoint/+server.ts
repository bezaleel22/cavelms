import { mail } from "$lib/mail";
import type { RequestEvent } from "@sveltejs/kit";

export const POST = async ({ request }: RequestEvent) => {
  const msg = await request.json();
  console.log(msg);

  return new Response(JSON.stringify({ success: true }));
};

// {
//   id: 3,
//   rcpt_to: 'finance@adullam.ng',
//   mail_from: 'onosbrown.saved@gmail.com',
//   token: 'TD8zboQSTbyu',
//   subject: 'Fwd: Application Fee',
//   message_id: 'CAHq3=vsjSbyAw6p210ptyJ91K8yVLyUyOVX0F6c00Bi_+n-fsA@mail.gmail.com',
//   timestamp: 1691587953.234189,
//   size: '17179',
//   spam_status: 'NotSpam',
//   bounce: false,
//   received_with_ssl: null,
//   to: 'finance@adullam.ng',
//   cc: null,
//   from: 'Brown Onojeta <onosbrown.saved@gmail.com>',
//   date: 'Wed, 09 Aug 2023 14:31:21 +0100',
//   in_reply_to: '<CAHq3=vt86-_FQ7ifdE7Syr0_PMHyx0XVXN6amezHmzXYXdOyXQ@mail.gmail.com>',
//   references: '<2d6f.12044615.m1.85f23650-3059-11ee-8a09-52540064429e.189b0ba6e35@usermail.zohodeluge.com> <CAHq3=vuDLM_1sBb_=xkjTA1_HOxQ+BWTRk5d7qKVoVFt2G31ZA@mail.gmail.com> <CAHq3=vt86-_FQ7ifdE7Syr0_PMHyx0XVXN6amezHmzXYXdOyXQ@mail.gmail.com>',
//   html_body: '<div dir="ltr"><br><div class="gmail_quote"><div dir="ltr"><div class="gmail_quote"><div dir="ltr"><div class="gmail_quote"><table><tbody><tr><td style="padding-top:20px"><p>This is to inform you that a transaction has occurred on your account with UBA with details below:</p></td>\n' +
//     '    </tr><tr><td><table border="0" cellpadding="7" cellspacing="3" style="font-family:arial;font-size:9pt" width="600px">\n' +
//     '\n' +
//     '            <tbody><tr style="vertical-align:middle">\n' +
//     '                                    <td style="background:#ccc;width:200px;font-weight:bold;height:40px;padding-left:10px">Account Name</td>\n' +
//     '                                    <td style="background:#eee">REMNANT CHRISTIAN NETWORK BIBILE SEMINARY ADULLAM</td>\n' +
//     '                </tr>\n' +
//     '                <tr style="vertical-align:middle">\n' +
//     '                    <td style="background:#ccc;width:200px;font-weight:bold;height:40px;padding-left:10px">Transaction Type</td>\n' +
//     '                    <td style="background:#eee">CREDIT ALERT</td>\n' +
//     '                </tr>\n' +
//     '                <tr style="vertical-align:middle">\n' +
//     '                    <td style="background:#ddd;font-weight:bold;height:40px;padding-left:10px">Transaction Amount</td>\n' +
//     '                    <td style="background:#eee">1,000.00</td>\n' +
//     '                </tr>\n' +
//     '                <tr style="vertical-align:middle">\n' +
//     '                                    <td style="background:#ccc;font-weight:bold;height:40px;padding-left:10px">Transaction Currency</td>\n' +
//     '                                    <td style="background:#eee">NGN</td>\n' +
//     '                </tr>\n' +
//     '                <tr style="vertical-align:middle">\n' +
//     '                    <td style="background:#ddd;font-weight:bold;height:40px;padding-left:10px">Account Number</td>\n' +
//     '                    <td style="background:#eee">1XX..85X</td>\n' +
//     '                </tr>\n' +
//     '                <tr style="vertical-align:middle">\n' +
//     '                    <td style="background:#ccc;font-weight:bold;height:40px;padding-left:10px">Transaction Narration</td>\n' +
//     '                    <td style="background:#eee">MOB/UTU/OSARENREN PREC/BLESSING S SURGERY/17805755</td>\n' +
//     '                </tr>\n' +
//     '                <tr style="vertical-align:middle">\n' +
//     '                    <td style="background:#ddd;font-weight:bold;height:40px;padding-left:10px">Transaction Remarks</td>\n' +
//     '                    <td style="background:#eee">MOB/UTU/From OSARENREN PRECI</td>\n' +
//     '                </tr>\n' +
//     '                <tr style="vertical-align:middle">\n' +
//     '                    <td style="background:#ccc;font-weight:bold;height:40px;padding-left:10px">Date and Time</td>\n' +
//     '                    <td style="background:#eee">01-Aug-2023 11:52</td>\n' +
//     '                </tr>\n' +
//     '                <tr style="vertical-align:middle">\n' +
//     '                                    <td style="background:#ddd;font-weight:bold;height:40px;padding-left:10px">Available Balance</td>\n' +
//     '                                    <td style="background:#eee;font-weight:bold">820,408.30</td>\n' +
//     '                </tr>\n' +
//     '                <tr style="vertical-align:middle">\n' +
//     '                                    <td style="background:#ddd;font-weight:bold;height:40px;padding-left:10px">Cleared Balance</td>\n' +
//     '                                    <td style="background:#eee">820,458.30</td>\n' +
//     '                </tr>\n' +
//     '\n' +
//     '                \n' +
//     '            </tbody></table></td></tr><tr><td style="padding-top:20.0px"><p><a href="https://portal.adullam.ng/#/admission/%7B%22html%22%3A%22%3Ctable+border+%3D+%5C%220%5C%22+cellpadding+%3D+%5C%227%5C%22+cellspacing+%3D+%5C%223%5C%22+style+%3D+%5C%22font-family+%3A++arial%3B+font-size+%3A++9pt%3B+%5C%22+width+%3D+%5C%22600px%5C%22%3E%5Cn%5Cn++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ccc%3B+width+%3A++200px%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3EAccount+Name%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+%5C%22%3EREMNANT+CHRISTIAN+NETWORK+BIBILE+SEMINARY+ADULLAM%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn++++++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ccc%3B+width+%3A++200px%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3ETransaction+Type%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+%5C%22%3ECREDIT+ALERT%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn++++++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ddd%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3ETransaction+Amount%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+%5C%22%3E1%2C000.00%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn++++++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ccc%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3ETransaction+Currency%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+%5C%22%3ENGN%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn++++++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ddd%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3EAccount+Number%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+%5C%22%3E1XX..85X%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn++++++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ccc%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3ETransaction+Narration%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+%5C%22%3EMOB%2FUTU%2FOSARENREN+PREC%2FBLESSING+S+SURGERY%2F17805755%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn++++++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ddd%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3ETransaction+Remarks%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+%5C%22%3EMOB%2FUTU%2FFrom+OSARENREN+PRECI%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn++++++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ccc%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3EDate+and+Time%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+%5C%22%3E01-Aug-2023+11%3A52%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn++++++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ddd%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3EAvailable+Balance%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+font-weight+%3A++bold%3B+%5C%22%3E820%2C408.30%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn++++++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ddd%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3ECleared+Balance%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+%5C%22%3E820%2C458.30%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn%5Cn++++++++++++++++%5Cn++++++++++++%3C%5C%2Ftable%3E%22%2C%22redirect_uri%22%3A%22https%3A%2F%2Fportal.adullam.ng%2F%23%2Fsign-in%2F%22%7D" style="color:#bb1eff;text-decoration:underline" target="_blank">Click to process payment</a></p></td></tr></tbody></table>\n' +
//     '</div></div>\n' +
//     '</div></div>\n' +
//     '</div></div>\n',
//   attachment_quantity: 0,
//   auto_submitted: null,
//   reply_to: null,
//   plain_body: 'This is to inform you that a transaction has occurred on your account with\n' +
//     'UBA with details below:\n' +
//     'Account Name REMNANT CHRISTIAN NETWORK BIBILE SEMINARY ADULLAM\n' +
//     'Transaction Type CREDIT ALERT\n' +
//     'Transaction Amount 1,000.00\n' +
//     'Transaction Currency NGN\n' +
//     'Account Number 1XX..85X\n' +
//     'Transaction Narration MOB/UTU/OSARENREN PREC/BLESSING S SURGERY/17805755\n' +
//     'Transaction Remarks MOB/UTU/From OSARENREN PRECI\n' +
//     'Date and Time 01-Aug-2023 11:52\n' +
//     'Available Balance 820,408.30\n' +
//     'Cleared Balance 820,458.30\n' +
//     '\n' +
//     'Click to process payment\n' +
//     '<https://portal.adullam.ng/#/admission/%7B%22html%22%3A%22%3Ctable+border+%3D+%5C%220%5C%22+cellpadding+%3D+%5C%227%5C%22+cellspacing+%3D+%5C%223%5C%22+style+%3D+%5C%22font-family+%3A++arial%3B+font-size+%3A++9pt%3B+%5C%22+width+%3D+%5C%22600px%5C%22%3E%5Cn%5Cn++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ccc%3B+width+%3A++200px%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3EAccount+Name%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+%5C%22%3EREMNANT+CHRISTIAN+NETWORK+BIBILE+SEMINARY+ADULLAM%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn++++++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ccc%3B+width+%3A++200px%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3ETransaction+Type%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+%5C%22%3ECREDIT+ALERT%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn++++++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ddd%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3ETransaction+Amount%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+%5C%22%3E1%2C000.00%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn++++++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ccc%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3ETransaction+Currency%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+%5C%22%3ENGN%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn++++++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ddd%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3EAccount+Number%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+%5C%22%3E1XX..85X%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn++++++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ccc%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3ETransaction+Narration%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+%5C%22%3EMOB%2FUTU%2FOSARENREN+PREC%2FBLESSING+S+SURGERY%2F17805755%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn++++++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ddd%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3ETransaction+Remarks%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+%5C%22%3EMOB%2FUTU%2FFrom+OSARENREN+PRECI%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn++++++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ccc%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3EDate+and+Time%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+%5C%22%3E01-Aug-2023+11%3A52%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn++++++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ddd%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3EAvailable+Balance%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+font-weight+%3A++bold%3B+%5C%22%3E820%2C408.30%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn++++++++++++++++%3Ctr+style+%3D+%5C%22vertical-align+%3A++middle%3B+%5C%22%3E%5Cn++++++++++++++++++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23ddd%3B+font-weight+%3A++bold%3B+height+%3A++40px%3B+padding-left+%3A++10px%3B+%5C%22%3ECleared+Balance%3C%5C%2Ftd%3E%5Cn++++++++++++++++++++++++++++++++++++%3Ctd+style+%3D+%5C%22background+%3A++%23eee%3B+%5C%22%3E820%2C458.30%3C%5C%2Ftd%3E%5Cn++++++++++++++++%3C%5C%2Ftr%3E%5Cn%5Cn++++++++++++++++%5Cn++++++++++++%3C%5C%2Ftable%3E%22%2C%22redirect_uri%22%3A%22https%3A%2F%2Fportal.adullam.ng%2F%23%2Fsign-in%2F%22%7D>',
//   replies_from_plain_body: null,
//   attachments: []
// }
// {
//   event: 'MessageSent',
//   timestamp: 1691587953.9931269,
//   payload: {
//     message: {
//       id: 3,
//       token: 'TD8zboQSTbyu',
//       direction: 'incoming',
//       message_id: 'CAHq3=vsjSbyAw6p210ptyJ91K8yVLyUyOVX0F6c00Bi_+n-fsA@mail.gmail.com',
//       to: 'finance@adullam.ng',
//       from: 'onosbrown.saved@gmail.com',
//       subject: 'Fwd: Application Fee',
//       timestamp: 1691587953.234189,
//       spam_status: 'NotSpam',
//       tag: null
//     },
//     status: 'Sent',
//     details: 'Received a 200 from https://tunnel.beznet.org/api/mail/endpoint',
//     output: '{"success":true}',
//     sent_with_ssl: false,
//     timestamp: 1691587953.978745,
//     time: 0.71
//   },
//   uuid: 'e16c52cf-633d-4cf9-b16c-5b7ad12147b9'
// }