import Link from "next/link";

type QAItem = {
  q: string;
  a: string;
};

export default function QaPage() {
  const VIF = {
    blue: "#044EA2",
    red: "#BC1823",
  } as const;

  const items: QAItem[] = [
    {
      q: "Hvor er arrangementet?",
      a: "Jordal Amfi, Oslo. Se «Sted» på forsiden for kartlenker.",
    },
    {
      q: "Må jeg kjøpe billett?",
      a: "Ja, du kjøper billett via TicketCo. Velg kamp på programsiden eller via «Program»-dropdownen på forsiden.",
    },
    {
      q: "Hva om det regner?",
      a: "Jordal Amfi er en arena som gjør opplevelsen bra uansett vær.",
    },
    {
      q: "Kan jeg kjøpe bordpakke / losje?",
      a: "Ja, se «Bordpakker» på forsiden. Ta kontakt om du trenger hjelp.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3F7FF] text-[#1A2238]">
      <main className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            

            <h1 className="mt-5 text-4xl md:text-5xl font-semibold">
              Ofte stilte spørsmål
            </h1>

            <p className="mt-3 text-black/70 max-w-2xl">
              Her finner du raske svar. Om du ikke finner svar på det du lurer på, ta kontakt.
            </p>
          </div>

          <Link
            href="/"
            className="px-5 py-3 rounded-2xl bg-white border border-black/10 text-sm"
          >
            Tilbake til forsiden
          </Link>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.q} className="rounded-3xl p-8 bg-white border border-black/10">
              <div className="text-lg font-semibold">{it.q}</div>
              <div className="mt-3 text-sm text-black/70">{it.a}</div>
            </div>
          ))}
        </div>

        <div className="mt-14 flex gap-3 flex-wrap justify-center">
          <Link
            href="/program"
            className="px-8 py-4 rounded-2xl text-white font-semibold"
            style={{ backgroundColor: VIF.blue }}
          >
            Se program
          </Link>

          <Link
            href="/#billetter"
            className="px-8 py-4 rounded-2xl bg-white border border-black/10 font-semibold"
          >
            Kjøp billetter
          </Link>
        </div>
      </main>
    </div>
  );
}