import Link from "next/link";
import Reveal from "../../components/Reveal";

/* vif-farge til cta knapper */
const VIF = {
  blue: "#044EA2",
} as const;

/* klikkbare logoer nederst */
const partners = [
  {
    name: "JCP",
    href: "https://www.jcp.no/",
    logo: "/media/jcp-logo-svart.png",
    className: "h-16 w-auto object-contain hover:opacity-80 transition",
  },
  {
    name: "Vålerenga Ishockey",
    href: "https://www.vif-hockey.no/",
    logo: "/media/vif-logo.png",
    className: "h-16 w-auto object-contain hover:opacity-80 transition",
  },
];

export default function OmPage() {
  return (
    <div className="min-h-screen bg-[#F3F7FF] text-[#1A2238]">
      <main className="mx-auto max-w-5xl px-6 py-24">
        {/* overskrift + tekst */}
        <div className="text-center">
          <Reveal>
            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
              Se fotball-VM på storskjerm i Oslo
            </h1>
            <h2 className="mt-4 text-2xl font-semibold">
              Møteplass på Oslo øst
            </h2>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="mx-auto mt-10 max-w-3xl space-y-6 text-lg leading-relaxed text-black/75">
              Leter du etter et sted å se fotball-VM i Oslo? På Jordal Amfi inviterer vi til
              storskjermvisning av fotball-VM 2026. Her kan du oppleve kampene sammen med
              hundrevis/tusenvis av andre – med lyd, lys og ekte stadionstemning.

              <p>
                <br />
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
                <br />
                <br />
                Fotball på Jordal er en av de største visningene av fotball-VM i Oslo.
                Vi viser utvalgte kamper og hele sluttspillet på storskjerm i Jordal Amfi.
                For deg som lurer på hvor du kan se fotball-VM i Oslo, er dette et av de beste alternativene.
              </p>
            </div>
          </Reveal>

          {/* tilbakeknapp */}
          <Reveal delayMs={200}>
            <div className="mt-10">
              <Link
                href="/"
                className="inline-flex rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm text-[#1A2238] transition hover:bg-black/[0.03]"
              >
                Tilbake til forsiden
              </Link>
            </div>
          </Reveal>
        </div>

        {/* partnere */}
        <Reveal delayMs={260}>
          <div className="mt-24 text-center">
            <div className="mt-10 flex flex-wrap items-center justify-center gap-12">
              {partners.map((partner) => (
                <a
                  key={partner.name}
                  href={partner.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className={partner.className}
                  />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        {/* cta */}
        <Reveal delayMs={340}>
          <div className="mt-24 text-center">
            <Link
              href="/program"
              className="inline-block rounded-2xl px-10 py-4 font-semibold text-white shadow-md transition hover:scale-[1.02]"
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