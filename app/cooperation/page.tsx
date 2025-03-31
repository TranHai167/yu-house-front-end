import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Building, Handshake, TrendingUp, Users, Briefcase, Key } from "lucide-react"
import Marquee from "react-fast-marquee";
import CooperationCard from "@/components/cooperation-card"

const partnersRow1 = [
  "/images/partners/augges.jpg",
  "/images/partners/rasch.png",
  "/images/partners/stadt-marburg-logo-bildmarke.jpg",
  "/images/partners/resident.jpg",
  "/images/partners/cartier-logo.png",
  "/images/partners/base.png",
  "/images/partners/augges.jpg",
  "/images/partners/casadeco.jpg",
  "/images/partners/batdongsan.jpg",
];

const partnersRow2 = [
  "/images/partners/casadeco.jpg",
  "/images/partners/augges.jpg",
  "/images/partners/rasch.png",
  "/images/partners/batdongsan.jpg",
  "/images/partners/base.png",
  "/images/partners/cartier-logo.png",
  "/images/partners/viglacera.png",
  "/images/partners/stadt-marburg-logo-bildmarke.jpg",
  "/images/partners/augges.jpg",
];

const partnerTypes = [
  {
    title: "Chủ sở hữu bất động sản",
    description: "Hợp tác với chúng tôi để liệt kê bất động sản của bạn và tiếp cận nhiều khách hàng tiềm năng hơn.",
    icon: Building,
  },
  {
    title: "Các đại lý bất động sản",
    description: "Hợp tác với chúng tôi để mở rộng tầm ảnh hưởng và cung cấp dịch vụ tốt hơn cho khách hàng.",
    icon: Handshake,
  },
  {
    title: "Nhà đầu tư",
    description: "Đầu tư vào nền tảng đang phát triển của chúng tôi và trở thành một phần của tương lai bất động sản Việt Nam.",
    icon: TrendingUp,
  },
  {
    title: "Môi giới",
    description: "Cung cấp dịch vụ của bạn cho khách hàng của chúng tôi và trở thành một phần của hệ sinh thái toàn diện.",
    icon: Users,
  },
]

// Cooperation packages
const brokerageFeatures = [
  { text: "Property listing on Yuhouse.vn platform", included: true },
  { text: "Professional photography of your property", included: true },
  { text: "Tenant screening and verification", included: true },
  { text: "Lease agreement preparation", included: true },
  { text: "Marketing across multiple channels", included: true },
  { text: "Regular market analysis and pricing advice", included: true },
  { text: "24/7 customer support", included: true },
]

const buildingManagementFeatures = [
  { text: "Complete building operations management", included: true },
  { text: "Tenant relations and communication", included: true },
  { text: "Maintenance and repair coordination", included: true },
  { text: "Security services management", included: true },
  { text: "Financial reporting and analysis", included: true },
  { text: "Utility management and optimization", included: true },
  { text: "Regular property inspections", included: true },
]

const subLeaseFeatures = [
  { text: "Guaranteed monthly income", included: true },
  { text: "Property maintenance and repairs", included: true },
  { text: "Tenant management and relations", included: true },
  { text: "No vacancy periods or income loss", included: true },
  { text: "Regular property condition reports", included: true },
  { text: "Professional property marketing", included: true },
  { text: "End-of-lease property restoration", included: true },
]

