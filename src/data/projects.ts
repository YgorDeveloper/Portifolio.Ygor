/* -------------------------------------------------------------------------- */
/*  PROJETOS                                                                   */
/*                                                                            */
/*  Para adicionar um projeto novo, basta acrescentar um objeto no array       */
/*  `projects`. A home e as páginas de case study (/projetos/[slug]) são       */
/*  geradas a partir daqui — nenhum componente precisa ser alterado.           */
/*                                                                            */
/*  Campos opcionais que estiverem vazios simplesmente não são renderizados:   */
/*  sem `url` não existe botão "Ver projeto", sem `github` não existe botão    */
/*  do GitHub, sem `image` o card usa uma capa gerada por composição.          */
/* -------------------------------------------------------------------------- */

export type CaseStudy = {
  /** O contexto e o problema que originou o projeto. */
  problem?: string;
  /** A abordagem escolhida para resolver o problema. */
  solution?: string;
  /** Principais funcionalidades entregues. */
  features?: string[];
  /** Pontos técnicos que exigiram mais atenção. */
  challenges?: string[];
  /** O que o projeto entregou na prática. */
  result?: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  /** Resumo curto — usado no card e na abertura do case study. */
  description: string;
  /** Uma linha de contexto exibida no topo do case study. */
  summary?: string;
  technologies: string[];
  /** Caminho a partir de /public — ex.: "/projects/velse.png" */
  image?: string;
  /**
   * Como a imagem ocupa a capa. Use "cover" para capturas de tela (preenche
   * todo o espaço) e "contain" para logos (aparecem inteiros, com respiro).
   * Padrão: "cover".
   */
  imageFit?: "cover" | "contain";
  /**
   * Fundo da capa. "light" existe para logos escuros, que sumiriam sobre o
   * fundo preto do site. Padrão: "dark".
   */
  coverTone?: "dark" | "light";
  /** Marca o case principal: vai primeiro na lista e ganha selo no card. */
  highlight?: boolean;
  /** Capturas do projeto em funcionamento, exibidas no case study. */
  screenshots?: { src: string; alt: string; caption?: string }[];
  /** Link do projeto no ar. Sem valor, o botão não aparece. */
  url?: string;
  /** Link do repositório. Sem valor, o botão não aparece. */
  github?: string;
  caseStudy?: CaseStudy;
};

