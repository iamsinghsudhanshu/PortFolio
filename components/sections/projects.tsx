"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/site-data"

export function ProjectsSection() {
  const project = projects[0]

  return (
    <section id="projects" className="scroll-mt-24 py-8 md:py-12">
      <motion.h2
        className="mb-6 text-balance text-2xl font-semibold text-slate-900"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="transition-transform hover:-translate-y-0.5 hover:shadow-md">
          <CardHeader>
            <CardTitle className="text-slate-900">{project.title}</CardTitle>
            <CardDescription className="text-slate-600">{project.description}</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 text-slate-600">
            <div>
              <p className="font-medium text-slate-900">Features:</p>
              <ul className="list-disc pl-6">
                {project.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center rounded-md bg-blue-50 px-2.5 py-1 text-sm text-blue-600"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="font-medium text-slate-900">Outcome:</p>
                <p>{project.outcome}</p>
              </div>
              {project.liveLink ? (
                <a href={project.liveLink} target="_blank" rel="noreferrer">
                  <Button className="transform bg-gradient-to-r from-blue-600 to-teal-500 text-white transition-transform hover:-translate-y-0.5 hover:from-blue-700 hover:to-teal-600">
                    Visit Website
                  </Button>
                </a>
              ) : null}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
