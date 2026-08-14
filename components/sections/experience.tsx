"use client"

import { motion } from "framer-motion"
import { BriefcaseBusiness } from "lucide-react"
import { experience } from "@/lib/site-data"

export function ExperienceSection() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading eyebrow="Experience" title="Applied analysis, measurable outcomes." />
      <div className="timeline">
        {experience.map((item) => (
          <motion.article key={item.company} className="timeline-item" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.45 }}>
            <span className="timeline-dot" aria-hidden="true"><BriefcaseBusiness data-icon="inline-start" /></span>
            <div className="surface-card p-6 md:p-8">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div><p className="eyebrow">{item.period}</p><h3 className="mt-2 text-2xl font-semibold tracking-tight">{item.title}</h3><p className="mt-1 text-muted-foreground">{item.company}</p></div>
                <span className="status-pill">Internship</span>
              </div>
              <ul className="mt-6 grid gap-3 text-sm leading-6 text-muted-foreground">{item.responsibilities.map((responsibility) => <li key={responsibility} className="flex gap-3"><span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />{responsibility}</li>)}</ul>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
}
