import OpenAI from "openai";
import { OpenAIStream, StreamingTextResponse } from "ai";

// Can be 'nodejs', but Vercel recommends using 'edge'
export const runtime = "edge";

const openai = new OpenAI({
  apiKey: "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",
});
// This method must be named GET
export async function GET() {
  // Make a request to OpenAI's API based on
  // a placeholder prompt
  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [{ role: "user", content: "Say this is a test." }],
  });
  // Log the response
  for await (const part of response) {
    console.log(part.choices[0].delta);
  }
  // Convert the response into a friendly text-stream
  const stream = OpenAIStream(response);
  // Respond with the stream
  return new StreamingTextResponse(stream);
}
