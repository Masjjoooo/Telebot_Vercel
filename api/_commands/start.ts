import type { TelegramMessage } from "../_lib/types.js";

export const start = {
  name: "start",
  description: "Mulai bot",
  handler: async (msg: TelegramMessage): Promise<string> => {
    const name = msg.from?.first_name ?? "kamu";
    return `Halo ${name}! 👋\nSaya bot sederhana.\nKetik /help untuk lihat perintah.`;
  },
};
