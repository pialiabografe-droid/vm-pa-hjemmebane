"use client";

import Link from "next/link";

type Match = {
  slug: string;
  title: string;
  subtitle?: string;
  ticketUrl?: string;
  href?: string;
};

export default function ProgramPage() {
  const VIF = {
    blue: "#044EA2",
    red: "#BC1823",
  } as const;

  const ticketcoUrl =
    "https://testestsetset.ticketco.events/no/nb/events/1069019/sections/672328?";

  const matches: Match[] = [
    {
      slug: "playoff-2-norge",
      title: "Playoff 2 vs Norge",
      subtitle: "VM visning på storskjerm",
      ticketUrl: ticketcoUrl,
    },
    {
      slug: "norge-senegal",
      title: "Norge vs Senegal",
      subtitle: "VM visning på storskjerm",
      ticketUrl: ticketcoUrl,
    },
    {
      slug: "norge-frankrike",
      title: "Norge vs Frankrike",
      subtitle: "VM visning på storskjerm",
      ticketUrl: ticketcoUrl,
    },
    {
      slug: "flere-kamper",
      title: "Flere kamper",
      subtitle: "Se hele programmet",
      href: "/program",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3F7FF] text-[#1A2238]">
      <main className="mx-auto max-w-6xl px-4 py-16">
        <div className="flex items-start justify-between gap-6 flex-wrap">
          <div>
            <h1 className="mt-5 text-4xl md:text-5xl font-semibold">
              Velg kamp
            </h1>
            <p className="mt-3 text-black/70">
              Trykk på kampen du vil se, så går du rett til billett.
            </p>
          </div>

          <Link
            href="/"
            className="px-5 py-3 rounded-2xl bg-white border border-black/10 text-sm"
          >
            Tilbake til forsiden
          </Link>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {matches.map((m) => (
            <section
              key={m.slug}
              className="rounded-3xl p-8 bg-white border border-black/10"
            >
              <div className="text-lg font-semibold">{m.title}</div>

              {m.subtitle && (
                <div className="mt-2 text-sm text-black/70">
                  {m.subtitle}
                </div>
              )}

              <div className="mt-6">
                {m.href ? (
                  <Link
                    href={m.href}
                    className="px-5 py-3 rounded-2xl font-semibold text-white inline-block"
                    style={{ backgroundColor: VIF.blue }}
                  >
                    Se program
                  </Link>
                ) : (
                  <a
                    href={m.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-5 py-3 rounded-2xl font-semibold text-white inline-block"
                    style={{ backgroundColor: VIF.blue }}
                  >
                    Kjøp billett
                  </a>
                )}
              </div>
            </section>
          ))}
        </div>
      </main>
    </div>
  );
}