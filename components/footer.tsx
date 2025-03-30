import Link from "next/link"
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-yuhouse-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h3 className="mb-4 text-xl font-bold text-yuhouse-yellow">Yuhouse.vn</h3>
            <p className="mb-4">Your trusted partner in finding the perfect home in Vietnam.</p>
            <div className="flex space-x-4">
              <Link href="#" className="text-white hover:text-yuhouse-yellow">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-white hover:text-yuhouse-yellow">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-white hover:text-yuhouse-yellow">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-yuhouse-yellow">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="hover:text-yuhouse-yellow">
                  Company Introduction
                </Link>
              </li>
              <li>
                <Link href="/cooperation" className="hover:text-yuhouse-yellow">
                  Cooperation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-yuhouse-yellow">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/recruitment" className="hover:text-yuhouse-yellow">
                  Recruitment
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-yuhouse-yellow">Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/brokerage" className="hover:text-yuhouse-yellow">
                  Brokerage
                </Link>
              </li>
              <li>
                <Link href="/products/ecosystem" className="hover:text-yuhouse-yellow">
                  Apartment Ecosystem
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-lg font-semibold text-yuhouse-yellow">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-yuhouse-yellow" />
                <span>Hanoi, Vietnam</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-yuhouse-yellow" />
                <span>+84 123 456 789</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-yuhouse-yellow" />
                <span>info@yuhouse.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Yuhouse.vn. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

