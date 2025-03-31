import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function CallToAction() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    alert("Thank you for your message. We will get back to you soon!")
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
  }

  return (
    <section
      className="py-16 min-h-[700px] flex items-center bg-no-repeat bg-center"
      style={{
        backgroundColor: "rgb(248, 248, 248)",
        backgroundImage: "url('/images/menu/man.png')",
        backgroundSize: "contain",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-end">
          {/* Contact Form */}
          <div className="backdrop-blur-md bg-white/80 border border-gray-200 rounded-2xl p-10 shadow-xl w-full max-w-lg">
            <h2 className="mb-6 text-3xl font-bold text-yuhouse-navy">Liên hệ với chúng tôi</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Họ và tên</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Số điện thoại</Label>
                  <Input
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    placeholder="(123) 4567890"
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <Label htmlFor="subject">Chủ đề</Label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Tư vấn về ..."
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="message">Thông điệp</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Nội dung yêu cầu..."
                  rows={4}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow transition-all"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>

  )
}