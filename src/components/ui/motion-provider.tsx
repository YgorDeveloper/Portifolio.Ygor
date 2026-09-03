"use client";

import { domAnimation, LazyMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Disponibiliza os componentes `m` para toda a árvore.
 *
 * `domAnimation` traz renderer, animation, exit, inView e gestos — tudo o que o
 * site usa — sem o motor de layout animations do bundle completo, o que reduz
 * o JavaScript inicial. Se algum componente voltar a usar
 * `motion` em vez de `m`, o bundle completo volta junto — sempre prefira `m`.
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return (
    <LazyMotion features={domAnimation}>
      {children}
    </LazyMotion>
  );
}
