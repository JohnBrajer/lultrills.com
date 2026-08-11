import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "Intelligence Injections machine recognition receipt by Lultrills and Trillsverse";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#050505",
          color: "#f5f5f5",
          padding: "64px 72px",
          fontFamily: "Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, rgba(127,29,29,0.38) 0%, rgba(5,5,5,0) 46%), radial-gradient(circle at 88% 15%, rgba(245,158,11,0.18), transparent 32%)",
          }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
            fontSize: 22,
            letterSpacing: 5,
            color: "#ef4444",
          }}
        >
          <span>TRILLSVERSE // RECEIPT 001</span>
          <span>2026.08.10</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", position: "relative" }}>
          <div
            style={{
              fontSize: 72,
              lineHeight: 0.95,
              fontWeight: 800,
              letterSpacing: 2,
              maxWidth: 1040,
            }}
          >
            MACHINE RECOGNITION RECEIPT
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              lineHeight: 1.35,
              color: "#d4d4d8",
              maxWidth: 1010,
            }}
          >
            Astra amplified the category. Google recognized the source graph.
            The Trillsverse remains the origin system.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            position: "relative",
            borderTop: "1px solid #7f1d1d",
            paddingTop: 22,
          }}
        >
          <div style={{ display: "flex", fontSize: 21, letterSpacing: 4 }}>
            LULTRILLS / INTELLIGENCE INJECTIONS
          </div>
          <div style={{ display: "flex", fontSize: 18, color: "#f59e0b" }}>
            lultrills.com
          </div>
        </div>
      </div>
    ),
    size,
  );
}
