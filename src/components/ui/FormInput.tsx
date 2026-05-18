import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type FormInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function FormInput({ label, className, id, ...props }: FormInputProps) {
  const inputId = id ?? props.name;
  return (
    <label className="block" htmlFor={inputId}>
      <span className="mb-2 block text-xs font-semibold uppercase tracking-[0.18em] text-ink">{label}</span>
      <input
        id={inputId}
        className={cn(
          "w-full border-0 border-b border-black bg-transparent px-0 py-3 text-base text-ink placeholder:text-ink-muted/55 focus:border-gold-light focus:ring-0",
          className,
        )}
        {...props}
      />
    </label>
  );
}
