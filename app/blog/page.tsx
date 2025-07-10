"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, User, Clock, Tag } from "lucide-react"

// Sample blog posts data
const blogPosts = [
  {
    id: 1,
    title: "The Future of Mentorship: How Technology is Transforming Professional Development",
    excerpt: "Explore how digital platforms are revolutionizing the way mentors and mentees connect, learn, and grow together in the modern workplace.",
    author: "Sarah Johnson",
    date: "January 15, 2025",
    readTime: "5 min read",
    category: "Technology",
    image: "/images/community-1.jpg",
    featured: true
  },
  {
    id: 2,
    title: "Building Meaningful Mentor-Mentee Relationships: A Guide for Success",
    excerpt: "Learn the essential strategies for creating lasting, impactful mentorship relationships that benefit both mentors and mentees.",
    author: "Michael Chen",
    date: "January 12, 2025",
    readTime: "7 min read",
    category: "Mentorship",
    image: "/images/community-2.jpg",
    featured: false
  },
  {
    id: 3,
    title: "Breaking Barriers: How Our Ambassador Program is Democratizing Access to Mentorship",
    excerpt: "Discover how our global ambassador network is making professional mentorship accessible to aspiring professionals worldwide.",
    author: "Emily Rodriguez",
    date: "January 10, 2025",
    readTime: "6 min read",
    category: "Community",
    image: "/images/community-1.jpg",
    featured: false
  },
  {
    id: 4,
    title: "From Mentee to Mentor: A Journey of Professional Growth",
    excerpt: "Follow the inspiring journey of community members who have transitioned from seeking guidance to giving back through mentorship.",
    author: "David Park",
    date: "January 8, 2025",
    readTime: "4 min read",
    category: "Success Stories",
    image: "/images/community-2.jpg",
    featured: false
  },
  {
    id: 5,
    title: "The Impact of Animation4Change: Using Creativity for Social Good",
    excerpt: "Learn how our Animation4Change initiative is empowering young creatives to tackle real-world issues through visual storytelling.",
    author: "Lisa Thompson",
    date: "January 5, 2025",
    readTime: "8 min read",
    category: "Initiatives",
    image: "/images/community-1.jpg",
    featured: false
  },
  {
    id: 6,
    title: "Global Connections: How Remote Mentorship is Changing Lives Across Continents",
    excerpt: "Explore the powerful stories of cross-cultural mentorship relationships that are breaking down geographical barriers.",
    author: "Ahmed Hassan",
    date: "January 3, 2025",
    readTime: "6 min read",
    category: "Global Impact",
    image: "/images/community-2.jpg",
    featured: false
  }
]

const categories = ["All", "Technology", "Mentorship", "Community", "Success Stories", "Initiatives", "Global Impact"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/rosheAcademy2.png" alt="Roshe Mentorship" width={200} height={50} className="h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-base font-medium hover:text-roshe-purple transition-colors">
              Home
            </Link>
            <Link href="/ambassador" className="text-base font-medium hover:text-roshe-purple transition-colors">
              Ambassador Program
            </Link>
            <Link href="/initiatives" className="text-base font-medium hover:text-roshe-purple transition-colors">
              Initiatives
            </Link>
            <Link href="/policies" className="text-base font-medium hover:text-roshe-purple transition-colors">
              Policies
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-roshe-purple-light to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Blog & Resources
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Insights, stories, and resources to help you on your mentorship journey. Discover the latest trends, success stories, and expert advice from our global community.
          </motion.p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-200 transform hover:scale-105 ${
                  index === 0 
                    ? "bg-roshe-purple text-white" 
                    : "bg-gray-100 text-gray-600 hover:bg-roshe-purple-light hover:text-roshe-purple"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Featured Article</h2>
            <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="flex items-center space-x-4 mb-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-roshe-purple-light text-roshe-purple">
                      <Tag className="h-3 w-3 mr-1" />
                      {blogPosts[0].category}
                    </span>
                    <span className="text-gray-500 text-sm flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {blogPosts[0].date}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                    {blogPosts[0].title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                    {blogPosts[0].excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <User className="h-5 w-5 text-gray-400" />
                      <span className="text-gray-600">{blogPosts[0].author}</span>
                      <Clock className="h-4 w-4 text-gray-400 ml-4" />
                      <span className="text-gray-600">{blogPosts[0].readTime}</span>
                    </div>
                    <Button className="bg-roshe-purple hover:bg-roshe-purple-hover text-white transform hover:scale-105 transition-all duration-200">
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">Latest Articles</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-roshe-purple-light text-roshe-purple">
                          <Tag className="h-3 w-3 mr-1" />
                          {post.category}
                        </span>
                        <span className="text-gray-500 text-sm flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {post.date}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 flex-grow">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <User className="h-4 w-4" />
                          <span>{post.author}</span>
                          <Clock className="h-3 w-3 ml-2" />
                          <span>{post.readTime}</span>
                        </div>
                        <Button size="sm" variant="outline" className="border-roshe-purple text-roshe-purple hover:bg-roshe-purple hover:text-white">
                          Read
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-roshe-purple text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
            <p className="text-2xl mb-8 opacity-90">
              Subscribe to our newsletter and never miss the latest insights, stories, and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <Button variant="secondary" className="bg-white text-roshe-purple hover:bg-gray-100 px-6 py-3">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <Image
                src="/images/rosheAcademy2.png"
                alt="Roshe Mentorship"
                width={200}
                height={50}
                className="h-8 w-auto mb-4"
              />
              <p className="text-gray-300 mb-4 max-w-md">
                Our mission is to give every person the freedom to grow together.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Community</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/ambassador" className="hover:text-white transition-colors">
                    Ambassador Program
                  </Link>
                </li>
                <li>
                  <Link href="/initiatives" className="hover:text-white transition-colors">
                    Initiatives
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog & Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-300">
                <li>
                  <Link href="/policies" className="hover:text-white transition-colors">
                    Community Standards
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Find a Mentor
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms of Use
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Roshe Mentorship. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
