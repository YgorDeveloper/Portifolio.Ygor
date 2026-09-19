import { CalendarDays, Globe, Layers, ShoppingCart } from "lucide-react";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { projects } from "@/data/projects";
import { services, type Service } from "@/data/services";

const icons: Record<Service["icon"], ComponentType<SVGProps<SVGSVGElement>>> = {
  globe: Globe,
  cart: ShoppingCart,
  layers: Layers,
  calendar: CalendarDays,
};

const titleBySlug = new Map(projects.map((p) => [p.slug, p.title]));

export function Services() {
  return (
    <Section
      id="servicos"
      index="02"
      label="Serviços"
      title="O que o estúdio entrega."
      description="Quatro frentes, cada uma com projeto real no portfólio para mostrar como fica."
    >
      <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
        {services.map((service, index) => {
          const Icon = icons[service.icon];

          return (
            <Reveal key={service.id} delay={index * 0.06} className="min-w-0">
              <article className="group flex h-full flex-col bg-bg p-6 transition-colors duration-300 hover:bg-surface sm:p-8">
                <span className="flex size-10 items-center justify-center rounded-lg border border-line bg-bg-soft text-muted transition-colors duration-300 group-hover:border-accent/30 group-hover:text-accent">
                  <Icon className="size-[18px]" strokeWidth={1.5} />
                </span>

                <h3 className="mt-6 text-lg font-medium tracking-[-0.01em] text-fg">
                  {service.title}
                </h3>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
                  {service.description}
                </p>

                {/* Prova: projetos do portfólio que fazem exatamente isso. */}
                <p className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 pt-1 text-sm text-subtle">
                  <span className="font-mono text-[10px] tracking-[0.16em] uppercase">
                    Ex.:
                  </span>
                  {service.proof.map((slug, i) => (
                    <span key={slug} className="inline-flex items-center gap-2">
                      <Link
                        href={`/projetos/${slug}`}
                        className="text-muted underline decoration-line-strong underline-offset-4 transition-colors duration-200 hover:text-fg hover:decoration-accent"
                      >
                        {titleBySlug.get(slug) ?? slug}
                      </Link>
                      {i < service.proof.length - 1 ? (
                        <span aria-hidden className="text-line-strong">
                          ·
                        </span>
                      ) : null}
                    </span>
                  ))}
                </p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
