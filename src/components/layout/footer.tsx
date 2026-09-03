import { ArrowUp } from "lucide-react";

import { SocialRow } from "@/components/ui/social-row";
import { siteConfig } from "@/config/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line">
      <div className="container-page flex flex-col gap-10 py-12 md:flex-row md:items-end md:justify-between md:py-14">
        <div>
          <p className="font-mono text-sm font-medium tracking-tight text-fg">
            YGOR<span className="text-subtle">.DEV</span>
          </p>
          <p className="mt-3 text-sm text-muted">
            © {year} {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-subtle">
            Construído com Next.js, TypeScript e Cloudflare.
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 md:items-end">
          <SocialRow />
          <a
            href="#top"
            className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.16em] text-subtle uppercase transition-colors duration-200 hover:text-fg"
          >
            Voltar ao topo
            <ArrowUp className="size-3.5 transition-transform duration-200 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
