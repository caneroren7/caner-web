import Footer from "@/components/footer"
import Header from "@/components/header"
import { Lato } from "@next/font/google"
import "./globals.scss"

const lato = Lato({
  subsets: ["latin"],
  display: "swap",
  weight: "400"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={lato.className}>
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
