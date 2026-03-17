import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Space_Grotesk } from "next/font/google";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

/* standardfont */
const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/* metadata seo tittel + beskrivelse */
export const metadata: Metadata = {
  title: "Se fotball-VM på storskjerm i Oslo - Jordal Amfi",
  description:
    "Opplev fotball-VM på storskjerm på Jordal Amfi i Oslo. Ekte stadionstemning, lysshow, mat og drikke og mye mer! Opplev fotball-VM 2026 på storskjerm i Oslo. Jordal Amfi samler supportere til kamper, stemning og fellesskap. Kjøp billetter nå. billetter eller reserver bord til Norges kamper og sluttspillet nå.",
};

/* mobil theme-color i nettleser */
export const viewport: Viewport = {
  themeColor: "#044EA2",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="no" className="bg-[#044EA2]">
      <body
        className={`${space.className} min-h-screen bg-[#044EA2] text-white antialiased`}
      >
        {/* google ads tracking globalt nexr.js */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17496864528"
          strategy="afterInteractive"
        />

        <Script id="google-ads-tag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17496864528');
          `}
        </Script>

        {/* header */}
        <Header />

        {/* alt sideinnhold rendres her */}
        {children}

        {/* footer */}
        <Footer />
      </body>
    </html>
  );
}