"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { BUSINESS_INFO } from "@/data/business";
import { CHATBOT_CONFIG } from "@/lib/chat/chatbotConfig";
import type { ChatApiResponse, ClientChatMessage } from "@/lib/chat/types";
import { ChatInput } from "./ChatInput";
import { ChatMessage } from "./ChatMessage";
import { TypingIndicator } from "./TypingIndicator";

const welcome: ClientChatMessage = {
  role: "assistant",
  content:
    "Hi \uD83D\uDC9B\nWelcome to Namita\u2019s Femme Fitness.\n\nI\u2019d be happy to help with programs, timings, beginner guidance, memberships, or wellness-related questions.",
};

export function ChatWindow({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [messages, setMessages] = useState<ClientChatMessage[]>([welcome]);
  const [loading, setLoading] = useState(false);
  const abortRef = useRef<AbortController | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!open) return;
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, loading, open]);

  async function sendMessage(content: string) {
    const nextMessages: ClientChatMessage[] = [...messages, { role: "user", content }];
    const shortHistory = nextMessages.slice(-CHATBOT_CONFIG.maxHistoryMessages);

    setMessages(nextMessages);
    setLoading(true);
    abortRef.current?.abort();
    abortRef.current = new AbortController();

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: shortHistory }),
        signal: abortRef.current.signal,
      });

      const data = (await response.json()) as ChatApiResponse;
      const assistantMessage: ClientChatMessage = {
        role: "assistant",
        content: data.message || "I can help with that. Would you like to book a consultation?",
      };

      setMessages([...nextMessages, assistantMessage]);
    } catch {
      setMessages([
        ...nextMessages,
        {
          role: "assistant",
          content: `I'm sorry, I could not connect just now. Please try again or WhatsApp us for a quicker reply: ${BUSINESS_INFO.whatsapp}`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <AnimatePresence>
      {open ? (
        <motion.section
          initial={{ opacity: 0, y: 18, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 18, scale: 0.98 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-x-3 bottom-24 z-50 ml-auto flex h-[min(560px,calc(100vh-8rem))] max-w-[calc(100vw-1.5rem)] flex-col overflow-hidden rounded-lg border border-gold-light/35 bg-ivory-bright shadow-hover sm:inset-x-auto sm:right-6 sm:w-[410px]"
          aria-label="Namita's Femme Fitness Wellness Assistant"
        >
          <header className="flex items-center justify-between bg-black px-5 py-4 text-white">
            <div className="min-w-0">
              <h2 className="font-serif text-xl">Wellness Assistant</h2>
              <p className="text-[10px] uppercase tracking-[0.2em] text-gold-light">Namita\u2019s Femme Fitness</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close chat"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm border border-white/20 transition-colors hover:border-gold-light hover:text-gold-light"
            >
              <X className="h-4 w-4" />
            </button>
          </header>
          <div ref={scrollRef} className="min-w-0 flex-1 space-y-3 overflow-y-auto overflow-x-hidden bg-ivory-bright p-4">
            {messages.map((message, index) => (
              <ChatMessage key={`${message.role}-${index}`} message={message} />
            ))}
            {loading ? <TypingIndicator /> : null}
          </div>
          <ChatInput disabled={loading} onSend={sendMessage} />
        </motion.section>
      ) : null}
    </AnimatePresence>
  );
}
