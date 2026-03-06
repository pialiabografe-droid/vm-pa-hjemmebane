import Link from "next/link";
import Reveal from "../../components/Reveal";

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

          <Reveal>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight">
              VM på Jordal – gratis møteplass på Oslo øst
            </h1>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="mt-10 text-lg leading-relaxed text-black/75 max-w-3xl mx-auto space-y-6">

              <p>
                Når fotball-VM spilles i USA, Canada og Mexico, lager vi en arena
                for å se kampene sammen her hjemme i Oslo. I sommer åpner Jordal
                Amfi for felles visning på storskjerm.
              </p>

              <p>
                Arrangementet lages av Vålerenga i samarbeid med JCP som
                eventpartner. Målet er å skape en inkluderende møteplass på Oslo
                øst – et sted der folk kan møtes, ta med venner og dele kampene i
                fellesskap.
              </p>

              <p className="font-semibold text-[#1A2238]">
                Gratis inngang – med mulighet for plassgaranti
              </p>

              <p>
                Det er gratis å komme inn, så lenge det er kapasitet. Hvis du vil
                være sikker på å få plass, kan du kjøpe plassgaranti-billett. Har
                du først kommet inn, kan du bli værende – du blir ikke kastet ut
                mellom kampene.
              </p>

              <p className="font-semibold text-[#1A2238]">
                For vennegjenger og lag
              </p>

              <p>
                Vil du samle en gjeng, tilbyr vi 8-mannsbord på gulvet til en
                rimelig pris. Det gjør det enklere å komme sammen og ha en fast
                base gjennom kvelden.
              </p>

              <p className="font-semibold text-[#1A2238]">
                Dette viser vi
              </p>

              <p>
                Vi viser Norges to kamper som går tidlig, og hele sluttspillet.
                Program og kampdager oppdateres fortløpende på nettsiden.
              </p>

              <p className="font-semibold text-[#1A2238]">
                Gi tilbake til nærmiljøet
              </p>

              <p>
                En del av inntektene fra plassgaranti og bord går tilbake til
                breddeidrett og nærmiljøet. For oss handler dette om mer enn 90
                minutter – det handler om å bruke VM til å styrke fellesskapet
                lokalt.
              </p>

            </div>
          </Reveal>

          <Reveal delayMs={200}>
            <div className="mt-10">
              <Link
                href="/"
                className="text-sm underline underline-offset-4 text-black/60 hover:text-black"
              >
                Tilbake til forsiden
              </Link>
            </div>
          </Reveal>

        </div>

        {/* PARTNERE */}
        <Reveal delayMs={260}>
          <div className="mt-24 text-center">
            <div className="mt-10 flex flex-wrap items-center justify-center gap-12">
                <img
                src="/media/sparebank1-logo2.png"
                alt="SpareBank 1"
                className="h-10 w-auto object-contain"
              />
              <img
                src="/media/obos-logo2.png"
                alt="OBOS"
                className="h-10 w-auto object-contain"
              />

              <img
                src="/media/jcp-logo.png"
                alt="JCP"
                className="h-10 w-auto object-contain"
              />

              <img
                src="/media/vif-logo.png"
                alt="SpareBank 1"
                className="h-16 w-auto object-contain"
              />
            </div>
          </div>
        </Reveal>

        {/* CTA */}
        <Reveal delayMs={340}>
          <div className="mt-24 text-center">
            <Link
              href="/program"
              className="px-10 py-4 rounded-2xl text-white font-semibold inline-block shadow-md hover:scale-[1.02] transition"
              style={{ backgroundColor: VIF.blue }}
            >
              Se program
            </Link>
          </div>
        </Reveal>

      </main>
    </div>
  );
}