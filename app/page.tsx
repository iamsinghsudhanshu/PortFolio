import { SiteHeader } from "@/components/nav/site-header"
import { AboutMeSection } from "@/components/sections/about-me"
import { ExperienceSection } from "@/components/sections/experience"
import { SkillsSection } from "@/components/sections/skills"
import { CertificationsSection } from "@/components/sections/certifications"
import { ProjectsSection } from "@/components/sections/projects"
import { EducationSection } from "@/components/sections/education"
import { ContactSection } from "@/components/sections/contact"
import { HeroSection } from "@/components/sections/hero"
import { Footer } from "@/components/sections/footer"
import { BackToTop } from "@/components/back-to-top"

export default function HomePage() {
  return (
    <>
      <div className="data-grid" aria-hidden="true" />
      <SiteHeader />
      <HeroSection />
      <main className="mx-auto max-w-6xl px-5 py-10 md:px-8 md:py-16">
        <AboutMeSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <CertificationsSection />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
