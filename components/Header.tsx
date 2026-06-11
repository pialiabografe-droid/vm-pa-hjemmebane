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
      if (e.key === "Escape") setMobileOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-black/10 bg-white text-[#071427]">
      <div className="mx-auto max-w-6xl px-4 py-3">
        {/* desktop */}
        <div className="hidden grid-cols-[1fr_2fr_1fr] items-center md:grid">
          {/* venstre logo */}
          <div className="flex items-center">
            <Link href="/" className="hover:opacity-75">
              <img
                src="/media/logo-bla-2.png"
                alt="Fotball på Jordal"
                className="w-[100px]"
              />
            </Link>
          </div>

          {/* midten */}
          <div className="flex justify-center">
            {isHome ? (
              <img
                src="/media/adidas-svart.png"
                alt="adidas"
                className="h-[72px] w-auto object-contain"
              />
            ) : (
              <nav className="flex items-center gap-8 whitespace-nowrap text-sm text-black/70">
                <Link href="/om">Om oss</Link>
                <Link href="/program">Program</Link>

                <button onClick={() => goSection(ticketsSectionId)}>
                  Plasser
                </button>

                <Link href="/faq">FAQ</Link>
              </nav>
            )}
          </div>

          {/* høyre */}
          <div className="flex items-center justify-end gap-6">
            {!isHome && (
              <img
                src="/media/adidas-svart.png"
                alt="adidas"
                className="h-[72px] w-auto object-contain"
              />
            )}

            <Link
              href="/program"
              className="rounded-xl bg-[#BC1823] px-4 py-2 text-sm font-semibold text-white"
            >
              Billetter
            </Link>
          </div>
        </div>

        {/* mobil */}
        <div className="flex items-center justify-between md:hidden">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <img
              src="/media/logo-bla-2.png"
              alt="Fotball på Jordal"
              className="w-[90px]"
            />
          </Link>

          <button onClick={() => setMobileOpen(!mobileOpen)}>☰</button>
        </div>

        {mobileOpen && (
          <div className="mt-3 border-t pt-4 md:hidden">
            <div className="flex flex-col gap-3">
              <Link href="/om">Om oss</Link>
              <Link href="/program">Program</Link>

              <button
                onClick={() => goSection(ticketsSectionId)}
                className="text-left text-black"
              >
                Plasser
              </button>

              <Link href="/faq">FAQ</Link>

              <Link
                href="/program"
                className="rounded-xl bg-[#BC1823] px-3 py-3 text-center text-white"
              >
                Billetter
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}