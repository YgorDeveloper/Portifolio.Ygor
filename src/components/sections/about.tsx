import { ProfilePhoto } from "@/components/ui/profile-photo";
import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { education } from "@/data/experience";
import { skillGroups } from "@/data/skills";

const facts = [
  { label: "Atuação atual", value: "Biomessenger · desde nov. 2025" },
  { label: "Experiência anterior", value: "TJDFT / Positivo S+ · 12 meses" },
  {
    label: "Formação",
    value: `${education.course} · ${education.status.toLowerCase()}, conclusão em ${education.expectedCompletion}`,
  },
];

export function About() {
  return (
    <Section
      id="sobre"
      index="01"
      label="Sobre mim"
      title={
        <>
          Comecei resolvendo problemas de sistema.{" "}
          <span className="text-subtle">Hoje também os construo.</span>
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.62fr)_minmax(0,1fr)] lg:gap-14">
        {/* Retrato */}
        <Reveal>
          <div className="relative aspect-4/5 w-full max-w-[17rem] overflow-hidden rounded-xl border border-line bg-surface">
            <ProfilePhoto />
          </div>
        </Reveal>

        {/* Trajetória */}
        <div>
          <div className="space-y-4 text-base leading-relaxed text-muted md:text-[1.0625rem]">
            <Reveal delay={0.05}>
              <p>
                Trabalho profissionalmente com tecnologia. Desde novembro de 2025
                faço parte da{" "}
                <strong className="font-medium text-fg">Biomessenger</strong>,
                onde atuo com suporte, sistemas, equipamentos e integrações. Antes
                disso, passei 12 meses como Analista de Suporte Júnior no TJDFT,
                pela Positivo S+, atendendo usuários e resolvendo incidentes.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <p>
                Curso Análise e Desenvolvimento de Sistemas e desenvolvo projetos
                próprios para aprofundar a parte de desenvolvimento. O interesse
                continua o mesmo: transformar problemas reais em produtos e
                sistemas que funcionam.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <dl className="mt-8 grid gap-px overflow-hidden rounded-lg border border-line bg-line">
              {facts.map((fact) => (
                <div
                  key={fact.label}
                  className="flex flex-wrap items-baseline gap-x-4 gap-y-1 bg-bg px-4 py-3"
                >
                  <dt className="w-full font-mono text-[10px] tracking-[0.18em] text-subtle uppercase sm:w-44 sm:shrink-0">
                    {fact.label}
                  </dt>
                  <dd className="text-sm text-fg">{fact.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>

      {/* Tecnologias — sem cartões, só a lista organizada por área. */}
      <div id="tecnologias" className="mt-14 scroll-mt-24 border-t border-line pt-10">
        <Reveal>
          <h3 className="font-mono text-[10px] tracking-[0.2em] text-subtle uppercase">
            Tecnologias que uso
          </h3>
        </Reveal>

        <dl className="mt-6 grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillGroups.map((group, index) => (
            <Reveal key={group.id} delay={index * 0.05}>
              <dt className="text-sm font-medium text-fg">{group.title}</dt>
              <dd className="mt-2.5 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded border border-line bg-bg-soft px-2 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {item}
                  </span>
                ))}
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </Section>
  );
}
