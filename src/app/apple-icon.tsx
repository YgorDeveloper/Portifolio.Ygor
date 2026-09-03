import { ImageResponse } from "next/og";

export const dynamic = "force-static";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

/** Ícone usado quando o site é adicionado à tela inicial no iOS. */
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#08080a",
          color: "#e0a458",
          fontSize: 104,
          fontWeight: 600,
          letterSpacing: "-0.05em",
        }}
      >
        Y
      </div>
    ),
    size,
  );
}
