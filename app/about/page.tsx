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
        <h1 className="text-4xl font-bold text-yuhouse-navy">Giới thiệu về Yuhouse</h1>
        <p className="mt-4 text-lg text-gray-600">
         Sứ mệnh của chúng tôi
        </p>
      </div>

      {/* Key Metrics Section - UPDATED NUMBERS */}
      <div className="mb-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-yuhouse-navy p-6 text-white shadow-lg transition-transform duration-300 hover:scale-105">
            <StatsCounter end={10000} title="Phòng đã cho thuê" className="text-white" titleClassName="text-gray-300" />
          </div>

          <div className="rounded-lg bg-yuhouse-yellow p-6 text-yuhouse-navy shadow-lg transition-transform duration-300 hover:scale-105">
            <StatsCounter end={5000} title="Khách hàng tin tưởng" className="text-yuhouse-navy" />
          </div>

          <div className="rounded-lg bg-white p-6 text-yuhouse-navy shadow-lg transition-transform duration-300 hover:scale-105">
            <StatsCounter end={8} title="Đơn vị hợp tác" className="text-yuhouse-navy" />
          </div>
        </div>
      </div>

      {/* Company Overview - UPDATED CONTENT */}
      <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
        <div className="order-2 lg:order-1">
          <h2 className="mb-4 text-3xl font-bold text-yuhouse-navy">Về chúng tôi</h2>
          <p className="mb-4 text-lg text-gray-600">
          Được thành lập vào năm 2018, Yuhouse.vn đã nhanh chóng phát triển để trở thành nền tảng bất động sản hàng đầu của Việt Nam.
           Cách tiếp cận sáng tạo của chúng tôi kết hợp công nghệ tiên tiến với chuyên môn thị trường sâu sắc để tạo ra các kết nối liền mạch giữa chủ sở hữu tài sản, nhà đầu tư và người tìm kiếm nhà.
          </p>
          <p className="mb-6 text-lg text-gray-600">
          Với sự hiện diện tại các thành phố lớn trên khắp Việt Nam bao gồm Hà Nội, 
          Thành phố Hồ Chí Minh, Da Nang và NHA, chúng tôi cung cấp các giải pháp toàn diện cho các tài sản dân cư, thương mại và đầu tư. Nhóm của chúng tôi gồm hơn 200 chuyên gia bất động sản cam kết cung cấp dịch vụ cá nhân và hướng dẫn chuyên gia trong mọi giao dịch.
          </p>
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
      {/* <div className="mb-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-yuhouse-navy">Our Strategic Partners</h2>
          <p className="mt-4 text-lg text-gray-600">
            We collaborate with leading companies in Vietnam to provide the best solutions for our clients
          </p>
        </div>

        <PartnerLogos partners={partners} autoScroll={true} scrollInterval={3000} />
      </div> */}

      {/* Mission and Vision */}
      <div className="mb-16 rounded-lg bg-yuhouse-navy p-8 text-white">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-yuhouse-yellow">Sứ mệnh của chúng tôi</h2>
            <p className="text-lg">
            Để cách mạng hóa thị trường bất động sản tại Việt Nam bằng cách cung cấp các giải pháp minh bạch, hiệu quả và sáng tạo kết nối chủ sở hữu tài sản với người thuê và người mua, đồng thời nâng cao trải nghiệm bất động sản tổng thể cho tất cả các bên liên quan.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-2xl font-bold text-yuhouse-yellow">Tầm nhìn</h2>
            <p className="text-lg">
            Để trở thành nền tảng bất động sản hàng đầu tại Việt Nam, được biết đến với cam kết xuất sắc, đổi mới và sự hài lòng của khách hàng. Chúng tôi mong muốn thiết lập các tiêu chuẩn mới trong ngành và đóng góp cho sự phát triển của các cộng đồng bền vững và sôi động.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-yuhouse-navy">Giá trị cốt lõi</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-yuhouse-yellow p-4 text-yuhouse-navy">
              <div className="text-2xl font-bold">1</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-yuhouse-navy">Chính trực</h3>
            <p className="text-gray-600">
            Chúng tôi tiến hành kinh doanh với các tiêu chuẩn cao nhất về sự trung thực, minh bạch và hành vi đạo đức.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-yuhouse-yellow p-4 text-yuhouse-navy">
              <div className="text-2xl font-bold">2</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-yuhouse-navy">Sự đổi mới</h3>
            <p className="text-gray-600">
            Chúng tôi liên tục tìm kiếm những cách mới và tốt hơn để phục vụ khách hàng của chúng tôi và cải thiện trải nghiệm bất động sản.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-yuhouse-yellow p-4 text-yuhouse-navy">
              <div className="text-2xl font-bold">3</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-yuhouse-navy">Xuất sắc</h3>
            <p className="text-gray-600">
            Chúng tôi phấn đấu cho sự xuất sắc trong mọi thứ chúng tôi làm, từ dịch vụ khách hàng đến quản lý tài sản.
            </p>
          </div>
          <div className="rounded-lg border bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg">
            <div className="mx-auto mb-4 inline-flex rounded-full bg-yuhouse-yellow p-4 text-yuhouse-navy">
              <div className="text-2xl font-bold">4</div>
            </div>
            <h3 className="mb-2 text-xl font-bold text-yuhouse-navy">Customer Focus</h3>
            <p className="text-gray-600">
            Chúng tôi đặt khách hàng của chúng tôi vào trung tâm của mọi thứ chúng tôi làm, đảm bảo nhu cầu và kỳ vọng của họ được đáp ứng.
            </p>
          </div>
        </div>
      </div>

      {/* Team */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-3xl font-bold text-yuhouse-navy">Leadership Team</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg border bg-white p-6 text-center shadow-md">
            <div className="mx-auto mb-4 h-32 w-32 overflow-hidden rounded-full bg-yuhouse-navy">
              <div className="flex h-full w-full items-center justify-center text-3xl font-bold text-white">NT</div>
            </div>
            <h3 className="mb-1 text-xl font-bold text-yuhouse-navy">Nguyen Tuan</h3>
            <p className="mb-4 text-sm text-gray-500">Founder & CEO</p>
            <p className="text-gray-600">
            Với hơn 15 năm kinh nghiệm về bất động sản, Nguyễn Tuân đã thành lập yuhouse.vn với tầm nhìn để biến đổi
            Ngành công nghiệp.
            </p>
          </div>
          
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-lg border bg-white p-8 text-center shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-yuhouse-navy">Tham gia cùng chúng tôi</h2>
        <p className="mb-6 text-lg text-gray-600">
        Cho dù bạn đang tìm kiếm một tài sản, tìm cách liệt kê tài sản của mình hoặc quan tâm đến các dịch vụ của chúng tôi, chúng tôi mời
        Bạn tham gia cùng chúng tôi trên hành trình của chúng tôi để biến đổi thị trường bất động sản tại Việt Nam.
        </p>
        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
          <Button className="bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow">
            Liên hệ
          </Button>
        </div>
      </div>
    </div>
  )
}

