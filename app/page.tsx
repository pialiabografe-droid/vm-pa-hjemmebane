"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Reveal from "../components/Reveal";

export default function FotballVMJordal() {
  const [bgOk, setBgOk] = useState(true);

  const palette = useMemo(
    () => ({
      page: "#F3F7FF",
      text: "#1A2238",
    }),
    []
  );

  const BG = {
    hero: "/media/vm-jordal.jpeg",
  } as const;

  const ticketcoUrl =
    "https://vif-hockey.ticketco.events/no/nb/events/1032852/seating_arrangement/3737d866-eb04-4b0c-8934-a84b6c732c42/";

  const quick = [
    {
      title: "Fotball handler om mer enn de 90 minuttene.",
      desc: "For Vålerenga handler det om å samle folk og bygge felleskap. Vi ønsker å ta samfunnsansvar og gi noe tilbake til nærmiljøet vårt.",
    },
    {
      title: "VM-fest på ekte Jordal-vis",
      desc: (
        <>
          Når Jordal fylles, gjør vi det på ordentlig. Dette blir mer enn visning.
          Vi rigger til med DJ, full lyd- og lysproduksjon og ekte stadionstemning inne i arenaen.
          Før kamp, i pauser og etter sluttsignalet sørger vi for show, energi og overraskelser som gjør kvelden komplett.
          <br />
          <br />
          Og vi holder prisene lave, slik at flest mulig kan være med.
        </>
      ),
    },
    {
      title: "Hjertet av Oslo",
      desc: "Jordal Amfi.",
    },
  ];

  const packages = [
    {
      title: "FAMILIEOMRÅDE",
      subtitle:
        "Aldersgrense 12+ i følge med voksen. Gir ikke tilgang til andre områder.",
      price: "100",
      currency: "NOK",
      unit: "per person",
      items: 
        ["Inngang til familieområdet",  
        "Kiosk",
      ],
      href: ticketcoUrl,
    },
    {
      title: "VOKSEN",
      subtitle: "Aldersgrense 18+.",
      price: "100",
      currency: "NOK",
      unit: "per person",
      items: [
        "Inngang til 18+-området",
        "Bar",
        "Serveringstilbud",
        "Kiosk",
        "Tribune",
      ],
      href: ticketcoUrl,
    },
    {
      title: "GOLDEN CIRCLE BORD",
      subtitle: "8 personer. Aldersgrense 18+.",
      price: "1500",
      currency: "NOK",
      unit: "per bord",
      items: [
        "Reservert bord i sone nærmest skjerm",
        "Bar",
        "Serveringstilbud",
        "Kiosk",
        "Langbord",
        "Fast track",
      ],
      href: ticketcoUrl,
    },
    {
      title: "LOSJE",
      subtitle: "10-16 personer.",
      price: "25000",
      currency: "NOK",
      unit: "per bord",
      items: [
        "Inngang til VIP-området",
        "2 enheter drikke",
        "Matservering",
        "Egen VIP-bar",
        "Norge skjerf",
        "Fast track",
      ],
      href: ticketcoUrl,
    },
  ];

  const practical = [{ title: "Q&A", desc: "Ofte stilte spørsmål." }];

  const Check = () => (
    <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[#044EA2] text-white shrink-0">
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none" aria-hidden="true">
        <path
          d="M7.9 13.7 4.8 10.6a1 1 0 0 1 1.4-1.4l1.7 1.7 5-5a1 1 0 0 1 1.4 1.4l-5.7 5.7a1 1 0 0 1-1.4 0Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );

  return (
    <div className="min-h-screen" style={{ backgroundColor: palette.page, color: palette.text }}>
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <main id="top">
        {/* HERO */}
        <Reveal>
          <section className="relative overflow-hidden">
            <div className="absolute inset-0">
              {bgOk ? (
                <img
                  src={BG.hero}
                  alt="Publikum ser VM på storskjerm"
                  className="h-full w-full object-cover"
                  onError={() => setBgOk(false)}
                />
              ) : null}
              <div className="absolute inset-0 bg-black/35" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-16">
              {/* DESKTOP MENY OVER HERO */}
              <div className="hidden md:flex justify-center gap-3">
                <Link
                  href="/om"
                  className="px-5 py-2 rounded-full text-sm font-medium text-white border border-white/30 bg-white/10 hover:bg-white/20 transition"
                >
                  Om oss
                </Link>

                <Link
                  href="/program"
                  className="px-5 py-2 rounded-full text-sm font-medium text-white border border-white/30 bg-white/10 hover:bg-white/20 transition"
                >
                  Program
                </Link>

                <a
                  href="#pakker"
                  className="px-5 py-2 rounded-full text-sm font-medium text-white border border-white/30 bg-white/10 hover:bg-white/20 transition"
                >
                  Billetter
                </a>

                <Link
                  href="/q&a"
                  className="px-5 py-2 rounded-full text-sm font-medium text-white border border-white/30 bg-white/10 hover:bg-white/20 transition"
                >
                  Q&amp;A
                </Link>
              </div>

              <div className="mt-10 text-center md:mt-12">
                <h1 className="text-4xl md:text-6xl font-semibold text-white tracking-tight">
                  FOTBALL VM PÅ <br /> JORDAL
                </h1>

                <p className="mt-6 text-base md:text-lg text-white/90">
                  Alle Norges kamper, og hele sluttspillet. <br /> Uansett vær.
                </p>

                {/* PARTNERE PÅ MOBIL */}
<div className="mt-8 flex justify-center md:hidden">
  <div className="flex items-center gap-3 bg-white text-[#1A2238] border border-black/10 rounded-3xl px-5 py-3 shadow-md">
    <img
      src="/media/sparebank1-logo.png"
      alt="SpareBank 1"
      className="h-6 w-auto object-contain"
    />
    <div className="h-6 w-px bg-black/10" />
    <span className="text-xs font-semibold text-black/70">P2</span>
    <div className="h-6 w-px bg-black/10" />
    <span className="text-xs font-semibold text-black/70">P3</span>
  </div>
</div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={ticketcoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-7 py-3 rounded-2xl font-semibold bg-white text-[#1A2238] shadow-md hover:bg-white/90 transition"
                  >
                    Kjøp billetter
                  </a>

                  <a
                    href="#pakker"
                    className="px-7 py-3 rounded-2xl bg-white/10 text-white border border-white/25 font-medium hover:bg-white/20 transition"
                  >
                    Velg pakke
                  </a>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* QUICK */}
        <section className="mx-auto max-w-6xl px-4 py-16">
         <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {quick.map((q, i) => (
              <Reveal key={q.title} delayMs={i * 90}>
                  <div className="rounded-3xl p-8 bg-white border border-black/10 h-full flex flex-col">
                  <div className="text-lg font-semibold">{q.title}</div>
                  <div className="mt-3 text-sm text-black/70 leading-relaxed">{q.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PAKKER */}
        <section id="pakker" className="mx-auto max-w-6xl px-4 pb-16">
          <Reveal>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <h2 className="text-3xl font-semibold">Pakker</h2>
                <p className="mt-2 text-sm text-black/60">
                  Velg område eller bordpakke. Alle kjøp går via TicketCo.
                </p>
              </div>

              <a
                href={ticketcoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 rounded-2xl bg-white border border-black/10 text-sm font-semibold hover:bg-black/[0.02] transition"
              >
                Kjøp billett
              </a>
            </div>
          </Reveal>

          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {packages.map((p, i) => (
              <Reveal key={p.title} delayMs={i * 110}>
                <div className="rounded-3xl bg-white border border-black/10 p-8 flex flex-col h-full">
                  {/* Fast høyde topp */}
                  <div className="min-h-[110px]">
                    <div className="text-sm font-semibold tracking-wide text-[#1A2238]">
                      {p.title}
                    </div>
                    <div className="mt-2 text-sm text-black/60 leading-relaxed">
                      {p.subtitle}
                    </div>
                  </div>

                  {/* Pris */}
                  <div className="mt-8">
                    <div className="flex items-end gap-3">
                      <div className="text-5xl font-semibold tracking-tight text-[#0E2433] leading-none">
                        {p.price} {p.currency}
                      </div>
                      <div className="pb-2 text-sm text-black/60">/ {p.unit}</div>
                    </div>
                    <div className="mt-6 h-px bg-black/10" />
                  </div>

                  {/* Liste */}
                  <div className="mt-6 space-y-4">
                    {p.items.map((it) => (
                      <div key={it} className="flex items-start gap-3">
                        <Check />
                        <div className="text-sm text-black/70">{it}</div>
                      </div>
                    ))}
                  </div>

                  {/* Knapp alltid nederst */}
                  <div className="mt-auto pt-8">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-6 py-4 rounded-2xl border border-black/15 bg-white hover:bg-black/[0.02] text-sm font-semibold tracking-wide"
                    >
                      KJØP HER!
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PRAKTISK */}
        <section id="praktisk" className="mx-auto max-w-6xl px-4 pb-16">
          <Reveal>
            <h2 className="text-3xl font-semibold">Praktisk</h2>
          </Reveal>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {practical.map((f, i) => (
              <Reveal key={f.title} delayMs={i * 120}>
                <div className="rounded-3xl p-8 bg-white border border-black/10">
                  <div className="font-semibold">{f.title}</div>
                  <div className="mt-2 text-sm text-black/70 leading-relaxed">{f.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}