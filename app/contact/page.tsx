"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import ContactMap from "@/components/contact-map"

export default function ContactPage() {
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
    // In a real application, you would send the form data to a server
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

  // Office locations with coordinates
  const offices = [
    {
      name: "Ho Chi Minh City (Headquarters)",
      address: "123 Nguyen Hue Street, District 1, Ho Chi Minh City, Vietnam",
      coordinates: [10.7769, 106.7009] as [number, number], // Latitude, Longitude
    },
    {
      name: "Hanoi",
      address: "456 Ba Dinh Street, Ba Dinh District, Hanoi, Vietnam",
      coordinates: [21.0285, 105.8542] as [number, number],
    },
    {
      name: "Da Nang",
      address: "789 Bach Dang Street, Hai Chau District, Da Nang, Vietnam",
      coordinates: [16.0544, 108.2022] as [number, number],
    },
    {
      name: "Nha Trang",
      address: "101 Tran Phu Street, Nha Trang City, Khanh Hoa, Vietnam",
      coordinates: [12.2388, 109.1967] as [number, number],
    },
  ]

  // Default to Ho Chi Minh City office
  const [selectedOffice, setSelectedOffice] = useState(offices[0])

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-yuhouse-navy">Contact Us</h1>
        <p className="mt-4 text-lg text-gray-600">Get in touch with our team for any inquiries or assistance</p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Contact Information */}
        <div>
          <div className="mb-8">
            <h2 className="mb-6 text-2xl font-bold text-yuhouse-navy">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <MapPin className="mt-1 h-6 w-6 flex-shrink-0 text-yuhouse-yellow" />
                <div>
                  <h3 className="font-semibold text-yuhouse-navy">Address</h3>
                  <p className="text-gray-600">123 Nguyen Hue Street, District 1, Ho Chi Minh City, Vietnam</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="mt-1 h-6 w-6 flex-shrink-0 text-yuhouse-yellow" />
                <div>
                  <h3 className="font-semibold text-yuhouse-navy">Phone</h3>
                  <p className="text-gray-600">+84 123 456 789</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="mt-1 h-6 w-6 flex-shrink-0 text-yuhouse-yellow" />
                <div>
                  <h3 className="font-semibold text-yuhouse-navy">Email</h3>
                  <p className="text-gray-600">info@yuhouse.vn</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="mt-1 h-6 w-6 flex-shrink-0 text-yuhouse-yellow" />
                <div>
                  <h3 className="font-semibold text-yuhouse-navy">Business Hours</h3>
                  <p className="text-gray-600">Monday - Friday: 8:00 AM - 6:00 PM</p>
                  <p className="text-gray-600">Saturday: 8:00 AM - 12:00 PM</p>
                  <p className="text-gray-600">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="mb-8">
            <h2 className="mb-4 text-2xl font-bold text-yuhouse-navy">Find Us</h2>
            <ContactMap center={selectedOffice.coordinates} markerText={selectedOffice.name} height="300px" />
          </div>

          {/* Office Locations */}
          <div>
            <h2 className="mb-4 text-2xl font-bold text-yuhouse-navy">Our Offices</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {offices.map((office, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOffice(office)}
                  className={`rounded-lg border p-4 text-left transition-all hover:border-yuhouse-yellow hover:shadow-md ${selectedOffice.name === office.name
                      ? "border-yuhouse-yellow bg-yuhouse-yellow/10 shadow-md"
                      : "border-gray-200 bg-white"
                    }`}
                >
                  <h3 className="mb-2 font-semibold text-yuhouse-navy">{office.name}</h3>
                  <p className="text-sm text-gray-600">{office.address}</p>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="rounded-lg border bg-white p-8 shadow-md">
          <h2 className="mb-6 text-2xl font-bold text-yuhouse-navy">Send Us a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message"
                rows={5}
                required
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow"
            >
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}

