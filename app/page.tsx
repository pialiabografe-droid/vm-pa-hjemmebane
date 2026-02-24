"use client";

import { useMemo, useState } from "react";
import Reveal from "../components/Reveal";

export default function FotballVMJordal() {
  const [bgOk, setBgOk] = useState(true);
  const [openKey, setOpenKey] = useState<string | null>(null);

  const palette = useMemo(
    () => ({
      page: "#F3F7FF",
      panel: "#FFFFFF",
      border: "rgba(20, 30, 60, 0.18)",
      text: "#1A2238",
      muted: "rgba(26, 34, 56, 0.65)",
    }),
    []
  );

  const VIF = {
    blue: "#044EA2",
    red: "#BC1823",
  } as const;

  const BG = {
    hero: "/media/vm-jordal.png",
  } as const;

  const ticketcoUrl =
    "https://vif-hockey.ticketco.events/no/nb/events/1032852/seating_arrangement/3737d866-eb04-4b0c-8934-a84b6c732c42/";

const quick = [
  { 
    title: "Fotball handler om mer enn de 90 minuttene.", 
    desc: "For Vålerenga handler det om å samle folk og bygge felleskap. Vi ønsker å ta samfunnsansvar og gi noe tilbake til nærmiljøet vårt." 
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
    )
  },
  { 
    title: "Hjertet av Oslo", 
    desc: "Jordal Amfi." 
  },
];

  const practical = [{ title: "Q&A", desc: "Ofte stilte spørsmål." }];

  const details = [
    {
      k: "Sted",
      v: "Veibeskrivelse til Jordal Amfi",
      items: [
        { label: "Åpne i Google Maps", href: "https://maps.google.com/?q=Jordal+Amfi" },
        { label: "Åpne i Apple Kart", href: "https://maps.apple.com/?q=Jordal+Amfi,+Jordalgata+12,+Oslo" },
      ],
    },
    {
      k: "Kamper",
      v: "Velg kamp",
      items: [
        { label: "Playoff 2 - Norge", href: ticketcoUrl },
        { label: "Norge - Senegal", href: ticketcoUrl },
        { label: "Norge - Frankrike", href: ticketcoUrl },
        { label: "Flere kamper", href: "/program" },
      ],
    },
    {
      k: "Soner",
      v: "Velg sone",
      items: [
        { label: "Tribunebiletter", href: "#billetter" },
        { label: "Bord med drikkepakke", href: "#praktisk" },
        { label: "Familietribunen", href: "#praktisk" },
      ],
    },
    {
      k: "Bordpakker",
      v: "Se pakker",
      items: [
        { label: "Bord med drikkepakke - 8 stykker", href: "#" },
        { label: "Bord med drikkepakke - 16 stykker", href: "#" },
        { label: "Losje", href: "#" },

      ],
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: palette.page, color: palette.text }}>
      <style>{`html { scroll-behavior: smooth; }`}</style>

      <main id="top">
        {/* HERO */}
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
            <div className="absolute inset-0 bg-black/20" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-24 text-center">
            <Reveal>
          

              <h1 className="mt-6 text-4xl md:text-6xl font-semibold text-white">
                FOTBALL VM PÅ <br /> JORDAL
              </h1>

              <p className="mt-10 text-white/90">Alle Norges kamper, og hele sluttspillet. <br /> Uansett vær.</p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={ticketcoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-2xl font-semibold text-white"
                  style={{ backgroundColor: VIF.blue }}
                >
                  Sikre plass
                </a>

                <a href="#billetter" className="px-6 py-3 rounded-2xl bg-white/90 border border-black/10">
                  Velg kamp
                </a>
              </div>
            </Reveal>
          </div>
        </section>

        {/* OM / QUICK */}
        <Reveal>
          <section id="om" className="mx-auto max-w-6xl px-4 py-16">
            <div className="grid md:grid-cols-3 gap-6">
              {quick.map((q) => (
                <div key={q.title} className="rounded-3xl p-8 bg-white border border-black/10">
                  <div className="text-lg font-semibold">{q.title}</div>
                  <div className="mt-3 text-sm text-black/70">{q.desc}</div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>

        {/* BILLETTER */}
        <Reveal>
          <section id="billetter" className="mx-auto max-w-6xl px-4 py-16">
            <div className="rounded-3xl p-10 bg-white border border-black/10">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h2 className="text-3xl font-semibold">Billetter</h2>

                  <div className="mt-6 flex gap-4 flex-wrap">
                    <a
                      href={ticketcoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-2xl font-semibold text-white"
                      style={{ backgroundColor: VIF.blue }}
                    >
                      Kjøp billetter
                    </a>
                  </div>
                </div>

                {/* DROPDOWNS */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 items-start">
                  {details.map((x) => {
                    const isOpen = openKey === x.k;

                    return (
                      <div
                        key={x.k}
                        className="relative w-full min-w-0 rounded-2xl p-4 border border-black/10 bg-white/80"
                        style={{ zIndex: isOpen ? 40 : 1 }}
                      >
                        <button
                          type="button"
                          onClick={() => setOpenKey(isOpen ? null : x.k)}
                          className="w-full text-left flex justify-between items-start gap-3"
                          aria-expanded={isOpen}
                          aria-controls={`panel-${x.k}`}
                        >
                          <div className="min-w-0">
                            <div className="font-semibold">{x.k}</div>
                            <div className="text-xs text-black/60 mt-1">{x.v}</div>
                          </div>

                          <span
                            className={`text-xs transition-transform ${isOpen ? "rotate-180" : ""}`}
                            style={{ color: "rgba(0,0,0,0.55)" }}
                            aria-hidden="true"
                          >
                            ▼
                          </span>
                        </button>

                        {isOpen ? (
                          <div
                            id={`panel-${x.k}`}
                            className="absolute left-0 right-0 mt-2 space-y-2 rounded-2xl border border-black/10 bg-white p-3 shadow-[0_18px_60px_rgba(0,0,0,0.18)] max-h-72 overflow-auto"
                            style={{ top: "100%" }}
                          >
                            {x.items.map((it) => {
                              const isExternal =
                                /^https?:\/\//.test(it.href) || it.href.startsWith("mailto:");

                              return (
                                <a
                                  key={it.label}
                                  href={it.href}
                                  target={isExternal ? "_blank" : undefined}
                                  rel={isExternal ? "noopener noreferrer" : undefined}
                                  className="block px-3 py-2 rounded-xl bg-white border border-black/10 text-sm"
                                  onClick={() => setOpenKey(null)}
                                >
                                  {it.label}
                                </a>
                              );
                            })}
                          </div>
                        ) : null}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* PRAKTISK */}
        <Reveal>
          <section id="praktisk" className="mx-auto max-w-6xl px-4 py-16">
            <h2 className="text-3xl font-semibold">Praktisk</h2>

            <div className="mt-8 grid md:grid-cols-3 gap-6">
              {practical.map((f) => (
                <div key={f.title} className="rounded-3xl p-8 bg-white border border-black/10">
                  <div className="font-semibold">{f.title}</div>
                  <div className="mt-2 text-sm text-black/70">{f.desc}</div>
                </div>
              ))}
            </div>
          </section>
        </Reveal>
      </main>
    </div>
  );
}