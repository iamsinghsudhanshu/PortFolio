"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { about } from "@/lib/site-data"
import { CheckCircle2 } from "lucide-react"

export function AboutMeSection() {
  const focusAreas = ["Full-Stack Web Development", "Data Analysis & Machine Learning", "Student Learning & Growth"]

  return (
    <section id="about" className="scroll-mt-24 py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="transition-transform hover:-translate-y-0.5 hover:shadow-md border-emerald-100 bg-gradient-to-br from-white to-emerald-50">
          <CardHeader>
            <CardTitle className="text-balance text-2xl font-semibold text-emerald-900">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <div>
                  <p className="text-lg font-medium text-emerald-900">{about.name}</p>
                  <p className="text-slate-600 leading-relaxed mt-2">{about.fullText}</p>
                </div>

                <div className="space-y-2 pt-4">
                  <p className="font-semibold text-emerald-900">My Focus Areas:</p>
                  {focusAreas.map((area) => (
                    <div key={area} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-teal-600 flex-shrink-0" />
                      <span className="text-slate-700">{area}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
