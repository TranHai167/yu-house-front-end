"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

interface ImageCarouselProps {
    images: {
        src: string
        alt: string
        caption?: string
        subCaption?: string
    }[]
    autoRotate?: boolean
    interval?: number
    showControls?: boolean
    showIndicators?: boolean
    className?: string
}

export default function ImageCarousel({
    images,
    autoRotate = true,
    interval = 5000,
    showControls = true,
    showIndicators = true,
    className = "",
}: ImageCarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isHovering, setIsHovering] = useState(false)

    const goToNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, [images.length])

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }, [images.length])

    const goToSlide = useCallback((index: number) => {
        setCurrentIndex(index)
    }, [])

    // Auto-rotation effect
    useEffect(() => {
        if (!autoRotate || isHovering) return

        const timer = setInterval(goToNext, interval)
        return () => clearInterval(timer)
    }, [autoRotate, interval, goToNext, isHovering])

    return (
        <div
            className={`relative overflow-hidden rounded-lg ${className}`}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            {/* Glowing border effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-yuhouse-yellow/80 to-yuhouse-yellow/30 rounded-lg blur-sm"></div>

            {/* Images */}
            <div className="relative h-full w-full overflow-hidden rounded-lg">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative h-full w-full"
                    >
                        <Image
                            src={images[currentIndex].src || "/placeholder.svg"}
                            alt={images[currentIndex].alt}
                            fill
                            className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-yuhouse-navy/60 to-transparent"></div>

                        {/* Caption */}
                        {(images[currentIndex].caption || images[currentIndex].subCaption) && (
                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                                <div className="rounded-full bg-yuhouse-yellow/90 px-3 py-1 text-xs font-semibold text-yuhouse-navy inline-block mb-2">
                                    Featured Property
                                </div>
                                {images[currentIndex].caption && (
                                    <h3 className="text-xl font-bold drop-shadow-md">{images[currentIndex].caption}</h3>
                                )}
                                {images[currentIndex].subCaption && (
                                    <p className="text-sm text-gray-200 drop-shadow-sm">{images[currentIndex].subCaption}</p>
                                )}
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Controls */}
            {showControls && (
                <>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
                        onClick={goToPrevious}
                    >
                        <ChevronLeft className="h-6 w-6" />
                        <span className="sr-only">Previous</span>
                    </Button>
                    <Button
                        variant="ghost"
                        size="icon"
                        className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/30 p-2 text-white hover:bg-black/50"
                        onClick={goToNext}
                    >
                        <ChevronRight className="h-6 w-6" />
                        <span className="sr-only">Next</span>
                    </Button>
                </>
            )}

            {/* Indicators */}
            {showIndicators && (
                <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            className={`h-2 w-2 rounded-full transition-all ${index === currentIndex ? "w-6 bg-yuhouse-yellow" : "bg-white/50 hover:bg-white/80"
                                }`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            )}
        </div>
    )
}

