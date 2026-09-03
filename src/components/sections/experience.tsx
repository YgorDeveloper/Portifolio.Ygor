import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <Section
      id="experiencia"
      index="02"
      label="Experiência"
      title="Onde a prática aconteceu."
      description="Ambientes reais de operação, com usuários, equipamentos e sistemas que precisam funcionar todos os dias."
    >
      <ol className="relative">
        {/* Trilho da timeline */}
        <span
          aria-hidden
          className="absolute top-2 bottom-2 left-[5px] w-px bg-line md:left-[7px]"
        />

        {experiences.map((experience, index) => (
          <li key={experience.company} className="relative pb-14 last:pb-0">
            <Reveal delay={index * 0.08}>
              <article className="pl-8 md:pl-12">
                {/* Marcador */}
                <span
                  aria-hidden
                  className="absolute left-0 flex size-3 items-center justify-center md:left-0.5"
                  style={{ top: "0.55rem" }}
                >
                  {experience.current ? (
                    <>
                      <span className="status-ping absolute inline-flex size-3 rounded-full bg-accent" />
                      <span className="relative size-3 rounded-full border-2 border-accent bg-bg" />
                    </>
                  ) : (
                    <span className="size-3 rounded-full border-2 border-line-strong bg-bg" />
                  )}
                </span>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <p className="font-mono text-[11px] tracking-[0.14em] text-subtle uppercase">
                    {experience.period}
                  </p>
                  {experience.current ? (
                    <span className="rounded-full border border-accent/30 bg-accent-dim px-2.5 py-0.5 font-mono text-[10px] tracking-[0.14em] text-accent uppercase">
                      Atual
                    </span>
                  ) : null}
                </div>

                <h3 className="mt-3 text-2xl font-medium tracking-[-0.02em] text-fg md:text-[1.75rem]">
                  {experience.company}
                  {experience.partner ? (
                    <span className="text-subtle"> · {experience.partner}</span>
                  ) : null}
                </h3>

                <p className="mt-1.5 text-sm text-accent">{experience.role}</p>

                <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">
                  {experience.description}
                </p>

                <ul className="mt-6 grid max-w-2xl gap-x-8 gap-y-2.5 sm:grid-cols-2">
                  {experience.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="flex items-start gap-2.5 text-sm text-subtle"
                    >
                      <span
                        aria-hidden
                        className="mt-[0.5rem] size-1 shrink-0 rounded-full bg-line-strong"
                      />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