export const projects: Project[] = [
  {
    slug: "velse",
    title: "Velse",
    category: "E-commerce",
    description:
      "E-commerce de sneakers com venda direta: catálogo, sacola, checkout próprio com Pix e cartão, área do cliente e painel administrativo.",
    summary:
      "Loja própria de sneakers, do catálogo à confirmação do pagamento, sem passar pelo WhatsApp.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zod",
      "Cloudflare Workers",
      "Cloudflare D1",
      "InfinitePay",
    ],
    highlight: true,
    image: "/projects/shots/velse-home.jpg",
    screenshots: [
      { src: "/projects/shots/velse-home.jpg", alt: "Página inicial da loja Velse com destaque editorial e mais vendidos", caption: "Home da loja" },
      { src: "/projects/shots/velse-catalogo.jpg", alt: "Catálogo de sneakers com filtros por marca", caption: "Catálogo" },
      { src: "/projects/shots/velse-produto.jpg", alt: "Página de produto com preço, parcelamento e grade de numeração", caption: "Página de produto" },
      { src: "/projects/shots/velse-carrinho.jpg", alt: "Sacola de compras antes do checkout", caption: "Sacola" },
    ],
    caseStudy: {
      result:
        "A venda deixou de depender de conversa: preço, numeração disponível e prazo aparecem antes de a pessoa precisar perguntar, e o webhook confirma o pagamento sem ninguém acompanhando. O WhatsApp saiu do funil de venda e ficou só como suporte.",
      problem:
        "O modelo anterior era venda sob consulta, com orçamento negociado por WhatsApp — um funil que dependia de conversa a cada pedido.",
      solution:
        "Preço exposto e compra fechada no próprio site: sacola, checkout e pagamento por Pix ou cartão via InfinitePay, com webhook confirmando o pedido sem intervenção manual.",
      features: [
        "Catálogo com navegação por marca e página de produto com grade de numeração",
        "Sacola e checkout próprio",
        "Pagamento por Pix e cartão via InfinitePay, confirmado por webhook",
        "Área do cliente e painel administrativo",
        "Cupons de desconto",
        "Avaliações de produto",
      ],
    },
  },
  {
    slug: "dra-nath-harmonier",
    title: "Drª Náth Harmonier",
    category: "Site + agenda online",
    description:
      "Site para clínica de estética com catálogo de procedimentos e valores, agenda online com horários reais e painel para agenda, preços e relatórios.",
    summary:
      "Presença digital e agenda de uma clínica de harmonização facial em Brasília.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Cloudflare Workers",
      "Cloudflare D1",
      "Drizzle ORM",
    ],
    image: "/projects/shots/nath-home.jpg",
    screenshots: [
      { src: "/projects/shots/nath-home.jpg", alt: "Página inicial da clínica com apresentação da profissional", caption: "Home" },
      { src: "/projects/shots/nath-procedimentos.jpg", alt: "Catálogo de procedimentos com busca e filtros por especialidade e valor", caption: "Catálogo de procedimentos" },
      { src: "/projects/shots/nath-agendar.jpg", alt: "Agenda online com escolha de procedimento, dia e horário livre", caption: "Agenda online" },
    ],
    url: "https://dranathharmonier.com",
    caseStudy: {
      problem:
        "As pacientes chegam pelo Instagram, no celular e em momentos curtos, com receio de ficar com aparência artificial. Antes de marcar, querem saber o que cada procedimento faz, quanto custa e quanto tempo leva.",
      solution:
        "Um site que responde o básico antes da pergunta — cada procedimento com valor, tempo, indicação e cuidados — e uma agenda que mostra só os horários livres, grava a reserva e abre o WhatsApp com a mensagem pronta.",
      result:
        "A paciente chega à avaliação já sabendo valor, tempo e cuidados do procedimento, e reserva o horário sem troca de mensagens. Preços, horários e agenda passaram a ser editados pela própria clínica, no painel.",
      features: [
        "Catálogo com busca e filtros por especialidade, valor e tempo",
        "Página própria por procedimento, com indicação, contraindicações e recuperação",
        "Agenda online que exibe só horários livres e grava a reserva",
        "Galeria de antes e depois com filtro por especialidade",
        "Painel com agenda, relatórios, preços e horários de atendimento",
        "Políticas de agendamento e de privacidade (LGPD)",
      ],
    },
  },
  {
    slug: "rota-100",
    title: "Rota 100",
    category: "Sistema de gestão",
    description:
      "Sistema de gestão para bar e lanchonete: vendas no balcão, comandas no salão, fiado, fechamento de caixa, estoque, compras e fornecedores.",
    summary:
      "Operação e financeiro de um bar e lanchonete num sistema só, instalável como aplicativo.",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "Hono",
      "Cloudflare Workers",
      "Cloudflare D1",
      "Drizzle ORM",
    ],
    image: "/projects/shots/rota-dashboard.jpg",
    screenshots: [
      { src: "/projects/shots/rota-dashboard.jpg", alt: "Painel com faturamento do dia, caixa, fiados pendentes e estoque crítico", caption: "Visão geral do dia" },
      { src: "/projects/shots/rota-vendas.jpg", alt: "Tela de venda com grade de produtos por categoria e carrinho", caption: "Venda no balcão" },
      { src: "/projects/shots/rota-comandas.jpg", alt: "Comandas abertas no salão, com mesa e valor acumulado", caption: "Comandas do salão" },
      { src: "/projects/shots/rota-caixa.jpg", alt: "Sessão de caixa com saldo inicial, entradas, saídas e saldo atual", caption: "Fechamento de caixa" },
      { src: "/projects/shots/rota-produtos.jpg", alt: "Cadastro de produtos com preço, categoria e estoque", caption: "Produtos e estoque" },
    ],
    /* Repositório privado hoje (404 para quem não tem acesso). Se torná-lo
       público, descomente e o botão volta a aparecer. */
    // github: "https://github.com/YgorDeveloper/rota-100",
    caseStudy: {
      result:
        "O turno fecha com número: saldo inicial, entradas, saídas e saldo atual saem do que foi registrado durante o serviço, não da conferência de fim de noite. Comanda, fiado e venda passaram a viver no mesmo lugar, e o backup roda sozinho todo dia.",
      problem:
        "A operação dependia de anotação manual: comanda em papel, fiado no caderno e conferência de caixa no fim do turno sem uma base confiável para comparar.",
      solution:
        "Um sistema que acompanha o ritmo do serviço — venda registrada em poucos toques, comanda aberta e fechada no salão — com o financeiro fechando sozinho ao fim do dia.",
      features: [
        "Vendas no balcão e comandas no salão",
        "Controle de fiado",
        "Fechamento de caixa por turno",
        "Produtos, estoque e compras",
        "Cadastro de fornecedores",
        "Backup automático diário via cron",
        "PWA instalável no celular, tablet e computador",
      ],
      challenges: [
        "Uso sob pressão de tempo, com alvos de toque grandes e números legíveis à distância",
        "A mesma interface precisa funcionar bem em celular, tablet e desktop",
      ],
    },
  },
  {
    slug: "lemos-fit",
    title: "Lemos Fit",
    category: "E-commerce",
    description:
      "Loja de moda fitness com catálogo por grade de tamanhos, sacola e checkout, somada a um painel administrativo para pedidos, produtos e estoque.",
    summary:
      "Loja e painel de gestão para uma marca de moda fitness, no ar na Cloudflare.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Zustand",
      "Cloudflare Workers",
      "Cloudflare D1",
    ],
    image: "/projects/shots/lemos-fit-home.jpg",
    screenshots: [
      { src: "/projects/shots/lemos-fit-home.jpg", alt: "Página inicial da loja Lemos Fit", caption: "Home da loja" },
      { src: "/projects/shots/lemos-fit-catalogo.jpg", alt: "Listagem de produtos por categoria", caption: "Catálogo por categoria" },
      { src: "/projects/shots/lemos-fit-produto.jpg", alt: "Página de um produto com grade de tamanhos", caption: "Página de produto" },
    ],
    url: "https://lemos-fit-loja.ygordias442.workers.dev",
    /* Repositório privado hoje (404 para quem não tem acesso). Se torná-lo
       público, descomente e o botão volta a aparecer. */
    // github: "https://github.com/YgorDeveloper/lemos-fit-loja",
    caseStudy: {
      result:
        "O pedido passou a se fechar sozinho, sem a troca de mensagens que antecedia cada compra. E o estoque passou a existir por tamanho dentro do sistema, em vez de ser contado de memória — o painel mostra do celular o que vendeu, o que está pendente e o que está acabando.",
      problem:
        "Toda venda passava pelo direct do Instagram: perguntar preço, combinar pagamento, acertar a entrega e anotar o pedido à mão. O estoque vivia fora de qualquer sistema, contado de memória.",
      solution:
        "Uma loja que fecha a compra sozinha — preço, prazo e disponibilidade por tamanho visíveis antes de a cliente precisar perguntar — e um painel que devolve o controle de pedidos e estoque, operável pelo celular.",
      features: [
        "Catálogo com grade de tamanhos e estoque real por tamanho",
        "Sacola e checkout sem intermediação",
        "Painel de pedidos com filtro, busca e mudança de situação",
        "Cadastro de produtos com fotos, preços, categorias e selos",
        "Dashboard com vendas do dia, pedidos pendentes e faturamento recente",
      ],
    },
  },
  {
    slug: "instituto-thalisson-rodrigues",
    title: "Instituto Thalisson Rodrigues",
    category: "Site institucional",
    description:
      "Site para clínica de fisioterapia ortopédica e esportiva, com mapa do corpo em 3D e caminhos diretos para o WhatsApp.",
    summary:
      "Site institucional de uma clínica de fisioterapia em Águas Claras, Brasília.",
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "Cloudflare Pages",
    ],
    image: "/projects/shots/thalisson-home.jpg",
    screenshots: [
      { src: "/projects/shots/thalisson-home.jpg", alt: "Página inicial da clínica de fisioterapia", caption: "Home" },
    ],
    url: "https://institutothalissonrodrigues.pages.dev",
    caseStudy: {
      solution:
        "Um site estático, sem servidor para manter, que leva o paciente das especialidades até o WhatsApp em poucos toques, com a mensagem de contato já pronta para cada caminho.",
      features: [
        "Mapa do corpo em 3D com as regiões tratadas, condições e abordagem",
        "Especialidades e método de tratamento em etapas",
        "Galeria do consultório e depoimentos",
        "Perguntas frequentes e posts do Instagram",
        "Mensagens de WhatsApp configuradas por contexto",
      ],
    },
  },
  {
    slug: "mineiro-motos",
    title: "Mineiro Motos",
    category: "Sistema de gestão",
    description:
      "ERP para oficina de motos, organizado em torno da ordem de serviço: clientes e motos, estoque, catálogo de serviços, financeiro e agenda.",
    summary:
      "A operação da oficina fora do caderno: da abertura da ordem de serviço à entrega da moto.",
    technologies: [
      "React",
      "Vite",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Hono",
      "Cloudflare Workers",
      "Cloudflare D1",
      "Drizzle ORM",
    ],
    image: "/projects/shots/mm-os.jpg",
    screenshots: [
      { src: "/projects/shots/mm-dashboard.jpg", alt: "Painel com as ordens de serviço por estado, caixa do dia e contas a receber vencidas", caption: "Visão geral da oficina" },
      { src: "/projects/shots/mm-os.jpg", alt: "Lista de ordens de serviço com cliente, moto, placa e situação", caption: "Ordens de serviço" },
      { src: "/projects/shots/mm-os-nova.jpg", alt: "Formulário de abertura de ordem de serviço", caption: "Abertura de OS" },
      { src: "/projects/shots/mm-estoque.jpg", alt: "Estoque de peças com quantidade e mínimo", caption: "Estoque de peças" },
      { src: "/projects/shots/mm-financeiro.jpg", alt: "Financeiro com contas a receber", caption: "Contas a receber" },
    ],
    /* Repositório privado hoje (404 para quem não tem acesso). Se torná-lo
       público, descomente e o botão volta a aparecer. */
    // github: "https://github.com/YgorDeveloper/mineiro-motos",
    caseStudy: {
      result:
        "A ordem de serviço ganhou estado explícito, do orçamento à entrega, então dá para ver num relance o que está parado esperando aprovação e o que está na bancada. Estoque e contas a receber saíram do caderno e passaram a ter histórico.",
      problem:
        "A oficina se organizava entre caderno e conversas de WhatsApp, sem visibilidade das ordens de serviço em andamento, do estoque de peças ou do que havia a receber.",
      solution:
        "Um sistema com a ordem de serviço no centro, percorrendo uma máquina de estados do orçamento à entrega, com os cadastros e o financeiro girando em volta dela.",
      features: [
        "Ordem de serviço com máquina de estados, do orçamento à entrega",
        "Cadastro de clientes e motos",
        "Estoque com auditoria de movimentos",
        "Catálogo de serviços",
        "Financeiro com contas a receber",
        "Agenda",
        "Dashboard gerencial",
      ],
      challenges: [
        "Três perfis de uso no mesmo sistema: dono, atendente no balcão e mecânico na oficina",
      ],
    },
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
