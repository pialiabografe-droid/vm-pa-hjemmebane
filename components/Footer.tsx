"use client";

export default function Footer() {
  return (
    <footer className="border-t border-black/10 mt-16">
      <div className="mx-auto max-w-6xl px-4 py-10 flex justify-between items-center text-sm text-white/80">
        
        <img
          src="/media/fotball-pa-jordal-logo-h.png"
          alt="Fotball på Jordal"
          className="h-10 w-auto"
        />

        <a href="#top">
          Til toppen
        </a>

      </div>
    </footer>
  );
}