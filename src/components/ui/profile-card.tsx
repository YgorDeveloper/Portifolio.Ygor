import { Reveal } from "@/components/ui/reveal";
import { education, experiences } from "@/data/experience";
import { featuredStack } from "@/data/skills";
import { cn } from "@/lib/utils";

type Entry = {
  label: string;
  /** Período alinhado à direita do rótulo. */
  period: string;
  value: string;
  detail?: string;
};

const [current, previous] = experiences;

/**
 * Ficha profissional exibida no hero: em poucos segundos o visitante sabe
 * onde atuo hoje, de onde vim, o que estudo e com o que trabalho.
 */
const entries: Entry[] = [
  {
    label: "Atuação atual",
    period: "Nov. 2025 — atual",
    value: current.company,
    detail: current.role,
  },
  {
    label: "Experiência anterior",
    period: previous.period,
    value: previous.partner
      ? `${previous.company} · ${previous.partner}`
      : previous.company,
    detail: previous.role,
  },
  {
    label: "Formação",
    period: `Conclusão em ${education.expectedCompletion}`,
    value: education.course,
    detail: education.status,
  },
];

export function ProfileCard({ className }: { className?: string }) {
  return (
    <aside
      aria-label="Resumo profissional"
      className={cn(
        "overflow-hidden rounded-xl border border-line bg-surface/70 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.9)] backdrop-blur-sm",
        className,
      )}
    >
      <div className="flex items-center gap-4 border-b border-line bg-bg-soft/60 px-5 py-4 sm:px-6">
        <span className="font-mono text-[10px] tracking-[0.2em] text-subtle uppercase">
          Perfil profissional
        </span>
        <span aria-hidden className="h-px flex-1 bg-line" />
      </div>

      <dl>
        {entries.map((entry, index) => (
          <Reveal key={entry.label} delay={0.3 + index * 0.08} y={10}>
            <div
              className={cn(
                "px-5 py-5 sm:px-6",
                index > 0 && "border-t border-line",
              )}
            >
              <dt className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <span className="font-mono text-[10px] tracking-[0.18em] text-subtle uppercase">
                  {entry.label}
                </span>
                <span className="shrink-0 font-mono text-[10px] tracking-[0.14em] text-subtle/80 uppercase">
                  {entry.period}
                </span>
              </dt>
              <dd className="mt-2">
                <span className="block text-[0.9375rem] leading-snug font-medium text-fg">
                  {entry.value}
                </span>
                {entry.detail ? (
                  <span className="mt-1 block text-sm leading-snug text-muted">
                    {entry.detail}
                  </span>
                ) : null}
              </dd>
            </div>
          </Reveal>
        ))}

        <Reveal delay={0.3 + entries.length * 0.08} y={10}>
          <div className="border-t border-line px-5 py-5 sm:px-6">
            <dt className="font-mono text-[10px] tracking-[0.18em] text-subtle uppercase">
              Principais tecnologias
            </dt>
            <dd className="mt-3 flex flex-wrap gap-1.5">
              {featuredStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-[11px] text-muted"
                >
                  {tech}
                </span>
              ))}
            </dd>
          </div>
        </Reveal>
      </dl>
    </aside>
  );
}
