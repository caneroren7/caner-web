import Footer from "@/components/footer"
import Header from "@/components/header"
import { Noto_Sans } from "@next/font/google"
import "./globals.scss"

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"]
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={notoSans.className}>
      <head />
      <body>
        <Header />
        <main className="main container">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
