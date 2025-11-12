"use client"

import { motion } from "framer-motion"
import { about } from "@/lib/site-data"
import { Github, Linkedin, Mail } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center py-12 md:py-20">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid items-center gap-8 md:grid-cols-2">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="space-y-2">
              <motion.h1
                className="text-6xl md:text-7xl font-bold text-emerald-900 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                Sudhanshu Singh
              </motion.h1>
              <motion.p
                className="text-2xl md:text-3xl text-teal-700 font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Web Developer Trainee | Aspiring Data Scientist | MCA (AI & ML)
              </motion.p>
            </div>

            <motion.div
              className="relative h-12 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
            >
              <motion.p
                className="text-lg md:text-xl text-slate-700 font-medium"
                animate={{ y: [0, -48, -96, 0] }}
                transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
              >
                <span className="block h-12">Building modern web apps and data-driven solutions.</span>
                <span className="block h-12">Solving real-world problems with code.</span>
                <span className="block h-12">Passionate about learning and growth.</span>
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-semibold text-lg hover:bg-emerald-700 transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border-2 border-teal-600 text-teal-600 rounded-lg font-semibold text-lg hover:bg-teal-50 transition-all duration-300 transform hover:scale-110 hover:shadow-lg active:scale-95"
              >
                Get In Touch
              </a>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="https://github.com/iamsinghsudhanshu"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-emerald-100 hover:text-emerald-700 transition-all duration-300 transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/sudhanshu-singh-4200b922a/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-teal-100 hover:text-teal-700 transition-all duration-300 transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:sudhanshusingh00003@gmail.com?subject=Let's%20Connect&body=Hi%20Sudhanshu,%0D%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect%20with%20you!"
                onClick={(e) => {
                  window.location.href =
                    "mailto:sudhanshusingh00003@gmail.com?subject=Let's Connect&body=Hi Sudhanshu,%0D%0AI saw your portfolio and would like to connect with you!"
                }}
                className="p-3 bg-slate-100 text-slate-700 rounded-lg hover:bg-amber-100 hover:text-amber-700 transition-all duration-300 transform hover:scale-110"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-2xl blur-2xl opacity-20" />
              <img
                src={about.photo || "/placeholder.svg"}
                alt="Sudhanshu Singh - Web Developer and Data Scientist"
                className="relative h-80 w-80 rounded-2xl object-cover shadow-2xl border-4 border-white"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
