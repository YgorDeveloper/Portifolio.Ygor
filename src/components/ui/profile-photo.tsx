"use client";

import { User } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { siteConfig } from "@/config/site";

/**
 * Retrato da seção "Sobre mim".
 *
 * Se `siteConfig.photo` estiver vazio — ou o arquivo ainda não existir em
 * /public — um placeholder ocupa o lugar, sem imagem quebrada.
 */
export function ProfilePhoto() {
  const [failed, setFailed] = useState(false);

  if (!siteConfig.photo || failed) {
    return (
      <div className="grid-backdrop flex h-full w-full flex-col items-center justify-center gap-3 text-subtle">
        <User className="size-9" strokeWidth={1.2} />
        <span className="font-mono text-[10px] tracking-[0.24em] uppercase">
          Foto em breve
        </span>
      </div>
    );
  }

  return (
    <Image
      src={siteConfig.photo}
      alt={`Retrato de ${siteConfig.name}`}
      fill
      sizes="(min-width: 640px) 24rem, 100vw"
      onError={() => setFailed(true)}
      className="object-cover"
    />
  );
}
