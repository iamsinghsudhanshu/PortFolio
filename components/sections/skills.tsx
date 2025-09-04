"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skills } from "@/lib/site-data"
import { Code2, Library, Globe, Smartphone, Database, Wrench, Users2 } from "lucide-react"

const groups = [
  { title: "Programming Languages", items: skills.languages, icon: Code2 },
  { title: "Python Libraries", items: skills.pythonLibraries, icon: Library },
  { title: "Web Development", items: skills.web, icon: Globe },
  { title: "Mobile Development", items: skills.mobile, icon: Smartphone },
  { title: "Databases", items: skills.databases, icon: Database },
  { title: "Tools & Technologies", items: skills.tools, icon: Wrench },
  { title: "Soft Skills", items: skills.soft, icon: Users2 },
]

// Simple mapping for illustrative progress; defaults to 70% if not specified
const progress: Record<string, number> = {
  C: 70,
  "C++": 75,
  Java: 70,
  Python: 75,
  NumPy: 70,
  Pandas: 70,
  Matplotlib: 65,
  HTML: 85,
  CSS: 80,
  JavaScript: 75,
  ReactJS: 70,
  NodeJS: 65,
  "React Native (currently learning)": 55,
  MySQL: 70,
  MongoDB: 65,
  AWS: 55,
  GitHub: 75,
  "Problem-solving": 80,
  "Analytical Thinking": 75,
  "Team Collaboration": 80,
}

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-8 md:py-12">
      <motion.h2
        className="mb-6 text-balance text-2xl font-semibold text-slate-900"
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.4 }}
      >
        Skills
      </motion.h2>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {groups.map((group) => {
          const Icon = group.icon
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="transition-transform hover:-translate-y-0.5 hover:shadow-md">
                <CardHeader className="flex flex-row items-center gap-3">
                  <Icon className="h-5 w-5 text-blue-600" aria-hidden />
                  <CardTitle className="text-slate-900">{group.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {group.items.map((item) => {
                    const pct = Math.min(100, Math.max(0, progress[item] ?? 70))
                    return (
                      <div key={item} className="group rounded-md border p-3">
                        <div className="mb-1 flex items-center justify-between text-sm">
                          <span className="font-medium text-slate-900">{item}</span>
                          <span className="text-slate-600">{pct}%</span>
                        </div>
                        <div className="h-2 rounded-full bg-slate-200">
                          <div
                            style={{ width: `${pct}%` }}
                            className="h-2 rounded-full bg-gradient-to-r from-blue-600 to-teal-500"
                          />
                        </div>
                      </div>
                    )
                  })}
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
