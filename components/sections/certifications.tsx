"use client"

import { motion } from "framer-motion"
import { Award, ExternalLink } from "lucide-react"
import { certifications } from "@/lib/site-data"

export function CertificationsSection() { return <section id="certifications" className="section-shell"><div className="section-heading"><p className="eyebrow">Certification</p><h2>Evidence of continued learning.</h2></div><div className="mt-10 max-w-2xl">{certifications.map((cert) => <motion.article key={cert.title} className="surface-card flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}><div className="flex gap-4"><Award className="mt-1 shrink-0 text-primary" aria-hidden="true" /><div><h3 className="font-semibold">{cert.title}</h3><p className="mt-1 text-sm text-muted-foreground">{cert.org}</p><p className="mt-2 text-xs font-mono text-primary">{cert.year}</p></div></div>{cert.certificateUrl && <a className="button-secondary whitespace-nowrap" href={cert.certificateUrl} target="_blank" rel="noreferrer">View certificate <ExternalLink data-icon="inline-end" /></a>}</motion.article>)}</div></section> }
