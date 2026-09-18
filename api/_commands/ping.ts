import type { TelegramMessage } from "../_lib/types.js";

export const ping = {
  name: "ping",
  description: "Cek bot hidup",
  handler: async (_msg: TelegramMessage): Promise<string> => {
    return `🏓 Crot! Bot aktif.`;
  },
};
