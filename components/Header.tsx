"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const goSection = (id: string) => {
    setMobileOpen(false);

    if (pathname !== "/") {
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

  const goProgram = () => {
    setMobileOpen(false);
    router.push("/program");
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
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-semibold text-lg hover:opacity-70 transition-opacity"
          onClick={() => setMobileOpen(false)}
        >
          VM PÅ HJEMMEBANE
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6 text-sm text-black/70">
          <Link href="/om">
          Om oss
          </Link>

          <button
            type="button"
            onClick={goProgram}
            className="hover:text-black transition-colors"
          >
            Program
          </button>

          <button
            type="button"
            onClick={() => goSection("billetter")}
            className="hover:text-black transition-colors"
          >
            Billetter
          </button>

          <Link href="/q&a" className="hover:text-black transition-colors">
           Q&amp;A
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          {/* CTA desktop */}
          <a
            href="https://vif-hockey.ticketco.events/no/nb/events/1032852/seating_arrangement/3737d866-eb04-4b0c-8934-a84b6c732c42/"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex px-4 py-2 rounded-xl bg-black text-white text-sm font-semibold"
          >
            Billetter
          </a>

          {/* Hamburger */}
          <button
            type="button"
            className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-xl border border-black/10 bg-white"
            aria-label="Åpne meny"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="sr-only">Meny</span>
            <div className="flex flex-col gap-1.5">
              <span className="block h-0.5 w-5 bg-black/80" />
              <span className="block h-0.5 w-5 bg-black/80" />
              <span className="block h-0.5 w-5 bg-black/80" />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen ? (
        <div className="md:hidden border-t border-black/10 bg-white">
          <div className="mx-auto max-w-6xl px-4 py-4 flex flex-col gap-2 text-sm">
            <Link
  href="/om"
  onClick={() => setMobileOpen(false)}
  className="text-left px-3 py-3 rounded-xl border border-black/10 bg-white hover:bg-black/[0.03] block"
>
  Om oss
</Link>

            <button
              type="button"
              onClick={goProgram}
              className="text-left px-3 py-3 rounded-xl border border-black/10 bg-white hover:bg-black/[0.03]"
            >
              Program
            </button>

            <Link
            href="/q&a"
            onClick={() => setMobileOpen(false)}
            className="text-left px-3 py-3 rounded-xl border border-black/10 bg-white hover:bg-black/[0.03] block"
            >
            Q&amp;A
            </Link>

            <a
              href="https://vif-hockey.ticketco.events/no/nb/events/1032852/seating_arrangement/3737d866-eb04-4b0c-8934-a84b6c732c42/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
className="px-3 py-3 rounded-xl bg-[#BC1823] text-white font-semibold text-center hover:opacity-90 transition-opacity"            >
              Billetter
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}