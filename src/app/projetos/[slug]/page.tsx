import { ArrowLeft, ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { GithubIcon } from "@/components/icons/brand-icons";
import { buttonVariants } from "@/components/ui/button";
import { ProjectCover } from "@/components/ui/project-cover";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/config/site";
import { getProjectBySlug, projects } from "@/data/projects";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  const title = `${project.title} — ${project.category}`;

  return {
    title,
    description: project.description,
    alternates: { canonical: `/projetos/${project.slug}/` },
    openGraph: {
      type: "article",
      title,
      description: project.description,
      url: `${siteConfig.url}/projetos/${project.slug}/`,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description: project.description,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  const index = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const caseStudy = project.caseStudy;

  const prose = [
    { key: "problem", label: "Problema", content: caseStudy?.problem },
    { key: "solution", label: "Solução", content: caseStudy?.solution },
    { key: "result", label: "Resultado", content: caseStudy?.result },
  ];

  const lists = [
    { key: "features", label: "Funcionalidades", items: caseStudy?.features },
    { key: "challenges", label: "Desafios", items: caseStudy?.challenges },
  ];

  const proseBlocks = prose.filter((block) => Boolean(block.content));
  const listBlocks = lists.filter((block) => Boolean(block.items?.length));

  /* Blocos ainda não preenchidos viram um aviso único, em vez de vazios. */
  const pending = [
    ...prose.filter((block) => !block.content),
    ...lists.filter((block) => !block.items?.length),
  ].map((block) => block.label.toLowerCase());

  return (
    <article className="pt-28 pb-24 md:pt-36 md:pb-32">
      <div className="container-page">
        <Reveal>
          <Link
            href="/#projetos"
            className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-subtle uppercase transition-colors duration-200 hover:text-fg"
          >
            <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
            Todos os projetos
          </Link>
        </Reveal>

        {/* Cabeçalho */}
        <header className="mt-10 max-w-3xl">
          <Reveal delay={0.04}>
            <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
              {project.category}
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h1 className="mt-4 text-4xl leading-[1.05] font-medium tracking-[-0.03em] text-fg sm:text-5xl md:text-6xl">
              {project.title}
            </h1>
          </Reveal>

          {project.summary ? (
            <Reveal delay={0.12}>
              <p className="mt-6 text-lg leading-relaxed text-muted md:text-xl">
                {project.summary}
              </p>
            </Reveal>
          ) : null}

          {project.url || project.github ? (
            <Reveal delay={0.16}>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({ size: "md" })}
                  >
                    Acessar projeto
                    <ArrowUpRight className="size-4" />
                  </a>
                ) : null}
                {project.github ? (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={buttonVariants({
                      variant: "secondary",
                      size: "md",
                    })}
                  >
                    <GithubIcon className="size-4" />
                    Repositório
                  </a>
                ) : null}
              </div>
            </Reveal>
          ) : null}
        </header>

        {/* Capa */}
        <Reveal delay={0.2}>
          <div className="group mt-14 overflow-hidden rounded-2xl border border-line">
            <ProjectCover
              project={project}
              className="aspect-16/9 w-full md:aspect-21/9"
              sizes="(min-width: 1280px) 76rem, 100vw"
              priority
            />
          </div>
        </Reveal>

        {/* Conteúdo */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[minmax(0,1fr)_16rem] lg:gap-16">
          <div className="max-w-2xl">
            <Reveal>
              <section>
                <h2 className="font-mono text-[11px] tracking-[0.2em] text-subtle uppercase">
                  Visão geral
                </h2>
                <p className="mt-4 text-base leading-relaxed text-muted md:text-[1.0625rem]">
                  {project.description}
                </p>
              </section>
            </Reveal>

            {proseBlocks.map((block, blockIndex) => (
              <Reveal key={block.key} delay={0.04 * blockIndex}>
                <section className="mt-12">
                  <h2 className="font-mono text-[11px] tracking-[0.2em] text-subtle uppercase">
                    {block.label}
                  </h2>
                  <p className="mt-4 text-base leading-relaxed text-muted md:text-[1.0625rem]">
                    {block.content}
                  </p>
                </section>
              </Reveal>
            ))}

            {listBlocks.map((block, blockIndex) => (
              <Reveal key={block.key} delay={0.04 * blockIndex}>
                <section className="mt-12">
                  <h2 className="font-mono text-[11px] tracking-[0.2em] text-subtle uppercase">
                    {block.label}
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {block.items?.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-base text-muted"
                      >
                        <span
                          aria-hidden
                          className="mt-2.5 size-1 shrink-0 rounded-full bg-accent"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              </Reveal>
            ))}

            {project.screenshots?.length ? (
              <Reveal delay={0.06}>
                <section className="mt-12">
                  <h2 className="font-mono text-[11px] tracking-[0.2em] text-subtle uppercase">
                    Telas
                  </h2>
                  <div className="mt-5 space-y-5">
                    {project.screenshots.map((shot) => (
                      <figure key={shot.src}>
                        <div className="overflow-hidden rounded-lg border border-line bg-bg-soft">
                          <Image
                            src={shot.src}
                            alt={shot.alt}
                            width={1440}
                            height={900}
                            sizes="(min-width: 1024px) 40rem, 100vw"
                            className="h-auto w-full"
                          />
                        </div>
                        {shot.caption ? (
                          <figcaption className="mt-2 font-mono text-[11px] tracking-[0.12em] text-subtle uppercase">
                            {shot.caption}
                          </figcaption>
                        ) : null}
                      </figure>
                    ))}
                  </div>
                </section>
              </Reveal>
            ) : null}

            {pending.length > 0 ? (
              <Reveal delay={0.08}>
                {/* Espaço reservado: preencha `caseStudy` em src/data/projects.ts */}
                <section className="mt-14 rounded-xl border border-dashed border-line-strong bg-surface/30 p-6">
                  <h2 className="flex items-center gap-2.5 font-mono text-[11px] tracking-[0.2em] text-subtle uppercase">
                    <FileText className="size-3.5" strokeWidth={1.5} />
                    Em documentação
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-subtle">
                    Este case study ainda será complementado com{" "}
                    {pending.join(", ")}.
                  </p>
                </section>
              </Reveal>
            ) : null}
          </div>

          {/* Ficha técnica */}
          <Reveal delay={0.08}>
            <aside className="lg:sticky lg:top-28">
              <div className="rounded-xl border border-line bg-surface/40 p-6">
                <h2 className="font-mono text-[11px] tracking-[0.2em] text-subtle uppercase">
                  Ficha técnica
                </h2>

                <dl className="mt-5 space-y-5 text-sm">
                  <div>
                    <dt className="text-subtle">Categoria</dt>
                    <dd className="mt-1 text-fg">{project.category}</dd>
                  </div>

                  {project.technologies.length > 0 ? (
                    <div>
                      <dt className="text-subtle">Tecnologias</dt>
                      <dd className="mt-2 flex flex-wrap gap-1.5">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="rounded-md border border-line bg-bg px-2.5 py-1 font-mono text-[11px] text-muted"
                          >
                            {tech}
                          </span>
                        ))}
                      </dd>
                    </div>
                  ) : null}
                </dl>
              </div>
            </aside>
          </Reveal>
        </div>

        {/* Navegação entre projetos */}
        {projects.length > 1 ? (
          <nav
            aria-label="Outros projetos"
            className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2"
          >
            <Link
              href={`/projetos/${previous.slug}`}
              className="group flex flex-col gap-2 bg-bg p-6 transition-colors duration-200 hover:bg-surface"
            >
              <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-subtle uppercase">
                <ArrowLeft className="size-3.5 transition-transform duration-200 group-hover:-translate-x-0.5" />
                Anterior
              </span>
              <span className="text-lg font-medium tracking-[-0.01em] text-fg">
                {previous.title}
              </span>
            </Link>

            <Link
              href={`/projetos/${next.slug}`}
              className="group flex flex-col items-end gap-2 bg-bg p-6 text-right transition-colors duration-200 hover:bg-surface"
            >
              <span className="flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-subtle uppercase">
                Próximo
                <ArrowRight className="size-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
              </span>
              <span className="text-lg font-medium tracking-[-0.01em] text-fg">
                {next.title}
              </span>
            </Link>
          </nav>
        ) : null}
      </div>
    </article>
  );
}
