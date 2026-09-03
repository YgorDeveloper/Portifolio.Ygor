import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/ui/project-card";
import { Section } from "@/components/ui/section";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <Section
      id="projetos"
      index="03"
      label="Projetos"
      title="O que eu construí."
      description="Produtos e sistemas em que trabalhei — do catálogo de uma loja à comunicação entre serviços e equipamentos. Cada card abre um detalhamento do projeto."
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
