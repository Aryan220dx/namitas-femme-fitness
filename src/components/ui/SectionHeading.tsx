import { cn } from "@/lib/utils";

export function SectionHeading({
  label,
  title,
  subtitle,
  centered = true,
  inverse = false,
}: {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  inverse?: boolean;
}) {
  return (
    <div className={cn("mb-14 md:mb-20", centered && "text-center")}>
      {label ? <SectionLabel>{label}</SectionLabel> : null}
      <h2 className={cn("mb-4 text-4xl font-semibold leading-tight md:text-5xl", inverse ? "text-white" : "text-ink")}>
        {title}
      </h2>
      <div className={cn("h-0.5 w-16 bg-gold-light", centered && "mx-auto")} />
      {subtitle ? (
        <p className={cn("mt-6 max-w-2xl text-base leading-7 md:text-lg", centered && "mx-auto", inverse ? "text-white/70" : "text-ink-muted")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return <span className="mb-5 block font-sans text-xs font-semibold uppercase tracking-[0.24em] text-gold">{children}</span>;
}
