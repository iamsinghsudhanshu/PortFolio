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

const proficiencyLevels: Record<string, "Proficient" | "Intermediate" | "Learning"> = {
  C: "Intermediate",
  "C++": "Intermediate",
  Java: "Intermediate",
  Python: "Proficient",
  NumPy: "Proficient",
  Pandas: "Proficient",
  Matplotlib: "Intermediate",
  Seaborn: "Intermediate",
  HTML: "Proficient",
  CSS: "Proficient",
  JavaScript: "Proficient",
  ReactJS: "Proficient",
  NodeJS: "Intermediate",
  "Flutter (currently learning)": "Learning",
  MySQL: "Proficient",
  MongoDB: "Intermediate",
  "VS Code": "Proficient",
  "Jupyter Notebook": "Proficient",
  GitHub: "Proficient",
  "Problem-solving": "Proficient",
  "Analytical Thinking": "Proficient",
  "Team Collaboration": "Proficient",
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

      <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
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
                <CardHeader className="flex flex-row items-center gap-3 pb-3">
                  <Icon className="h-5 w-5 text-emerald-600" aria-hidden />
                  <CardTitle className="text-slate-900">{group.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => {
                      const level = proficiencyLevels[item] || "Intermediate"
                      const colorMap = {
                        Proficient: "bg-emerald-100 text-emerald-700 border-emerald-300",
                        Intermediate: "bg-teal-100 text-teal-700 border-teal-300",
                        Learning: "bg-amber-100 text-amber-700 border-amber-300",
                      }
                      return (
                        <div key={item} className="group relative" title={level}>
                          <span
                            className={`inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium border transition-all hover:shadow-md ${colorMap[level]}`}
                          >
                            {item}
                          </span>
                          {/* Tooltip */}
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 hidden group-hover:block bg-slate-900 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
                            {level}
                          </div>
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