export default function CooperationPage() {
  return (
    <div className="w-full mx-auto px-4 py-16 relative">
      {/* Background image - sử dụng filter grayscale để chuyển thành trắng đen */}
      <div className="container mx-auto px-4 py-16 relative">
        {/* Background với 2 ảnh */}
        <div className="absolute inset-0 -z-10 h-full w-full">
          {/* Ảnh bên trái */}
          <div
            className="absolute left-0 top-0 h-full w-1/2 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('https://tingtong.vn/template/assets/images/homepage/info_decor.png')",
              filter: "grayscale(100%)",
            }}
          ></div>
          {/* Ảnh bên phải */}
          <div
            className="absolute right-0 top-0 h-full w-1/2 bg-cover bg-center opacity-20"
            style={{
              backgroundImage: "url('/images/partners/background-right.png')",
              filter: "grayscale(100%)",
            }}
          ></div>
        </div>

        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-yuhouse-navy relative inline-block">
            Hợp Tác
            {/* Optional: Thêm lớp phủ để chữ nổi bật hơn trên background */}
            <span className="absolute inset-0 bg-white opacity-80 -z-10 rounded-lg scale-110"></span>
          </h1>
          <p className="mt-4 text-lg text-gray-600">Khám phá cơ hội hợp tác cùng Yuhouse</p>
        </div>
      </div>

      {/* Phần giới thiệu */}
      <div className="container mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-yuhouse-navy">Hợp Tác Cùng Chúng Tôi</h2>
          <p className="mb-6 text-lg text-gray-600">
            Tại Yuhouse.vn, chúng tôi tin vào sức mạnh của sự hợp tác. Bằng cách làm việc cùng nhau, chúng tôi có thể cung cấp
            dịch vụ tốt hơn cho khách hàng và thúc đẩy sự phát triển của ngành bất động sản tại Việt Nam.
          </p>
          <p className="mb-6 text-lg text-gray-600">
            Cho dù bạn là chủ sở hữu bất động sản, đại lý bất động sản, nhà đầu tư hay nhà cung cấp dịch vụ, chúng tôi mời bạn khám phá
            cơ hội hợp tác với chúng tôi.
          </p>
          <Button className="bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow">
            Trở Thành Đối Tác
          </Button>
        </div>
        <div className="relative h-[300px] overflow-hidden rounded-lg shadow-lg lg:h-[400px]">
          <Image src="/images/partners/cooperate.png" alt="Hợp tác" fill className="object-cover" />
        </div>
      </div>

      {/* NEW SECTION: Cooperation Packages */}
      <div className="container mb-16">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-bold text-yuhouse-navy">Các gói hợp tác</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Choose the partnership model that best suits your needs and maximize the value of your real estate assets
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <CooperationCard
            title="Brokerage Package"
            description="Let us help you find the perfect tenants for your apartments, buildings, or offices with our comprehensive brokerage services."
            price="Commission: 8% of annual rent"
            features={brokerageFeatures}
            icon={<Key className="h-6 w-6" />}
          />

          <CooperationCard
            title="Building Management"
            description="We take care of the entire building operation, providing professional management services with fees calculated per room."
            price="From $10 per room/month"
            features={buildingManagementFeatures}
            icon={<Building className="h-6 w-6" />}
          />

          <CooperationCard
            title="Rental & Sub-lease"
            description="Yuhouse will sub-lease your property and handle all aspects of renting it out, guaranteeing you a stable monthly income."
            price="Guaranteed fixed income"
            features={subLeaseFeatures}
            icon={<Briefcase className="h-6 w-6" />}
          />
        </div>

        <div className="mt-8 text-center">
          <p className="mb-4 text-gray-600">
            Not sure which package is right for you? Contact us for a personalized consultation.
          </p>
          <Button className="bg-yuhouse-navy text-white hover:bg-yuhouse-yellow hover:text-yuhouse-navy">
            Request Custom Quote
          </Button>
        </div>
      </div>

      {/* Benefits */}
      <div className="container mb-16 rounded-lg bg-yuhouse-navy p-8 text-white">
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

      {/* Đối tượng hợp tác */}
      <div className="container mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-yuhouse-navy">Ai Có Thể Hợp Tác Cùng Chúng Tôi?</h2>
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

      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-yuhouse-navy">Các đối tác đồng hành</h2>
        <div className="space-y-4">
          <Marquee speed={40} direction="right" gradient={false}>
            {partnersRow1.map((src, index) => (
              <div key={index} className="mx-4">
                <Image src={src} alt="Partner Logo" width={120} height={80} />
              </div>
            ))}
          </Marquee>

          <Marquee speed={40} direction="left" gradient={false}>
            {partnersRow2.map((src, index) => (
              <div key={index} className="mx-4">
                <Image src={src} alt="Partner Logo" width={120} height={80} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>

      {/* Kêu gọi hành động */}
      <div className="container rounded-lg border bg-white p-8 text-center shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-yuhouse-navy">Sẵn Sàng Hợp Tác Cùng Chúng Tôi?</h2>
        <p className="mb-6 text-lg text-gray-600">
          Liên hệ ngay để khám phá cơ hội hợp tác cùng Yuhouse.vn.
        </p>
        <Button className="bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow">
          Liên Hệ Ngay
        </Button>
      </div>
    </div>
  )
}
