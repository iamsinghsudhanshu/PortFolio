"use client"

import { motion } from "framer-motion"
import { ArrowDownRight, Github, Linkedin, Mail } from "lucide-react"
import { about, contact } from "@/lib/site-data"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-5 pb-20 pt-24 md:px-8 md:pb-32 md:pt-32">
      <div className="mx-auto grid max-w-6xl items-end gap-14 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .65 }}>
          <p className="eyebrow mb-6">MCA / AI & ML / Mumbai, Maharashtra</p>
          <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[.98] tracking-[-.06em] md:text-7xl lg:text-8xl">Sudhanshu <span className="text-primary">Singh</span></h1>
          <p className="mt-8 max-w-2xl text-xl leading-8 text-muted-foreground md:text-2xl">{about.headline}</p>
          <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">{about.summary}</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a className="button-primary" href="#projects">View Projects <ArrowDownRight data-icon="inline-end" /></a>
            <a className="button-secondary" href="#contact">Contact Me</a>
          </div>
          <div className="mt-10 flex items-center gap-3" aria-label="Social links">
            <a className="icon-button" href={`https://${contact.github}`} target="_blank" rel="noreferrer" aria-label="GitHub"><Github /></a>
            <a className="icon-button" href={`https://${contact.linkedin}`} target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a className="icon-button" href={`mailto:${contact.email}`} aria-label="Email"><Mail /></a>
          </div>
        </motion.div>
        <motion.div className="hero-terminal" initial={{ opacity: 0, scale: .96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }} aria-label="Data and software focus visual">
          <div className="flex items-center justify-between border-b border-border px-5 py-4 text-xs text-muted-foreground"><span className="flex gap-1.5"><i /><i /><i /></span><span className="font-mono">profile.signal</span></div>
          <div className="p-6 font-mono text-sm leading-7"><p className="text-muted-foreground">01 <span className="text-primary">const</span> focus = [</p><p className="pl-8 text-foreground">&quot;data analysis&quot;,</p><p className="pl-8 text-foreground">&quot;machine learning&quot;,</p><p className="pl-8 text-foreground">&quot;full-stack development&quot;,</p><p className="pl-8 text-foreground">&quot;software development&quot;</p><p className="text-muted-foreground">06 ]</p><div className="mt-8 grid grid-cols-8 gap-2 opacity-80">{Array.from({ length: 32 }, (_, i) => <span key={i} className="data-cell" style={{ opacity: .25 + ((i * 17) % 70) / 100 }} />)}</div><p className="mt-8 text-primary">// building with purpose</p></div>
        </motion.div>
      </div>
    </section>
  )
}
