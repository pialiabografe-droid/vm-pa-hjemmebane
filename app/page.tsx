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
    "https://vif-hockey.ticketco.shop/?tag=fotballVM";

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
      title: "FAMILIETRIBUNEN",
      subtitle: "Barn i følge med voksen.",
      price: "99",
      currency: "NOK",
      unit: "per person",
      items: [
        "Inngang til familieområdet",
        "Tribune",
        "Kiosk",
        "Fast track",
      ],
      href: ticketcoUrl,
    },
    {
      title: "VOKSEN",
      subtitle: "Aldersgrense 18+.",
      price: "99",
      currency: "NOK",
      unit: "per person",
      items: [
        "Inngang til 18+ området",
        "Tribune",
        "Bar",
        "Serveringstilbud",
        "Kiosk",
        "Fast track",
      ],
      href: ticketcoUrl,
    },
    {
      title: "PREMIUM BORD",
      subtitle: "8 personer. Aldersgrense 18+.",
      price: "1 499",
      currency: "NOK",
      unit: "per bord",
      items: [
        "Reservert langbord",
        "Nærmest skjermen",
        "Bar",
        "Serveringstilbud",
        "Kiosk",
        "Fast track",
      ],
      href: ticketcoUrl,
    },
    {
      title: "TO KVELDER PÅ VIP RESTAURANT",
      subtitle: "Norges kamper for 4 personer.",
      price: "25 000",
      currency: "NOK",
      unit: "per bord",
    items: [
        "Bord til Norge - Playoff 2 og Norge - Frankrike",
        "Inngang til VIP-området",
        "Tre drikkeenheter",
        "Middag og dessert",
        "Egen VIP-bar",
        "Underholdning",
        "Oppsnakk før kamp",
        "Fast track",
      ],
      href: "mailto:daniel@vif-hockey.no?subject=Forespørsel%20VIP-pakke%20Norge-kampene",
    },
  
  ];

  const practical = [{ title: "Q&A", desc: "Ofte stilte spørsmål." }];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: palette.page, color: palette.text }}
    >
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <main id="top">
        {/* HERO */}
        <Reveal>
          <section className="relative overflow-hidden">
            <div className="absolute inset-0">
  {bgOk ? (
    <>
      <img
        src={BG.hero}
        alt="Publikum ser VM på storskjerm"
        className="h-full w-full object-cover md:hidden"
        onError={() => setBgOk(false)}
      />

      <img
        src="/media/haaland-hero.png"
        alt="Publikum ser VM på storskjerm"
        className="hidden md:block h-full w-full object-cover"
        onError={() => setBgOk(false)}
      />
    </>
  ) : null}
  <div className="absolute inset-0 bg-black/35" />
</div>

          <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-16">
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
                <img
                  src="/media/fotball-pa-jordal-logo-h.png"
                  alt="Fotball på Jordal"
                  className="mx-auto w-[260px] md:w-[420px] h-auto"
                />

                <p className="mt-3 md:mt-4 text-base md:text-lg text-white/90">
                  Vi viser de beste kampene, og hele sluttspillet gratis! <br /> Uansett vær.
                </p>

                <div className="mt-8 flex justify-center md:hidden">
                  <div className="flex items-center gap-3 bg-white text-[#1A2238] border border-black/10 rounded-3xl px-5 py-3 shadow-md">
                    <img
                      src="/media/sparebank1-logo2.png"
                      alt="SpareBank 1"
                      className="h-6 w-auto object-contain"
                    />
                    <div className="h-6 w-px bg-black/10" />
                    <img
                      src="/media/obos-logo2.png"
                      alt="OBOS"
                      className="h-6 w-auto object-contain"
                    />
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

        {/* PAKKER */}
        <section id="pakker" className="mx-auto max-w-6xl px-4 pt-16 pb-16">
          <Reveal>
            <div className="flex items-end justify-between gap-6 flex-wrap">
              <div>
                <h2 className="text-3xl font-semibold">Biletter og pakker</h2>
                <p className="mt-2 text-sm text-black/60">
                  Kjøp billett allerede nå for å sikre deg plass, fast track og reservert bord <strong>hele</strong> dagen! <br/>
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
                  <div className="min-h-[96px]">
                    <div className="text-sm font-semibold tracking-wide text-[#1A2238]">
                      {p.title}
                    </div>
                    <div className="mt-1 text-sm text-black/60 leading-relaxed">
                      {p.subtitle}
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="min-h-[18px] text-sm font-semibold text-black/50 leading-none">
                      {"pricePrefix" in p && p.pricePrefix ? p.pricePrefix : "\u00A0"}
                    </div>

                    <div className="mt-1 text-5xl font-semibold tracking-tight text-[#0E2433] leading-none tabular-nums whitespace-nowrap">
                      {p.price}
                    </div>

                    <div className="mt-0.5 flex items-end justify-between">
                      <span className="text-5xl font-semibold tracking-tight text-[#0E2433] leading-none">
                        {p.currency}
                      </span>

                      <span className="text-sm text-black/60 pb-1">
                        {p.unit}
                      </span>
                    </div>

                    <div className="mt-5 h-px bg-black/10" />
                  </div>

                  <div className="mt-6 space-y-4">
                    {p.items.map((it) => (
                      <div key={it} className="flex items-start gap-4">
                        <span className="mt-1 h-6 w-6 rounded-full bg-[#044EA2] shrink-0" />
                        <div className="text-sm text-black/70">{it}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8">
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center px-6 py-4 rounded-2xl border border-black/15 bg-white hover:bg-black/[0.02] text-sm font-semibold tracking-wide"
                    >
                      {p.title === "TO KVELDER PÅ VIP RESTAURANT"
                        ? "KONTAKT OSS"
                        : "KJØP HER!"}
                    </a>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* SALKART */}
        <section className="mx-auto max-w-6xl px-4 pb-12">
          <Reveal>
            <h2 className="text-3xl font-semibold">Salkart</h2>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="mt-8 max-w-3xl rounded-3xl overflow-hidden border border-black/10 bg-white">
              <img
                src="/media/salkart-med-tribune3.png"
                alt="Salkart Jordal"
                className="w-full h-auto object-contain block"
              />
            </div>
          </Reveal>
        </section>

        {/* QUICK */}
        <section className="mx-auto max-w-6xl px-4 pt-10 pb-16">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold">Om arrangementet</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-stretch">
            {quick.map((q, i) => (
              <Reveal key={q.title} delayMs={i * 90}>
                <div className="rounded-3xl p-8 bg-white border border-black/10 h-full flex flex-col">
                  <div className="min-h-[56px]">
                    <div className="text-lg font-semibold leading-snug">
                      {q.title}
                    </div>
                  </div>

                  <div className="mt-3 text-sm text-black/70 leading-relaxed">
                    {q.desc}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* PRAKTISK */}
        <section id="praktisk" className="mx-auto max-w-6xl px-4 pb-12">
          <Reveal>
            <h2 className="text-3xl font-semibold">Praktisk</h2>
          </Reveal>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {practical.map((f, i) => (
              <Reveal key={f.title} delayMs={i * 120}>
                <div className="rounded-3xl p-8 bg-white border border-black/10">
                  <div className="font-semibold">{f.title}</div>
                  <div className="mt-2 text-sm text-black/70 leading-relaxed">
                    {f.desc}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}