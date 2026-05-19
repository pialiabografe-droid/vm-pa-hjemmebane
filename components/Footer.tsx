"use client";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-black/10">
      {/* footer innhold */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-10 text-sm text-white/80">
        
        {/* logo */}
        <img
          src="/media/logo-hvit-2.png"
          alt="Fotball på Jordal"
          className="h-16 w-auto"
        />

        {/* automatisk scroll opp */}
        <a href="#top" className="hover:opacity-80 transition">
          Til toppen
        </a>

      </div>
    </footer>
  );
}