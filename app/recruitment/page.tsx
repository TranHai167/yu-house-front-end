import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Heart, Clock, Award } from "lucide-react"

const jobOpenings = [
  {
    title: "Real Estate Agent",
    location: "Ho Chi Minh City",
    type: "Full-time",
    description:
      "We're looking for experienced real estate agents to join our team in Ho Chi Minh City. The ideal candidate will have a strong understanding of the local real estate market and excellent communication skills.",
    requirements: [
      "At least 2 years of experience in real estate sales",
      "Strong communication and negotiation skills",
      "Knowledge of the Ho Chi Minh City real estate market",
      "Valid real estate license",
      "Fluent in Vietnamese and English",
    ],
  },
  {
    title: "Property Manager",
    location: "Hanoi",
    type: "Full-time",
    description:
      "We're seeking a property manager to oversee our portfolio of properties in Hanoi. The ideal candidate will have experience in property management and strong organizational skills.",
    requirements: [
      "At least 3 years of experience in property management",
      "Strong organizational and leadership skills",
      "Knowledge of property maintenance and tenant relations",
      "Experience with property management software",
      "Fluent in Vietnamese and English",
    ],
  },
  {
    title: "Marketing Specialist",
    location: "Ho Chi Minh City",
    type: "Full-time",
    description:
      "We're looking for a marketing specialist to help promote our properties and services. The ideal candidate will have experience in digital marketing and content creation.",
    requirements: [
      "At least 2 years of experience in marketing, preferably in real estate",
      "Strong digital marketing skills, including social media and SEO",
      "Experience with content creation and graphic design",
      "Knowledge of marketing analytics and reporting",
      "Fluent in Vietnamese and English",
    ],
  },
  {
    title: "Customer Service Representative",
    location: "Da Nang",
    type: "Full-time",
    description:
      "We're seeking a customer service representative to assist our clients in Da Nang. The ideal candidate will have excellent communication skills and a customer-focused mindset.",
    requirements: [
      "At least 1 year of experience in customer service",
      "Strong communication and problem-solving skills",
      "Patience and empathy when dealing with clients",
      "Basic knowledge of real estate terminology",
      "Fluent in Vietnamese and English",
    ],
  },
]

const benefits = [
  {
    title: "Competitive Salary",
    description: "We offer competitive salaries and performance-based bonuses to reward your hard work and dedication.",
    icon: TrendingUp,
  },
  {
    title: "Health Insurance",
    description: "Comprehensive health insurance coverage for you and your family to ensure your well-being.",
    icon: Heart,
  },
  {
    title: "Flexible Working Hours",
    description:
      "We understand the importance of work-life balance and offer flexible working hours to accommodate your needs.",
    icon: Clock,
  },
  {
    title: "Professional Development",
    description:
      "We invest in our employees' growth through training programs, workshops, and career advancement opportunities.",
    icon: Award,
  },
]

