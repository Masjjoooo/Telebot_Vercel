import type { TelegramMessage } from "../_lib/types.js";

export const echo = {
  name: "echo",
  description: "Ulangi teks: /echo <teks>",
  handler: async (msg: TelegramMessage): Promise<string> => {
    const args = (msg.text ?? "").split(" ").slice(1).join(" ");
    return args ? `🔁 ${args}` : `Contoh: /echo halo dunia`;
  },
};
