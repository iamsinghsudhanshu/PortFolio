"use client"

import { motion } from "framer-motion"
import { education } from "@/lib/site-data"
import { GraduationCap } from "lucide-react"

export function EducationSection() {
  return (
    <section id="education" className="scroll-mt-24 py-8 md:py-12">
      <motion.h2
        className="mb-6 text-balance text-2xl font-semibold text-slate-900"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        Education
      </motion.h2>

      <ol className="relative border-l border-slate-200">
        {education.map((edu, idx) => (
          <motion.li
            key={`${edu.title}-${idx}`}
            className="ml-6 mb-8"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.4 }}
          >
            <span className="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full bg-blue-600" aria-hidden />
            <div className="flex items-start gap-2">
              <GraduationCap className="mt-0.5 h-5 w-5 text-blue-600" aria-hidden />
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-slate-900">{edu.title}</h3>
                <p className="text-sm text-slate-600">{edu.school}</p>
                <p className="text-sm text-slate-600">
                  {edu.period}
                  {edu.note ? `, ${edu.note}` : ""}
                </p>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  )
}
