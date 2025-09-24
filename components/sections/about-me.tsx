"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { about } from "@/lib/site-data"

export function AboutMeSection() {
  return (
    <section id="about" className="scroll-mt-24 py-8 md:py-12">
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        <Card className="transition-transform hover:-translate-y-0.5 hover:shadow-md">
          <CardHeader>
            <CardTitle className="text-balance text-2xl font-semibold text-slate-900">About Me</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid items-center gap-6 md:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }}
                className="flex justify-center"
              >
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/design-mode-images/Gemini_Generated_Image_m74b91m74b91m74b-MWa6xipw4GLrAC8smUw0lVchKEGKZX.png"
                  alt="Portrait photo of Sudhanshu Singh"
                  className="h-48 w-48 rounded-full border object-cover shadow-lg shadow-slate-900/10 ring-1 ring-black/5 transition-transform duration-300 hover:scale-[1.02] md:h-60 md:w-60"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.4 }}
                className="space-y-3 text-slate-600 leading-relaxed"
              >
                <p className="text-lg font-medium text-slate-900">{about.name}</p>
                <p>{about.fullText}</p>
              </motion.div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </section>
  )
}
