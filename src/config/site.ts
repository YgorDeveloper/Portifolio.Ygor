/* -------------------------------------------------------------------------- */
/*  CONFIGURAÇÃO DO SITE                                                       */
/*                                                                            */
/*  O nome do estúdio vive em `brand`: trocar aqui atualiza navbar, rodapé,    */
/*  metadata e imagem de compartilhamento.                                    */
/* -------------------------------------------------------------------------- */

export const siteConfig = {
  /** Responsável pelo estúdio — usado como autor nos metadados. */
  name: "Ygor Dias",
  brand: "YGOR.DEV",
  tagline: "Sites, lojas e sistemas sob medida",
  description:
    "Estúdio de desenvolvimento web: sites, e-commerces, agendamento online e sistemas de gestão, do projeto à publicação.",

  /** Domínio do site. Usado em metadata, sitemap e Open Graph. */
  url: "https://ygordev.pages.dev",

  /** Disponibilidade exibida no hero e no contato. */
  availability: {
    available: true,
    label: "Agenda aberta para novos projetos",
  },
} as const;

/* -------------------------------------------------------------------------- */
/*  CONTATO E REDES                                                            */
/*                                                                            */
/*  Itens com `href: null` não são renderizados em lugar nenhum.               */
/* -------------------------------------------------------------------------- */

export type SocialKey = "email" | "whatsapp" | "github" | "linkedin" | "instagram";

export type SocialLink = {
  key: SocialKey;
  label: string;
  /** Endereço ou usuário exibido no card de contato: precisa ser legível
   *  e copiável, porque nem todo clique em `mailto:` abre alguma coisa. */
  handle: string;
  href: string | null;
};

export const socialLinks: SocialLink[] = [
  {
    key: "email",
    label: "E-mail",
    handle: "devygor8@gmail.com",
    href: "mailto:devygor8@gmail.com",
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    handle: "Conversa direta",
    // Desativado por escolha: com href nulo o item não aparece em lugar nenhum.
    href: null,
  },
  {
    key: "github",
    label: "GitHub",
    handle: "github.com/YgorDeveloper",
    href: "https://github.com/YgorDeveloper",
  },
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "linkedin.com/in/ygor-aparecido-767759368",
    href: "https://www.linkedin.com/in/ygor-aparecido-767759368/",
  },
  {
    key: "instagram",
    label: "Instagram",
    handle: "instagram.com/ygor.sx1",
    href: "https://www.instagram.com/ygor.sx1/",
  },
];

/** Apenas os links já configurados — use isto na UI. */
export const activeSocialLinks = socialLinks.filter(
  (link): link is SocialLink & { href: string } => Boolean(link.href),
);

/* -------------------------------------------------------------------------- */
/*  NAVEGAÇÃO                                                                  */
/* -------------------------------------------------------------------------- */

export const navItems = [
  { label: "Projetos", href: "#projetos", id: "projetos" },
  { label: "Serviços", href: "#servicos", id: "servicos" },
  { label: "Processo", href: "#processo", id: "processo" },
  { label: "Contato", href: "#contato", id: "contato" },
] as const;
