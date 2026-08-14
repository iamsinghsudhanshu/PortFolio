"use client"

import { motion } from "framer-motion"
import { about, skills } from "@/lib/site-data"

export function AboutMeSection() {
  const focus = [...skills.languages, ...skills.frontend, ...skills.dataScienceML].slice(0, 8)
  return <section id="about" className="section-shell"><div className="grid gap-10 lg:grid-cols-[.75fr_1.25fr] lg:items-start"><div className="section-heading"><p className="eyebrow">About</p><h2>Curious about systems, grounded in data.</h2></div><motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .3 }} className="surface-card p-6 md:p-8"><p className="text-lg leading-8 text-muted-foreground">{about.summary} I am pursuing an MCA in Artificial Intelligence and Machine Learning at Lovely Professional University after completing a BCA from Tilak College of Science and Commerce.</p><div className="mt-8 border-t border-border pt-6"><p className="eyebrow mb-4">What I work with</p><div className="flex flex-wrap gap-2">{focus.map((item) => <span className="tech-badge" key={item}>{item}</span>)}</div></div></motion.div></div></section>
}
