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
        className="mb-8 text-balance text-3xl md:text-4xl font-bold text-slate-900"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, idx) => (
          <motion.div
            key={`${project.title}-${idx}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
          >
            <Card className="transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-105 h-full flex flex-col border-2 hover:border-emerald-400">
              <CardHeader>
                <CardTitle className="text-xl md:text-2xl text-slate-900">{project.title}</CardTitle>
                <CardDescription className="text-base text-slate-600">{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col">
                <div>
                  <p className="font-bold text-slate-900 mb-3 text-lg">Features:</p>
                  <ul className="list-disc pl-6 text-base text-slate-600 space-y-2">
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
                  <div className="flex gap-3">
                    {project.liveLink && (
                      <a href={project.liveLink} target="_blank" rel="noreferrer" className="flex-1">
                        <Button className="w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white text-base font-semibold hover:from-emerald-700 hover:to-teal-600 transform hover:scale-110 transition-all duration-300 hover:shadow-lg active:scale-95 flex items-center justify-center gap-2">
                          <ExternalLink className="h-5 w-5" />
                          Live Demo
                        </Button>
                      </a>
                    )}
                    {project.githubLink && (
                      <a href={project.githubLink} target="_blank" rel="noreferrer" className="flex-1">
                        <Button
                          variant="outline"
                          className="w-full border-2 border-emerald-300 text-emerald-700 font-semibold text-base hover:bg-emerald-50 hover:scale-110 transition-all duration-300 flex items-center justify-center gap-2 bg-transparent hover:shadow-lg active:scale-95"
                        >
                          <Github className="h-5 w-5" />
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
