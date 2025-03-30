import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function CallToAction() {
  return (
    <section className="bg-yuhouse-navy py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold text-white">Ready to Find Your Perfect Home?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-300">
          Contact our team of experts today and let us help you find the perfect property that meets all your
          requirements.
        </p>
        <div className="mt-10">
          <Button asChild className="bg-yuhouse-yellow text-yuhouse-navy hover:bg-white">
            <Link href="/contact">Contact Us Today</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

