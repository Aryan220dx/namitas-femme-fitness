import type { ClientChatMessage } from "@/lib/chat/types";
import { cn } from "@/lib/utils";

export function ChatMessage({ message }: { message: ClientChatMessage }) {
  const isUser = message.role === "user";

  return (
    <div className={cn("flex min-w-0", isUser ? "justify-end" : "justify-start")}>
      <div
        className={cn(
          "max-w-[84%] overflow-hidden whitespace-pre-line break-words rounded-md px-4 py-3 text-sm leading-6 shadow-card [overflow-wrap:anywhere]",
          isUser
            ? "bg-gold-light text-ink"
            : "border border-ink-border/35 bg-ivory text-ink-muted",
        )}
      >
        {message.content}
      </div>
    </div>
  );
}
