import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import { Space_Grotesk } from "next/font/google"

const space = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
})

export const metadata = {
  title: "Fotball VM på Jordal",
  description: "Sommer, storskjerm og stadionfølelse",
}

export const viewport = {
  themeColor: "#044EA2",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="no" className="bg-[#044EA2]">
      <body className={`${space.className} min-h-screen bg-[#044EA2] text-white antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}