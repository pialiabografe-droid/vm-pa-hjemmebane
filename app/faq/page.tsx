"use client";

import Link from "next/link";
import Reveal from "../../components/Reveal";

type QAItem = {
  q: string;
  a: React.ReactNode;
};

/* vif-farge til cta knapper */
const VIF = {
  blue: "#044EA2",
} as const;

/* delt inn - billetter og inngang */
const tickets: QAItem[] = [
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
    q: "Om vi ikke klarer å fylle hele bordet på 8 personer, kan jeg da dele opp bordet?",
    a: (
      <>
        Nei, vi selger kun bord for åtte personer, og det er ikke mulig å kjøpe
        halve bord.
      </>
    ),
  },
  {
    q: "Når får jeg billetten min?",
    a: (
      <>
        Billetten din blir sendt så fort bestillingen er gjennomført i TicketCo.
      </>
    ),
  },
  {
    q: "Hva er forskjellen på tribuneplass, Fast Track, premium bord og VIP-restauranten?",
    a: (
      <>
        Alle forhåndsbestilte billetter inkluderer Fast Track og tilgang til
        mat- og drikkeservering. På familietribunen serveres det ikke alkohol.
        Se billettinformasjonen for den enkelte kamp for detaljer.
      </>
    ),
  },
  {
    q: "Er det aldersgrense på arrangementet?",
    a: (
      <>
        Arrangementet har 18-årsgrense, med unntak av familietribunen som er et
        eget avgrenset område. Barn under 12 år må være i følge med voksen.
      </>
    ),
  },
];

/* delt inn - praktisk info */
const info: QAItem[] = [
  {
    q: "Hvor kan jeg se fotball-VM i Oslo? Og hvordan kommer man seg dit?",
    a: (
      <>
        Arrangementet finner sted på Jordal Amfi, Jordalgata 12. Nærmeste
        T-bane er Ensjø stasjon, omtrent fem minutters gange unna. Linje 1–5
        stopper der, og buss 20 og 37 går også i området. Vi anbefaler
        kollektivtransport.
      </>
    ),
  },
  {
    q: "Hva er åpningstidene, og når bør jeg møte opp?",
    a: (
      <>
        Åpningstidene varierer fra dag til dag og avhenger av kampstart og
        billettype. Vi anbefaler å se{" "}
        <Link href="/program" className="underline">
          programmet
        </Link>{" "}
        for oversikt over den aktuelle dagen. Har du kjøpt billett, vil du også
        motta praktisk informasjon i forkant av arrangementet. Før kjøp finner
        du oppdatert informasjon på arrangementssiden i TicketCo.
      </>
    ),
  },
  {
    q: "Hvilke fotball-VM kamper vises på Jordal?",
    a: (
      <>
        Vi viser Norges beste gruppespillkamper, og sluttspillet. Vi legger ut
        billetter til de beste 16-delsfinalene løpende.{" "}
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
];

/* delt inn - arena og fasiliteter */
const arena: QAItem[] = [
  {
    q: "Er området tilrettelagt for rullestolbrukere?",
    a: (
      <>
        Jordal Amfi er universelt utformet. HC-plass kan forhåndsbestilles ved å
        kontakte{" "}
        <a href="mailto:event@vif-hockey.no" className="underline">
          event@vif-hockey.no
        </a>
        .
      </>
    ),
  },
  {
    q: "Vil det være mat og drikke tilgjengelig?",
    a: (
      <>
        Ja. Det vil være servering både med og uten alkohol, samt flere
        mattilbud. På familietribunen serveres det ikke alkohol.
      </>
    ),
  },
];

type SectionProps = {
  id: string;
  title: string;
  items: QAItem[];
};

function Section({ id, title, items }: SectionProps) {
  return (
    <section id={id} className="mt-16">
      {/* overskrifter */}
      <Reveal>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </Reveal>

      {/* spørsmålskort */}
      <div className="mt-6 grid gap-6 md:grid-cols-2">
        {items.map((item, index) => (
          <Reveal key={item.q} delayMs={index * 70}>
            <div className="h-full rounded-3xl border border-black/10 bg-white p-8">
              <div className="font-semibold">{item.q}</div>
              <div className="mt-3 text-sm text-black/70">{item.a}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default function QaPage() {
  return (
    <div className="min-h-screen bg-[#F3F7FF] text-[#1A2238]">
      <main className="mx-auto max-w-6xl px-4 py-16">
        {/* intro */}
        <Reveal>
  <div className="mt-6 flex items-start justify-between gap-6">
    <div className="max-w-3xl flex-1">
      <h1 className="text-4xl font-semibold md:text-5xl">
        Ofte stilte spørsmål om fotball-VM visning i Oslo
      </h1>
      <p className="mt-3 max-w-2xl text-black/70">
        Her finner du praktisk informasjon om VM-visningene på Jordal.
      </p>
    </div>

    <Link
      href="/"
      className="hidden shrink-0 rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm md:inline-flex"
    >
      Tilbake til forsiden
    </Link>
  </div>
</Reveal>

        {/* klikkbar inndeling */}
        <Reveal delayMs={120}>
          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#billetter"
              className="rounded-full border bg-white px-4 py-2 text-sm"
            >
              Billetter og inngang
            </a>
            <a
              href="#info"
              className="rounded-full border bg-white px-4 py-2 text-sm"
            >
              Hva, når og hvor
            </a>
            <a
              href="#arena"
              className="rounded-full border bg-white px-4 py-2 text-sm"
            >
              Arena og fasiliteter
            </a>
          </div>
        </Reveal>

        {/* faq seksjoner */}
        <Section id="billetter" title="Billetter og inngang" items={tickets} />
        <Section id="info" title="Hva, når og hvor" items={info} />
        <Section id="arena" title="Arena og fasiliteter" items={arena} />

        {/* cta videre til program */}
        <Reveal delayMs={120}>
          <div className="mt-20 flex justify-center">
            <Link
              href="/program"
              className="rounded-2xl px-8 py-4 font-semibold text-white"
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