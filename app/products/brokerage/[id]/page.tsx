import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Home, Bed, Bath, ArrowLeft, Share2 } from "lucide-react"

// This would normally come from a database or API
const getPropertyById = (id: string) => {
  // Sample property data based on the provided image
  const properties = {
    CT0085: {
      id: "CT0085",
      title: "Huyện Thanh Trì",
      address: "17 ngõ 73 Yên Xá, Xã Tân Triều, Huyện Thanh Trì, Hà Nội",
      price: "4.850.000đ - 5.150.000đ",
      rooms: 4,
      bathrooms: 2,
      area: "65m²",
      description:
        "Spacious apartment in a quiet neighborhood with easy access to public transportation. The property features 4 bedrooms, 2 bathrooms, a modern kitchen, and a comfortable living area. All utilities are included in the rent.",
      features: ["Air conditioning", "Balcony", "Security system", "Parking space", "Elevator", "Furnished"],
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      agent: {
        name: "Nguyen Van A",
        phone: "+84 123 456 789",
        email: "agent@yuhouse.vn",
      },
    },
    // Add more properties as needed
  }

  return properties[id as keyof typeof properties]
}

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = getPropertyById(params.id)

  if (!property) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-bold text-yuhouse-navy">Property not found</h1>
        <p className="mt-4 text-gray-600">The property you are looking for does not exist.</p>
        <Button
          asChild
          className="mt-8 bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow"
        >
          <Link href="/products/brokerage">Back to Listings</Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <Link
          href="/products/brokerage"
          className="inline-flex items-center text-yuhouse-navy hover:text-yuhouse-yellow"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Listings
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {/* Property Images and Details */}
        <div className="lg:col-span-2">
          <div className="mb-6">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg">
              <Image
                src={property.images[0] || "/placeholder.svg"}
                alt={property.title}
                fill
                className="object-cover"
              />
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              {property.images.slice(1).map((image, index) => (
                <div key={index} className="relative h-24 overflow-hidden rounded-lg">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${property.title} - Image ${index + 2}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <h1 className="text-3xl font-bold text-yuhouse-navy">{property.title}</h1>
              <span className="rounded-full bg-yuhouse-yellow px-3 py-1 text-sm font-medium text-yuhouse-navy">
                {property.id}
              </span>
            </div>

            <div className="mb-4 flex items-start gap-2">
              <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-yuhouse-yellow" />
              <p className="text-gray-600">{property.address}</p>
            </div>

            <div className="mb-6">
              <p className="text-2xl font-bold text-yuhouse-navy">{property.price}</p>
            </div>

            <div className="mb-8 grid grid-cols-3 gap-4">
              <div className="flex items-center gap-2">
                <Home className="h-5 w-5 text-yuhouse-yellow" />
                <span className="text-gray-600">{property.area}</span>
              </div>
              <div className="flex items-center gap-2">
                <Bed className="h-5 w-5 text-yuhouse-yellow" />
                <span className="text-gray-600">{property.rooms} Rooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="h-5 w-5 text-yuhouse-yellow" />
                <span className="text-gray-600">{property.bathrooms} Bathrooms</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="mb-4 text-xl font-bold text-yuhouse-navy">Description</h2>
              <p className="text-gray-600">{property.description}</p>
            </div>

            <div>
              <h2 className="mb-4 text-xl font-bold text-yuhouse-navy">Features</h2>
              <ul className="grid grid-cols-2 gap-2">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Agent */}
        <div>
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h2 className="mb-6 text-xl font-bold text-yuhouse-navy">Contact Agent</h2>

              <div className="mb-6 text-center">
                <div className="mx-auto mb-4 h-20 w-20 overflow-hidden rounded-full bg-yuhouse-navy">
                  <div className="flex h-full w-full items-center justify-center text-2xl font-bold text-white">
                    {property.agent.name.charAt(0)}
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{property.agent.name}</h3>
                <p className="text-sm text-gray-500">Real Estate Agent</p>
              </div>

              <div className="mb-6 space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-yuhouse-yellow" />
                  <span>{property.agent.phone}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-yuhouse-yellow" />
                  <span>{property.agent.email}</span>
                </div>
              </div>

              <div className="space-y-3">
                <Button className="w-full bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow">
                  Contact Agent
                </Button>
                <Button
                  variant="outline"
                  className="w-full border-yuhouse-navy text-yuhouse-navy hover:bg-yuhouse-navy hover:text-white"
                >
                  <Share2 className="mr-2 h-4 w-4" />
                  Share Property
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

