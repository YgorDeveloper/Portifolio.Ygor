import { Reveal } from "@/components/ui/reveal";
import { Section } from "@/components/ui/section";
import { steps } from "@/data/process";

export function Process() {
  return (
    <Section
      id="processo"
      index="03"
      label="Processo"
      title="Como um projeto acontece."
      description="Do primeiro contato ao site no ar, em quatro etapas que você acompanha de perto."
    >
      <ol className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => (
          <li key={step.title} className="min-w-0">
            <Reveal delay={index * 0.07} className="h-full">
              <div className="flex h-full flex-col bg-bg p-6 lg:p-7">
                {/* Numeração porque a ordem é real: uma etapa depende da anterior. */}
                <span className="font-mono text-[11px] tracking-[0.18em] text-accent">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 text-base font-medium tracking-[-0.01em] text-fg">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </Section>
  );
}
