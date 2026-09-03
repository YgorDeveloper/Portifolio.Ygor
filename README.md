# YGOR.DEV — Portfólio

Portfólio profissional de **Ygor Dias**. Site estático, sem servidor e sem banco de
dados: o build gera HTML, CSS e JS puros, servidos direto pela Cloudflare.

## Stack

| Camada     | Tecnologia                                        |
| ---------- | ------------------------------------------------- |
| Framework  | Next.js 16 (App Router, Server Components)         |
| Linguagem  | TypeScript                                         |
| Estilo     | Tailwind CSS v4                                    |
| Animação   | Framer Motion                                      |
| Ícones     | Lucide React                                       |
| Tipografia | Geist Sans + Geist Mono (auto-hospedadas)          |
| Deploy     | Cloudflare (Pages ou Workers Assets)               |

Nenhuma dependência da Vercel: sem `@vercel/analytics`, sem `vercel.json`, sem
runtime específico de plataforma.

## Rodando localmente

```bash
npm install
```

```bash
npm run dev
```

Disponível em `http://localhost:3000`.

### Scripts

| Comando             | O que faz                                              |
| ------------------- | ------------------------------------------------------ |
| `npm run dev`       | Servidor de desenvolvimento                             |
| `npm run build`     | Gera o site estático em `out/`                          |
| `npm run start`     | Serve `out/` localmente para conferir o build           |
| `npm run lint`      | ESLint                                                  |
| `npm run typecheck` | Verificação de tipos do TypeScript                      |
| `npm run preview`   | Build + preview via Wrangler (igual à Cloudflare)        |
| `npm run deploy`    | Build + deploy no Cloudflare Pages                       |

---

## O que você precisa preencher

Tudo o que falta está marcado com `[PREENCHER]` no código. São quatro arquivos:

### 1. `src/config/site.ts` — contatos, domínio e foto

```ts
url: "https://ygor.dev",          // domínio final do site
photo: null,                       // "/images/ygor.jpg" depois de colocar o arquivo
```

E os links das redes (troque os valores em MAIÚSCULAS):

```ts
href: "mailto:SEU-EMAIL@exemplo.com"
href: "https://wa.me/55SEUNUMERO"          // ex.: https://wa.me/5561999999999
href: "https://github.com/SEU-USUARIO"
href: "https://linkedin.com/in/SEU-USUARIO"
href: "https://instagram.com/SEU-USUARIO"
```

Se preferir não exibir alguma rede, troque o `href` por `null` — o item some da
interface inteira (hero, contato e rodapé) sem quebrar nada.

### 2. Foto de perfil

1. Salve a imagem em `public/images/` (ex.: `public/images/ygor.jpg`);
2. Em `src/config/site.ts`, troque `photo: null` por `photo: "/images/ygor.jpg"`.

Formato ideal: retrato **4:5** (ex.: 800×1000). Enquanto estiver `null`, um
placeholder é exibido no lugar.

### 3. `src/data/projects.ts` — projetos

Cada projeto aceita:

```ts
{
  slug: "velse",              // vira a URL /projetos/velse
  title: "Velse",
  category: "E-commerce",
  description: "...",         // usado no card e na visão geral
  summary: "...",             // linha de apoio no topo do case study
  technologies: ["Next.js"],  // array vazio = nenhuma tag é exibida
  image: "/projects/velse.jpg", // opcional
  url: "https://...",           // opcional — sem isso, o botão não aparece
  github: "https://...",        // opcional — sem isso, o botão não aparece
  featured: true,               // ocupa a linha inteira na grade
  caseStudy: {
    problem: "...",
    solution: "...",
    features: ["..."],
    challenges: ["..."],
    result: "...",
  },
}
```

Os blocos do case study que ficarem vazios não são renderizados: em vez disso,
aparece um aviso de "Em documentação" listando o que ainda será escrito.

Pendências atuais:

