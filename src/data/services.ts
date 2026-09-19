/* -------------------------------------------------------------------------- */
/*  SERVIÇOS                                                                   */
/*                                                                            */
/*  Cada serviço aponta para os projetos que o comprovam (`proof`, por slug).  */
/*  Assim nenhuma promessa fica sem um trabalho real por trás.                */
/* -------------------------------------------------------------------------- */

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "globe" | "cart" | "layers" | "calendar";
  /** Slugs de `projects` que exemplificam o serviço. */
  proof: string[];
};

export const services: Service[] = [
  {
    id: "sites",
    title: "Sites e landing pages",
    description:
      "Presença profissional que responde o básico antes da pergunta e leva a visita até o contato, com SEO e carregamento rápido.",
    icon: "globe",
    proof: ["dra-nath-harmonier", "instituto-thalisson-rodrigues"],
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description:
      "Loja própria com catálogo, sacola, checkout e pagamento por Pix e cartão, sem depender de marketplace.",
    icon: "cart",
    proof: ["velse", "lemos-fit"],
  },
  {
    id: "sistemas",
    title: "Sistemas de gestão",
    description:
      "Operação, estoque e financeiro num sistema feito para a rotina do negócio, usável no celular, no tablet e no computador.",
    icon: "layers",
    proof: ["rota-100", "mineiro-motos"],
  },
  {
    id: "agenda",
    title: "Agendamento e painéis",
    description:
      "Agenda online que mostra só horários livres e painel para o próprio negócio cuidar de preços, horários e relatórios.",
    icon: "calendar",
    proof: ["dra-nath-harmonier"],
  },
];
