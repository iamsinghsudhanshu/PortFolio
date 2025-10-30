"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/site-data"
import { ExternalLink, Github } from "lucide-react"

export function ProjectsSection() {
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

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={`${project.title}-${idx}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Card className="transition-transform hover:-translate-y-1 hover:shadow-lg h-full flex flex-col">
              <CardHeader>
                <CardTitle className="text-slate-900">{project.title}</CardTitle>
                <CardDescription className="text-slate-600">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div>
                  <p className="font-medium text-slate-900 mb-2">Features:</p>
                  <ul className="list-disc pl-6 text-sm text-slate-600 space-y-1">
                    {project.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-slate-900 mb-2">Tech Stack:</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-md bg-emerald-50 px-2.5 py-1 text-xs font-medium text-emerald-700 border border-emerald-200"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-1" />

                <div className="space-y-3">
                  <div>
                    <p className="font-medium text-slate-900 mb-1">Outcome:</p>
                    <p className="text-sm text-slate-600">{project.outcome}</p>
                  </div>
                  <div className="flex gap-2">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex-1">
                        <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white hover:from-emerald-700 hover:to-teal-600 transform hover:scale-105 transition-transform flex items-center justify-center gap-2">
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-emerald-300 text-emerald-700 hover:bg-emerald-50 flex items-center justify-center gap-2 bg-transparent"
                        >
                          <Github className="h-4 w-4" />
                          GitHub
                        </Button>
                      </a>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
