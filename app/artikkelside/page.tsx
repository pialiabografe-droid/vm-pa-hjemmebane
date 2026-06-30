import Link from "next/link";
import Reveal from "../../components/Reveal";

export default function ArticlePage() {
  return (
    <div className="min-h-screen bg-[#F3F7FF] text-[#1A2238]">
      <main className="mx-auto max-w-5xl px-6 pb-24 pt-16 md:pt-20">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#E30613]">
              Kampdag
            </p>

            <h1 className="text-5xl font-semibold tracking-tight md:text-6xl">
              Velkommen til Jordal Amfi!
            </h1>

            <p className="mt-6 text-xl leading-relaxed text-black/70">
              Norge møter Elfenbenskysten i VM – og Jordal er klar for
              folkefest!
            </p>

            <p className="mt-4 text-lg leading-relaxed text-black/70">
              I dag fylles Jordal Amfi med tusenvis av fotballsupportere til
              en kveld med allsang, spenning og ekte VM-stemning. Har du
              billett, er det bare å glede seg!
            </p>

            <div className="mt-8 rounded-3xl border border-[#044EA2]/10 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#044EA2]">
                Dagens kamper
              </p>

              <h3 className="mt-1 text-2xl font-semibold">
                Tirsdag 30. juni
              </h3>

              <div className="mt-6 space-y-5 text-lg">
                <div className="flex items-center justify-between border-b border-black/10 pb-5">
                  <span>Dørene åpner</span>
                  <span className="text-xl font-bold text-[#044EA2]">
                    16:00
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-black/10 pb-5">
                  <span>Norge – Elfenbenskysten</span>
                  <span className="text-xl font-bold text-[#044EA2]">
                    19:00
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Frankrike – Sverige</span>
                  <span className="text-xl font-bold text-[#044EA2]">
                    23:00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delayMs={100}>
          <article className="mx-auto mt-20 max-w-4xl space-y-8 text-lg leading-relaxed text-black/80">
            <h2 className="text-3xl font-semibold text-[#1A2238]">
              Kom tidlig – dørene og foodcourten åpner kl. 16:00
            </h2>

            <p>
              Vi anbefaler alle å komme tidlig og få med seg stemningen fra
              start. Allerede fra kl. 16:00 åpner vi området utenfor Jordal med
              afterwork, foodcourt og uteservering.
            </p>

            <p>
              Oppladningen fortsetter inne i hallen med DJ, oppsnakk og allsang
              før avspark.
            </p>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-3 text-xl font-semibold">
                Program for dagen
              </h3>

              <ul className="space-y-3">
                <li>
                  <strong>Fra 16:00:</strong> Afterwork med foodcourt og
                  uteservering
                </li>
                <li>
                  <strong>Fra 18:00:</strong> DJ og oppladning inne
                </li>
                <li>
                  <strong>18:15:</strong> Oppsnakk med Robin Grov
                </li>
                <li>
                  <strong>18:30:</strong> Olaf Tufte tar roret
                </li>
                <li>
                  <strong>19:00:</strong> Norge – Elfenbenskysten
                </li>
                <li>
                  <strong>21:00:</strong> Afterparty med DJ og adidas-quiz
                </li>
                <li>
                  <strong>23:00:</strong> Frankrike – Sverige
                </li>
                <li>
                  <strong>01:00:</strong> Takk for i kveld!
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
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
                Klarer Norge å ro til kvartfinalen?
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-black/70">
                Tar Norge seg videre i kveld, er det bare én kamp unna
                kvartfinale!
              </p>

              <p className="mx-auto mt-4 max-w-2xl text-black/70">
                <strong>
                  Før utfallet av 8-delsfinalen er klart har vi lagt ut et
                  begrenset antall earlybird-billetter til kvartfinalene. Sikre
                  deg plass før prisen øker!
                </strong>
              </p>

              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="https://vif-hockey.ticketco.events/no/nb/events/1158423/seating_arrangement?item_type_id=27954610"
                  className="rounded-xl bg-[#E30613] px-6 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  Sikre deg billett nå!
                </Link>
              </div>
            </div>
          </article>
        </Reveal>
      </main>
    </div>
  );
}