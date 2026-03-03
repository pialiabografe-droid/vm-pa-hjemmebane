"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const ticketcoUrl =
  "https://testestsetset.ticketco.events/no/nb/events/1069019/sections/672328?";

const ticketsSectionId = "pakker";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goSection = (id: string) => {
    setMobileOpen(false);

    if (!isHome) {
      router.push(`/#${id}`);
      setTimeout(() => {
        scrollToId(id);
        window.history.replaceState(null, "", "/");
      }, 80);
      return;
    }

    scrollToId(id);
    window.history.replaceState(null, "", "/");
  };

  useEffect(() => {
    if (!mobileOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 bg-white border-b border-black/10 text-[#071427]">
      <div className="mx-auto max-w-6xl px-4 py-3">
        {/* DESKTOP */}
        <div className="hidden md:grid grid-cols-3 items-center">
          <div className="flex items-center">
            <Link href="/" className="font-semibold text-lg hover:opacity-75 transition-opacity">
              FOTBALL PÅ JORDAL
            </Link>
          </div>

          <div className="flex justify-center">
            {isHome ? (
              <div className="flex items-center gap-4">
                <img
                  src="/media/sparebank1-logo.png"
                  alt="SpareBank 1"
                  className="h-6 w-auto object-contain"
                />
                <span className="text-xs font-semibold text-black/60">P2</span>
                <span className="text-xs font-semibold text-black/60">P3</span>
              </div>
            ) : (
              <nav className="flex gap-6 text-sm text-black/70">
                <Link href="/om" className="hover:text-black transition-colors">
                  Om oss
                </Link>

                <Link href="/program" className="hover:text-black transition-colors">
                  Program
                </Link>

                <button
                  type="button"
                  onClick={() => goSection(ticketsSectionId)}
                  className="hover:text-black transition-colors"
                >
                  Billetter
                </button>

                <Link href="/q&a" className="hover:text-black transition-colors">
                  Q&amp;A
                </Link>
              </nav>
            )}
          </div>

          <div className="flex justify-end items-center gap-4">
            {!isHome && (
              <div className="flex items-center gap-3">
                <img
                  src="/media/sparebank1-logo.png"
                  alt="SpareBank 1"
                  className="h-6 w-auto object-contain"
                />
                <span className="text-xs font-semibold text-black/60">P2</span>
                <span className="text-xs font-semibold text-black/60">P3</span>
              </div>
            )}

            <a
              href={ticketcoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-[#BC1823] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Billetter
            </a>
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg" onClick={() => setMobileOpen(false)}>
            FOTBALL PÅ JORDAL
          </Link>

          <button
            type="button"
            className="h-10 w-10 border border-black/10 rounded-xl bg-white"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Åpne meny"
            aria-expanded={mobileOpen}
          >
            <span className="sr-only">Meny</span>
            <div className="flex flex-col gap-1.5 items-center justify-center">
              <span className="block h-0.5 w-5 bg-black/80" />
              <span className="block h-0.5 w-5 bg-black/80" />
              <span className="block h-0.5 w-5 bg-black/80" />
            </div>
          </button>
        </div>

        {mobileOpen ? (
          <div className="md:hidden border-t border-black/10 bg-white mt-3">
            <div className="px-4 py-4 flex flex-col gap-3 text-sm">
              <Link href="/om" onClick={() => setMobileOpen(false)} className="hover:opacity-80">
                Om oss
              </Link>

              <Link href="/program" onClick={() => setMobileOpen(false)} className="hover:opacity-80">
                Program
              </Link>

              <button
                type="button"
                onClick={() => goSection(ticketsSectionId)}
                className="text-left hover:opacity-80"
              >
                Billetter
              </button>

              <Link href="/q&a" onClick={() => setMobileOpen(false)} className="hover:opacity-80">
                Q&amp;A
              </Link>

              <a
                href={ticketcoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-3 rounded-xl bg-[#BC1823] text-white font-semibold text-center hover:opacity-90 transition-opacity"
                onClick={() => setMobileOpen(false)}
              >
                Billetter
              </a>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}