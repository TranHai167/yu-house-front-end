"use client"

import { useRef, useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

interface Partner {
  name: string
  logo: string
}

interface PartnerLogosProps {
  partners: Partner[]
  autoScroll?: boolean
  scrollInterval?: number
}

export default function PartnerLogos({ partners, autoScroll = true, scrollInterval = 3000 }: PartnerLogosProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const autoScrollTimerRef = useRef<NodeJS.Timeout | null>(null)

  const checkScrollButtons = () => {
    const container = scrollContainerRef.current
    if (!container) return

    setCanScrollLeft(container.scrollLeft > 0)
    setCanScrollRight(container.scrollLeft < container.scrollWidth - container.clientWidth - 10)
  }

  const scroll = (direction: "left" | "right") => {
    const container = scrollContainerRef.current
    if (!container) return

    const scrollAmount = container.clientWidth / 2
    const newScrollLeft =
      direction === "left" ? container.scrollLeft - scrollAmount : container.scrollLeft + scrollAmount

    container.scrollTo({
      left: newScrollLeft,
      behavior: "smooth",
    })
  }

  const autoScrollLogic = () => {
    const container = scrollContainerRef.current
    if (!container || isPaused) return

    // If we're at the end, go back to the start
    if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      })
    } else {
      // Otherwise, continue scrolling right
      scroll("right")
    }
  }

  useEffect(() => {
    const container = scrollContainerRef.current
    if (container) {
      container.addEventListener("scroll", checkScrollButtons)
      // Initial check
      checkScrollButtons()
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScrollButtons)
      }
    }
  }, [])

  // Set up auto-scrolling
  useEffect(() => {
    if (autoScroll) {
      autoScrollTimerRef.current = setInterval(autoScrollLogic, scrollInterval)
    }

    return () => {
      if (autoScrollTimerRef.current) {
        clearInterval(autoScrollTimerRef.current)
      }
    }
  }, [autoScroll, scrollInterval, isPaused])

  return (
    <div className="relative w-full" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
      <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2 transform">
        <Button
          variant="outline"
          size="icon"
          className={`rounded-full border-yuhouse-navy bg-white text-yuhouse-navy shadow-md hover:bg-yuhouse-yellow hover:text-yuhouse-navy ${
            !canScrollLeft ? "opacity-50" : ""
          }`}
          onClick={() => scroll("left")}
          disabled={!canScrollLeft}
        >
          <ChevronLeft className="h-5 w-5" />
          <span className="sr-only">Scroll left</span>
        </Button>
      </div>

      <div
        ref={scrollContainerRef}
        className="flex w-full gap-8 overflow-x-auto px-12 py-8 scrollbar-hide"
        onScroll={checkScrollButtons}
      >
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex min-w-[180px] flex-shrink-0 items-center justify-center rounded-lg border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-md"
          >
            <Image
              src={partner.logo || "/placeholder.svg"}
              alt={partner.name}
              width={120}
              height={60}
              className="h-auto max-h-12 w-auto object-contain"
            />
          </div>
        ))}
      </div>

      <div className="absolute right-0 top-1/2 z-10 -translate-y-1/2 transform">
        <Button
          variant="outline"
          size="icon"
          className={`rounded-full border-yuhouse-navy bg-white text-yuhouse-navy shadow-md hover:bg-yuhouse-yellow hover:text-yuhouse-navy ${
            !canScrollRight ? "opacity-50" : ""
          }`}
          onClick={() => scroll("right")}
          disabled={!canScrollRight}
        >
          <ChevronRight className="h-5 w-5" />
          <span className="sr-only">Scroll right</span>
        </Button>
      </div>
    </div>
  )
}

