const API_BASE = "https://api.telegram.org";

export async function sendMessage(
  token: string,
  chatId: number,
  text: string,
  options: { parse_mode?: "Markdown" | "HTML" } = {}
): Promise<void> {
  await fetch(`${API_BASE}/bot${token}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: chatId,
      text,
      ...options,
    }),
  });
}
