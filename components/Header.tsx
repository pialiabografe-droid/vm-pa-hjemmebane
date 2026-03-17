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
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
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
      if (e.key === "Escape") {
        setMobileOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white text-[#071427]">
      <div className="mx-auto max-w-6xl px-4 py-3">
        {/* desktop header */}
        <div className="hidden grid-cols-3 items-center md:grid">
          {/* fpj logo */}
          <div className="flex items-center">
            <Link
              href="/"
              aria-label="Fotball på Jordal"
              className="transition-opacity hover:opacity-75"
            >
              <img
                src="/media/fotball-pa-jordal-logo.png"
                alt="Fotball på Jordal"
                className="block h-auto w-[100px]"
              />
            </Link>
          </div>

          {/* logo partnere desktop main */}
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
                <Link href="/om" className="transition-colors hover:text-black">
                  Om oss
                </Link>

                <Link
                  href="/program"
                  className="transition-colors hover:text-black"
                >
                  Program
                </Link>

                <button
                  type="button"
                  onClick={() => goSection(ticketsSectionId)}
                  className="transition-colors hover:text-black"
                >
                  Plasser
                </button>

                <Link href="/faq" className="transition-colors hover:text-black">
                  FAQ
                </Link>
              </nav>
            )}
          </div>

          {/* logo partnere desktop øvrige */}
          <div className="flex items-center justify-end gap-4">
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
              className="rounded-xl bg-[#BC1823] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              Billetter
            </Link>
          </div>
        </div>

        {/* mobil header */}
        <div className="flex items-center justify-between gap-3 md:hidden">
          <Link
            href="/"
            aria-label="Fotball på Jordal"
            className="flex items-center"
            onClick={() => setMobileOpen(false)}
          >
            <img
              src="/media/fotball-pa-jordal-logo.png"
              alt="Fotball på Jordal"
              className="block h-auto w-[90px]"
            />
          </Link>

          <button
            type="button"
            aria-label="Åpne meny"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="h-10 w-10 shrink-0 rounded-xl border border-black/10 bg-white"
          >
            <span className="sr-only">Meny</span>

            <div className="flex flex-col items-center justify-center gap-1.5">
              <span className="block h-0.5 w-5 bg-black/80" />
              <span className="block h-0.5 w-5 bg-black/80" />
              <span className="block h-0.5 w-5 bg-black/80" />
            </div>
          </button>
        </div>

        {/* hamburger */}
        {mobileOpen ? (
          <div className="mt-3 border-t border-black/10 bg-white md:hidden">
            <div className="flex flex-col gap-3 px-4 py-4 text-sm">
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
                onClick={() => setMobileOpen(false)}
                className="rounded-xl bg-[#BC1823] px-3 py-3 text-center font-semibold text-white transition-opacity hover:opacity-90"
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