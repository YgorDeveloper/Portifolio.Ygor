"use client";

import { m, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

type RevealProps = {
  children: ReactNode;
  /** Atraso em segundos — use múltiplos pequenos para escalonar listas. */
  delay?: number;
  /** Deslocamento vertical inicial em pixels. */
  y?: number;
  className?: string;
};

/**
 * Revela o conteúdo ao entrar na viewport.
 *
 * A visibilidade é detectada com `useInView` e aplicada por `animate`, ou seja,
 * um alvo declarativo: se o navegador congelar o frame loop (aba em segundo
 * plano, por exemplo), o valor final é reaplicado no próximo render em vez de
 * ficar preso no estado inicial — o que aconteceria com o gesto `whileInView`.
 *
 * Sob `prefers-reduced-motion` o conteúdo é renderizado direto, sem animação.
 */
export function Reveal({ children, delay = 0, y = 18, className }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  if (shouldReduceMotion) {
    return <div className={cn("reveal", className)}>{children}</div>;
  }

  return (
    <m.div
      ref={ref}
      className={cn("reveal", className)}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </m.div>
  );
}
