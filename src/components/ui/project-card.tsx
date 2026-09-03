import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { GithubIcon } from "@/components/icons/brand-icons";
import { ProjectCover } from "@/components/ui/project-cover";
import type { Project } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      className={cn(
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-surface/40",
        "transition-[border-color,background-color,transform] duration-300",
        "hover:-translate-y-1 hover:border-line-strong hover:bg-surface",
        "has-[a:focus-visible]:border-accent/50 has-[a:focus-visible]:bg-surface",
        "lg:min-h-[20rem] lg:flex-row",
      )}
    >
      <ProjectCover
        project={project}
        className="aspect-16/10 w-full shrink-0 border-b border-line lg:aspect-auto lg:w-[44%] lg:border-r lg:border-b-0"
        sizes="(min-width: 1024px) 44vw, 100vw"
      />

      <div className="flex flex-1 flex-col p-6 sm:p-7 lg:p-8">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] tracking-[0.18em] text-accent uppercase">
            {project.category}
          </span>
          {project.highlight ? (
            <span className="rounded-full border border-accent/30 bg-accent-dim px-2 py-0.5 font-mono text-[10px] tracking-[0.14em] text-accent uppercase">
              Destaque
            </span>
          ) : null}
          <span aria-hidden className="h-px flex-1 bg-line" />
        </div>

        <h3 className="mt-4 text-xl font-medium tracking-[-0.02em] text-fg sm:text-2xl">
          {/* Link estendido: cobre o card inteiro sem aninhar interativos. */}
          <Link
            href={`/projetos/${project.slug}`}
            className="before:absolute before:inset-0 before:z-0 before:content-['']"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted sm:text-[0.9375rem]">
          {project.description}
        </p>

        {project.technologies.length > 0 ? (
          <ul className="mt-6 flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-[11px] text-subtle transition-colors duration-300 group-hover:border-line-strong group-hover:text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 pt-1 lg:mt-auto">
          <span className="flex items-center gap-1.5 text-sm text-fg">
            Ver case
            <ArrowUpRight className="size-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>

          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 text-sm text-subtle transition-colors duration-200 hover:text-fg"
            >
              Acessar projeto
            </a>
          ) : null}

          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Repositório de ${project.title} no GitHub`}
              className="relative z-10 text-subtle transition-colors duration-200 hover:text-fg"
            >
              <GithubIcon className="size-4" />
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
