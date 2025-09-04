"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { useToast } from "@/hooks/use-toast"
import { Mail, Phone, Github, Linkedin } from "lucide-react"

export function ContactSection() {
  const { toast } = useToast()
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ name: "", email: "", message: "" })

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLoading(true)
    try {
      // Simulated submit. You can integrate email/api later.
      await new Promise((r) => setTimeout(r, 600))
      toast({ title: "Message sent", description: "Thanks for reaching out!" })
      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-8 md:py-12">
      <motion.h2
        className="mb-6 text-balance text-2xl font-semibold text-slate-900"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        Contact Me
      </motion.h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-900">Send a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="you@example.com"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="How can I help?"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full transform bg-gradient-to-r from-blue-600 to-teal-500 text-white transition-transform hover:-translate-y-0.5 hover:from-blue-700 hover:to-teal-600"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.4 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-slate-900">Contact info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-slate-600">
              <a
                href="mailto:sudhanshusingh00003@gmail.com"
                className="group flex items-center gap-3 rounded-md px-2 py-2 hover:text-blue-600"
              >
                <Mail className="h-5 w-5 text-slate-600 group-hover:text-blue-600" aria-hidden />
                <span className="sr-only">Email:</span>
                sudhanshusingh00003@gmail.com
              </a>
              <a
                href="tel:7562081734"
                className="group flex items-center gap-3 rounded-md px-2 py-2 hover:text-blue-600"
              >
                <Phone className="h-5 w-5 text-slate-600 group-hover:text-blue-600" aria-hidden />
                <span className="sr-only">Phone:</span>
                7562081734
              </a>
              <a
                href="https://github.com/iamsinghsudhanshu"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-md px-2 py-2 hover:text-blue-600"
              >
                <Github className="h-5 w-5 text-slate-600 group-hover:text-blue-600" aria-hidden />
                <span className="sr-only">GitHub:</span>
                github.com/iamsinghsudhanshu
              </a>
              <a
                href="https://www.linkedin.com/in/Sudhanshu-singh4200b922a"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-3 rounded-md px-2 py-2 hover:text-blue-600"
              >
                <Linkedin className="h-5 w-5 text-slate-600 group-hover:text-blue-600" aria-hidden />
                <span className="sr-only">LinkedIn:</span>
                linkedin.com/in/Sudhanshu-singh4200b922a
              </a>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
