import Link from "next/link";
import Reveal from "../../components/Reveal";

const VIF = {
  blue: "#044EA2",
} as const;

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-[#F3F7FF] text-[#1A2238]">
      <main className="mx-auto max-w-4xl px-6 pb-24 pt-16 md:pt-20">
        <Reveal>
  <div className="text-center">
    <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#044EA2]">
      Kampdag
    </p>

    <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
      Velkommen til Jordal Amfi!
    </h1>

    <p className="mt-6 text-xl leading-relaxed text-black/70">
      I dag skjer det. Norges åpningskamp i VM vises LIVE i kveld. 3 500 billetter er allerede solgt.
      Bordene er utsolgt, men det er fortsatt ledige tribuneplasser!
    </p>
  </div>
</Reveal>

        <Reveal delayMs={100}>
          <article className="mx-auto mt-12 max-w-3xl space-y-7 text-lg leading-relaxed text-black/80">
          

            <h2 className="text-3xl font-semibold text-[#1A2238]">
              Kom tidlig – dørene og foodcourten åpner kl. 20:00
            </h2>

            <p>
            Finn deg godt til rette, slå deg til ro og nyt stemningen fra start.
              Alle kiosker og barer åpner samtidig med dørene.
            </p>

            <p>
              Før og etter Frankrike mot Senegal stiller Robin Grov og Sebastian
              Jarl med oppsnakk for å varme opp til kveldens høydepunkt: Norges
              åpningskamp mot Irak.
            </p>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="mb-3 text-xl font-semibold">
                Praktisk informasjon
              </h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold">Innganger</h4>

                  <ul className="mt-2 space-y-2">
                    <li>
                      • Bordområdet og nedre tribune → Inngang 2A (18-års
                      aldersgrense)
                    </li>
                    <li>• Øvre tribune → Inngang 4B</li>
                  </ul>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-semibold text-[#1A2238]">
              Bordgjester og armbånd
            </h2>

            <p>
              Kommer ikke hele bordet samlet? Ingen stress. Den første som
              ankommer med billetten får utdelt 8 armbånd ved inngangen, som
              selv fordeler til resten av bordet.
            </p>

            <p>
              Sørg for at én i gruppen tar ansvar for dette.
            </p>

            <h2 className="text-3xl font-semibold text-[#1A2238]">
              Mat og drikke
            </h2>

            <p>
              Det er godt med alternativer uansett hvor du sitter:
            </p>

            <ul className="space-y-2">
              <li>
                • Kiosker i hele hallen med pizza, snacks og drikke
              </li>
              <li>
                • Eget uteområde utenfor inngang 2A med burger, pizza, gyros og
                mer
              </li>
              <li>• To egne barer for bordgjester</li>
            </ul>

            <h2 className="text-3xl font-semibold text-[#1A2238]">
              Kveldens program
            </h2>

            <p className="text-2xl font-semibold text-[#1A2238]">
              Frankrike – Senegal kl. 21:00
            </p>

            <p>
              Vi starter VM-kvelden med et spennende oppgjør mellom Frankrike og
              Senegal før fokuset rettes mot Norges første kamp i mesterskapet.
            </p>

            <p className="text-2xl font-semibold text-[#1A2238]">
              Irak – Norge kl. 00:00
            </p>

            <p>
              Når klokken slår midnatt er det endelig klart for Norges
              åpningskamp i VM. Opplev kampen sammen med tusenvis av andre
              fotballfans på storskjerm i Jordal Amfi.
            </p>

            <h2 className="text-3xl font-semibold text-[#1A2238]">
              Vi sees på Jordal!
            </h2>

            <p>
              Vi gleder oss til å fylle Jordal med fotballfans og skape en
              fantastisk ramme rundt Norges VM-start.
            </p>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-2xl font-semibold">
                Kommende arrangement
              </h3>

              <div className="mt-6 space-y-6 text-left">
                <div className="rounded-2xl border border-black/10 p-5">
                  <div className="font-semibold text-xl">
                    Nederland – Sverige
                  </div>
                  <div className="mt-1 text-black/70">
                    Lørdag 20. juni fra kl. 18:00
                  </div>

                  <Link
                    href="https://vif-hockey.ticketco.events/no/nb/e/tyskland__elfenbenskysten/4b48842c-9362-4260-b514-bd22894e99d7"
                    className="mt-4 inline-flex rounded-xl bg-[#044EA2] px-5 py-2.5 font-semibold text-white transition hover:opacity-90"
                  >
                    Kjøp billetter
                  </Link>
                </div>

                <div className="rounded-2xl border border-black/10 p-5">
                  <div className="font-semibold text-xl">
                    Norge – Frankrike
                  </div>
                  <div className="mt-1 text-black/70">
                    Fredag 26. juni fra kl. 19:00
                  </div>

                  <Link
                    href="https://vif-hockey.ticketco.events/no/nb/e/fotball_paa_jordal/hjemmeside-%20"
                    className="mt-4 inline-flex rounded-xl bg-[#044EA2] px-5 py-2.5 font-semibold text-white transition hover:opacity-90"
                  >
                    Kjøp billetter
                  </Link>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/program"
                  className="rounded-2xl border border-[#044EA2] px-7 py-3 font-semibold text-[#044EA2] transition hover:bg-[#044EA2]/5"
                >
                  Se hele programmet
                </Link>
              </div>
            </div>
          </article>
        </Reveal>
      </main>
    </div>
  );
}