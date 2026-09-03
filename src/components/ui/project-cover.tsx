"use client";

import Image from "next/image";
import { useState } from "react";

import { cn } from "@/lib/utils";
import type { Project } from "@/data/projects";

/**
 * Capa do projeto.
 *
 * Sem `image` — ou se o arquivo ainda não existir em /public — entra uma
 * composição gerada a partir do próprio título. Assim trocar as imagens nunca
 * deixa um card quebrado no ar.
 */
export function ProjectCover({
  project,
  className,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  priority = false,
}: {
  project: Project;
  className?: string;
  sizes?: string;
  priority?: boolean;
}) {
  const [imageFailed, setImageFailed] = useState(false);

  const showImage = Boolean(project.image) && !imageFailed;
  const isContained = project.imageFit === "contain";
  const isLight = project.coverTone === "light";

  return (
    <div
      className={cn(
        "relative overflow-hidden",
        showImage && isLight ? "bg-[#efefef]" : "bg-bg-soft",
        className,
      )}
    >
      {showImage ? (
        isContained ? (
          /* Caixa fixa e centralizada: os logos têm proporções bem diferentes
             (460x350, 881x881, 1600x1020) e sem um teto comum cada um ocupava
             um tamanho na grade. */
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <div className="relative h-full w-full max-h-[7.5rem] max-w-[13rem] sm:max-h-[8.5rem] sm:max-w-[15rem]">
              <Image
                src={project.image as string}
                alt={`Marca do projeto ${project.title}`}
                fill
                sizes={sizes}
                priority={priority}
                onError={() => setImageFailed(true)}
                className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
          </div>
        ) : (
          <Image
            src={project.image as string}
            alt={`Prévia do projeto ${project.title}`}
            fill
            sizes={sizes}
            priority={priority}
            onError={() => setImageFailed(true)}
            className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        )
      ) : (
        <div aria-hidden className="absolute inset-0">
          <div className="grid-backdrop absolute inset-0" />
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(90% 70% at 15% 100%, rgba(224,164,88,0.10), transparent 60%)",
            }}
          />
          <div className="absolute inset-0 flex items-end p-6 sm:p-8">
            <span className="max-w-full truncate font-mono text-[clamp(1.5rem,5.5vw,3.25rem)] leading-none font-medium tracking-[-0.04em] text-fg/10 transition-colors duration-500 group-hover:text-fg/[0.16]">
              {project.title}
            </span>
          </div>
        </div>
      )}
    </div>
  );
}
