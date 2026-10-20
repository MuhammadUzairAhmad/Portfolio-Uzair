import { ImageResponse } from "next/og";
export const alt =
  "Muhammad Uzair Ahmad — Full-stack Developer. Good ideas. Carefully built.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export default function Image() {
  return new ImageResponse(
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        width: "100%",
        height: "100%",
        background: "#fafaf6",
        color: "#20251d",
        padding: "70px 80px",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
        }}
      >
        <span>UZAIR.</span>
        <span>FULL-STACK DEVELOPER</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 94,
          letterSpacing: -5,
          lineHeight: 1.1,
        }}
      >
        <span>Good ideas.</span>
        <span style={{ color: "#304b20" }}>Carefully built.</span>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: 22,
          borderTop: "1px solid #dfe3d5",
          paddingTop: 24,
        }}
      >
        <span>Muhammad Uzair Ahmad</span>
        <span>Web · Mobile · Systems ↗</span>
      </div>
    </div>,
    { ...size },
  );
}
