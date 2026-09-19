/* -------------------------------------------------------------------------- */
/*  PROCESSO                                                                   */
/*                                                                            */
/*  A ordem importa: é a sequência real de um projeto, por isso a numeração.   */
/* -------------------------------------------------------------------------- */

export type Step = {
  title: string;
  description: string;
};

export const steps: Step[] = [
  {
    title: "Conversa",
    description:
      "Entender o negócio, quem vai usar e o que precisa funcionar para o projeto valer a pena.",
  },
  {
    title: "Proposta",
    description:
      "Escopo e prazo definidos antes de começar, para não haver surpresa no meio do caminho.",
  },
  {
    title: "Construção",
    description:
      "Entregas parciais para você acompanhar e ajustar durante o desenvolvimento, não só no final.",
  },
  {
    title: "Publicação",
    description:
      "Projeto no ar na Cloudflare, rápido, com domínio configurado e pronto para crescer.",
  },
];
