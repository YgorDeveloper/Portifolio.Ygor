import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section
      id="projetos"
      index="01"
      label="Projetos"
      title="Projetos no portfólio."
      description="Lojas, sites e sistemas em produção — do catálogo de sneakers à agenda de uma clínica. Cada card abre o case completo."
    >
      <div className="flex flex-col gap-5 lg:gap-6">
        {projects.map((project, index) => (
          <Reveal
            key={project.slug}
            delay={index * 0.06}
          >
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
