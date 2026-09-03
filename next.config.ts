import path from "node:path";
import { fileURLToPath } from "node:url";

import type { NextConfig } from "next";

const projectRoot = path.dirname(fileURLToPath(import.meta.url));

const nextConfig: NextConfig = {
  /**
   * Exportação estática: o build gera HTML/CSS/JS puros em `out/`, servidos
   * diretamente pela Cloudflare (Pages ou Workers Assets). Sem servidor,
   * sem runtime e sem dependência de plataforma.
   */
  output: "export",

  /** URLs com barra final — compatível com qualquer host estático. */
  trailingSlash: true,

  /** O otimizador de imagens do Next exige servidor; não usamos. */
  images: {
    unoptimized: true,
  },

  /** Fixa a raiz do projeto (evita o Turbopack subir até o diretório do usuário). */
  turbopack: {
    root: projectRoot,
  },

  reactStrictMode: true,
};

export default nextConfig;
