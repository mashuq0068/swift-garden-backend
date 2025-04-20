import OpenAI from "openai";
import config from ".";

export const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: config.ai_secret_key,
  //   defaultHeaders: {
  //     "HTTP-Referer": "<YOUR_SITE_URL>", // Optional. Site URL for rankings on openrouter.ai.
  //     "X-Title": "<YOUR_SITE_NAME>", // Optional. Site title for rankings on openrouter.ai.
  //   },
});
