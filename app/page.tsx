import { SiteHeader } from "@/components/nav/site-header"
import { AboutMeSection } from "@/components/sections/about-me"
import { SkillsSection } from "@/components/sections/skills"
import { CertificationsSection } from "@/components/sections/certifications"
import { ProjectsSection } from "@/components/sections/projects"
import { EducationSection } from "@/components/sections/education"
import { ContactSection } from "@/components/sections/contact"

export default function HomePage() {
  return (
    <>
      <div className="animated-gradient" aria-hidden />
      <ul className="particles" aria-hidden>
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>

      <SiteHeader />
      <main className="relative z-10 mx-auto max-w-5xl px-4 py-10 md:py-12">
        <AboutMeSection />
        <SkillsSection />
        <CertificationsSection />
        <ProjectsSection />
        <EducationSection />
        <ContactSection />
      </main>
    </>
  )
}