export default function RecruitmentPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-yuhouse-navy">Join Our Team</h1>
        <p className="mt-4 text-lg text-gray-600">Explore career opportunities at Yuhouse.vn</p>
      </div>

      {/* Hero Section */}
      <div className="mb-16 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="mb-4 text-3xl font-bold text-yuhouse-navy">Why Work With Us</h2>
          <p className="mb-6 text-lg text-gray-600">
            At Yuhouse.vn, we're building a team of passionate professionals who are dedicated to transforming the real
            estate industry in Vietnam. We offer a dynamic work environment, competitive compensation, and opportunities
            for growth and development.
          </p>
          <p className="mb-6 text-lg text-gray-600">
            If you're looking for a challenging and rewarding career in real estate, we invite you to explore our
            current job openings and join our team.
          </p>
          <Button className="bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow">
            View Current Openings
          </Button>
        </div>
        <div className="relative h-[300px] overflow-hidden rounded-lg lg:h-[400px]">
          <Image src="/placeholder.svg?height=400&width=600" alt="Team at Yuhouse.vn" fill className="object-cover" />
        </div>
      </div>

      {/* Benefits */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-yuhouse-navy">Employee Benefits</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((benefit, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex rounded-full bg-yuhouse-yellow p-3 text-yuhouse-navy">
                  <benefit.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-yuhouse-navy">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Company Culture */}
      <div className="mb-16 rounded-lg bg-yuhouse-navy p-8 text-white">
        <h2 className="mb-8 text-center text-2xl font-bold text-yuhouse-yellow">Our Company Culture</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-bold">What We Value</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Innovation and creativity in solving real estate challenges</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Collaboration and teamwork across departments</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Integrity and transparency in all our dealings</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Customer-centric approach to service delivery</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-bold">What You Can Expect</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>A supportive and inclusive work environment</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Opportunities for professional growth and development</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Recognition and rewards for your contributions</span>
              </li>
              <li className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-yuhouse-yellow"></div>
                <span>Work-life balance and flexible working arrangements</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Current Openings */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-yuhouse-navy">Current Job Openings</h2>
        <div className="space-y-6">
          {jobOpenings.map((job, index) => (
            <Card key={index} className="transition-all duration-300 hover:shadow-lg">
              <CardContent className="p-6">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-4">
                  <h3 className="text-xl font-bold text-yuhouse-navy">{job.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="rounded-full bg-yuhouse-yellow px-3 py-1 text-xs font-medium text-yuhouse-navy">
                      {job.location}
                    </span>
                    <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                      {job.type}
                    </span>
                  </div>
                </div>
                <p className="mb-4 text-gray-600">{job.description}</p>
                <div className="mb-6">
                  <h4 className="mb-2 font-semibold text-yuhouse-navy">Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-yuhouse-yellow"></div>
                        <span className="text-sm text-gray-600">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Button className="w-full bg-yuhouse-navy text-white hover:bg-yuhouse-navy/90">Apply Now</Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Application Process */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-bold text-yuhouse-navy">Application Process</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
          <div className="relative rounded-lg border bg-white p-6 text-center shadow-md">
            <div className="absolute -top-4 left-1/2 inline-flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-yuhouse-yellow text-yuhouse-navy">
              1
            </div>
            <h3 className="mb-2 mt-4 text-lg font-bold text-yuhouse-navy">Application</h3>
            <p className="text-sm text-gray-600">
              Submit your application through our online portal, including your resume and cover letter.
            </p>
          </div>
          <div className="relative rounded-lg border bg-white p-6 text-center shadow-md">
            <div className="absolute -top-4 left-1/2 inline-flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-yuhouse-yellow text-yuhouse-navy">
              2
            </div>
            <h3 className="mb-2 mt-4 text-lg font-bold text-yuhouse-navy">Initial Screening</h3>
            <p className="text-sm text-gray-600">
              Our HR team will review your application and contact you for an initial phone interview.
            </p>
          </div>
          <div className="relative rounded-lg border bg-white p-6 text-center shadow-md">
            <div className="absolute -top-4 left-1/2 inline-flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-yuhouse-yellow text-yuhouse-navy">
              3
            </div>
            <h3 className="mb-2 mt-4 text-lg font-bold text-yuhouse-navy">Interview</h3>
            <p className="text-sm text-gray-600">
              If selected, you'll be invited for an in-person or virtual interview with the hiring manager.
            </p>
          </div>
          <div className="relative rounded-lg border bg-white p-6 text-center shadow-md">
            <div className="absolute -top-4 left-1/2 inline-flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full bg-yuhouse-yellow text-yuhouse-navy">
              4
            </div>
            <h3 className="mb-2 mt-4 text-lg font-bold text-yuhouse-navy">Offer</h3>
            <p className="text-sm text-gray-600">
              Successful candidates will receive a job offer and information about the onboarding process.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="rounded-lg border bg-white p-8 text-center shadow-md">
        <h2 className="mb-4 text-2xl font-bold text-yuhouse-navy">Ready to Join Our Team?</h2>
        <p className="mb-6 text-lg text-gray-600">
          Explore our current job openings and take the first step towards a rewarding career at Yuhouse.vn.
        </p>
        <Button className="bg-yuhouse-yellow text-yuhouse-navy hover:bg-yuhouse-navy hover:text-yuhouse-yellow">
          View Job Openings
        </Button>
      </div>
    </div>
  )
}

