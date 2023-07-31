import { env } from "$env/dynamic/private";

interface MailOption {
  host: string;
  apiKey: string;
}

interface Message {
  to: string[];
  cc?: string[];
  bcc?: string[];
  from: string;
  subject: string;
  tag?: string;
  sender?: string;
  reply_to?: string;
  plain_body: string;
  html_body?: string;
  headers?: {};
  attachments?: any[];
}

interface RawMessage {
  mail_from: string;
  rcpt_to: string[];
  data: string;
  bounce: boolean;
}

export class MailClient {
  host: string;
  apiKey: string;
  attachments: any[] = [];

  constructor(opts: MailOption) {
    this.host = opts.host;
    this.apiKey = opts.apiKey;
  }

  #makeRequest = async (url: string, message?: Message | RawMessage) => {
    const resp = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Server-API-Key": this.apiKey,
      },
      body: JSON.stringify(message),
    });
    return await resp.json();
  };

  sendMessage = async (message: Message) => {
    message.attachments = this.attachments;
    return this.#makeRequest(`${this.host}/api/v1/send/message`, message);
  };

  sendRawMessage = async (message: RawMessage) => {
    return this.#makeRequest(`${this.host}/api/v1/send/message`, message);
  };

  getMessage = async (id: number) => {
    this.#makeRequest(`${this.host}/api/v1/messages/raw`);
  };

  getDeliveries = async (id: number) => {
    this.#makeRequest(`${this.host}/api/v1/messages/deliveries`);
  };

  attach = (filename: string, contentType: string, data: string) => {
    var attachment = {
      content_type: contentType,
      data: new Buffer(data).toString("base64"),
      name: filename,
    };
    this.attachments.push(attachment);
  };
}

export const mail = new MailClient({ host: env.MAIL_API_URL, apiKey: env.MAIL_API_KEY });
