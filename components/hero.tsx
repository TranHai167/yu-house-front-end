import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useState, useEffect } from "react"
import ImageCarousel from "@/components/image-carousel"
import { motion } from "framer-motion"

const propertyImages = [
  {
    src: "/images/menu/hcm-sample.jpg?height=450&width=650",
    alt: "Luxury Apartment",
    caption: "Luxury Apartment in District 1",
    subCaption: "Ho Chi Minh City, Vietnam",
  },
  {
    src: "/images/menu/danang-sample.jpg?height=450&width=650",
    alt: "Modern Villa",
    caption: "Modern Villa with Pool",
    subCaption: "Da Nang, Vietnam",
  },
  {
    src: "/images/menu/hanoi-sample.jpg?height=450&width=650",
    alt: "Penthouse",
    caption: "Exclusive Penthouse",
    subCaption: "Hanoi, Vietnam",
  },
  {
    src: "/images/menu/nhatrang-sample.jpg?height=450&width=650",
    alt: "Beachfront Property",
    caption: "Beachfront Property",
    subCaption: "Nha Trang, Vietnam",
  },
  {
    src: "/images/menu/hcm-sample2.jpg?height=450&width=650",
    alt: "City Apartment",
    caption: "Modern City Apartment",
    subCaption: "Ho Chi Minh City, Vietnam",
  },
]

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-r from-yuhouse-navy via-yuhouse-navy/90 to-yuhouse-navy/80 py-20 sm:py-28 lg:py-32">
      {/* Background pattern with parallax effect */}
      <div
        className="absolute inset-0 opacity-15"
        style={{
          backgroundImage: "url('/images/menu/info-decor.png?height=800&width=1600')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: isLoaded ? "translateY(-5px) scale(1.05)" : "translateY(0) scale(1)",
          transition: "transform 10s ease-out",
        }}
      />

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-yuhouse-navy/0 via-yuhouse-navy/10 to-yuhouse-navy/30 opacity-70"></div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">

          {/* Text Content - Now on the RIGHT */}
          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
              <span className="block">Tìm kiếm sự hoàn hảo</span>
              <span className="mt-2 block bg-gradient-to-r from-yuhouse-yellow to-yellow-300 bg-clip-text text-transparent">
                cho căn nhà của bạn
              </span>
            </h1>
            <motion.p
              className="mt-6 text-lg leading-8 text-gray-200 drop-shadow-sm lg:text-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Yuhouse.vn cung cấp nhiều loại bất động sản trên khắp Việt Nam. Cho dù bạn đang tìm kiếm căn hộ, nhà ở hay không gian thương mại, chúng tôi đều có giải pháp hoàn hảo dành cho bạn.
            </motion.p>
            <motion.div
              className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
            </motion.div>
          </motion.div>

          {/* Image Carousel - Now on the LEFT */}
          <motion.div
            className="order-1 text-center lg:order-2 lg:text-left"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: isLoaded ? 1 : 0, scale: isLoaded ? 1 : 0.95 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <ImageCarousel
              images={propertyImages}
              className="h-[450px] w-full shadow-2xl transform transition-transform duration-500 hover:scale-[1.02]"
              autoRotate={true}
              interval={5000}
            />
          </motion.div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute -bottom-6 left-0 right-0 h-12 bg-white"
        style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 100%)" }}
      ></div>

      <div className="absolute -top-12 -right-12 h-24 w-24 rounded-full bg-yuhouse-yellow/20 blur-2xl"></div>
      <div className="absolute top-1/3 -left-12 h-32 w-32 rounded-full bg-yuhouse-yellow/10 blur-3xl"></div>
    </div>
  )
}

