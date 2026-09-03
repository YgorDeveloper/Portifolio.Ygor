/* -------------------------------------------------------------------------- */
/*  TECNOLOGIAS                                                                */
/*                                                                            */
/*  Sem níveis, notas ou barras de progresso — apenas o que faz parte do       */
/*  trabalho do dia a dia, organizado por área.                               */
/* -------------------------------------------------------------------------- */

export type SkillGroup = {
  id: string;
  title: string;
  /** Ícone do Lucide resolvido no componente. */
  icon: "layout" | "server" | "database" | "wrench";
  description: string;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: "layout",
    description: "Interfaces responsivas, acessíveis e rápidas.",
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
    ],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "server",
    description: "Serviços, APIs e comunicação entre sistemas.",
    items: ["Node.js", "Bun", "APIs REST", "Webhooks"],
  },
  {
    id: "infra",
    title: "Banco & Infraestrutura",
    icon: "database",
    description: "Persistência, cache e ambiente de execução.",
    items: [
      "PostgreSQL",
      "Redis",
      "Cloudflare",
      "Cloudflare Workers",
      "Cloudflare D1",
      "Cloudflare R2",
    ],
  },
  {
    id: "tools",
    title: "Ferramentas",
    icon: "wrench",
    description: "O que sustenta o fluxo de trabalho.",
    items: ["Git", "GitHub", "VS Code", "Claude Code"],
  },
];

/** Recorte exibido na ficha do hero — as tecnologias mais presentes no dia a dia. */
export const featuredStack = [
  "Next.js",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Cloudflare",
];
