"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MessageCircle, X, ChevronUp, MapPin } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactBtn() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => setIsOpen(!isOpen)

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: 0.3 }}
              className="rounded-full shadow-lg"
            >
              <Button
                size="icon"
                className="h-12 w-12 bg-yuhouse-navy text-white hover:bg-yuhouse-navy/90"
                onClick={() => window.open("tel:+84123456789", "_blank")}
                title="Call Us"
              >
                <Phone className="h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="rounded-full shadow-lg"
            >
              <Button
                size="icon"
                className="h-12 w-12 bg-yuhouse-navy text-white hover:bg-yuhouse-navy/90"
                onClick={() => window.open("mailto:contact@yuhouse.vn", "_blank")}
                title="Email Us"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="rounded-full shadow-lg"
            >
              <Button
                size="icon"
                className="h-12 w-12 bg-yuhouse-navy text-white hover:bg-yuhouse-navy/90"
                onClick={() => window.open("https://maps.google.com/?q=YuHouse", "_blank")}
                title="Find Us"
              >
                <MapPin className="h-5 w-5" />
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.2 }}
              className="rounded-full shadow-lg"
            >
              <Button
                size="icon"
                className="h-12 w-12 bg-green-500 text-white hover:bg-green-600"
                onClick={() => window.open("https://wa.me/84123456789", "_blank")}
                title="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </Button>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <Button
        size="icon"
        className={`h-14 w-14 rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? "bg-gray-700 rotate-45" : "bg-yuhouse-yellow"
        } text-yuhouse-navy hover:bg-yuhouse-yellow/90`}
        onClick={toggleOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <ChevronUp className="h-6 w-6" />}
      </Button>
    </div>
  )
}

