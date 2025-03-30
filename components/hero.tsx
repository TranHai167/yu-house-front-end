import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="relative">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-yuhouse-navy sm:text-5xl lg:text-6xl">
              Find Your Perfect Home in Vietnam
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 lg:text-xl">
              Yuhouse.vn offers a wide range of properties across Vietnam. Whether you're looking for an apartment,
              house, or commercial space, we have the perfect solution for you.
            </p>
            <div className="mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-center">
              <Button asChild className="bg-yuhouse-navy text-white hover:bg-yuhouse-navy/90">
                <Link href="/products/brokerage">Browse Properties</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-yellow hover:text-yuhouse-navy"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

