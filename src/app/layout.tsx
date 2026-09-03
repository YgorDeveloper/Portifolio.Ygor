import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { MotionProvider } from "@/components/ui/motion-provider";
import { siteConfig } from "@/config/site";

import "./globals.css";

const title = `${siteConfig.name} — ${siteConfig.role}`;

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: title,
    template: `%s — ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.brand,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  keywords: [
    "Ygor Dias",
    "desenvolvedor",
    "suporte técnico",
    "sistemas",
    "integrações",
    "Next.js",
    "TypeScript",
    "Cloudflare",
    "portfólio",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteConfig.url,
    siteName: siteConfig.brand,
    title,
    description: siteConfig.description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: siteConfig.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  formatDetection: {
    telephone: false,
  },
};

export const viewport: Viewport = {
  themeColor: "#08080a",
  colorScheme: "dark",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="pt-BR"
      className={`${GeistSans.variable} ${GeistMono.variable} h-full antialiased`}
    >
      <head>
        {/* Antes da pintura: sinaliza que o JS está ativo, para o CSS acima
            só esconder o conteúdo quando houver quem o revele. */}
        <script
          dangerouslySetInnerHTML={{
            __html: 'document.documentElement.setAttribute("data-js","1")',
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-bg text-fg">
        {/* Degradê de fundo: posição fixa para ficar estável na rolagem. */}
        <div
          aria-hidden
          className="page-gradient pointer-events-none fixed inset-0 -z-10"
        />

        <a
          href="#conteudo"
          className="sr-only rounded-full bg-fg px-4 py-2 text-sm font-medium text-bg focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60]"
        >
          Pular para o conteúdo
        </a>

        <MotionProvider>
          <Navbar />

          <main id="conteudo" className="flex-1">
            {children}
          </main>

          <Footer />
        </MotionProvider>
      </body>
    </html>
  );
}
