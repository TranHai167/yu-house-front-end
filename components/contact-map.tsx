"use client"

import { useEffect, useRef } from "react"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

interface ContactMapProps {
    center: [number, number]
    zoom?: number
    markerText?: string
    height?: string
}

export default function ContactMap({
    center,
    zoom = 15,
    markerText = "Our Office",
    height = "400px",
}: ContactMapProps) {
    const mapRef = useRef<HTMLDivElement>(null)
    const mapInstanceRef = useRef<L.Map | null>(null)

    useEffect(() => {
        if (typeof window === "undefined") return

        // Only create the map if it doesn't exist yet
        if (!mapInstanceRef.current && mapRef.current) {
            // Create map
            const map = L.map(mapRef.current).setView(center, zoom)

            // Add OpenStreetMap tiles
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            }).addTo(map)

            // Create custom icon
            const customIcon = L.divIcon({
                html: `<div class="flex h-8 w-8 items-center justify-center rounded-full bg-yuhouse-navy text-yuhouse-yellow">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-map-pin"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
               </div>`,
                className: "",
                iconSize: [32, 32],
                iconAnchor: [16, 32],
            })

            // Add marker
            const marker = L.marker(center, { icon: customIcon }).addTo(map)

            // Add popup
            marker.bindPopup(`<b>${markerText}</b>`).openPopup()

            // Store map instance
            mapInstanceRef.current = map

            // Resize map when container size changes
            map.invalidateSize()
        }

        // Cleanup function
        return () => {
            if (mapInstanceRef.current) {
                mapInstanceRef.current.remove()
                mapInstanceRef.current = null
            }
        }
    }, [center, zoom, markerText])

    return <div ref={mapRef} className="rounded-lg border shadow-md" style={{ height, width: "100%" }} />
}

