import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Handshake, TrendingUp, Users } from "lucide-react"

const partnerTypes = [
  {
    title: "Property Owners",
    description: "Partner with us to list your properties and reach a wider audience of potential tenants and buyers.",
    icon: Building,
  },
  {
    title: "Real Estate Agencies",
    description: "Collaborate with us to expand your reach and provide better services to your clients.",
    icon: Handshake,
  },
  {
    title: "Investors",
    description: "Invest in our growing platform and be part of the future of real estate in Vietnam.",
    icon: TrendingUp,
  },
  {
    title: "Service Providers",
    description: "Offer your services to our clients and become part of our comprehensive ecosystem.",
    icon: Users,
  },
]

export default function CooperationPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-yuhouse-navy">Cooperation</h1>
        <p className="mt-4 text-lg text-gray-600">Explore partnership opportunities with Yuhouse.vn</p>
      </div>

      {/* Hero Section */}
      <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-yuhouse-navy">Partner With Us</h2>
          <p className="mb-6 text-lg text-gray-600">
            At Yuhouse.vn, we believe in the power of collaboration. By working together with partners across the real
            estate ecosystem, we can provide better services to our clients and contribute to the growth of the industry
            in Vietnam.
          </p>
          <p className="mb-6 text-lg text-gray-600">
            Whether you're a property owner, real estate agency, investor, or service provider, we invite you to explore
            partnership opportunities with us.
          </p>
          <Button className="bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow">
            Become a Partner
          </Button>
        </div>
        <div className="relative h-[300px] overflow-hidden rounded-lg lg:h-[400px]">
          <Image src="/placeholder.svg?height=400&width=600" alt="Partnership" fill className="object-cover" />
        </div>
      </div>

      {/* Partner Types */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-yuhouse-navy">Who Can Partner With Us</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {partnerTypes.map((type, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-full bg-yuhouse-yellow p-3 text-yuhouse-navy">
                  <type.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-yuhouse-navy">{type.title}</h3>
                <p className="text-gray-600">{type.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-16 rounded-lg bg-yuhouse-navy p-8 text-white">
        <h2 className="mb-8 text-center text-2xl font-bold text-yuhouse-yellow">Benefits of Partnership</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-bold">For Property Owners</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Increased visibility for your properties</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Access to a wider pool of potential tenants and buyers</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Professional property management services</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Marketing support to showcase your properties</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">For Real Estate Agencies</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Access to our extensive property database</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Collaborative marketing opportunities</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Shared resources and expertise</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Increased client reach and business growth</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-yuhouse-navy">Success Stories</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src="/placeholder.svg?height=200&width=400" alt="Success Story 1" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold text-yuhouse-navy">Sunrise Apartments</h3>
              <p className="mb-4 text-sm text-gray-500">Property Owner Partnership</p>
              <p className="text-gray-600">
                "Partnering with Yuhouse.vn has significantly increased our occupancy rates and reduced vacancy periods.
                Their professional approach and extensive network have been invaluable to us."
              </p>
              <p className="mt-4 font-semibold text-yuhouse-navy">- Tran Minh, Property Manager</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src="/placeholder.svg?height=200&width=400" alt="Success Story 2" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold text-yuhouse-navy">City Realty Group</h3>
              <p className="mb-4 text-sm text-gray-500">Agency Partnership</p>
              <p className="text-gray-600">
                "Our collaboration with Yuhouse.vn has opened up new opportunities for our agency. The shared resources
                and expertise have helped us better serve our clients."
              </p>
              <p className="mt-4 font-semibold text-yuhouse-navy">- Nguyen Lan, CEO</p>
            </CardContent>
          </Card>
          <Card className="overflow-hidden">
            <div className="relative h-48 w-full">
              <Image src="/placeholder.svg?height=200&width=400" alt="Success Story 3" fill className="object-cover" />
            </div>
            <CardContent className="p-6">
              <h3 className="mb-2 text-xl font-bold text-yuhouse-navy">Green Homes Development</h3>
              <p className="mb-4 text-sm text-gray-500">Investor Partnership</p>
              <p className="text-gray-600">
                "Investing in Yuhouse.vn has been a rewarding experience. Their innovative approach to real estate and
                strong market presence have delivered excellent returns."
              </p>
              <p className="mt-4 font-semibold text-yuhouse-navy">- Le Hung, Investment Director</p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Partnership Process */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-yuhouse-navy">Partnership Process</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="relative rounded-lg border bg-white p-6 text-center shadow-md">
            <div className="absolute -top-4 left-1/2 inline-flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-yuhouse-yellow text-yuhouse-navy">
              1
            </div>
            <h3 className="mb-2 mt-4 text-lg font-bold text-yuhouse-navy">Initial Contact</h3>
            <p className="text-sm text-gray-600">
              Reach out to us through our contact form or email to express your interest in partnership.
            </p>
          </div>
          <div className="relative rounded-lg border bg-white p-6 text-center shadow-md">
            <div className="absolute -top-4 left-1/2 inline-flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-yuhouse-yellow text-yuhouse-navy">
              2
            </div>
            <h3 className="mb-2 mt-4 text-lg font-bold text-yuhouse-navy">Consultation</h3>
            <p className="text-sm text-gray-600">
              We'll schedule a meeting to discuss your needs, goals, and how we can work together.
            </p>
          </div>
          <div className="relative rounded-lg border bg-white p-6 text-center shadow-md">
            <div className="absolute -top-4 left-1/2 inline-flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-yuhouse-yellow text-yuhouse-navy">
              3
            </div>
            <h3 className="mb-2 mt-4 text-lg font-bold text-yuhouse-navy">Agreement</h3>
            <p className="text-sm text-gray-600">
              We'll draft a partnership agreement that outlines the terms and conditions of our collaboration.
            </p>
          </div>
          <div className="relative rounded-lg border bg-white p-6 text-center shadow-md">
            <div className="absolute -top-4 left-1/2 inline-flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-yuhouse-yellow text-yuhouse-navy">
              4
            </div>
            <h3 className="mb-2 mt-4 text-lg font-bold text-yuhouse-navy">Implementation</h3>
            <p className="text-sm text-gray-600">
              We'll implement the partnership and start working together to achieve our shared goals.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-lg border bg-white p-8 text-center shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-yuhouse-navy">Ready to Partner With Us?</h2>
        <p className="mb-6 text-lg text-gray-600">
          Contact us today to explore partnership opportunities with Yuhouse.vn.
        </p>
        <Button className="bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow">
          Contact Us
        </Button>
      </div>
    </div>
  )
}

