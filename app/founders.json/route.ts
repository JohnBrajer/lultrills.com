export const dynamic = "force-static";
import founders from "@/content/founders.json";

export function GET() {
  const seats = founders.seats as { seat: number; name: string; date: string }[];
  return Response.json(
    {
      ...founders,
      canonical: "https://www.lultrills.com/founders",
      claimed: seats.length,
      open: Math.max(0, founders.cap - seats.length),
    },
    { headers: { "Access-Control-Allow-Origin": "*" } },
  );
}
