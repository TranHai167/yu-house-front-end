"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Giới thiệu", href: "/about" },
  { name: "Cooperation", href: "/cooperation" },
  { name: "Contact", href: "/contact" },
  { name: "Tuyển dụng", href: "/recruitment" },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  const toggleSubmenu = (name: string) => {
    setActiveSubmenu(activeSubmenu === name ? null : name)
  }

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 overflow-hidden rounded-full bg-yuhouse-navy">
              <div className="absolute inset-0 flex items-center justify-center text-yuhouse-yellow font-bold text-xl">
                Y
              </div>
            </div>
            <span className="text-xl font-bold text-yuhouse-navy">Yuhouse.vn</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex lg:items-center lg:space-x-6">
          {navItems.map((item) => (
            <div key={item.name} className="relative group">
              <Link
                href={item.href}
                className="text-base font-medium text-gray-700 hover:text-yuhouse-navy transition-colors"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        <div className="hidden lg:block">
          <Button className="bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow">
            Contact Us
          </Button>
        </div>

        {/* Mobile Navigation Toggle */}
        <div className="lg:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "fixed inset-0 z-50 bg-white pt-16 transition-transform duration-300 lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <div key={item.name} className="border-b border-gray-100 pb-2">
              </div>
            ))}
            <Button
              className="mt-4 w-full bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

