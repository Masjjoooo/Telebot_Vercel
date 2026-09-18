import type { TelegramMessage } from "../_lib/types.js";
import { start } from "./start.js";
import { help } from "./help.js";
import { ping } from "./ping.js";
import { echo } from "./echo.js";

export interface Command {
  name: string;
  description: string;
  handler: (msg: TelegramMessage) => Promise<string>;
}

export const commands: Command[] = [start, help, ping, echo];

export function findCommand(text: string): Command | undefined {
  const cmd = text.trim().split(/\s+/)[0].toLowerCase();
  const name = cmd.replace(/^\//, "").replace(/@.*$/, "");
  return commands.find((c) => c.name === name);
}
