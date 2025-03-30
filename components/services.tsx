import { Building, Home, Users } from "lucide-react"

const services = [
  {
    title: "Brokerage Services",
    description:
      "We connect buyers and sellers to find the perfect property match. Our experienced agents provide personalized guidance throughout the entire process.",
    icon: Home,
  },
  {
    title: "Apartment Ecosystem",
    description:
      "Our comprehensive apartment management solutions ensure a seamless living experience for residents and efficient operations for property owners.",
    icon: Building,
  },
  {
    title: "Real Estate Consultation",
    description:
      "Get expert advice on property investments, market trends, and legal matters from our team of real estate professionals.",
    icon: Users,
  },
]

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-yuhouse-navy">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">Comprehensive real estate solutions tailored to your needs</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div key={index} className="rounded-lg bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
              <div className="mb-4 inline-flex rounded-full bg-yuhouse-yellow p-3 text-yuhouse-navy">
                <service.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-4 text-xl font-bold text-yuhouse-navy">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

