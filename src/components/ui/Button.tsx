import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "light";
type ButtonSize = "sm" | "md" | "lg" | "icon";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-black text-white hover:bg-gold-light hover:text-ink shadow-button",
  secondary: "bg-gold-light text-ink hover:bg-gold-bright shadow-gold",
  outline: "border border-black text-black hover:bg-black hover:text-white",
  ghost: "text-gold border-b border-gold-light px-0 hover:text-black",
  light: "border border-gold-light text-gold-light hover:bg-gold-light hover:text-ink",
};

const sizes: Record<ButtonSize, string> = {
  sm: "px-5 py-2 text-xs",
  md: "px-8 py-3 text-sm",
  lg: "px-10 py-4 text-sm",
  icon: "h-11 w-11 p-0",
};

type BaseProps = {
  children: ReactNode;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonLinkProps = BaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

export function Button({ className, variant = "primary", size = "md", children, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-sm font-sans font-semibold uppercase tracking-[0.16em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 active:scale-95",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({ className, variant = "primary", size = "md", children, href, ...props }: ButtonLinkProps) {
  return (
    <Link
      href={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-sm font-sans font-semibold uppercase tracking-[0.16em] transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 active:scale-95",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
