import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionBg = "ivory" | "white" | "mid" | "black";

export function SectionWrapper({
  children,
  id,
  className,
  bg = "ivory",
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  bg?: SectionBg;
}) {
  const backgrounds: Record<SectionBg, string> = {
    ivory: "bg-ivory text-ink",
    white: "bg-ivory-bright text-ink",
    mid: "bg-ivory-mid text-ink",
    black: "bg-black text-white",
  };

  return (
    <section id={id} className={cn("section-padding", backgrounds[bg], className)}>
      <div className="section-container">{children}</div>
    </section>
  );
}
