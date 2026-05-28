"use client";

import { Send } from "lucide-react";
import { FormEvent, KeyboardEvent, useState } from "react";

export function ChatInput({ disabled, onSend }: { disabled?: boolean; onSend: (message: string) => void }) {
  const [value, setValue] = useState("");

  function submit() {
    const message = value.trim();
    if (!message || disabled) return;
    onSend(message);
    setValue("");
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    submit();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      submit();
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex min-w-0 gap-2 border-t border-ink-border/30 bg-ivory-bright p-3">
      <label className="sr-only" htmlFor="nff-chat-input">
        Type your message
      </label>
      <input
        id="nff-chat-input"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder="Ask about programs, timings, memberships..."
        className="min-w-0 flex-1 rounded-md border border-ink-border/50 bg-ivory px-3 py-2 text-sm text-ink outline-none transition-colors placeholder:text-ink-muted/55 focus:border-gold-light disabled:cursor-not-allowed disabled:opacity-70"
      />
      <button
        type="submit"
        disabled={disabled || value.trim().length === 0}
        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-black text-gold-light transition-colors hover:bg-gold-light hover:text-ink disabled:cursor-not-allowed disabled:opacity-50"
        aria-label="Send chat message"
      >
        <Send className="h-4 w-4" />
      </button>
    </form>
  );
}
