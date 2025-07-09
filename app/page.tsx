"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, Heart, Globe } from "lucide-react"
import { FloatingElements } from "@/components/floating-elements"
import { ScrollProgress } from "@/components/scroll-progress"
import { AnimatedCounter } from "@/components/animated-counter"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <ScrollProgress />
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/rosheAcademy2.png" alt="Roshe Mentorship" width={200} height={50} className="h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#community" className="text-base font-medium hover:text-purple-600 transition-colors">
              Community
            </Link>
            <Link href="#partnerships" className="text-base font-medium hover:text-purple-600 transition-colors">
              Partnerships
            </Link>
            <Link href="/ambassador" className="text-base font-medium hover:text-purple-600 transition-colors">
              Ambassador
            </Link>
            <Link href="/initiatives" className="text-base font-medium hover:text-purple-600 transition-colors">
              Initiatives
            </Link>
            <Link href="/policies" className="text-base font-medium hover:text-purple-600 transition-colors">
              Policies
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 to-blue-50 overflow-hidden relative">
        <FloatingElements />
        <div className="container mx-auto px-4 relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Our mission is to <span className="text-purple-600">Give every aspiring professional</span> the freedom to
            grow together.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
          >
            Join a global community of mentors and mentees dedicated to professional growth and meaningful connections.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <Button
              size="lg"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 text-lg transform hover:scale-105 transition-all duration-200"
              asChild
            >
              <Link href="https://www.youtube.com/@RosheMentorship" target="_blank" rel="noopener noreferrer">
                Be Inspired <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Community</h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Roshe Mentorship is a global platform where people can find, book and meet mentors around the world! Our
                goal is to foster an inclusive space and support network for designers, product managers, and engineers
                to come together, learn from each other, and strive to be better!
              </p>
              <Button
                size="lg"
                className="bg-purple-600 hover:bg-purple-700 text-white transform hover:scale-105 transition-all duration-200"
                asChild
              >
                <Link href="/ambassador">
                  Get Involved <Users className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="/images/community-1.jpg"
                alt="Community members collaborating"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partnerships Section */}
      <section id="partnerships" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
            >
              Partnerships
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-2xl text-gray-600 mb-8"
            >
              We partner with dedicated organizations who share our vision...
            </motion.p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="pt-6">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                      <Globe className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-3">Global Reach</h3>
                    <p className="text-lg text-gray-600">
                      Connecting mentors and mentees across continents to create meaningful professional relationships.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="pt-6">
                    <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                      <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                    </motion.div>
                    <h3 className="text-2xl font-semibold mb-3">Shared Values</h3>
                    <p className="text-lg text-gray-600">
                      Working with organizations that believe in democratizing access to mentorship and professional
                      growth.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent transform hover:scale-105 transition-all duration-200"
              >
                Partner with Us
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">
                <AnimatedCounter end={10000} suffix="+" />
              </div>
              <p className="text-lg text-gray-600">Community Members</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">
                <AnimatedCounter end={500} suffix="+" />
              </div>
              <p className="text-lg text-gray-600">Active Mentors</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">
                <AnimatedCounter end={50} suffix="+" />
              </div>
              <p className="text-lg text-gray-600">Countries</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl font-bold text-purple-600 mb-2">
                <AnimatedCounter end={25000} suffix="+" />
              </div>
              <p className="text-lg text-gray-600">Sessions Completed</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-2xl mb-8 opacity-90">
            Start your mentorship journey today and connect with professionals worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
              <Link href="/ambassador">Become an Ambassador</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
            >
              Find a Mentor
            </Button>
          </div>
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
                  <Link href="#" className="hover:text-white transition-colors">
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
