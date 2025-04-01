import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Heart, Clock, Award } from "lucide-react"

const jobOpenings = [
  {
    "title": "Môi giới bất động sản",
    "location": "Thành phố Hồ Chí Minh",
    "type": "Toàn thời gian",
    "description": "Chúng tôi đang tìm kiếm các nhân viên môi giới bất động sản có kinh nghiệm để gia nhập đội ngũ tại Thành phố Hồ Chí Minh. ",
    "requirements": [
      "Ít nhất 2 năm kinh nghiệm trong lĩnh vực kinh doanh bất động sản",
      "Kỹ năng giao tiếp và đàm phán tốt",
      "Hiểu biết về thị trường bất động sản tại Thành phố Hồ Chí Minh",
      "Có chứng chỉ hành nghề môi giới bất động sản hợp lệ",
      "Thông thạo tiếng Việt và tiếng Anh"
    ]
  },
  {
    "title": "Quản lý bất động sản",
    "location": "Hà Nội",
    "type": "Toàn thời gian",
    "description": "Chúng tôi đang tìm kiếm một quản lý bất động sản để giám sát danh mục bất động sản của chúng tôi tại Hà Nội. Ứng viên lý tưởng cần có kinh nghiệm trong lĩnh vực quản lý bất động sản và kỹ năng tổ chức tốt.",
    "requirements": [
      "Ít nhất 3 năm kinh nghiệm trong lĩnh vực quản lý bất động sản",
      "Kỹ năng tổ chức và lãnh đạo tốt",
      "Kiến thức về bảo trì bất động sản và quan hệ với khách thuê",
      "Kinh nghiệm sử dụng phần mềm quản lý bất động sản",
      "Thông thạo tiếng Việt và tiếng Anh"
    ]
  },
  {
    "title": "Chuyên viên tiếp thị",
    "location": "Thành phố Hồ Chí Minh",
    "type": "Toàn thời gian",
    "description": "Chúng tôi đang tìm kiếm một chuyên viên tiếp thị để quảng bá các sản phẩm và dịch vụ của chúng tôi. Ứng viên lý tưởng cần có kinh nghiệm trong tiếp thị số và sáng tạo nội dung.",
    "requirements": [
      "Ít nhất 2 năm kinh nghiệm trong lĩnh vực tiếp thị, ưu tiên ngành bất động sản",
      "Kỹ năng tiếp thị số vững vàng, bao gồm mạng xã hội và SEO",
      "Kinh nghiệm trong sáng tạo nội dung và thiết kế đồ họa",
      "Hiểu biết về phân tích tiếp thị và báo cáo",
      "Thông thạo tiếng Việt và tiếng Anh"
    ]
  },
  {
    "title": "Nhân viên chăm sóc khách hàng",
    "location": "Đà Nẵng",
    "type": "Toàn thời gian",
    "description": "Chúng tôi đang tìm kiếm một nhân viên chăm sóc khách hàng để hỗ trợ khách hàng tại Đà Nẵng. Ứng viên lý tưởng cần có kỹ năng giao tiếp xuất sắc và tư duy hướng tới khách hàng.",
    "requirements": [
      "Ít nhất 1 năm kinh nghiệm trong lĩnh vực chăm sóc khách hàng",
      "Kỹ năng giao tiếp và giải quyết vấn đề tốt",
      "Kiên nhẫn và thấu hiểu khi làm việc với khách hàng",
      "Kiến thức cơ bản về thuật ngữ bất động sản",
      "Thông thạo tiếng Việt và tiếng Anh"
    ]
  },
]

const benefits = [
  {
    "title": "Mức lương cạnh tranh",
    "description": "Chúng tôi cung cấp mức lương cạnh tranh và thưởng theo hiệu suất để ghi nhận sự cống hiến và nỗ lực của bạn.",
    "icon": TrendingUp
  },
  {
    "title": "Bảo hiểm y tế",
    "description": "Chế độ bảo hiểm y tế toàn diện dành cho bạn và gia đình để đảm bảo sức khỏe và an sinh.",
    "icon": Heart
  },
  {
    "title": "Giờ làm việc linh hoạt",
    "description": "Chúng tôi hiểu tầm quan trọng của cân bằng giữa công việc và cuộc sống, vì vậy cung cấp khung giờ làm việc linh hoạt để phù hợp với nhu cầu của bạn.",
    "icon": Clock
  },
  {
    "title": "Phát triển chuyên môn",
    "description": "Chúng tôi đầu tư vào sự phát triển của nhân viên thông qua các chương trình đào tạo, hội thảo và cơ hội thăng tiến trong sự nghiệp.",
    "icon": Award
  }
]

