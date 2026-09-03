import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Página não encontrada",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="container-page flex min-h-[70svh] flex-col items-start justify-center py-24">
      <p className="font-mono text-[11px] tracking-[0.2em] text-accent uppercase">
        Erro 404
      </p>
      <h1 className="mt-5 max-w-2xl text-4xl leading-[1.05] font-medium tracking-[-0.03em] text-fg sm:text-5xl">
        Esta página não existe.
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
        O endereço acessado não corresponde a nenhuma seção do portfólio.
      </p>
      <Link
        href="/"
        className={buttonVariants({ size: "lg", className: "mt-9" })}
      >
        <ArrowLeft className="size-4" />
        Voltar para o início
      </Link>
    </div>
  );
}
