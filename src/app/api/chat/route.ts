import Groq from "groq-sdk";
import { NextResponse } from "next/server";
import { BUSINESS_INFO } from "@/data/business";
import { CHATBOT_CONFIG } from "@/lib/chat/chatbotConfig";
import { buildBusinessContext } from "@/lib/chat/contextBuilder";
import { SYSTEM_PROMPT } from "@/lib/chat/systemPrompt";
import type { ChatApiRequest, ChatApiResponse, ChatMessage, ClientChatMessage } from "@/lib/chat/types";

function fallback(message: string, status = 200) {
  return NextResponse.json<ChatApiResponse>({ message }, { status });
}

function sanitizeContent(content: unknown) {
  return String(content ?? "")
    .replace(/\s+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, 1200);
}

function sanitizeHistory(messages: ClientChatMessage[] = []) {
  return messages
    .filter((message) => message.role === "user" || message.role === "assistant")
    .map((message) => ({
      role: message.role,
      content: sanitizeContent(message.content),
    }))
    .filter((message) => message.content.length > 0)
    .slice(-CHATBOT_CONFIG.maxHistoryMessages);
}

function formatAssistantResponse(content: string) {
  return content
    .replace(/\s+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim()
    .slice(0, 1600);
}

export async function POST(request: Request) {
  const apiKey = process.env.GROQ_API_KEY;
  const hasGroqApiKey = Boolean(apiKey?.trim());

  if (process.env.NODE_ENV !== "production") {
    console.log("Groq API Key Loaded:", hasGroqApiKey);
  }

  if (!hasGroqApiKey) {
    return fallback(`I'm here to help, but the chat service is not configured yet. Please contact us on WhatsApp: ${BUSINESS_INFO.whatsapp}`);
  }

  try {
    const body = (await request.json()) as ChatApiRequest;
    const history = sanitizeHistory(body.messages);

    if (!history.length) {
      return fallback("Please send a message so I can help.", 400);
    }

    const groq = new Groq({ apiKey, timeout: CHATBOT_CONFIG.timeoutMs });
    const messages: ChatMessage[] = [
      { role: "system", content: SYSTEM_PROMPT },
      { role: "system", content: buildBusinessContext() },
      ...history,
    ];

    const completion = await groq.chat.completions.create({
      model: CHATBOT_CONFIG.model,
      messages,
      temperature: CHATBOT_CONFIG.temperature,
      max_completion_tokens: CHATBOT_CONFIG.maxTokens,
    });

    const responseText = completion.choices[0]?.message?.content;

    return fallback(
      responseText
        ? formatAssistantResponse(responseText)
        : "I can help with programs, timings, memberships, and consultations. What would you like to know?",
    );
  } catch (error) {
    console.error("Chat API error", error);
    return fallback(`I'm sorry, the chat is taking a quiet pause. Please try again in a moment or message us on WhatsApp: ${BUSINESS_INFO.whatsapp}`);
  }
}
