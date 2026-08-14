import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-geist-sans" })

export const metadata: Metadata = {
  title: "Sudhanshu Singh | MCA AI & ML | Data Analyst & Software Developer",
  description: "Sudhanshu Singh — MCA Artificial Intelligence and Machine Learning student with experience in data analysis, machine learning, full-stack development, and software development.",
  keywords: ["Sudhanshu Singh", "MCA AI ML", "Data Analyst", "Software Developer"],
  authors: [{ name: "Sudhanshu Singh" }],
  openGraph: { title: "Sudhanshu Singh | MCA AI & ML | Data Analyst & Software Developer", description: "Sudhanshu Singh — MCA Artificial Intelligence and Machine Learning student with experience in data analysis, machine learning, full-stack development, and software development.", type: "website" },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" suppressHydrationWarning className="scroll-smooth"><body className={`${inter.variable} ${GeistMono.variable} font-sans antialiased`}><ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange><Suspense fallback={null}>{children}</Suspense></ThemeProvider><Analytics /></body></html> }
