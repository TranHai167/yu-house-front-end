"use client"
import Hero from "@/components/hero"
import FeaturedProperties from "@/components/featured-properties"
import Services from "@/components/services"
import CallToAction from "@/components/call-to-action"
import BlogList from "@/components/home/blogList"

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Services />
      <FeaturedProperties />
      <BlogList></BlogList>
      <CallToAction />
    </div>
  )
}

