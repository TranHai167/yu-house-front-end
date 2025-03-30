import Hero from "@/components/hero"
import FeaturedProperties from "@/components/featured-properties"
import Services from "@/components/services"
import CallToAction from "@/components/call-to-action"

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <Services />
      <FeaturedProperties />
      <CallToAction />
    </div>
  )
}

