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

  const heroImage = "/media/hero-med-lys.png";

  const aboutCards = [
    {
      title: "Se fotball-VM sammen med andre i Oslo",
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
      subtitle: "Fri aldersgrense. Barn under 12 år i følge med voksen.",
      price: "99",
      currency: "NOK",
      unit: "per person",
      items: ["Inngang til familieområdet", "Tribune", "Kiosk", "Fast track"],
      href: "/program",
      cta: "VELG KAMP",
    },
    {
      title: "VOKSEN",
      subtitle: "Aldersgrense 18+.",
      price: "99",
      currency: "NOK",
      unit: "per person",
      items: ["Inngang til 18+ området", "Tribune", "Bar", "Serveringstilbud", "Kiosk", "Fast track"],
      href: "/program",
      cta: "VELG KAMP",
    },
    {
      title: "PREMIUM BORD",
      subtitle: "8 personer. Aldersgrense 18+.",
      price: "1 499",
      currency: "NOK",
      unit: "per bord",
      items: ["Reservert langbord", "Nærmest skjermen", "Bar", "Serveringstilbud", "Kiosk", "Fast track"],
      href: "/program",
      cta: "VELG KAMP",
    },
  ];

  const practicalCards = [
    {
      title: "FAQ",
      desc: "Ofte stilte spørsmål om visning av fotball-VM.",
      href: "/faq",
    },
  ];

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: palette.page, color: palette.text }}
    >
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <main id="top">
        {/* hero */}
        <Reveal>
          <section className="relative overflow-hidden">
            <div className="absolute inset-0">
              {bgOk ? (
                <>
                  <img
                    src={heroImage}
                    alt="Publikum ser VM på storskjerm"
                    className="h-full w-full object-cover md:hidden"
                    onError={() => setBgOk(false)}
                  />

                  <img
                    src={heroImage}
                    alt="Publikum ser VM på storskjerm"
                    className="hidden h-full w-full object-cover object-[center_30%] md:block"
                    onError={() => setBgOk(false)}
                  />
                </>
              ) : null}

              <div className="absolute inset-0 bg-black/55" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 py-14 md:py-16">
              {/* meny på desktop */}
              <div className="hidden justify-center gap-3 md:flex">
                <Link href="/om" className="rounded-full border border-white bg-white px-5 py-2 text-sm font-medium shadow-md transition hover:bg-white/90">
                  Om oss
                </Link>

                <Link href="/program" className="rounded-full border border-white bg-white px-5 py-2 text-sm font-medium shadow-md transition hover:bg-white/90">
                  Program
                </Link>

                <a href="#pakker" className="rounded-full border border-white bg-white px-5 py-2 text-sm font-medium shadow-md transition hover:bg-white/90">
                  Plasser
                </a>

                <Link href="/faq" className="rounded-full border border-white bg-white px-5 py-2 text-sm font-medium shadow-md transition hover:bg-white/90">
                  FAQ
                </Link>
              </div>

              {/* fpj + vif logo på hero */}
              <div className="mt-10 text-center md:mt-12">
                <img
                  src="/media/logo-hvit-2.png"
                  alt="Fotball på Jordal"
                  className="mx-auto -mb-6 h-auto w-[260px] md:w-[420px]"
                />

                <h1 className="sr-only">
                  Fotball på Jordal – se fotball-VM på storskjerm i Oslo
                </h1>

                <a
                  href="https://www.vif-hockey.no/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block"
                >
                  <img
                    src="/media/vif-logo.png"
                    alt="Vålerenga Ishockey"
                    className="mx-auto -mt-3 h-14 w-auto md:-mt-5 md:h-15"
                  />
                </a>

                <p className="mt-3 text-base text-white/90 md:mt-4 md:text-lg">
                  Opplev fotball-VM 2026 i Oslo, med lyd, lys
                  og ekte stadionstemning! <br />
                  Uansett vær.
                </p>

                {/* cta knapper på hero */}
                <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
                  <Link
  href="/program"
  className="rounded-2xl bg-white px-7 py-3 font-semibold text-[#1A2238] shadow-md transition hover:bg-white/90"
>
  Kjøp billetter til fotball-VM
</Link>

                  {/* CTA KNAPP - CHAMPIONS LEAGUE + HOCKEY VM */}

<Link
  href="/program"
  className="rounded-2xl bg-white px-7 py-3 font-semibold text-[#1A2238] shadow-md transition hover:bg-white/90"
>
  {/* MOBIL */}
  <span className="md:hidden">
    Se program
  </span>

  {/* DESKTOP */}
  <span className="hidden md:inline">
    Se program
  </span>
