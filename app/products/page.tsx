import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Building, Home } from "lucide-react"

export default function ProductsPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-yuhouse-navy">Our Products</h1>
        <p className="mt-4 text-lg text-gray-600">Explore our comprehensive real estate solutions</p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Brokerage */}
        <div className="rounded-lg border bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="mb-6 inline-flex rounded-full bg-yuhouse-yellow p-4 text-yuhouse-navy">
            <Home className="h-8 w-8" />
          </div>
          <h2 className="mb-4 text-2xl font-bold text-yuhouse-navy">Brokerage</h2>
          <p className="mb-6 text-gray-600">
            Our brokerage services connect buyers and sellers to find the perfect property match. We offer a wide range
            of properties across Vietnam, from apartments and houses to commercial spaces. Our experienced agents
            provide personalized guidance throughout the entire process.
          </p>
          <Button asChild className="bg-yuhouse-navy text-white hover:bg-yuhouse-navy/90">
            <Link href="/products/brokerage">View Properties</Link>
          </Button>
        </div>

        {/* Apartment Ecosystem */}
        <div className="rounded-lg border bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="mb-6 inline-flex rounded-full bg-yuhouse-yellow p-4 text-yuhouse-navy">
            <Building className="h-8 w-8" />
          </div>
          <h2 className="mb-4 text-2xl font-bold text-yuhouse-navy">Apartment Ecosystem</h2>
          <p className="mb-6 text-gray-600">
            Our comprehensive apartment ecosystem provides end-to-end solutions for property owners and residents. We
            offer property management, maintenance services, community building, and digital tools to enhance the living
            experience and maximize property value.
          </p>
          <Button asChild className="bg-yuhouse-navy text-white hover:bg-yuhouse-navy/90">
            <Link href="/products/ecosystem">Learn More</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

