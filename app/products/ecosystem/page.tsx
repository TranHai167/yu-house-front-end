import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Shield, Users, Wrench, Smartphone, Leaf } from "lucide-react"

const features = [
  {
    title: "Property Management",
    description:
      "Comprehensive property management services including tenant screening, rent collection, and financial reporting.",
    icon: Building,
  },
  {
    title: "Security Services",
    description: "24/7 security monitoring and access control systems to ensure the safety of residents and property.",
    icon: Shield,
  },
  {
    title: "Community Building",
    description: "Organize community events and activities to foster a sense of belonging among residents.",
    icon: Users,
  },
  {
    title: "Maintenance Services",
    description: "Regular maintenance and prompt repairs to keep properties in excellent condition.",
    icon: Wrench,
  },
  {
    title: "Smart Home Solutions",
    description: "Integration of smart home technologies for enhanced comfort and energy efficiency.",
    icon: Smartphone,
  },
  {
    title: "Sustainability Initiatives",
    description: "Eco-friendly practices and initiatives to reduce environmental impact and operating costs.",
    icon: Leaf,
  },
]

export default function EcosystemPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-yuhouse-navy">Apartment Ecosystem</h1>
        <p className="mt-4 text-lg text-gray-600">Comprehensive solutions for property owners and residents</p>
      </div>

      {/* Hero Section */}
      <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-yuhouse-navy">Transforming Property Management</h2>
          <p className="mb-6 text-lg text-gray-600">
            Our apartment ecosystem provides end-to-end solutions that enhance the living experience for residents while
            maximizing property value for owners. We combine traditional property management with innovative
            technologies and community-building initiatives.
          </p>
          <Button className="bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow">
            Request a Consultation
          </Button>
        </div>
        <div className="relative h-[300px] overflow-hidden rounded-lg lg:h-[400px]">
          <Image src="/placeholder.svg?height=400&width=600" alt="Apartment Ecosystem" fill className="object-cover" />
        </div>
      </div>

      {/* Features */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-yuhouse-navy">Our Services</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-full bg-yuhouse-yellow p-3 text-yuhouse-navy">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-yuhouse-navy">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-16 rounded-lg bg-yuhouse-navy p-8 text-white">
        <h2 className="mb-8 text-center text-2xl font-bold text-yuhouse-yellow">Benefits</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-bold">For Property Owners</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Increased property value and rental income</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Reduced vacancy rates and tenant turnover</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Lower operating costs through efficient management</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Comprehensive financial reporting and transparency</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Enhanced property reputation and marketability</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">For Residents</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Improved living experience and comfort</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Enhanced security and safety measures</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Access to community events and activities</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Prompt maintenance and repair services</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Smart home features for convenience and efficiency</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-lg border bg-white p-8 text-center shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-yuhouse-navy">Ready to Transform Your Property Management?</h2>
        <p className="mb-6 text-lg text-gray-600">
          Contact us today to learn how our apartment ecosystem can benefit your property and residents.
        </p>
        <Button className="bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow">
          Get Started
        </Button>
      </div>
    </div>
  )
}

