import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { Poppins } from "next/font/google"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Sudhanshu Singh | Web Developer & Data Scientist",
  description:
    "Full-stack web developer and aspiring data scientist. Explore my projects, skills, and experience in MERN stack and AI/ML.",
  keywords: ["web developer", "data scientist", "MERN stack", "AI/ML", "React", "Node.js"],
  authors: [{ name: "Sudhanshu Singh" }],
  openGraph: {
    title: "Sudhanshu Singh | Web Developer & Data Scientist",
    description: "Full-stack web developer and aspiring data scientist with expertise in MERN stack and AI/ML.",
    type: "website",
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='75' fontSize='75' fill='%23006E51' fontWeight='bold'>S</text></svg>"
        />
      </head>
      <body className={`font-sans antialiased ${poppins.variable} ${inter.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
