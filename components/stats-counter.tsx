"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
  titleClassName?: string
  title: string
}

export default function StatsCounter({
  end,
  duration = 2000,
  suffix = "",
  prefix = "",
  className,
  titleClassName,
  title,
}: CounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    const step = Math.ceil(end / (duration / 50))

    const updateCount = () => {
      countRef.current += step
      if (countRef.current >= end) {
        countRef.current = end
        setCount(end)
        if (timerRef.current) clearInterval(timerRef.current)
      } else {
        setCount(countRef.current)
      }
    }

    timerRef.current = setInterval(updateCount, 50)

    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [end, duration])

  return (
    <div className={cn("flex flex-col items-center justify-center text-center", className)}>
      <div className="text-4xl font-bold md:text-5xl lg:text-6xl">
        {prefix}
        {count.toLocaleString()}
        {suffix} <span className="text-yuhouse-yellow">+</span>
      </div>
      <div className={cn("mt-2 text-sm md:text-base", titleClassName)}>{title}</div>
    </div>
  )
}

