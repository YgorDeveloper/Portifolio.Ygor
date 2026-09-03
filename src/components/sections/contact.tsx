import { ArrowUpRight } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { socialIcons } from "@/components/ui/social-icon";
import { activeSocialLinks, siteConfig } from "@/config/site";
import { services } from "@/data/services";

export function Contact() {
  const primary = activeSocialLinks.find((link) => link.key === "email");

  return (
    <Section
      id="contato"
      index="04"
      label="Contato"
      title="Vamos construir algo?"
      description="Tem uma ideia, projeto ou oportunidade? Entre em contato."
    >
      {/* O que faço — antes era uma seção inteira; aqui cabe em uma linha. */}
      <Reveal>
        <ul className="mb-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <li key={service.id} className="bg-bg px-4 py-3.5">
              <span className="block text-sm font-medium text-fg">
                {service.title}
              </span>
              <span className="mt-1 block text-[13px] leading-snug text-subtle">
                {service.description}
              </span>
            </li>
          ))}
        </ul>
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
        <Reveal>
          <div className="lg:sticky lg:top-28">
            {siteConfig.availability.available ? (
              <p className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface/60 py-1.5 pr-4 pl-3 font-mono text-[11px] tracking-[0.08em] text-muted uppercase">
                <span className="relative flex size-1.5">
                  <span className="status-ping absolute inline-flex size-full rounded-full bg-positive" />
                  <span className="relative inline-flex size-1.5 rounded-full bg-positive" />
                </span>
                {siteConfig.availability.label}
              </p>
            ) : null}

            <p className="mt-6 max-w-md text-base leading-relaxed text-muted">
              Respondo pelo canal que for mais prático para você. Se puder,
              mande o contexto do projeto logo no primeiro contato: assim
              consigo retornar com algo útil já na primeira mensagem.
            </p>

            {primary ? (
              <a
                href={primary.href}
                className={buttonVariants({ size: "lg", className: "mt-8" })}
              >
                Enviar e-mail
                <ArrowUpRight className="size-4" />
              </a>
            ) : null}
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="overflow-hidden rounded-2xl border border-line">
            {activeSocialLinks.map((link, index) => {
              const Icon = socialIcons[link.key];
              const isExternal = link.href.startsWith("http");

              return (
                <li
                  key={link.key}
                  className={index > 0 ? "border-t border-line" : undefined}
                >
                  <a
                    href={link.href}
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="group flex items-center gap-4 bg-bg px-5 py-5 transition-colors duration-200 hover:bg-surface sm:px-6"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-line bg-bg-soft text-muted transition-colors duration-200 group-hover:border-accent/30 group-hover:text-accent">
                      <Icon className="size-[18px]" />
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-[0.9375rem] font-medium text-fg">
                        {link.label}
                      </span>
                      <span className="block truncate text-sm text-subtle">
                        {link.handle}
                      </span>
                    </span>

                    <ArrowUpRight className="size-4 shrink-0 text-subtle transition-[transform,color] duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent" />
                  </a>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </Section>
  );
}
