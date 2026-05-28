import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type FormTextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export function FormTextarea({ label, className, id, ...props }: FormTextareaProps) {
  const inputId = id ?? props.name;
  return (
    <label className="block" htmlFor={inputId}>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink">{label}</span>
      <textarea
        id={inputId}
        className={cn(
          "w-full resize-none border-0 border-b border-black bg-transparent px-0 py-3 text-base text-ink placeholder:text-ink-muted/55 focus:border-gold-light focus:ring-0",
          className,
        )}
        {...props}
      />
    </label>
  );
}
