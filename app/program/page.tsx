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

export default function ProgramPage() {
  const VIF = {
    blue: "#044EA2",
  } as const;

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
            00:00 Playoff 2 – Norge
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
            19:00 Nederland – Playoff B
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
      slug: "9-juli",
      title: "Torsdag 9. juli",
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
      subtitle: (
        <div className="space-y-2">
          <div className="text-sm text-black/60">Dørene åpner kl. 21:00</div>
          <div className="text-base font-semibold">23:00 Kvartfinale</div>
        </div>
      ),
      ticketUrl:
        "https://vif-hockey.ticketco.events/no/nb/e/kvartfinale_kamp_3/hjemmeside",
    },
    {
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
      slug: "18-juli",
      title: "Lørdag 18. juli",
      subtitle: (
        <div className="space-y-2">
          <div className="text-sm text-black/60">Dørene åpner kl. 20:00</div>
          <div className="text-base font-semibold">23:00 Bronsefinale</div>
        </div>
      ),
      ticketUrl:
        "https://vif-hockey.ticketco.events/no/nb/e/bronsefinale/hjemmeside",
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

  const Banner = ({ m }: { m: Match }) => {
    if (m.isNorway) {
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
      <main className="mx-auto max-w-6xl px-4 py-16">
        <Reveal>
          <div className="flex items-start justify-between gap-6 flex-wrap">
            <div className="max-w-3xl">
              <h1 className="mt-5 text-4xl md:text-5xl font-semibold">
                Velg kamp
              </h1>

              <p className="mt-3 text-black/70">
                Vi viser utvalgte toppkamper og hele sluttspillet, og programmet
                oppdateres løpende. Følg med for flere kampdager og nye oppsett.
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

        <div className="mt-10">
          <div className="md:hidden space-y-4">
            {matches.map((m, i) => (
              <Reveal key={m.slug} delayMs={i * 90}>
                <section
                  className={`relative overflow-hidden rounded-2xl p-5 bg-white ${
                    m.isFinal
                      ? "border border-[#D4AF37]/40 shadow-[0_0_0_1px_rgba(212,175,55,0.20),0_10px_24px_rgba(212,175,55,0.14)]"
                      : "border border-black/10"
                  }`}
                >
                  <Banner m={m} />

                  <div className="text-base font-semibold">{m.title}</div>

                  {m.subtitle && (
                    <div className="mt-3 text-sm text-black/70">
                      {m.subtitle}
                    </div>
                  )}

                  <div className="mt-4">
                    <a
                      href={m.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center px-4 py-3 rounded-2xl font-semibold text-white inline-block"
                      style={{ backgroundColor: VIF.blue }}
                    >
                      Kjøp billett
                    </a>
                  </div>
                </section>
              </Reveal>
            ))}

            <Reveal delayMs={120}>
              <section className="rounded-2xl p-5 bg-white border border-black/10">
                <div className="text-base font-semibold">Øvrig program</div>

                <div className="mt-2 text-sm text-black/70 leading-relaxed">
                  Kom tidlig og få med deg mer enn selve kampen. Gratis
                  aktiviteter, underholdning før avspark og uteservering når
                  været tillater det. Opplevelser for både store og små! Se
                  billettsiden for hver kamp for detaljer og tidspunkt.
                </div>
              </section>
            </Reveal>
          </div>

          <div className="hidden md:grid md:grid-cols-3 gap-6 items-stretch">
            {matches.map((m, i) => (
              <Reveal key={m.slug} delayMs={i * 90} className="h-full">
                <section
                  className={`relative overflow-hidden rounded-3xl p-8 bg-white flex flex-col h-full ${
                    m.isFinal
                      ? "border border-[#D4AF37]/40 shadow-[0_0_0_1px_rgba(212,175,55,0.25),0_12px_32px_rgba(212,175,55,0.18)]"
                      : "border border-black/10"
                  }`}
                >
                  <Banner m={m} />

                  <div className="text-lg font-semibold">{m.title}</div>

                  {m.subtitle && (
                    <div className="mt-2 text-sm text-black/70 flex-1">
                      {m.subtitle}
                    </div>
                  )}

                  <div className="mt-6">
                    <a
                      href={m.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-3 rounded-2xl font-semibold text-white inline-block"
                      style={{ backgroundColor: VIF.blue }}
                    >
                      Kjøp billett
                    </a>
                  </div>
                </section>
              </Reveal>
            ))}

            <Reveal delayMs={120} className="md:col-span-3">
              <section className="rounded-3xl p-8 bg-white border border-black/10">
                <div className="text-lg font-semibold">Øvrig program</div>

                <div className="mt-2 text-sm text-black/70 leading-relaxed">
                  Kom tidlig og få med deg mer enn selve kampen. Gratis
                  aktiviteter, underholdning før avspark og uteservering når
                  været tillater det. Opplevelser for både store og små! Se
                  billettsiden for hver kamp for detaljer og tidspunkt.
                </div>
              </section>
            </Reveal>
          </div>
        </div>
      </main>
    </div>
  );
}