export default function RecruitmentPage() {
  return (
    <div className="container mx-auto px-4 py-16">
    <div className="mb-12 text-center">
      <h1 className="text-4xl font-bold text-yuhouse-navy">Tham Gia Đội Ngũ Của Chúng Tôi</h1>
      <p className="mt-4 text-lg text-gray-600">Khám phá cơ hội nghề nghiệp tại Yuhouse.vn</p>
    </div>
  
    {/* Phần Giới Thiệu */}
    <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
      <div>
        <h2 className="mb-4 text-3xl font-bold text-yuhouse-navy">Tại Sao Chọn Chúng Tôi?</h2>
        <p className="mb-6 text-lg text-gray-600">
          Tại Yuhouse.vn, chúng tôi đang xây dựng một đội ngũ chuyên nghiệp đầy nhiệt huyết, cam kết đổi mới ngành bất động sản tại Việt Nam. 
          Chúng tôi mang đến môi trường làm việc năng động, chế độ đãi ngộ cạnh tranh và cơ hội phát triển sự nghiệp.
        </p>
        <p className="mb-6 text-lg text-gray-600">
          Nếu bạn đang tìm kiếm một sự nghiệp đầy thách thức và cơ hội trong lĩnh vực bất động sản, hãy khám phá các vị trí tuyển dụng hiện tại của chúng tôi và tham gia đội ngũ.
        </p>
        <Button className="bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow">
          Xem Vị Trí Tuyển Dụng
        </Button>
      </div>
      <div className="relative h-[300px] overflow-hidden rounded-lg lg:h-[400px]">
        <Image src="/placeholder.svg?height=400&width=600" alt="Đội ngũ tại Yuhouse.vn" fill className="object-cover" />
      </div>
    </div>
  
    {/* Quyền Lợi Nhân Viên */}
    <div className="mb-16">
      <h2 className="mb-8 text-center text-2xl font-bold text-yuhouse-navy">Quyền Lợi Nhân Viên</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <Card key={index} className="transition-all duration-300 hover:shadow-lg">
            <CardContent className="p-6">
              <div className="mb-4 inline-flex rounded-full bg-yuhouse-yellow p-3 text-yuhouse-navy">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-bold text-yuhouse-navy">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  
    {/* Cơ Hội Nghề Nghiệp */}
    <div className="mb-16">
  <h2 className="mb-8 text-center text-2xl font-bold text-yuhouse-navy">Cơ Hội Nghề Nghiệp</h2>
  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
    {jobOpenings.map((job, index) => (
      <Card key={index} className="transition-all duration-300 hover:shadow-lg">
        <CardContent className="p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
            <h3 className="text-xl font-bold text-yuhouse-navy">{job.title}</h3>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-yuhouse-yellow px-3 py-1 text-xs font-medium text-yuhouse-navy">
                {job.location}
              </span>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                {job.type}
              </span>
            </div>
          </div>
          <p className="mb-4 text-gray-600">{job.description}</p>
          <div className="mb-6">
            <h4 className="mb-2 font-semibold text-yuhouse-navy">Yêu Cầu:</h4>
            <ul className="space-y-1">
              {job.requirements.map((req, i) => (
                <li key={i} className="flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yuhouse-yellow"></div>
                  <span className="text-sm text-gray-600">{req}</span>
                </li>
              ))}
            </ul>
          </div>
          <Button className="w-full bg-yuhouse-navy text-white hover:bg-yuhouse-navy/90">Ứng Tuyển Ngay</Button>
        </CardContent>
      </Card>
    ))}
  </div>
</div>
  
    {/* Quy Trình Tuyển Dụng */}
    <div className="mb-16">
      <h2 className="mb-8 text-center text-2xl font-bold text-yuhouse-navy">Quy Trình Tuyển Dụng</h2>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
        <div className="relative rounded-lg border bg-white p-6 text-center shadow-md">
          <div className="absolute -top-4 left-1/2 inline-flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-yuhouse-yellow text-yuhouse-navy">
            1
          </div>
          <h3 className="mb-2 mt-4 text-lg font-bold text-yuhouse-navy">Nộp Hồ Sơ</h3>
          <p className="text-sm text-gray-600">
            Gửi đơn ứng tuyển qua cổng thông tin trực tuyến của chúng tôi, bao gồm CV và thư xin việc.
          </p>
        </div>
        <div className="relative rounded-lg border bg-white p-6 text-center shadow-md">
          <div className="absolute -top-4 left-1/2 inline-flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-yuhouse-yellow text-yuhouse-navy">
            2
          </div>
          <h3 className="mb-2 mt-4 text-lg font-bold text-yuhouse-navy">Sàng Lọc Ban Đầu</h3>
          <p className="text-sm text-gray-600">
            Bộ phận nhân sự sẽ xem xét hồ sơ và liên hệ để phỏng vấn sơ bộ qua điện thoại.
          </p>
        </div>
        <div className="relative rounded-lg border bg-white p-6 text-center shadow-md">
          <div className="absolute -top-4 left-1/2 inline-flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-yuhouse-yellow text-yuhouse-navy">
            3
          </div>
          <h3 className="mb-2 mt-4 text-lg font-bold text-yuhouse-navy">Phỏng Vấn</h3>
          <p className="text-sm text-gray-600">
            Nếu được chọn, bạn sẽ tham gia phỏng vấn trực tiếp hoặc trực tuyến với quản lý tuyển dụng.
          </p>
        </div>
        <div className="relative rounded-lg border bg-white p-6 text-center shadow-md">
          <div className="absolute -top-4 left-1/2 inline-flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-yuhouse-yellow text-yuhouse-navy">
            4
          </div>
          <h3 className="mb-2 mt-4 text-lg font-bold text-yuhouse-navy">Nhận Offer</h3>
          <p className="text-sm text-gray-600">
            Ứng viên được chọn sẽ nhận được thư mời làm việc và thông tin về quy trình onboarding.
          </p>
        </div>
      </div>
    </div>
  </div>
  
  )
}

