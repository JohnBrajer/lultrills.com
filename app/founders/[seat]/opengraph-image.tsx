import { ImageResponse } from "next/og";
import { founders, getSeat, pad, seatParams } from "./seat";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Founding Trillionaire seat";

export function generateStaticParams() {
  return seatParams();
}

export default async function Image({ params }: { params: Promise<{ seat: string }> }) {
  const n = Number((await params).seat);
  const s = getSeat(n);
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
          color: "#e4e4e7",
          padding: "64px 72px",
          borderLeft: "16px solid #DC143C",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, letterSpacing: 8, color: "#C5A26F" }}>
          FOUNDING TRILLIONAIRE · TRILLSVERSE
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 180, fontWeight: 800, lineHeight: 1, color: "#fff" }}>
            #{pad(n)}
          </div>
          <div style={{ display: "flex", fontSize: 64, fontWeight: 700, marginTop: 16 }}>
            {s ? s.name : "This seat is open"}
          </div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, color: "#a1a1aa" }}>
          <span>{founders.cap} seats, ever</span>
          <span>lultrills.com/founders</span>
        </div>
      </div>
    ),
    size,
  );
}
