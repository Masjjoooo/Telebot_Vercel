import type { VercelRequest, VercelResponse } from "@vercel/node";
import type { TelegramUpdate } from "./_lib/types.js";
import { sendMessage } from "./_lib/telegram.js";
import { handleMessage } from "./_handlers/message.js";

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  // GET / → landing page
  if (req.method === "GET") {
    // Kalau request ke /api/webhook langsung, balas JSON
    if (req.url?.startsWith("/api/")) {
      return res.status(200).send("Bot is alive 🚀");
    }
    // Selain itu, redirect ke landing page
    return res.redirect(307, "/index.html");
  }

  // Hanya POST untuk webhook
  if (req.method !== "POST") {
    return res.status(405).send("Method Not Allowed");
  }

  // Verifikasi secret token dari Telegram
  const secret = req.headers["x-telegram-bot-api-secret-token"];
  if (secret !== process.env.WEBHOOK_SECRET) {
    return res.status(401).send("Unauthorized");
  }

  const update = req.body as TelegramUpdate;
  const msg = update.message;

  if (msg?.text) {
    const reply = await handleMessage(msg);
    if (reply) {
      await sendMessage(process.env.BOT_TOKEN!, msg.chat.id, reply, {
        parse_mode: "Markdown",
      });
    }
  }

  res.status(200).send("OK");
}
