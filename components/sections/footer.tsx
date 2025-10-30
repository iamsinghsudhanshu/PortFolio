"use client"

import { Github } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-emerald-100 bg-gradient-to-b from-white to-emerald-50 py-8 md:py-12">
      <div className="mx-auto max-w-5xl px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-slate-600 md:text-left">
            © {currentYear} Sudhanshu Singh. All rights reserved.
          </p>
          <a
            href="https://github.com/iamsinghsudhanshu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-slate-600 hover:text-emerald-700 transition-colors"
            aria-label="Visit GitHub profile"
          >
            <Github className="h-5 w-5" />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </footer>
  )
}
