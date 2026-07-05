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
              Norge møter Brasil i VM – og Jordal er klar for folkefest!
            </p>

            <p className="mt-4 text-lg leading-relaxed text-black/70">
              I dag fylles Jordal Amfi med tusenvis av fotballsupportere til en
              kveld med allsang, spenning og ekte VM-stemning. Har du billett,
              er det bare å glede seg!
            </p>

            <div className="mt-8 rounded-3xl border border-[#044EA2]/10 bg-white p-7 shadow-sm">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#044EA2]">
                Dagens kamp
              </p>

              <h3 className="mt-1 text-2xl font-semibold">
                Søndag 5. juli
              </h3>

              <div className="mt-6 space-y-5 text-lg">
                <div className="flex items-center justify-between border-b border-black/10 pb-5">
                  <span>Dørene åpner</span>
                  <span className="text-xl font-bold text-[#044EA2]">
                    16:00
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span>Norge – Brasil</span>
                  <span className="text-xl font-bold text-[#044EA2]">
                    22:00
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
              foodcourt, uteservering og oppladning før kamp.
            </p>

            <p>
              Oppladningen fortsetter inne i hallen med DJ, oppsnakk og allsang
              før avspark.
            </p>

            <div className="rounded-2xl bg-white p-6 shadow-sm">
              <h3 className="mb-5 text-xl font-semibold">
                Program for dagen
              </h3>

              <div className="space-y-3">
                <div className="grid grid-cols-[110px_1fr] gap-4">
                  <span className="font-semibold">16:00</span>
                  <span>Foodcourt og uteservering åpner</span>
                </div>

                <div className="grid grid-cols-[110px_1fr] gap-4">
                  <span className="font-semibold">18:00</span>
                  <span>DJ og oppladning inne</span>
                </div>

                <div className="grid grid-cols-[110px_1fr] gap-4">
                  <span className="font-semibold">21:00</span>
                  <span>Oppsnakk og konkurranser med Robin Grov</span>
                </div>

                <div className="grid grid-cols-[110px_1fr] gap-4">
                  <span className="font-semibold">21:45</span>
                  <span>Hele Jordal ror</span>
                </div>

                <div className="grid grid-cols-[110px_1fr] gap-4">
                  <span className="font-semibold">22:00</span>
                  <span>Norge – Brasil</span>
                </div>

                <div className="grid grid-cols-[110px_1fr] gap-4">
                  <span className="font-semibold">Etter kamp</span>
                  <span>Afterparty med DJ</span>
                </div>
              </div>
            </div>           <div className="rounded-2xl bg-white p-6 shadow-sm">
  <h3 className="mb-3 text-xl font-semibold">
    Praktisk informasjon
  </h3>

  <div className="space-y-5">
    <div>
      <h4 className="font-semibold">Innganger</h4>

      <div className="mt-3 space-y-3">
        <div className="grid gap-2 md:grid-cols-[190px_24px_1fr] md:gap-3">
          <span className="font-semibold">Bordområdet</span>
          <span className="hidden text-[#044EA2] md:block">→</span>
          <span>
            Inngang 1. 18-års aldersgrense. Inngangen ligger nederst på
            anlegget, på fotballbane-nivå, vendt mot fotballbanen.
          </span>
        </div>

        <div className="grid gap-2 md:grid-cols-[190px_24px_1fr] md:gap-3">
          <span className="font-semibold">Nedre tribune 18+</span>
          <span className="hidden text-[#044EA2] md:block">→</span>
          <span>Inngang 2A</span>
        </div>

        <div className="grid gap-2 md:grid-cols-[190px_24px_1fr] md:gap-3">
          <span className="font-semibold">Øvre tribune 18+</span>
          <span className="hidden text-[#044EA2] md:block">→</span>
          <span>Inngang 4A</span>
        </div>

        <div className="grid gap-2 md:grid-cols-[190px_24px_1fr] md:gap-3">
          <span className="font-semibold">Familietribunene</span>
          <span className="hidden text-[#044EA2] md:block">→</span>
          <span>Inngang 4B</span>
        </div>
      </div>
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

                  <div className="mt-2 space-y-2">
                    <p>Kiosker i hele hallen med snacks og drikke.</p>
                    <p>
                      Utenfor inngang 2A er det eget uteområde med burger,
                      pizza, gyros m.m.
                    </p>
                    <p>To egne barer for bordgjester i bordområdet.</p>
                  </div>
                </div>
              </div>
            </div>

                       <div className="rounded-3xl bg-white p-8 text-center shadow-sm">
              <h3 className="text-2xl font-semibold">
                Klarer Norge å ro til kvartfinalen?
              </h3>

              <p className="mx-auto mt-4 max-w-2xl text-black/70">
                Sikre deg billett nå!
              </p>

              <div className="mt-6 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/program"
                  className="rounded-xl bg-[#E30613] px-6 py-3 font-semibold text-white transition hover:opacity-90"
                >
                  Se programmet
                </Link>
              </div>
            </div>
          </article>
        </Reveal>
      </main>
    </div>
  );
}