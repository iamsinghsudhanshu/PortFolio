"use client"

import { motion } from "framer-motion"
import { GraduationCap } from "lucide-react"
import { education } from "@/lib/site-data"

export function EducationSection() { return <section id="education" className="section-shell"><div className="section-heading"><p className="eyebrow">Education</p><h2>A focused academic path in AI and ML.</h2></div><div className="timeline mt-10">{education.map((item, index) => <motion.article key={item.title} className="timeline-item" initial={{ opacity: 0, x: -12 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .08 }}><span className="timeline-dot" aria-hidden="true"><GraduationCap /></span><div className="surface-card p-5 md:p-6"><div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between"><div><h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-1 text-muted-foreground">{item.school}</p></div><p className="eyebrow">{item.period}</p></div><div className="mt-5 flex flex-wrap gap-3 text-sm text-muted-foreground"><span>{item.note}</span><span className="text-border">/</span><span>{item.location}</span></div></div></motion.article>)}</div></section> }
