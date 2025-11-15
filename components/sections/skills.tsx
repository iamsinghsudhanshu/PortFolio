"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skills } from "@/lib/site-data"
import { Code2, Library, Globe, Database, Wrench, Users2 } from 'lucide-react'

const groups = [
  { title: "Programming Languages", items: skills.languages, icon: Code2 },
  { title: "Python Libraries", items: skills.pythonLibraries, icon: Library },
  { title: "Web Development", items: skills.web, icon: Globe },
  { title: "Databases", items: skills.databases, icon: Database },
  { title: "Tools & Technologies", items: skills.tools, icon: Wrench },
  { title: "Soft Skills", items: skills.soft, icon: Users2 },
]

const skillPercentages: Record<string, number> = {
  C: 70,
  "C++": 70,
  Java: 75,
  Python: 90,
  NumPy: 85,
  Pandas: 85,
  Matplotlib: 80,
  Seaborn: 80,
  HTML: 95,
  CSS: 95,
  JavaScript: 90,
  ReactJS: 90,
  NodeJS: 80,
  MySQL: 85,
  MongoDB: 80,
  "VS Code": 95,
  "Jupyter Notebook": 85,
  GitHub: 90,
  "Problem-solving": 90,
  "Analytical Thinking": 85,
  "Team Collaboration": 88,
}

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-8 md:py-12">
      <motion.h2
        className="mb-8 text-balance text-3xl md:text-4xl font-bold text-slate-900"
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
              <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:scale-105">
                <CardHeader className="flex flex-row items-center gap-3 pb-3">
                  <Icon className="h-6 w-6 text-emerald-600 group-hover:scale-125 transition-transform" aria-hidden />
                  <CardTitle className="text-lg md:text-xl text-slate-900">{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {group.items.map((item) => {
                      const percentage = skillPercentages[item] || 75
                      const getBarColor = (percent: number) => {
                        if (percent >= 85) return "bg-emerald-500"
                        if (percent >= 70) return "bg-teal-500"
                        return "bg-amber-500"
                      }

                      return (
                        <div key={item} className="group">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-base md:text-lg font-semibold text-slate-900 group-hover:text-emerald-600 transition-colors">
                              {item}
                            </span>
                            <span className="text-sm md:text-base font-bold text-emerald-600">
                              {percentage}%
                            </span>
                          </div>
                          <motion.div
                            className="w-full bg-slate-200 rounded-full h-3 overflow-hidden"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                          >
                            <motion.div
                              className={`h-full rounded-full transition-all duration-500 ${getBarColor(percentage)}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${percentage}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, ease: "easeOut" }}
                            />
                          </motion.div>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
