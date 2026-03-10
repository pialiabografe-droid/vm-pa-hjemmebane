"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
            <Link
              href="/"
              className="hover:opacity-75 transition-opacity"
              aria-label="Fotball på Jordal"
            >
              <img
                src="/media/fotball-pa-jordal-logo.png"
                alt="Fotball på Jordal"
                className="block w-[100px] h-auto"
              />
            </Link>
          </div>

          <div className="flex justify-center">
            {isHome ? (
              <div className="flex items-center gap-4">
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
            ) : (
              <nav className="flex gap-6 text-sm text-black/70">
                <Link href="/om" className="hover:text-black transition-colors">
                  Om oss
                </Link>

                <Link
                  href="/program"
                  className="hover:text-black transition-colors"
                >
                  Program
                </Link>

                <button
                  type="button"
                  onClick={() => goSection(ticketsSectionId)}
                  className="hover:text-black transition-colors"
                >
                  Plasser
                </button>

                <Link href="/faq" className="hover:text-black transition-colors">
                  FAQ
                </Link>
              </nav>
            )}
          </div>

          <div className="flex justify-end items-center gap-4">
            {!isHome && (
              <div className="flex items-center gap-4">
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
            )}

            <Link
              href="/program"
              className="px-4 py-2 rounded-xl bg-[#BC1823] text-white text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Billetter
            </Link>
          </div>
        </div>

        {/* MOBILE */}
        <div className="md:hidden flex items-center justify-between gap-3">
          <Link
            href="/"
            className="flex items-center"
            onClick={() => setMobileOpen(false)}
            aria-label="Fotball på Jordal"
          >
            <img
              src="/media/fotball-pa-jordal-logo.png"
              alt="Fotball på Jordal"
              className="block w-[90px] h-auto"
            />
          </Link>

          <button
            type="button"
            className="h-10 w-10 shrink-0 border border-black/10 rounded-xl bg-white"
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
              <Link
                href="/om"
                onClick={() => setMobileOpen(false)}
                className="hover:opacity-80"
              >
                Om oss
              </Link>

              <Link
                href="/program"
                onClick={() => setMobileOpen(false)}
                className="hover:opacity-80"
              >
                Program
              </Link>

              <button
                type="button"
                onClick={() => goSection(ticketsSectionId)}
                className="text-left hover:opacity-80"
              >
                Plasser
              </button>

              <Link
                href="/faq"
                onClick={() => setMobileOpen(false)}
                className="hover:opacity-80"
              >
                FAQ
              </Link>

              <Link
                href="/program"
                className="px-3 py-3 rounded-xl bg-[#BC1823] text-white font-semibold text-center hover:opacity-90 transition-opacity"
                onClick={() => setMobileOpen(false)}
              >
                Billetter
              </Link>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}