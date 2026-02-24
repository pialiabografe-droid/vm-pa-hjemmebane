import Link from "next/link";

export default function OmPage() {
  const VIF = {
    blue: "#044EA2",
    red: "#BC1823",
  } as const;

  return (
    <div className="min-h-screen bg-[#F3F7FF] text-[#1A2238]">
      <main className="mx-auto max-w-5xl px-6 py-24">

        {/* Header */}
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
            VM på hjemmebane
          </h1>

          <p className="mt-8 text-lg leading-relaxed text-black/75 whitespace-pre-line max-w-3xl mx-auto">
{`Jordal Amfi blir sommerarena når vi viser VM-kamper på storskjerm.
Med lyd, lys og ekte kampstemning inviterer vi hele Oslo til fotballfest – uansett vær.

VM spilles i USA og Mexico.
Men for oss spilles det hjemme, på Jordal.
I 18 dager samles vi for å se kampene sammen.
Alle Norges kamper. Og sluttspillet så klart.
Vi åpner Jordal, hvor vi samles for å dele fotballen og stemningen.
Her er det plass til alle. Bord, benker, ståplasser. Litt ekstra plass for noen. Full temperatur for alle.
Produksjonen er stor. Skjermene er enorme. Men det viktigste er ikke det som henger i riggen – det er de som fyller rommet.
Fotball-VM på Jordal er vår måte å samle folk på, Vålerengas måte. En fotballfest med røtter i nærmiljøet, åpen for alle.
Noe av det vi skaper her, går tilbake til breddeidretten.
Fordi fotball handler om mer enn de 90 minuttene.
Dette er ikke et VM-event. Det er VM på hjemmebane.`}
          </p>

          <div className="mt-10">
            <Link
              href="/"
              className="text-sm underline underline-offset-4 text-black/60 hover:text-black"
            >
              Tilbake til forsiden
            </Link>
          </div>
        </div>

        {/* Innhold */}
        <div className="mt-24 grid md:grid-cols-3 gap-8">
          <div className="rounded-3xl p-10 bg-white shadow-sm border border-black/5">
            <div className="text-xl font-semibold">Hva er dette?</div>
            <div className="mt-4 text-base leading-relaxed text-black/70">
              En sommerarena i Jordal Amfi hvor vi viser VM-kamper på
              storskjerm med profesjonell produksjon og god stemning.
            </div>
          </div>

          <div className="rounded-3xl p-10 bg-white shadow-sm border border-black/5">
            <div className="text-xl font-semibold">Hvem står bak?</div>
            <div className="mt-4 text-base leading-relaxed text-black/70">
              Arrangementet er organisert i samarbeid med Vålerenga Hockey og
              lokale samarbeidspartnere.
            </div>
          </div>

          <div className="rounded-3xl p-10 bg-white shadow-sm border border-black/5">
            <div className="text-xl font-semibold">Hvor er det?</div>
            <div className="mt-4 text-base leading-relaxed text-black/70">
              Jordal Amfi, midt i Oslo. En moderne arena perfekt for
              storskjermopplevelser.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <Link
            href="/program"
            className="px-10 py-4 rounded-2xl text-white font-semibold inline-block shadow-md hover:scale-[1.02] transition"
            style={{ backgroundColor: VIF.blue }}
          >
            Se program
          </Link>
        </div>

      </main>
    </div>
  );
}