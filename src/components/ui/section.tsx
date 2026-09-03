import type { ReactNode } from "react";

import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type SectionProps = {
  id: string;
  /** Índice exibido na régua da seção, ex.: "01". */
  index: string;
  /** Rótulo curto em maiúsculas. */
  label: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
};

export function Section({
  id,
  index,
  label,
  title,
  description,
  children,
  className,
}: SectionProps) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className={cn("section-y scroll-mt-24", className)}
    >
      <div className="container-page">
        <Reveal>
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs tracking-[0.2em] text-accent">
              {index}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-subtle">
              {label}
            </span>
            <span aria-hidden className="h-px flex-1 bg-line" />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2
            id={`${id}-title`}
            className="mt-6 max-w-3xl text-3xl font-medium leading-[1.12] tracking-[-0.02em] text-fg sm:text-4xl md:text-5xl"
          >
            {title}
          </h2>
        </Reveal>

        {description ? (
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {description}
            </p>
          </Reveal>
        ) : null}

        <div className="mt-12 md:mt-16">{children}</div>
      </div>
    </section>
  );
}
