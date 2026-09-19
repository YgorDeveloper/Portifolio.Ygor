import { ImageResponse } from "next/og";

import { siteConfig } from "@/config/site";

/* Gerada uma única vez, no build — sem runtime em produção. */
export const dynamic = "force-static";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = `${siteConfig.brand} — ${siteConfig.tagline}`;

/** Imagem de compartilhamento (WhatsApp, LinkedIn, X). Gerada no build. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#08080a",
          padding: "72px",
          color: "#f3f3f5",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "14px",
            fontSize: 24,
            letterSpacing: "-0.02em",
            color: "#a0a0ac",
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 9999,
              backgroundColor: "#e0a458",
            }}
          />
          YGOR.DEV
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 104,
              fontWeight: 600,
              letterSpacing: "-0.045em",
              lineHeight: 1,
            }}
          >
            Sites, lojas e sistemas
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 40,
              letterSpacing: "-0.02em",
              color: "#a0a0ac",
            }}
          >
            que trabalham pelo seu negócio.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderTop: "1px solid #2a2a33",
            paddingTop: "28px",
            fontSize: 24,
            color: "#6a6a77",
          }}
        >
          <div style={{ display: "flex" }}>
            Sites · E-commerce · Sistemas · Agendamento
          </div>
          <div style={{ display: "flex", color: "#e0a458" }}>
            Next.js · TypeScript · Cloudflare
          </div>
        </div>
      </div>
    ),
    size,
  );
}
