"use client"

import { useEffect, useState } from "react"
import { Menu, Moon, Sun, X } from "lucide-react"
import { useTheme } from "next-themes"

const navItems = ["About", "Experience", "Skills", "Projects", "Certifications", "Education", "Contact"]

export function SiteHeader() {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState("Home")
  const { theme, setTheme } = useTheme()
  useEffect(() => { const observer = new IntersectionObserver((entries) => entries.forEach((entry) => entry.isIntersecting && setActive(entry.target.id)), { rootMargin: "-35% 0px -55%" }); ["about", "experience", "skills", "projects", "certifications", "education", "contact"].forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el) }); return () => observer.disconnect() }, [])
  const close = () => setOpen(false)
  return <header className="sticky top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl"><div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8"><a href="#home" className="font-mono text-sm font-semibold tracking-tight">SS<span className="text-primary">/</span>portfolio</a><nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation"><a href="#home" className={active === "home" ? "nav-link active" : "nav-link"}>Home</a>{navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`} className={active === item.toLowerCase() ? "nav-link active" : "nav-link"}>{item}</a>)}<button className="icon-button ml-3" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle dark/light theme">{theme === "dark" ? <Sun /> : <Moon />}</button></nav><div className="flex items-center gap-2 lg:hidden"><button className="icon-button" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} aria-label="Toggle dark/light theme">{theme === "dark" ? <Sun /> : <Moon />}</button><button className="icon-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label="Toggle navigation">{open ? <X /> : <Menu />}</button></div></div>{open && <nav id="mobile-navigation" className="border-t border-border px-5 py-4 lg:hidden" aria-label="Mobile navigation">{["Home", ...navItems].map((item) => <a key={item} href={`#${item === "Home" ? "home" : item.toLowerCase()}`} onClick={close} className="block border-b border-border/60 py-3 text-sm text-muted-foreground last:border-0">{item}</a>)}</nav>}</header>
}
