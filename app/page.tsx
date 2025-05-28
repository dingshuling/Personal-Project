import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import AccomplishmentsSection from "@/components/accomplishments-section"
import ExperienceSection from "@/components/experience-section"
import FeaturedPosts from "@/components/featured-posts"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <AboutSection />
      <AccomplishmentsSection />
      <ExperienceSection />
      <FeaturedPosts />
      <ContactSection />
    </div>
  )
}
