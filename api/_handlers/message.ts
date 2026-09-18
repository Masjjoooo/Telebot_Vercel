import type { TelegramMessage } from "../_lib/types.js";
import { findCommand } from "../_commands/index.js";

export async function handleMessage(
  msg: TelegramMessage
): Promise<string | null> {
  const text = msg.text?.trim();
  if (!text) return null;

  if (!text.startsWith("/")) {
    return "Ketik /help untuk lihat perintah.";
  }

  const command = findCommand(text);
  if (!command) {
    return `❓ Perintah tidak dikenal.\nKetik /help untuk bantuan.`;
  }

  return command.handler(msg);
}
