import { permanentRedirect } from "next/navigation";

export default function ReallyThatMagazineLegacyPage() {
  permanentRedirect(
    "https://reallythatmagazine.com/article/sovereignty-as-an-operating-constraint",
  );
}
