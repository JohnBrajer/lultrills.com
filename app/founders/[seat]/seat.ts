import founders from "@/content/founders.json";

export type Seat = { seat: number; name: string; date: string };

export function getSeat(n: number) {
  const seats = founders.seats as Seat[];
  return seats.find((s) => s.seat === n);
}

export function seatParams() {
  return Array.from({ length: founders.cap }, (_, i) => ({ seat: String(i + 1) }));
}

export const pad = (n: number) => String(n).padStart(3, "0");
export { founders };
