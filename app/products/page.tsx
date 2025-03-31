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
          <h2 className="mb-4 text-2xl font-bold text-yuhouse-navy">Môi giới</h2>
          <p className="mb-6 text-gray-600">
            Kết nối người mua và người bán để tìm ra bất động sản phù hợp nhất. Chúng tôi cung cấp nhiều loại
            bất động sản trên khắp Việt Nam, từ căn hộ và nhà ở đến không gian thương mại. Các đại lý giàu kinh nghiệm của chúng tôi
            cung cấp hướng dẫn cá nhân trong suốt toàn bộ quá trình.
          </p>
          <Button asChild className="bg-yuhouse-navy text-white hover:bg-yuhouse-navy/90">
            <Link href="/products/brokerage">Xem chi tiết</Link>
          </Button>
        </div>

        {/* Apartment Ecosystem */}
        <div className="rounded-lg border bg-white p-8 shadow-md transition-all duration-300 hover:shadow-lg">
          <div className="mb-6 inline-flex rounded-full bg-yuhouse-yellow p-4 text-yuhouse-navy">
            <Building className="h-8 w-8" />
          </div>
          <h2 className="mb-4 text-2xl font-bold text-yuhouse-navy">Hệ sinh thái căn hộ</h2>
          <p className="mb-6 text-gray-600">
            Cung cấp các giải pháp toàn diện cho chủ sở hữu và cư dân bất động sản. Chúng tôi
            cung cấp dịch vụ quản lý bất động sản, dịch vụ bảo trì, xây dựng cộng đồng và các công cụ kỹ thuật số để nâng cao trải nghiệm sống
            và tối đa hóa giá trị bất động sản.
          </p>
          <Button asChild className="bg-yuhouse-navy text-white hover:bg-yuhouse-navy/90">
            <Link href="/products/ecosystem">Xem chi tiết</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

