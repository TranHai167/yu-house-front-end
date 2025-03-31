import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

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
  {
    id: "CT0092",
    title: "Quận Cầu Giấy",
    address: "Số 15 Đường Trung Kính, Phường Trung Hòa, Quận Cầu Giấy, Hà Nội",
    price: "6.500.000đ - 7.200.000đ",
    rooms: 3,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "CT0078",
    title: "Quận Hai Bà Trưng",
    address: "Số 45 Ngõ 76 Phố Minh Khai, Phường Minh Khai, Quận Hai Bà Trưng, Hà Nội",
    price: "5.200.000đ - 5.800.000đ",
    rooms: 2,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "CT0103",
    title: "Quận Hoàng Mai",
    address: "Số 28 Ngõ 568 Đường Trương Định, Phường Giáp Bát, Quận Hoàng Mai, Hà Nội",
    price: "4.100.000đ - 4.800.000đ",
    rooms: 3,
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    id: "CT0067",
    title: "Quận Long Biên",
    address: "Số 12 Ngõ 42 Phố Ngọc Thụy, Phường Ngọc Thụy, Quận Long Biên, Hà Nội",
    price: "3.950.000đ - 4.500.000đ",
    rooms: 2,
    image: "/placeholder.svg?height=300&width=400",
  },
]

export default function FeaturedProperties() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-yuhouse-navy">Danh sách bất động sản</h1>
          <p className="mt-4 text-lg text-gray-600">Tìm ngôi nhà lý tưởng của bạn từ danh sách bất động sản rộng lớn của chúng tôi</p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12 rounded-lg border bg-white p-6 shadow-md">
          <h2 className="mb-6 text-xl font-bold text-yuhouse-navy">Tìm kiếm căn hộ</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <Label htmlFor="location">Vị trí</Label>
              <Select defaultValue="all">
                <SelectTrigger id="location">
                  <SelectValue placeholder="Select location" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Locations</SelectItem>
                  <SelectItem value="bac-tu-liem">Quận Bắc Từ Liêm</SelectItem>
                  <SelectItem value="cau-giay">Quận Cầu Giấy</SelectItem>
                  <SelectItem value="hai-ba-trung">Quận Hai Bà Trưng</SelectItem>
                  <SelectItem value="hoang-mai">Quận Hoàng Mai</SelectItem>
                  <SelectItem value="long-bien">Quận Long Biên</SelectItem>
                  <SelectItem value="tay-ho">Quận Tây Hồ</SelectItem>
                  <SelectItem value="thanh-tri">Huyện Thanh Trì</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="price">Phạm vi giá</Label>
              <Select defaultValue="all">
                <SelectTrigger id="price">
                  <SelectValue placeholder="Select price range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Prices</SelectItem>
                  <SelectItem value="3-4">3.000.000đ - 4.000.000đ</SelectItem>
                  <SelectItem value="4-5">4.000.000đ - 5.000.000đ</SelectItem>
                  <SelectItem value="5-6">5.000.000đ - 6.000.000đ</SelectItem>
                  <SelectItem value="6-7">6.000.000đ - 7.000.000đ</SelectItem>
                  <SelectItem value="7+">7.000.000đ+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="rooms">Phòng</Label>
              <Select defaultValue="any">
                <SelectTrigger id="rooms">
                  <SelectValue placeholder="Select rooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any</SelectItem>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="property-id">Property ID</Label>
              <Input id="property-id" placeholder="e.g. CT0085" />
            </div>
          </div>

          <div className="mt-6 flex justify-center">
            <Button className="bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow">
              Tìm kiếm
            </Button>
          </div>
        </div>

        {/* Property Listings */}
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
                  <Link href={`/products/brokerage/${property.id}`}>Xem chi tiết</Link>
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
            <Link href="/products/brokerage">Xem thêm</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

