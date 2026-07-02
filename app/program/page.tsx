"use client";

import Link from "next/link";
import { ReactNode } from "react";
import Reveal from "../../components/Reveal";

type Match = {
  slug: string;
  title: string;
  subtitle?: ReactNode;
  ticketUrl?: string;
  isNorway?: boolean;
  isEarlybird?: boolean;
  isFinal?: boolean;
  soldOut?: boolean;
};

const VIF = {
  blue: "#044EA2",
} as const;

export default function ProgramPage() {
  const matches: Match[] = [
    {
      slug: "4-juli",
      title: "Lørdag 4. juli",
      subtitle: (
        <div className="space-y-2">
          <div className="text-sm text-black/60">Dørene åpner 17:00</div>
          <div className="text-base font-semibold">19:00 Canada – Marokko</div>
          <div className="text-base font-semibold">
            23:00 Paraguay – Frankrike
          </div>
        </div>
      ),
      ticketUrl:
        "https://vif-hockey.ticketco.events/no/nb/e/8delsfinale_dag_1",
    },
    {
      slug: "5-juli",
      title: "Søndag 5. juli",
      isNorway: true,
      subtitle: (
        <div className="space-y-2">
          <div className="text-sm text-black/60">Dørene åpner kl. 18:00</div>
          <div className="text-base font-semibold">22:00 Norge – Brasil</div>
        </div>
      ),
      ticketUrl:
        "https://vif-hockey.ticketco.events/no/nb/e/norge__brasil_vm/031078e6-17f1-4e56-9d5d-14e9acdde98f",
    },
    {
      slug: "6-juli",
      title: "Mandag 6. juli",
      subtitle: (
        <div className="space-y-2">
          <div className="text-sm text-black/60">Dørene åpner 19:00</div>
          <div className="text-base font-semibold">21:00 8-delsfinale</div>
        </div>
      ),
      ticketUrl:
        "https://vif-hockey.ticketco.events/no/nb/e/8delsfinale_dag_3",
    },
    {
      slug: "7-juli",
      title: "Tirsdag 7. juli",
      subtitle: (
        <div className="space-y-2">
          <div className="text-sm text-black/60">Dørene åpner 16:00</div>
          <div className="text-base font-semibold">18:00 8-delsfinale</div>
          <div className="text-base font-semibold">22:00 8-delsfinale</div>
        </div>
      ),
      ticketUrl:
        "https://vif-hockey.ticketco.events/no/nb/e/8delsfinale_dag_4",
    },
    {
      slug: "9-juli",
      title: "Torsdag 9. juli",
      isEarlybird: true,
      subtitle: (
        <div className="space-y-2">
          <div className="text-sm text-black/60">Dørene åpner kl. 20:00</div>
          <div className="text-base font-semibold">22:00 Kvartfinale</div>
        </div>
      ),
      ticketUrl:
        "https://vif-hockey.ticketco.events/no/nb/e/kvartfinale_kamp_1/hjemmeside",
    },
    {
      slug: "10-juli",
      title: "Fredag 10. juli",
      isEarlybird: true,
      subtitle: (
        <div className="space-y-2">
          <div className="text-sm text-black/60">Dørene åpner kl. 19:00</div>
          <div className="text-base font-semibold">21:00 Kvartfinale</div>
        </div>
      ),
      ticketUrl:
        "https://vif-hockey.ticketco.events/no/nb/e/kvartfinale_kamp_2/hjemmeside",
    },
    {
      slug: "11-juli",
      title: "Lørdag 11. juli",
      isEarlybird: true,
      subtitle: (
        <div className="space-y-2">
          <div className="text-sm text-black/60">Dørene åpner kl. 21:00</div>
          <div className="text-base font-semibold">23:00 Kvartfinale</div>
        </div>
      ),
      ticketUrl:
        "https://vif-hockey.ticketco.events/no/nb/e/kvartfinale_kamp_3/hjemmeside",
    },    {
      slug: "14-juli",
      title: "Tirsdag 14. juli",
      subtitle: (
        <div className="space-y-2">
          <div className="text-sm text-black/60">Dørene åpner kl. 19:00</div>
          <div className="text-base font-semibold">21:00 Semifinale</div>
        </div>
      ),
      ticketUrl:
        "https://vif-hockey.ticketco.events/no/nb/e/semifinale_kamp_1/hjemmeside",
    },
    {
      slug: "15-juli",
      title: "Onsdag 15. juli",
      subtitle: (
        <div className="space-y-2">
          <div className="text-sm text-black/60">Dørene åpner kl. 19:00</div>
          <div className="text-base font-semibold">21:00 Semifinale</div>
        </div>
      ),
      ticketUrl:
        "https://vif-hockey.ticketco.events/no/nb/e/semifinale_kamp_2/hjemmeside",
    },
    {
      slug: "19-juli",
      title: "Søndag 19. juli",
      isFinal: true,
      subtitle: (
        <div className="space-y-2">
          <div className="text-sm text-black/60">Dørene åpner kl. 18:00</div>
          <div className="text-base font-semibold">21:00 Finale</div>
        </div>
      ),
      ticketUrl:
        "https://vif-hockey.ticketco.events/no/nb/e/finale/hjemmeside",
    },
  ];

  const isRoundOf16 = (match: Match) =>
    match.slug === "4-juli" ||
    match.slug === "6-juli" ||
    match.slug === "7-juli";

  const Banner = ({ match }: { match: Match }) => {
    if (match.isEarlybird) {
      return (
        <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-[inherit]">
          <div
            className="absolute right-[-92px] top-[25px] w-[280px] rotate-[30deg] py-1 text-center text-xs font-black uppercase tracking-[0.22em] text-white shadow-sm"
            style={{ backgroundColor: "#BA0C2F" }}
          >
            EARLYBIRD
          </div>
        </div>
      );
    }

    if (!match.isNorway) return null;

    return (
      <div className="pointer-events-none absolute inset-0 z-10 overflow-hidden rounded-[inherit]">
        <div
          className="absolute right-[-115px] top-[20px] h-6 w-[300px] rotate-[30deg] shadow-sm"
          style={{
            background:
              "linear-gradient(to bottom, #BA0C2F 0%, #BA0C2F 28%, #FFFFFF 28%, #FFFFFF 36%, #00205B 36%, #00205B 64%, #FFFFFF 64%, #FFFFFF 72%, #BA0C2F 72%, #BA0C2F 100%)",
          }}
        />
      </div>
    );
  };  const TicketButton = ({ match }: { match: Match }) => {
    if (match.soldOut) {
      return (
        <div className="relative inline-block w-full md:w-auto">
          <div
            className="inline-block w-full cursor-not-allowed rounded-2xl px-4 py-3 text-center font-semibold md:w-auto md:px-5"
            style={{
              backgroundColor: "#EAF3FF",
              color: "#044EA2",
            }}
          >
            Kjøp billett
          </div>

          <div className="pointer-events-none absolute left-1/2 top-1/2 z-30 -translate-x-1/2 -translate-y-1/2 rotate-[-14deg] rounded-lg border-[4px] border-[#BA0C2F] bg-white px-5 py-1 text-sm font-black uppercase tracking-widest text-[#BA0C2F] shadow-sm md:px-6 md:text-base">
            UTSOLGT
          </div>
        </div>
      );
    }

    return (
      <a
        href={match.ticketUrl || "#"}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block w-full rounded-2xl px-4 py-3 text-center font-semibold text-white md:w-auto md:px-5"
        style={{ backgroundColor: VIF.blue }}
      >
        Kjøp billett
      </a>
    );
  };

  return (
    <div className="min-h-screen bg-[#F3F7FF] text-[#1A2238]">
      <main className="mx-auto max-w-6xl px-4 py-20 md:py-24">
        <Reveal>
          <div className="flex flex-wrap items-start justify-between gap-6 pt-2 md:pt-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-semibold md:text-5xl">
                Kampprogram
              </h1>

              <h2 className="mt-3 text-lg font-medium text-black/60 md:text-xl">
                Se fotball-VM på Jordal Amfi
              </h2>

              <p className="mt-3 text-black/70">
                Her finner du programmet for fotball-VM-visningen på Jordal
                Amfi i Oslo. Vi viser utvalgte kamper fra sluttspillet på
                storskjerm. Følg med for flere kampdager og nye oppsett!
              </p>
            </div>

            <Link
              href="/"
              className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm"
            >
              Tilbake til forsiden
            </Link>
          </div>
        </Reveal>

        <div className="mt-10">
          <div className="space-y-4 md:hidden">
            {matches.map((match, index) => (
              <Reveal key={match.slug} delayMs={index * 90}>
                <section
                  className={`relative overflow-hidden rounded-2xl bg-white p-5 ${
                    match.isFinal
                      ? "border border-[#D4AF37]/40 shadow-[0_0_0_1px_rgba(212,175,55,0.20),0_10px_24px_rgba(212,175,55,0.14)]"
                      : "border border-black/10"
                  }`}
                >
                  <Banner match={match} />

                  <div className="text-base font-semibold">
                    {match.title}
                  </div>

                  {match.subtitle && (
                    <div className="mt-3 text-sm text-black/70">
                      {match.subtitle}
                    </div>
                  )}                  <div className="mt-6 flex items-center gap-3">
                    <TicketButton match={match} />

                    {(match.slug === "4-juli" ||
                      match.slug === "6-juli" ||
                      match.slug === "7-juli") && (
                      <span className="text-sm font-semibold whitespace-nowrap text-[#044EA2]">
                        Fra 39,-
                      </span>
                    )}
                  </div>
                </section>
              </Reveal>
            ))}
          </div>

          <div className="hidden items-stretch gap-6 md:grid md:grid-cols-3">
            {matches.map((match, index) => (
              <Reveal
                key={match.slug}
                delayMs={index * 90}
                className="h-full"
              >
                <section
                  className={`relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-8 ${
                    match.isFinal
                      ? "border border-[#D4AF37]/40 shadow-[0_0_0_1px_rgba(212,175,55,0.25),0_12px_32px_rgba(212,175,55,0.18)]"
                      : "border border-black/10"
                  }`}
                >
                  <Banner match={match} />

                  <div className="text-lg font-semibold">
                    {match.title}
                  </div>

                  {match.subtitle && (
                    <div className="mt-2 flex-1 text-sm text-black/70">
                      {match.subtitle}
                    </div>
                  )}

                  <div className="mt-6 flex items-center gap-3">
                    <TicketButton match={match} />

                    {(match.slug === "4-juli" ||
                      match.slug === "6-juli" ||
                      match.slug === "7-juli") && (
                      <span className="text-sm font-semibold whitespace-nowrap text-[#044EA2]">
                        Fra 39,-
                      </span>
                    )}
                  </div>
                </section>
              </Reveal>
            ))}

            <Reveal delayMs={120} className="md:col-span-3">
              <section className="rounded-3xl border border-black/10 bg-white p-8">
                <div className="text-lg font-semibold">Øvrig program</div>

                <div className="mt-2 text-sm leading-relaxed text-black/70">
                  Kom tidlig og få med deg mer enn selve kampen. Gratis
                  aktiviteter, DJ og oppsnakk før avspark! Opplevelser for
                  både store og små! Se billettsiden for hver kamp for
                  detaljer og tidspunkt.
                </div>
              </section>
            </Reveal>
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-black/70">
            Dette er et av de største arrangementene for å se fotball-VM i
            Oslo.
            <br />
            <b>
              Programmet oppdateres fortløpende med nye kamper og
              billettmuligheter.
            </b>
          </p>
        </div>
      </main>
    </div>
  );
}