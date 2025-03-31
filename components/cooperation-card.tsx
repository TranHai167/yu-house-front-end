import type { ReactNode } from "react"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface CooperationFeature {
    text: string
    included: boolean
}

interface CooperationCardProps {
    title: string
    description: string
    price?: string
    features: CooperationFeature[]
    icon: ReactNode
    popular?: boolean
    buttonText?: string
    className?: string
}

export default function CooperationCard({
    title,
    description,
    price,
    features,
    icon,
    popular = false,
    buttonText = "Get Started",
    className,
}: CooperationCardProps) {
    return (
        <div
            className={cn(
                "relative rounded-lg border bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg",
                popular && "border-yuhouse-yellow",
                className,
            )}
        >
            {popular && (
                <div className="absolute -top-3 right-6 rounded-full bg-yuhouse-yellow px-3 py-1 text-xs font-semibold text-yuhouse-navy">
                    Popular
                </div>
            )}

            <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yuhouse-navy text-white">{icon}</div>
                <div>
                    <h3 className="text-xl font-bold text-yuhouse-navy">{title}</h3>
                    {price && <p className="text-sm text-gray-500">{price}</p>}
                </div>
            </div>

            <p className="mb-6 text-gray-600">{description}</p>

            <ul className="mb-6 space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <Check className={cn("mt-0.5 h-5 w-5", feature.included ? "text-yuhouse-yellow" : "text-gray-300")} />
                        <span className={cn("text-sm", feature.included ? "text-gray-700" : "text-gray-400")}>{feature.text}</span>
                    </li>
                ))}
            </ul>

            {/* <Button
                className={cn(
                    "w-full",
                    popular
                        ? "bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow"
                        : "bg-yuhouse-navy text-white hover:bg-yuhouse-yellow hover:text-yuhouse-navy",
                )}
            >
                {buttonText}
            </Button> */}
        </div>
    )
}

