import { ArrowDown, ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { ProfileCard } from "@/components/ui/profile-card";
import { SocialRow } from "@/components/ui/social-row";
import { siteConfig } from "@/config/site";


export function Hero() {
  return (
    <section
      id="top"
      aria-label="Apresentação"
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-14 md:pt-32 md:pb-28"
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
        <div className="grid items-center gap-10 sm:gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          {/* Coluna de conteúdo */}
          <div>
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

            <Reveal delay={0.05}>
              <p className="mt-8 font-mono text-sm text-subtle">Olá, eu sou</p>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="text-gradient mt-2 pb-[0.28em] text-[clamp(2.75rem,9vw,5rem)] leading-[1.02] font-medium tracking-[-0.04em]">
                Ygor Dias
              </h1>
            </Reveal>

            <Reveal delay={0.16}>
              <p className="mt-2 max-w-xl text-xl leading-snug font-medium tracking-[-0.01em] text-fg sm:text-2xl">
                Profissional de Tecnologia{" "}
                <span className="text-accent">&</span> Desenvolvedor
              </p>
            </Reveal>

            <Reveal delay={0.22}>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-muted md:text-[1.0625rem]">
                Atuo com suporte, sistemas, integrações e desenvolvimento de
                soluções digitais, transformando problemas reais em soluções
                funcionais e eficientes.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="mt-9 flex flex-wrap items-center gap-3">
                <a href="#projetos" className={buttonVariants({ size: "lg" })}>
                  Ver projetos
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  href="#contato"
                  className={buttonVariants({ variant: "secondary", size: "lg" })}
                >
                  Entre em contato
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.34}>
              <SocialRow className="mt-9" />
            </Reveal>
          </div>

          {/* Coluna visual */}
          <Reveal delay={0.18} className="lg:pl-4">
            <ProfileCard />
          </Reveal>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Ir para a seção sobre mim"
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-[11px] tracking-[0.18em] text-subtle uppercase transition-colors duration-200 hover:text-fg lg:flex"
      >
        Explorar
        <ArrowDown className="size-3.5" />
      </a>
    </section>
  );
}
