import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Space_Grotesk } from "next/font/google";
import type { Metadata, Viewport } from "next";
import Script from "next/script";

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Se fotball-VM på storskjerm i Oslo | Jordal Amfi",
  description:
    "Opplev fotball-VM på storskjerm på Jordal Amfi i Oslo. Ekte stadionstemning, lysshow, mat og drikke og mye mer! Kjøp billetter eller reserver bord til Norges kamper og sluttspillet nå.",
};

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
        {/* GOOGLE ADS TAG */}
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

        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}