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
  isFinal?: boolean;
};

const VIF = {
  blue: "#044EA2",
} as const;

export default function ProgramPage() {
  const matches: Match[] = [
   
    {
      slug: "16-juni",
      title: "Tirsdag 16. juni",
      isNorway: true,
      subtitle: (
        <div className="space-y-2">
          <div className="text-sm text-black/60">Dørene åpner 20:00</div>
          <div className="text-base font-semibold">
            21:00 Senegal – Frankrike
          </div>
          <div className="text-base font-semibold">
            00:00 Irak – Norge
          </div>
        </div>
      ),
      ticketUrl:
        "https://vif-hockey.ticketco.events/no/nb/e/norge__playoff_2/hjemmeside-%20fotballvm",
    },
    {
      slug: "20-juni",
      title: "Lørdag 20. juni",
      subtitle: (
        <div className="space-y-2">
          <div className="text-sm text-black/60">Dørene åpner kl. 18:00</div>
          <div className="text-base font-semibold">
            19:00 Nederland – Sverige
          </div>
          <div className="text-base font-semibold">
            22:00 Tyskland – Elfenbenskysten
          </div>
        </div>
      ),
      ticketUrl:
        "https://vif-hockey.ticketco.events/no/nb/e/tyskland__elfenbenskysten/4b48842c-9362-4260-b514-bd22894e99d7",
    },
    {
      slug: "26-juni",
      title: "Fredag 26. juni",
      isNorway: true,
      subtitle: (
        <div className="space-y-2">
          <div className="text-sm text-black/60">Dørene åpner kl. 19:00</div>
          <div className="text-base font-semibold">
            21:00 Norge – Frankrike
          </div>
        </div>
      ),
      ticketUrl:
        "https://vif-hockey.ticketco.events/no/nb/e/fotball_paa_jordal/hjemmeside-%20",
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

  const Banner = ({ match }: { match: Match }) => {
    if (match.isNorway) {
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
    }

    return null;
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
                Her finner du programmet for fotball-VM visningen på Jordal Amfi i Oslo.
                Vi viser utvalgte kamper og hele sluttspillet på storskjerm, følg med
                for flere kampdager og nye oppsett. Sikre deg billetter til kampene du
                vil oppleve live sammen med andre supportere!
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
          {/* mobil */}
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

                  <div className="text-base font-semibold">{match.title}</div>

                  {match.subtitle ? (
                    <div className="mt-3 text-sm text-black/70">
                      {match.subtitle}
                    </div>
                  ) : null}

                  <div className="mt-4">
                    <a
                      href={match.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block w-full rounded-2xl px-4 py-3 text-center font-semibold text-white"
                      style={{ backgroundColor: VIF.blue }}
                    >
                      Kjøp billett
                    </a>
                  </div>
                </section>
              </Reveal>
            ))}

            <Reveal delayMs={120}>
              <section className="rounded-2xl border border-black/10 bg-white p-5">
                <div className="text-base font-semibold">Øvrig program</div>

                <div className="mt-2 text-sm leading-relaxed text-black/70">
                  Kom tidlig og få med deg mer enn selve kampen. Gratis
                  aktiviteter, underholdning før avspark. Opplevelser for både store og små! Se
                  billettsiden for hver kamp for detaljer og tidspunkt.
                </div>
              </section>
            </Reveal>
          </div>

          {/* desktop */}
          <div className="hidden items-stretch gap-6 md:grid md:grid-cols-3">
            {matches.map((match, index) => (
              <Reveal key={match.slug} delayMs={index * 90} className="h-full">
                <section
                  className={`relative flex h-full flex-col overflow-hidden rounded-3xl bg-white p-8 ${
                    match.isFinal
                      ? "border border-[#D4AF37]/40 shadow-[0_0_0_1px_rgba(212,175,55,0.25),0_12px_32px_rgba(212,175,55,0.18)]"
                      : "border border-black/10"
                  }`}
                >
                  <Banner match={match} />

                  <div className="text-lg font-semibold">{match.title}</div>

                  {match.subtitle ? (
                    <div className="mt-2 flex-1 text-sm text-black/70">
                      {match.subtitle}
                    </div>
                  ) : null}

                  <div className="mt-6">
                    <a
                      href={match.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block rounded-2xl px-5 py-3 font-semibold text-white"
                      style={{ backgroundColor: VIF.blue }}
                    >
                      Kjøp billett
                    </a>
                  </div>
                </section>
              </Reveal>
            ))}

            <Reveal delayMs={120} className="md:col-span-3">
              <section className="rounded-3xl border border-black/10 bg-white p-8">
                <div className="text-lg font-semibold">Øvrig program</div>

                <div className="mt-2 text-sm leading-relaxed text-black/70">
                  Kom tidlig og få med deg mer enn selve kampen. Gratis
                  aktiviteter, DJ og oppsnakk før avspark!
                  Opplevelser for både store og små! Se
                  billettsiden for hver kamp for detaljer og tidspunkt.
                </div>
              </section>
            </Reveal>
          </div>

          <p className="mt-8 max-w-3xl text-sm leading-relaxed text-black/70">
            Dette er et av de største arrangementene for å se fotball-VM i Oslo. 

             <br/>
             <b> Programmet oppdateres fortløpende med nye kamper og billettmuligheter.</b>
          </p>
        </div>
      </main>
    </div>
  );
}