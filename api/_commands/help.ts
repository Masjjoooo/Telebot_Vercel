import type { TelegramMessage } from "../_lib/types.js";
import { commands } from "./index.js";

export const help = {
  name: "help",
  description: "Tampilkan bantuan",
  handler: async (_msg: TelegramMessage): Promise<string> => {
    const list = commands
      .map((c) => `/${c.name} - ${c.description}`)
      .join("\n");
    return `📖 *Daftar Perintah*\n\n${list}`;
  },
};
