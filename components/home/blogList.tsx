import Link from "next/link"
import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { CalendarIcon, Clock, ArrowRight } from "lucide-react"

// Sample blog post data - replace with your actual data fetching logic
const featuredPost = {
  id: 1,
  title: "Bất Động Sản: Xu Hướng Năm 2023",
  excerpt:
    "Khám phá những xu hướng mới trong thị trường bất động sản hiện nay.",
  date: "31 tháng 3 năm 2025",
  readTime: "5 min read",
  category: "Technology",
  author: "Hải hay ho",
  authorImage: "/placeholder.svg?height=100&width=100",
  slug: "future-of-web-development-2025",
  coverImage: "/placeholder.svg?height=600&width=1200",
}

const blogPosts = [
  {
    id: 2,
    title: "Bất Động Sản: Xu Hướng Năm 2023",
    excerpt: "Bất Động Sản: Xu Hướng Năm 2023",
    date: "March 15, 2025",
    readTime: "5 min read",
    category: "Development",
    slug: "getting-started-with-nextjs",
    coverImage: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    title: "Bất Động Sản: Xu Hướng Năm 2023",
    excerpt: "Bất Động Sản: Xu Hướng Năm 2023",
    date: "March 10, 2025",
    readTime: "4 min read",
    category: "Design",
    slug: "mastering-tailwind-css",
    coverImage: "/placeholder.svg?height=400&width=600",
  },
]

export default function BlogList() {
  return (
    <section className="py-12 md:py-16" id="blog">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
          <div>
            <h2 className="text-3xl font-bold tracking-tighter">Bài viết</h2>
            <p className="mt-2 text-muted-foreground">Khám Phá Thế Giới Bất Động Sản</p>
          </div>
        </div>

        {/* Featured Post */}
        <div className="mt-8">
          <Link href={`/blog/${featuredPost.slug}`} className="group">
            <Card className="overflow-hidden border-2 border-primary/10 transition-all hover:border-primary/30">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="relative h-64 w-full overflow-hidden md:h-full">
                  <Image
                    src={featuredPost.coverImage || "/placeholder.svg"}
                    alt={featuredPost.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-center p-6">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon className="h-4 w-4" />
                    <span>{featuredPost.date}</span>
                    <span className="text-xs">•</span>
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold leading-tight tracking-tight md:text-3xl">
                    {featuredPost.title}
                  </h3>
                  <p className="mt-4 text-muted-foreground">{featuredPost.excerpt}</p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="relative h-10 w-10 overflow-hidden rounded-full">
                      <Image
                        src={featuredPost.authorImage || "/placeholder.svg"}
                        alt={featuredPost.author}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <span className="font-medium">{featuredPost.author}</span>
                  </div>
                  <div className="mt-6 flex items-center text-primary">
                    <span className="font-medium">Đọc bài viết</span>
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        </div>

        {/* Regular Posts Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Card key={post.id} className="flex flex-col overflow-hidden">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.coverImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <CardHeader className="p-4 pb-0">
                <div className="flex items-center gap-2">
                  <div className="flex items-center text-xs text-muted-foreground">
                    <Clock className="mr-1 h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                <Link href={`/blog/${post.slug}`} className="group">
                  <h3 className="mt-2 text-xl font-semibold group-hover:underline">{post.title}</h3>
                </Link>
              </CardHeader>
              <CardContent className="flex-1 p-4 pt-2">
                <p className="text-sm text-muted-foreground">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <div className="flex items-center text-sm text-muted-foreground">
                  <CalendarIcon className="mr-1 h-4 w-4" />
                  {post.date}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

