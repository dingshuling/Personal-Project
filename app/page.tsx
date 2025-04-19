import Hero from "@/components/hero"
import AboutSection from "@/components/about-section"
import AccomplishmentsSection from "@/components/accomplishments-section"
import ServicesSection from "@/components/services-section"
import FeaturedPosts from "@/components/featured-posts"
import ContactSection from "@/components/contact-section"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Hero />
      <AboutSection />
      <AccomplishmentsSection />
      <ServicesSection />
      <FeaturedPosts />
      <ContactSection />
    </div>
  )
}
