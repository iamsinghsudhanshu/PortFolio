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
      const formData = new FormData()
      formData.append("name", form.name)
      formData.append("email", form.email)
      formData.append("message", form.message)

      const res = await fetch("https://formspree.io/f/mldwprgo", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      })

      if (res.ok) {
        toast({
          title: "Message sent!",
          description: "Thank you for contacting me! I will get back to you soon.",
        })
        setForm({ name: "", email: "", message: "" })
      } else {
        toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" })
      }
    } catch (err) {
      toast({ title: "Something went wrong", description: "Please try again.", variant: "destructive" })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="contact" className="scroll-mt-24 py-8 md:py-12">
      <motion.h2
        className="mb-8 text-balance text-3xl md:text-4xl font-bold text-slate-900"
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
          <Card className="border-2 border-emerald-100 bg-gradient-to-br from-white to-emerald-50 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-900">Send a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={onSubmit} className="space-y-5">
                <div className="grid gap-2">
                  <Label htmlFor="name" className="text-base font-semibold">
                    Name
                  </Label>
                  <Input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="Your name"
                    className="text-base py-3 hover:border-emerald-400 transition-colors focus:scale-105 transition-transform"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-base font-semibold">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="you@example.com"
                    className="text-base py-3 hover:border-emerald-400 transition-colors focus:scale-105 transition-transform"
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="message" className="text-base font-semibold">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                    placeholder="How can I help?"
                    className="text-base p-3 hover:border-emerald-400 transition-colors focus:scale-105 transition-transform resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full text-lg font-bold py-4 transform bg-gradient-to-r from-emerald-600 to-teal-500 text-white transition-all hover:-translate-y-1 hover:from-emerald-700 hover:to-teal-600 hover:shadow-xl active:scale-95"
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
          <Card className="border-2 border-emerald-100 bg-gradient-to-br from-white to-emerald-50 shadow-md hover:shadow-2xl transition-all duration-300 hover:scale-105 hover:-translate-y-1">
            <CardHeader>
              <CardTitle className="text-2xl text-emerald-900">Contact info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-slate-600">
              <a
                href="mailto:sudhanshusingh00003@gmail.com"
                className="group flex items-center gap-4 rounded-md px-3 py-3 hover:text-emerald-600 transition-all hover:bg-emerald-50 hover:scale-105 transform"
              >
                <Mail
                  className="h-6 w-6 text-slate-600 group-hover:text-emerald-600 group-hover:scale-125 transition-all"
                  aria-hidden
                />
                <span className="sr-only">Email:</span>
                <span className="text-base font-medium">sudhanshusingh00003@gmail.com</span>
              </a>
              <a
                href="tel:7562081734"
                className="group flex items-center gap-4 rounded-md px-3 py-3 hover:text-emerald-600 transition-all hover:bg-emerald-50 hover:scale-105 transform"
              >
                <Phone
                  className="h-6 w-6 text-slate-600 group-hover:text-emerald-600 group-hover:scale-125 transition-all"
                  aria-hidden
                />
                <span className="sr-only">Phone:</span>
                <span className="text-base font-medium">07562081734</span>
              </a>
              <a
                href="https://github.com/iamsinghsudhanshu"
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-md px-3 py-3 hover:text-emerald-600 transition-all hover:bg-emerald-50 hover:scale-105 transform"
              >
                <Github
                  className="h-6 w-6 text-slate-600 group-hover:text-emerald-600 group-hover:scale-125 transition-all"
                  aria-hidden
                />
                <span className="sr-only">GitHub:</span>
                <span className="text-base font-medium">github.com/iamsinghsudhanshu</span>
              </a>
              <a
                href="https://www.linkedin.com/in/sudhanshu-singh-4200b922a"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-md px-3 py-3 hover:text-emerald-600 transition-all hover:bg-emerald-50 hover:scale-105 transform"
              >
                <Linkedin
                  className="h-6 w-6 text-slate-600 group-hover:text-emerald-600 group-hover:scale-125 transition-all"
                  aria-hidden
                />
                <span className="sr-only">LinkedIn:</span>
                <span className="text-base font-medium">www.linkedin.com/in/sudhanshu-singh-4200b922a</span>
              </a>
              <p className="text-base text-slate-500 pt-4 border-t border-slate-200 font-medium">
                I typically respond within 24-48 hours.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
