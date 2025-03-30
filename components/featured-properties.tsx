import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MapPin } from "lucide-react"

// Sample property data based on the provided image
const properties = [
  {
    id: "CT0085",
    title: "Huyện Thanh Trì",
    address: "17 ngõ 73 Yên Xá, Xã Tân Triều, Huyện Thanh Trì, Hà Nội",
    price: "4.850.000đ - 5.150.000đ",
    rooms: 4,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "CT0124",
    title: "Quận Bắc Từ Liêm",
    address: "Lô số 8 khu E1 trong dự án Khu đô thị mới Cầu Diễn, Phường Phú Diễn, Quận Bắc Từ Liêm, Hà Nội",
    price: "4.350.000đ - 4.650.000đ",
    rooms: 4,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "CT0113",
    title: "Quận Tây Hồ",
    address: "Tổ 20 Cụm 3, Phường Nhật Tân, Quận Tây Hồ, Hà Nội",
    price: "5.750.000đ - 6.650.000đ",
    rooms: 4,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "CT0055",
    title: "Quận Bắc Từ Liêm",
    address: "TDP Nguyễn Xá 3, Phường Minh Khai, Quận Bắc Từ Liêm, Hà Nội",
    price: "3.850.000đ - 4.250.000đ",
    rooms: 4,
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function FeaturedProperties() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-yuhouse-navy">Featured Properties</h2>
          <p className="mt-4 text-lg text-gray-600">Discover our selection of premium properties</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {properties.map((property) => (
            <Card key={property.id} className="overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={property.image || "/placeholder.svg"}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <CardContent className="p-4">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="text-lg font-bold text-yuhouse-navy">{property.title}</h3>
                  <span className="text-sm font-medium text-gray-500">{property.id}</span>
                </div>

                <div className="mb-3 flex items-start gap-1">
                  <MapPin className="mt-1 h-4 w-4 flex-shrink-0 text-yuhouse-yellow" />
                  <p className="text-sm text-gray-600 line-clamp-2">{property.address}</p>
                </div>

                <div className="mb-2">
                  <p className="font-bold text-yuhouse-navy">{property.price}</p>
                </div>

                <p className="text-sm text-gray-600">
                  Số phòng còn trống: <span className="font-medium">{property.rooms}</span>
                </p>
              </CardContent>

              <CardFooter className="border-t bg-gray-50 p-4">
                <Button
                  asChild
                  className="w-full bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow"
                >
                  <Link href={`/products/brokerage/${property.id}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            asChild
            variant="outline"
            className="border-yuhouse-navy text-yuhouse-navy hover:bg-yuhouse-navy hover:text-white"
          >
            <Link href="/products/brokerage">View All Properties</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

