"use client"

import { motion } from "framer-motion"
import { Code2, Database, BrainCircuit, Wrench, Layers, Braces } from "lucide-react"
import { skills } from "@/lib/site-data"

const groups = [{ title: "Languages", items: skills.languages, icon: Code2 }, { title: "Frontend", items: skills.frontend, icon: Layers }, { title: "Backend", items: skills.backend, icon: Braces }, { title: "Databases", items: skills.databases, icon: Database }, { title: "Data Science & ML", items: skills.dataScienceML, icon: BrainCircuit }, { title: "Tools", items: skills.tools, icon: Wrench }, { title: "Core Skills", items: skills.coreSkills, icon: Code2 }]

export function SkillsSection() { return <section id="skills" className="section-shell"><div className="section-heading"><p className="eyebrow">Technical skills</p><h2>A toolkit for turning questions into working systems.</h2></div><div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{groups.map((group, index) => { const Icon = group.icon; return <motion.article key={group.title} className="surface-card p-5" initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .2 }} transition={{ delay: index * .04 }}><Icon className="mb-5 text-primary" aria-hidden="true" /><h3 className="font-semibold">{group.title}</h3><div className="mt-4 flex flex-wrap gap-2">{group.items.map((item) => <span className="tech-badge" key={item}>{item}</span>)}</div></motion.article> })}</div></section> }
