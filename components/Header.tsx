"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const ticketcoUrl =
  "https://vif-hockey.ticketco.events/no/nb/events/1032852/seating_arrangement/3737d866-eb04-4b0c-8934-a84b6c732c42/";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";

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

        {/* DESKTOP LAYOUT */}
        <div className="hidden md:grid grid-cols-3 items-center">

          {/* Left */}
          <div className="flex items-center">
            <Link href="/" className="font-semibold text-lg">
              FOTBALL PÅ JORDAL
            </Link>
          </div>

          {/* Center */}
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
                <Link href="/om">Om oss</Link>
                <Link href="/program">Program</Link>
                <Link href="/#billetter">Billetter</Link>
                <Link href="/q&a">Q&amp;A</Link>
              </nav>
            )}
          </div>

          {/* Right */}
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
              className="px-4 py-2 rounded-xl bg-[#BC1823] text-white text-sm font-semibold"
            >
              Billetter
            </a>
          </div>
        </div>

        {/* MOBILE LAYOUT */}
        <div className="md:hidden flex items-center justify-between">
          <Link href="/" className="font-semibold text-lg">
            VM PÅ HJEMMEBANE
          </Link>

          <button
            className="h-10 w-10 border border-black/10 rounded-xl"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            ☰
          </button>
        </div>

        {mobileOpen && (
          <div className="md:hidden border-t border-black/10 bg-white mt-3">
            <div className="px-4 py-4 flex flex-col gap-3 text-sm">
              <Link href="/om" onClick={() => setMobileOpen(false)}>Om oss</Link>
              <Link href="/program" onClick={() => setMobileOpen(false)}>Program</Link>
              <Link href="/q&a" onClick={() => setMobileOpen(false)}>Q&amp;A</Link>
              <a
                href={ticketcoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-3 rounded-xl bg-[#BC1823] text-white font-semibold text-center"
                onClick={() => setMobileOpen(false)}
              >
                Billetter
              </a>
            </div>
          </div>
        )}

      </div>
    </header>
  );
}