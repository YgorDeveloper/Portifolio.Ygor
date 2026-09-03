/* -------------------------------------------------------------------------- */
/*  CONFIGURAÇÃO DO SITE                                                       */
/*                                                                            */
/*  Este é o único arquivo que precisa ser editado para colocar o portfólio    */
/*  no ar com os seus dados reais.                                            */
/*                                                                            */
/*  Tudo que está marcado com [PREENCHER] usa um valor de exemplo e deve ser   */
/*  substituído. Links com valor `null` simplesmente não aparecem na           */
/*  interface — nada quebra enquanto você não preencher.                      */
/* -------------------------------------------------------------------------- */

export const siteConfig = {
  name: "Ygor Dias",
  brand: "YGOR.DEV",
  role: "Profissional de Tecnologia & Desenvolvedor",
  description:
    "Portfólio de Ygor Dias, profissional de tecnologia com experiência em suporte, sistemas, integrações e desenvolvimento de aplicações web.",

  /** Domínio do site. Usado em metadata, sitemap e Open Graph. */
  url: "https://ygordev.pages.dev",

  /** Disponibilidade exibida no hero. Altere o texto ou coloque `available: false`. */
  availability: {
    available: true,
    label: "Disponível para novos projetos",
  },

  /**
   * [PREENCHER] Foto de perfil.
   * O arquivo esperado é `public/images/ygor.jpg` (retrato, proporção 4:5).
   * Se o arquivo não existir, o placeholder aparece no lugar — nada quebra.
   */
  photo: "/images/ygor.jpg" as string | null,
} as const;

/* -------------------------------------------------------------------------- */
/*  CONTATO E REDES                                                            */
/*                                                                            */
/*  Os valores em MAIÚSCULAS são placeholders — troque pelos links reais.      */
/*  Se preferir esconder uma rede, basta trocar o href por `null`: itens com   */
/*  href nulo não são renderizados em lugar nenhum.                            */
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
    // Para reativar depois, basta trocar por "https://wa.me/55DDDNUMERO".
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
  { label: "Sobre", href: "#sobre", id: "sobre" },
  { label: "Experiência", href: "#experiencia", id: "experiencia" },
  { label: "Projetos", href: "#projetos", id: "projetos" },
  { label: "Contato", href: "#contato", id: "contato" },
] as const;