</Link>
                </div>
              </div>
            </div>
          </section>
        </Reveal>



        {/* pakkene */}
        <section id="pakker" className="mx-auto max-w-6xl px-4 pb-16 pt-16">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div>
                <h2 className="text-3xl font-semibold">Billetter og pakker</h2>
                <p className="mt-2 text-sm text-black/60">
                  Velg billetter til fotball-VM visningen på Jordal Amfi i Oslo. Vi tilbyr alt
                  fra enkle plasser til premium bord nær skjermen.
                  Kjøp billett allerede nå for å sikre deg plass, fast track og reservert
                  bord <strong>hele</strong> dagen! <br /><br />
                  Alle kjøp går via TicketCo.
                </p>
              </div>

              <Link
                href="/program"
                className="rounded-2xl border border-black/10 bg-white px-5 py-3 text-sm font-semibold transition hover:bg-black/[0.02]"
              >
                Velg kamp
              </Link>
            </div>
          </Reveal>

          <div className="mt-8 grid items-stretch justify-center gap-6 md:grid-cols-2 lg:grid-cols-3">
            {packages.map((item, index) => (
              <Reveal key={item.title} delayMs={index * 110}>
                <div className="flex h-full flex-col rounded-3xl border border-black/10 bg-white p-8">
                  <div className="min-h-[96px]">
                    <div className="text-sm font-semibold tracking-wide text-[#1A2238]">
                      {item.title}
                    </div>
                    <div className="mt-1 text-sm leading-relaxed text-black/60">
                      {item.subtitle}
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="h-[18px] text-sm font-semibold leading-none text-black/50">
                      {item.title === "VIP RESTAURANT" ? "Fra" : "\u00A0"}
                    </div>

                    <div className="mt-1 whitespace-nowrap text-5xl font-semibold leading-none tracking-tight tabular-nums text-[#0E2433]">
                      {item.price}
                    </div>

                    <div className="mt-0.5 flex items-end justify-between">
                      <span className="text-5xl font-semibold leading-none tracking-tight text-[#0E2433]">
                        {item.currency}
                      </span>

                      <span className="pb-1 text-sm text-black/60">
                        {item.unit}
                      </span>
                    </div>

                    <div className="mt-5 h-px bg-black/10" />
                  </div>

                  <div className="mt-6 space-y-4">
                    {item.items.map((feature) => (
                      <div key={feature} className="flex items-start gap-4">
                        <span className="mt-1 h-6 w-6 shrink-0 rounded-full bg-[#044EA2]" />
                        <div className="text-sm text-black/70">{feature}</div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-auto pt-8">
                    <Link
                      href={item.href}
                      className="inline-flex w-full items-center justify-center rounded-2xl border border-black/15 bg-white px-6 py-4 text-sm font-semibold tracking-wide transition hover:bg-black/[0.02]"
                    >
                      {item.cta}
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* salkart bilde */}
        <section className="mx-auto max-w-6xl px-4 pb-12">
          <Reveal>
            <h2 className="text-3xl font-semibold">Salkart</h2>
            <p className="mt-2 text-sm text-black/60">
              Se hvor du kan sitte under fotball-VM visningen på Jordal Amfi i Oslo.
            </p>
          </Reveal>

          <Reveal delayMs={120}>
            <div className="mt-8 max-w-3xl overflow-hidden rounded-3xl border border-black/10 bg-white">
              <img
                src="/media/salkart-med-tribune3.png"
                alt="Salkart Jordal"
                className="block h-auto w-full object-contain"
              />
            </div>
          </Reveal>
        </section>

        {/* om arrangementet */}
        <section className="mx-auto max-w-6xl px-4 pb-16 pt-10">
          <div className="mb-10">
            <h2 className="text-3xl font-semibold">
              Se fotball-VM på storskjerm i Oslo
            </h2>
          </div>

          <div className="grid items-stretch gap-6 md:grid-cols-3">
            {aboutCards.map((card, index) => (
              <Reveal key={card.title} delayMs={index * 90}>
                <div className="flex h-full flex-col rounded-3xl border border-black/10 bg-white p-8">
                  <div className="min-h-[56px]">
                    <div className="text-lg font-semibold leading-snug">
                      {card.title}
                    </div>
                  </div>

                  <div className="mt-3 text-sm leading-relaxed text-black/70">
                    {card.desc}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-8 max-w-3xl text-sm leading-relaxed text-black/70">
            Fotball på Jordal er en av de største visningene av fotball-VM i Oslo.
            Vi samler supportere til storskjermvisning i Jordal Amfi, med fokus på
            stemning, fellesskap og gode opplevelser.
          </div>
        </section>

        {/* praktisk */}
        <section id="praktisk" className="mx-auto max-w-6xl px-4 pb-12">
          <Reveal>
            <h2 className="text-3xl font-semibold">Praktisk</h2>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {practicalCards.map((card, index) => (
              <Reveal key={card.title} delayMs={index * 120}>
                <Link href={card.href}>
                  <div className="cursor-pointer rounded-3xl border border-black/10 bg-white p-8 transition hover:shadow-md">
                    <div className="font-semibold">{card.title}</div>
                    <div className="mt-2 text-sm leading-relaxed text-black/70">
                      {card.desc}
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}