import { Building, Home, Users } from "lucide-react"

const services = [
  {
    title: "Hợp tác",
    description:
      "Chúng tôi kết nối người mua và người bán để tìm ra bất động sản phù hợp nhất. Các đại lý giàu kinh nghiệm của chúng tôi cung cấp hướng dẫn cá nhân trong suốt quá trình.",
    icon: Home,
  },
  {
    title: "Hệ sinh thái căn hộ",
    description:
      "Chúng tôi sở hữu một hệ sinh thái căn hộ đa dạng, từ căn hộ cao cấp đến căn hộ giá rẻ, đáp ứng nhu cầu của mọi khách hàng.",
    icon: Building,
  },
]

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-yuhouse-navy">Dịch vụ</h2>
          <p className="mt-4 text-lg text-gray-600">Cung cấp giải pháp bất động sản toàn diện phù hợp với nhu cầu của bạn</p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
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

