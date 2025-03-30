import Image from "next/image"
import { Button } from "@/components/ui/button"
import StatsCounter from "@/components/stats-counter"
import PartnerLogos from "@/components/partner-logos"

// Sample partner data
const partners = [
  { name: "Partner 1", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Partner 2", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Partner 3", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Partner 4", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Partner 5", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Partner 6", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Partner 7", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Partner 8", logo: "/placeholder.svg?height=60&width=120" },
]

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-yuhouse-navy">Company Introduction</h1>
        <p className="mt-4 text-lg text-gray-600">
          Learn about Yuhouse.vn and our mission to transform the real estate market in Vietnam
        </p>
      </div>

      {/* Key Metrics Section - UPDATED NUMBERS */}
      <div className="mb-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg bg-yuhouse-navy p-6 text-white shadow-lg transition-transform duration-300 hover:scale-105">
            <StatsCounter end={35000} title="Properties Listed" className="text-white" titleClassName="text-gray-300" />
          </div>

          <div className="rounded-lg bg-yuhouse-yellow p-6 text-yuhouse-navy shadow-lg transition-transform duration-300 hover:scale-105">
            <StatsCounter end={8500} title="Satisfied Clients" className="text-yuhouse-navy" />
          </div>

          <div className="rounded-lg bg-white p-6 text-yuhouse-navy shadow-lg transition-transform duration-300 hover:scale-105">
            <StatsCounter end={150} title="Development Projects" className="text-yuhouse-navy" />
          </div>

          <div className="rounded-lg bg-gray-100 p-6 text-yuhouse-navy shadow-lg transition-transform duration-300 hover:scale-105">
            <StatsCounter end={250} prefix="$" title="Million in Property Value" className="text-yuhouse-navy" />
          </div>
        </div>
      </div>

      {/* Company Overview - UPDATED CONTENT */}
      <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <h2 className="mb-4 text-3xl font-bold text-yuhouse-navy">About Yuhouse.vn</h2>
          <p className="mb-4 text-lg text-gray-600">
            Established in 2018, Yuhouse.vn has rapidly grown to become Vietnam's premier real estate platform. Our
            innovative approach combines cutting-edge technology with deep market expertise to create seamless
            connections between property owners, investors, and home seekers.
          </p>
          <p className="mb-6 text-lg text-gray-600">
            With a presence in major cities across Vietnam including Hanoi, Ho Chi Minh City, Da Nang, and Nha Trang, we
            offer comprehensive solutions for residential, commercial, and investment properties. Our team of over 200
            real estate professionals is committed to providing personalized service and expert guidance throughout
            every transaction.
          </p>
          <Button className="bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow">
            Discover Our Story
          </Button>
        </div>
        <div className="order-1 relative h-[300px] overflow-hidden rounded-lg lg:order-2 lg:h-[400px]">
          <Image
            src="/placeholder.svg?height=400&width=600"
            alt="Yuhouse.vn Headquarters"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* Partners Section - NOW WITH AUTO-SCROLL */}
      <div className="mb-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-yuhouse-navy">Our Strategic Partners</h2>
          <p className="mt-4 text-lg text-gray-600">
            We collaborate with leading companies in Vietnam to provide the best solutions for our clients
          </p>
        </div>

        <PartnerLogos partners={partners} autoScroll={true} scrollInterval={3000} />
      </div>

      {/* Mission and Vision */}
      <div className="mb-16 rounded-lg bg-yuhouse-navy p-8 text-white">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-yuhouse-yellow">Our Mission</h2>
            <p className="text-lg">
              To revolutionize the real estate market in Vietnam by providing transparent, efficient, and innovative
              solutions that connect property owners with tenants and buyers, while enhancing the overall real estate
              experience for all stakeholders.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-yuhouse-yellow">Our Vision</h2>
            <p className="text-lg">
              To become the leading real estate platform in Vietnam, known for our commitment to excellence, innovation,
              and customer satisfaction. We aim to set new standards in the industry and contribute to the development
              of sustainable and vibrant communities.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-yuhouse-navy">Our Core Values</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-yuhouse-yellow p-4 text-yuhouse-navy">
              <div className="text-2xl font-bold">1</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-yuhouse-navy">Integrity</h3>
            <p className="text-gray-600">
              We conduct our business with the highest standards of honesty, transparency, and ethical behavior.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-yuhouse-yellow p-4 text-yuhouse-navy">
              <div className="text-2xl font-bold">2</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-yuhouse-navy">Innovation</h3>
            <p className="text-gray-600">
              We continuously seek new and better ways to serve our clients and improve the real estate experience.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-yuhouse-yellow p-4 text-yuhouse-navy">
              <div className="text-2xl font-bold">3</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-yuhouse-navy">Excellence</h3>
            <p className="text-gray-600">
              We strive for excellence in everything we do, from customer service to property management.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-yuhouse-yellow p-4 text-yuhouse-navy">
              <div className="text-2xl font-bold">4</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-yuhouse-navy">Customer Focus</h3>
            <p className="text-gray-600">
              We put our clients at the center of everything we do, ensuring their needs and expectations are met.
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-yuhouse-navy">Our Leadership Team</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-white p-6 text-center shadow-md">
            <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-yuhouse-navy">
              <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-white">NT</div>
            </div>
            <h3 className="mb-1 text-xl font-bold text-yuhouse-navy">Nguyen Tuan</h3>
            <p className="mb-4 text-sm text-gray-500">Founder & CEO</p>
            <p className="text-gray-600">
              With over 15 years of experience in real estate, Nguyen Tuan founded Yuhouse.vn with a vision to transform
              the industry.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 text-center shadow-md">
            <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-yuhouse-navy">
              <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-white">TL</div>
            </div>
            <h3 className="mb-1 text-xl font-bold text-yuhouse-navy">Tran Linh</h3>
            <p className="mb-4 text-sm text-gray-500">Chief Operating Officer</p>
            <p className="text-gray-600">
              Tran Linh oversees the day-to-day operations of Yuhouse.vn, ensuring efficient and effective service
              delivery.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 text-center shadow-md">
            <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-yuhouse-navy">
              <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-white">PH</div>
            </div>
            <h3 className="mb-1 text-xl font-bold text-yuhouse-navy">Pham Huong</h3>
            <p className="mb-4 text-sm text-gray-500">Chief Technology Officer</p>
            <p className="text-gray-600">
              Pham Huong leads our technology initiatives, driving innovation and digital transformation in our
              services.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-lg border bg-white p-8 text-center shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-yuhouse-navy">Join Us on Our Journey</h2>
        <p className="mb-6 text-lg text-gray-600">
          Whether you're looking for a property, seeking to list your property, or interested in our services, we invite
          you to join us on our journey to transform the real estate market in Vietnam.
        </p>
        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button className="bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow">
            Contact Us
          </Button>
          <Button
            variant="outline"
            className="border-yuhouse-navy text-yuhouse-navy hover:bg-yuhouse-navy hover:text-white"
          >
            View Our Properties
          </Button>
        </div>
      </div>
    </div>
  )
}

