/* -------------------------------------------------------------------------- */
/*  EXPERIÊNCIA E FORMAÇÃO                                                     */
/* -------------------------------------------------------------------------- */

export type Experience = {
  company: string;
  /** Empresa/parceiro adicional exibido junto ao nome principal. */
  partner?: string;
  role: string;
  period: string;
  /** Marca a posição atual (exibe o indicador ativo na timeline). */
  current?: boolean;
  description: string;
  highlights: string[];
};

export const experiences: Experience[] = [
  {
    company: "Biomessenger",
    role: "Suporte · Sistemas · Tecnologia",
    period: "Novembro de 2025 — Atual",
    current: true,
    description:
      "Atuação com suporte técnico, sistemas de controle de acesso, catracas, reconhecimento facial, servidores, redes e integrações entre sistemas.",
    highlights: [
      "Suporte e diagnóstico de sistemas",
      "Acompanhamento de equipamentos",
      "Resolução de problemas",
      "Integrações entre sistemas",
      "APIs",
      "Bancos de dados",
      "Automações",
      "Análise de ambientes",
    ],
  },
  {
    company: "TJDFT",
    partner: "Positivo S+",
    role: "Analista de Suporte Júnior",
    period: "12 meses",
    description:
      "Atendimento e suporte técnico a usuários, com diagnóstico e resolução de incidentes, além do acompanhamento e da manutenção dos sistemas utilizados no dia a dia da operação.",
    highlights: [
      "Suporte técnico e atendimento a usuários",
      "Diagnóstico de problemas",
      "Resolução de incidentes",
      "Acompanhamento e manutenção de sistemas",
    ],
  },
];

export type Education = {
  course: string;
  level: string;
  status: string;
  /** [PREENCHER] Nome da instituição — só aparece quando preenchido. */
  institution?: string;
  expectedCompletion: string;
  description: string;
};

export const education: Education = {
  course: "Análise e Desenvolvimento de Sistemas",
  level: "Graduação",
  status: "Em andamento",
  // institution: "",  // [PREENCHER]
  expectedCompletion: "2027",
  description:
    "Formação que sustenta a transição do suporte e da infraestrutura para o desenvolvimento de aplicações, cobrindo lógica de programação, bancos de dados, engenharia de software e arquitetura de sistemas.",
};