- **Velse** — capa, link da loja, problema, solução, desafios e resultado;
- **Biomessenger** — capa, problema, solução, desafios e resultado;
- **Mineiro Motos** — tecnologias, capa e case study completo.

Capas ficam em `public/projects/`. Proporção ideal: **16:10** (ex.: 1600×1000).
Sem capa, o card usa uma composição gerada a partir do título — não fica quebrado.

### 4. `src/data/experience.ts` — instituição da formação

```ts
// institution: "",  // [PREENCHER] nome da faculdade
```

Descomente e preencha para que a instituição apareça no card de formação.

---

## Deploy na Cloudflare

O build é 100% estático (`output: "export"`), então qualquer opção da Cloudflare
serve. A mais simples:

### Opção A — Cloudflare Pages via Git (recomendado)

1. Suba o repositório para o GitHub;
2. No dashboard da Cloudflare: **Workers & Pages → Create → Pages → Connect to Git**;
3. Configure:

   | Campo                  | Valor           |
   | ---------------------- | --------------- |
   | Framework preset       | `Next.js (Static HTML Export)` ou `None` |
   | Build command          | `npm run build` |
   | Build output directory | `out`           |
   | Node version           | `20` ou superior |

Cada push na branch principal dispara um novo deploy.

### Opção B — Deploy manual via Wrangler

```bash
npm run deploy
```

Na primeira execução o Wrangler pede login e o nome do projeto.

### Cabeçalhos

`public/_headers` é copiado para `out/` automaticamente e define:

- cache imutável para os assets versionados de `/_next/static/*`;
- `Content-Type: image/png` para a imagem de Open Graph e o ícone do iOS
  (o Next gera esses arquivos sem extensão, e sem isso o WhatsApp e o LinkedIn
  não reconhecem a prévia);
- cabeçalhos de segurança básicos (`nosniff`, `Referrer-Policy`, `X-Frame-Options`,
  `Permissions-Policy`).

### Domínio próprio

Depois de apontar o domínio na Cloudflare, atualize `url` em `src/config/site.ts`
e faça um novo deploy — é dele que saem as URLs canônicas, o `sitemap.xml`,
o `robots.txt` e as tags de Open Graph.

---

## Estrutura

```text
src/
├── app/
│   ├── layout.tsx              # shell, fontes, metadata global
│   ├── page.tsx                # composição das seções da home
│   ├── globals.css             # design tokens e utilitários
│   ├── not-found.tsx           # 404
│   ├── icon.svg                # favicon
│   ├── apple-icon.tsx          # ícone iOS (gerado no build)
│   ├── opengraph-image.tsx     # imagem de compartilhamento (gerada no build)
│   ├── robots.ts
│   ├── sitemap.ts
│   └── projetos/[slug]/page.tsx  # case study de cada projeto
│
├── components/
│   ├── layout/                 # navbar, footer
│   ├── sections/               # hero, about, skills, experience, education,
│   │                           # projects, services, contact
│   ├── ui/                     # button, section, reveal, cards, terminal
│   └── icons/                  # marcas (GitHub, LinkedIn, Instagram, WhatsApp)
│
├── config/site.ts              # ← configuração pessoal
├── data/                       # ← conteúdo (projetos, experiência, skills)
└── lib/utils.ts
```

## Notas técnicas

- **Server Components por padrão.** Só `navbar.tsx` e `reveal.tsx` usam
  `"use client"` — o resto é renderizado no build.
- **Animações** respeitam `prefers-reduced-motion`: sem movimento, o conteúdo
  aparece direto.
- **Imagens** usam `unoptimized: true`, já que o otimizador do Next exige
  servidor. Envie as capas já redimensionadas.
- **`trailingSlash: true`** para máxima compatibilidade com hosts estáticos.
- Adicionar um projeto novo não exige tocar em nenhum componente: basta um
  objeto novo em `src/data/projects.ts`. A home, o `sitemap.xml` e a página de
  case study se atualizam sozinhos.
