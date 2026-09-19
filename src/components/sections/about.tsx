import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { skillGroups } from "@/data/skills";

export function About() {
  return (
    <Section
      id="sobre"
      index="04"
      label="O estúdio"
      title={
        <>
          Tecnologia que precisa funcionar{" "}
          <span className="text-subtle">no dia a dia.</span>
        </>
      }
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16">
        <div className="min-w-0 space-y-4 text-base leading-relaxed text-muted md:text-[1.0625rem]">
          <Reveal>
            <p>
              O estúdio nasceu do suporte e dos sistemas — de estar do lado de
              quem usa o software quando ele falha. Por isso cada projeto começa
              pela operação: quem vai usar, em que momento, com que pressa.
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <p>
              Daí saem sites que respondem o básico antes da pergunta, lojas que
              fecham a venda sozinhas e sistemas em que o dono confia mais do
              que no caderno. Tudo publicado na Cloudflare: rápido, seguro e sem
              servidor para manter.
            </p>
          </Reveal>
        </div>

        {/* Tecnologias — sem cartões, só a lista organizada por área. */}
        <div id="tecnologias" className="min-w-0 scroll-mt-24">
          <Reveal>
            <h3 className="font-mono text-[10px] tracking-[0.2em] text-subtle uppercase">
              Tecnologias
            </h3>
          </Reveal>
          <dl className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
            {skillGroups.map((group, index) => (
              <Reveal key={group.id} delay={index * 0.05}>
                <dt className="text-sm font-medium text-fg">{group.title}</dt>
                <dd className="mt-2 flex flex-wrap gap-1.5">
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
      </div>
    </Section>
  );
}
