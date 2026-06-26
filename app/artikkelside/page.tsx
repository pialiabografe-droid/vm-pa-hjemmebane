import Link from "next/link";
import Reveal from "../../components/Reveal";

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
              Norge møter Frankrike i VM – og Jordal er utsolgt!
            </p>

            <p className="mt-4 text-lg leading-relaxed text-black/70">
              Om bare noen timer fylles Jordal Amfi med tusenvis av
              fotballsupportere til en kveld med folkefest, allsang og
              VM-stemning. Har du billett, er det bare å glede seg!
            </p>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <article className="mx-auto mt-12 max-w-3xl space-y-7 text-lg leading-relaxed text-black/80">
            <h2 className="text-3xl font-semibold text-[#1A2238]">
              Kom tidlig – dørene og foodcourten åpner kl. 16:00
            </h2>

            <p>
              Vi anbefaler alle å komme tidlig og få med seg stemningen fra
              start. Allerede fra kl. 16:00 åpner vi området utenfor Jordal med
              afterwork, OBOS Fanzone, foodcourt og uteservering.
            </p>

            <p>
              Oppladningen fortsetter inne i hallen med DJ, oppladning og
              allsang før avspark.
            </p>

            <div className="rounded-2xl bg-white p-6">
              <h3 className="mb-3 text-xl font-semibold">
                Praktisk informasjon
              </h3>

              <div className="space-y-5">
                <div>
                  <h4 className="font-semibold">Innganger</h4>

                  <ul className="mt-2 space-y-3">
                    <li>
                      • Bordområdet → Inngang 1 (18-års aldersgrense).
                      Inngangen ligger nederst på anlegget, på
                      fotballbane-nivå, vendt mot fotballbanene.
                    </li>
                    <li>
                      • Nedre tribune → Inngang 2A (18-års aldersgrense)
                    </li>
                    <li>• Øvre tribune → Inngang 4B</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold">Bordgjester og armbånd</h4>

                  <p className="mt-2">
                    Kommer ikke hele bordet samlet? Ingen stress. Den første som
                    ankommer med billetten får utdelt 8 armbånd ved inngangen,
                    som selv fordeler til resten av bordet. Sørg for at én i
                    gruppen tar ansvar for dette!
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">Mat og drikke</h4>

                  <ul className="mt-2 space-y-2">
                    <li>• Kiosker i hele hallen med snacks og drikke</li>
                    <li>
                      • Utenfor inngang 2A er det eget uteområde med burger,
                      pizza, gyros m.m.
                    </li>
                    <li>• To egne barer for bordgjester i bordområdet</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-2xl font-semibold">
                Kommende arrangement
              </h3>

              <div className="mt-6 rounded-2xl border border-black/10 p-5 text-left">
                <div className="text-xl font-semibold">
                  Norges 16-delsfinale!
                </div>

                <div className="mt-1 text-black/70">
                  Tirsdag 30. juni fra kl. 17:00
                </div>

                <Link
                  href="https://vif-hockey.ticketco.events/no/nb/events/1158423/seating_arrangement?item_type_id=27954610"
                  className="mt-4 inline-flex rounded-xl bg-[#044EA2] px-5 py-2.5 font-semibold text-white transition hover:opacity-90"
                >
                  Kjøp billetter her
                </Link>
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