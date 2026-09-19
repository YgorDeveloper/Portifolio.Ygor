import { ArrowDown, ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { SocialRow } from "@/components/ui/social-row";
import { WorkStack } from "@/components/ui/work-stack";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <section
      id="top"
      aria-label="Apresentação"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-14 md:pt-32 md:pb-24"
    >
      {/* Plano de fundo: malha técnica + brilho discreto */}
      <div
        aria-hidden
        className="grid-backdrop pointer-events-none absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(120% 90% at 50% 0%, #000 20%, transparent 78%)",
          WebkitMaskImage:
            "radial-gradient(120% 90% at 50% 0%, #000 20%, transparent 78%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[900px] max-w-[130vw] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(88,132,224,0.16), transparent 70%)",
        }}
      />

      <div className="container-page relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14">
          <div className="min-w-0">
            {siteConfig.availability.available ? (
              <Reveal>
                <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pr-4 pl-3 font-mono text-[11px] tracking-[0.08em] text-muted uppercase">
                  <span className="relative flex size-1.5">
                    <span className="status-ping absolute inline-flex size-full rounded-full bg-positive" />
                    <span className="relative inline-flex size-1.5 rounded-full bg-positive" />
                  </span>
                  {siteConfig.availability.label}
                </p>
              </Reveal>
            ) : null}

            <Reveal delay={0.08}>
              <h1 className="text-gradient mt-7 pb-[0.2em] text-[clamp(2.25rem,6.2vw,4.25rem)] leading-[1.02] font-medium tracking-[-0.035em]">
                Sites, lojas e sistemas que trabalham pelo seu negócio.
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-3 max-w-xl text-base leading-relaxed text-muted md:text-lg">
                Do site institucional ao sistema de gestão: o estúdio desenha,
                desenvolve e publica — com agenda, checkout e painel quando o
                negócio pede.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#projetos" className={buttonVariants({ size: "lg" })}>
                  Ver projetos
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="#contato"
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  Falar sobre um projeto
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <SocialRow className="mt-9" />
            </Reveal>
          </div>

          <Reveal delay={0.14} className="min-w-0">
            <WorkStack />
          </Reveal>
        </div>
      </div>

      <a
        href="#projetos"
        aria-label="Ir para os projetos"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-subtle uppercase transition-colors duration-200 hover:text-fg lg:flex"
      >
        Projetos
        <ArrowDown className="size-3.5" />
      </a>
    </section>
  );
}
