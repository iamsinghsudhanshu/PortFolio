"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { Menu, X } from "lucide-react"

const navItems = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "/contact", label: "Contact" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("#about")
  const [scrolled, setScrolled] = useState(false) // track scroll

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  useEffect(() => {
    const ids = navItems.map((n) => n.href.replace("#", ""))
    const sections = ids
      .map((id) => (typeof document !== "undefined" ? document.getElementById(id) : null))
      .filter(Boolean) as HTMLElement[]

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (a.boundingClientRect.top > b.boundingClientRect.top ? 1 : -1))
        if (visible[0]?.target?.id) {
          setActive(`#${visible[0].target.id}`)
        }
      },
      {
        rootMargin: "-120px 0px -60% 0px",
        threshold: [0.2, 0.4, 0.6],
      },
    )

    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b transition-colors ${
        scrolled
          ? "bg-background/70 backdrop-blur-md supports-[backdrop-filter]:bg-background/60 shadow-sm"
          : "bg-background/40 backdrop-blur supports-[backdrop-filter]:bg-background/30"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3">
        <Link href="#" className="font-semibold text-slate-900">
          Sudhanshu Singh
        </Link>

        <nav className="hidden gap-1 md:flex" aria-label="Primary">
          {navItems.map((item) => {
            const isActive = active === item.href
            return (
              <a
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm transition-colors ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
                }`}
              >
                {item.label}
              </a>
            )
          })}
        </nav>

        <Button
          variant="ghost"
          className="transition-transform hover:-translate-y-0.5 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>
      </div>

      <div id="mobile-menu" hidden={!open} className="border-t md:hidden" role="dialog" aria-modal="true">
        <nav className="mx-auto grid max-w-5xl gap-1 px-4 py-3" aria-label="Mobile">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-md px-3 py-2 text-sm transition-colors ${
                active === item.href ? "text-blue-600" : "text-slate-600 hover:text-blue-600"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
