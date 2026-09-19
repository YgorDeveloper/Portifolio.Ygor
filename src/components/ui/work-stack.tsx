import Image from "next/image";

import { cn } from "@/lib/utils";

type Shot = {
  src: string;
  alt: string;
  /** Posicionamento e profundidade da janela dentro da composição. */
  className: string;
};

/**
 * Composição de telas de projetos reais no hero: o trabalho fala antes do
 * texto. Todas as janelas ficam dentro da caixa (nenhum deslocamento
 * negativo), então a composição nunca provoca rolagem horizontal.
 */
const shots: Shot[] = [
  {
    src: "/projects/shots/velse-home.jpg",
    alt: "Loja Velse — e-commerce de sneakers",
    className: "left-0 top-0 z-0 w-[82%]",
  },
  {
    src: "/projects/shots/rota-dashboard.jpg",
    alt: "Rota 100 — sistema de gestão para bar e lanchonete",
    className: "right-0 top-[20%] z-10 w-[60%]",
  },
  {
    src: "/projects/shots/nath-home.jpg",
    alt: "Drª Náth Harmonier — site com agenda online",
    className: "bottom-0 left-[6%] z-20 w-[64%]",
  },
];

export function WorkStack({ className }: { className?: string }) {
  return (
    <div className={cn("relative aspect-[4/3.3] w-full", className)}>
      {shots.map((shot) => (
        <figure
          key={shot.src}
          className={cn(
            "absolute overflow-hidden rounded-lg border border-line-strong bg-surface shadow-[0_30px_60px_-30px_rgba(0,0,0,0.85)]",
            shot.className,
          )}
        >
          {/* Barra de janela: sinaliza "site de verdade", não ilustração. */}
          <div aria-hidden className="flex h-4 items-center gap-1 border-b border-line bg-bg-soft px-2 sm:h-5">
            <span className="size-1.5 rounded-full bg-line-strong" />
            <span className="size-1.5 rounded-full bg-line-strong" />
            <span className="size-1.5 rounded-full bg-line-strong" />
          </div>
          <Image
            src={shot.src}
            alt={shot.alt}
            width={1440}
            height={900}
            sizes="(min-width: 1024px) 34rem, 90vw"
            priority
            className="block h-auto w-full"
          />
        </figure>
      ))}
    </div>
  );
}
