"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { certifications } from "@/lib/site-data"
import { Award } from "lucide-react"

export function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-24 py-8 md:py-12">
      <motion.h2
        className="mb-6 text-balance text-2xl font-semibold text-slate-900"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        Certifications & Achievements
      </motion.h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {certifications.map((cert, idx) => (
          <motion.div
            key={`${cert.title}-${idx}`}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
          >
            <Card className="transition-transform hover:-translate-y-0.5 hover:shadow-md">
              <CardHeader className="flex flex-row items-center gap-3">
                <Award className="h-5 w-5 text-blue-600" aria-hidden />
                <CardTitle className="text-slate-900">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-slate-600">
                {cert.org && <p>Organization: {cert.org}</p>}
                {cert.year && <p>Year: {cert.year}</p>}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <p className="mt-4 text-sm text-slate-600">More certifications will be added in the future.</p>
    </section>
  )
}
