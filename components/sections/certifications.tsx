"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { certifications } from "@/lib/site-data"
import { Award, ExternalLink } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"

export function CertificationsSection() {
  return (
    <section id="certifications" className="scroll-mt-24 py-8 md:py-12">
      <motion.h2
        className="mb-8 text-balance text-3xl md:text-4xl font-bold text-slate-900"
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
            <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-105 border-2">
              <CardHeader className="flex flex-row items-center gap-3">
                <Award className="h-7 w-7 text-blue-600 group-hover:scale-125 transition-transform" aria-hidden />
                <CardTitle className="text-lg md:text-xl text-slate-900">{cert.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-base text-slate-600">
                {cert.org && <p className="font-medium">{cert.org}</p>}
                {cert.year && <p>Year: {cert.year}</p>}
                {cert.certificateUrl ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="mt-4 text-base font-semibold text-blue-600 hover:bg-blue-50 bg-transparent border-2 hover:scale-110 transition-all hover:shadow-lg"
                    onClick={() => window.open(cert.certificateUrl as string, "_blank", "noopener,noreferrer")}
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    View Certificate
                  </Button>
                ) : cert.details ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="mt-4 text-base font-semibold text-blue-600 hover:bg-blue-50 bg-transparent border-2 hover:scale-110 transition-all hover:shadow-lg"
                      >
                        <ExternalLink className="mr-2 h-5 w-5" />
                        View Certificate
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle>{cert.title}</DialogTitle>
                        {cert.issuedOn && <DialogDescription>Issued on {cert.issuedOn}</DialogDescription>}
                      </DialogHeader>
                      {cert.certificateImage && (
                        <div className="mb-4">
                          <img
                            src={cert.certificateImage || "/placeholder.svg"}
                            alt={cert.title}
                            className="w-full rounded-lg shadow-md"
                          />
                        </div>
                      )}
                      <div className="text-sm text-slate-700 leading-relaxed whitespace-pre-wrap">{cert.details}</div>
                    </DialogContent>
                  </Dialog>
                ) : null}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <p className="mt-4 text-sm text-slate-600">More certifications will be added in the future.</p>
    </section>
  )
}
