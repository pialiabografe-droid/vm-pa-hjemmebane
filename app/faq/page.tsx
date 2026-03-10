"use client";

import Link from "next/link";
import Reveal from "../../components/Reveal";

type QAItem = {
  q: string;
  a: React.ReactNode;
};

export default function QaPage() {
  const VIF = {
    blue: "#044EA2",
    red: "#BC1823",
  } as const;

  const items: QAItem[] = [
    {
      q: "Hvor foregår arrangementet, og hvordan kommer man seg dit?",
      a: (
        <>
          Arrangementet finner sted på Jordal Amfi, Jordalgata 12 i Oslo. Den
          enkleste måten å komme seg dit på er med T-bane til Ensjø stasjon, som
          ligger omtrent fem minutters gange fra arenaen. Du kan ta linje 1, 2,
          3, 4 eller 5. Buss 20 og 37 stopper også i nærheten. Vi anbefaler
          kollektivtransport, da det er begrenset med parkering i området. Det
          finnes også sykkelstativer i nærheten.
        </>
      ),
    },
    {
      q: "Hva er åpningstidene, og når bør jeg møte opp før kampstart?",
      a: (
        <>
          Tidspunkt og inngang varierer etter billettype og kampstart. Du får
          praktisk informasjon før arrangementet, men vanlig inngangstid er
          to timer før kampstart.
        </>
      ),
    },
    {
      q: "Er det aldersgrense på arrangementet?",
      a: (
        <>
          Arrangementet på Jordal Amfi har 18-årsgrense, med unntak av
          familietribunen, som er et avgrenset område for barn og ungdom. Barn
          under 12 år i følge med voksen.
        </>
      ),
    },
    {
      q: "Må jeg bestille billett på forhånd?",
      a: (
        <>
          Du kan sikre deg tribuneplass til 99 kr eller reservere bord på
          forhånd. Billetter kan også kjøpes i inngangen dersom det fortsatt er
          ledig kapasitet.
        </>
      ),
    },
    {
      q: "Hvilke kamper vises på Jordal?",
      a: (
        <>
          På Jordal Amfi blir det totalt 18 dager med VM-feber. Vi viser Norges
          to beste gruppespillkamper, flere 16-delsfinaler og resten av
          sluttspillet.{" "}
          <a
            href="https://vif-hockey.ticketco.shop/?tag=fotballVM"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Se hele programmet her
          </a>
          .
        </>
      ),
    },
    {
      q: "Hva er forskjellen på tribuneplass, Fast Track, premium bord og VIP-resturanten?",
      a: (
        <>
          Alle forhåndsbestilte billetter inkluderer Fast Track og tilgang til
          mat- og drikkeservering. På familietribunen serveres det ikke alkohol.
          Se billettinformasjonen for den enkelte kamp for detaljer om inngang
          og praktisk informasjon.
        </>
      ),
    },
    {
      q: "Er området tilrettelagt for rullestolbrukere?",
      a: (
        <>
          Jordal Amfi er en toppmoderne arena som sto ferdig i 2020 og er
          tilrettelagt for rullestolbrukere.
        </>
      ),
    },
    {
      q: "Vil det være mat og drikke tilgjengelig på området?",
      a: (
        <>
          Det vil være servering av drikke både med og uten alkohol, samt
          mulighet for å kjøpe mat på området. På familietribunen serveres det
          ikke alkohol.
        </>
      ),
    },
    {
      q: "Når får jeg billetten min?",
      a: (
        <>
          Billetten din blir sendt så fort bestillingen er gjennomført i
          TicketCo.
        </>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3F7FF] text-[#1A2238]">
      <main className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div>
              <h1 className="mt-5 text-4xl md:text-5xl font-semibold">
                Ofte stilte spørsmål
              </h1>

              <p className="mt-3 text-black/70 max-w-2xl">
                Her finner du svar på vanlige spørsmål om Fotball VM på Jordal.
                Finner du ikke svar på det du lurer på, er du velkommen til å ta
                kontakt.
              </p>
            </div>

            <Link
              href="/"
              className="px-5 py-3 rounded-2xl bg-white border border-black/10 text-sm"
            >
              Tilbake til forsiden
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid md:grid-cols-2 gap-6 items-stretch">
  {items.map((it, i) => (
    <Reveal key={String(it.q)} delayMs={i * 90} className="h-full">
      <div className="rounded-3xl p-8 bg-white border border-black/10 h-full">
        <div className="text-lg font-semibold">{it.q}</div>
        <div className="mt-3 text-sm text-black/70">{it.a}</div>
      </div>
    </Reveal>
  ))}
</div>

<Reveal delayMs={120}>
  <div className="mt-14 flex gap-3 flex-wrap justify-center">
    <Link
      href="/program"
      className="px-8 py-4 rounded-2xl text-white font-semibold"
      style={{ backgroundColor: VIF.blue }}
    >
      Se program
    </Link>

    <a
      href="https://vif-hockey.ticketco.shop/?tag=fotballVM"
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-4 rounded-2xl bg-white border border-black/10 font-semibold"
    >
      Kjøp billetter
    </a>
  </div>
</Reveal>
      </main>
    </div>
  );
}