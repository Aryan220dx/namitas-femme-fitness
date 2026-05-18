import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-sm border border-gold-light/40 bg-gold-light/10 px-3 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.22em] text-gold",
        className,
      )}
    >
      {children}
    </span>
  );
}
