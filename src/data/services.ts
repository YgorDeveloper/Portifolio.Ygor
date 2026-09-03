/* -------------------------------------------------------------------------- */
/*  O QUE EU FAÇO                                                              */
/* -------------------------------------------------------------------------- */

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: "code" | "layers" | "plug" | "cart";
};

export const services: Service[] = [
  {
    id: "web",
    title: "Desenvolvimento Web",
    description: "Aplicações web modernas, responsivas e performáticas.",
    icon: "code",
  },
  {
    id: "sistemas",
    title: "Sistemas",
    description:
      "Sistemas administrativos, dashboards, plataformas e soluções personalizadas.",
    icon: "layers",
  },
  {
    id: "integracoes",
    title: "Integrações",
    description:
      "APIs, webhooks, automações e integração entre diferentes sistemas.",
    icon: "plug",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Lojas virtuais, checkout e integrações com meios de pagamento.",
    icon: "cart",
  },
];
