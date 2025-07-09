"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Palette, Users } from "lucide-react"

export default function InitiativesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/roshe-logo.png" alt="Roshe Mentorship" width={200} height={50} className="h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="/ambassador" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Ambassador Program
            </Link>
            <Link href="/policies" className="text-sm font-medium hover:text-purple-600 transition-colors">
              Policies
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 max-w-4xl mx-auto leading-tight"
          >
            We are turning ideas into actions and changing lives. We are designing to empower voices, open doors, and
            inspire transformation through creativity.
          </motion.h1>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            {/* Animation4Change */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <motion.div
                  className="aspect-video relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/community-1.jpg"
                    alt="Animation4Change initiative"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                      <Palette className="h-8 w-8 text-purple-600 mr-3" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-gray-900">Animation4Change</h2>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Using animation as a force for good, to educate, inspire, and spark important conversations. This
                    initiative empowers young creatives to use visual storytelling to tackle real-world issues.
                  </p>
                  <Button
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent transform hover:scale-105 transition-all duration-200"
                    disabled
                  >
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Women in Animation */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <motion.div
                  className="aspect-video relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src="/images/community-3.jpg"
                    alt="Women in Animation initiative"
                    fill
                    className="object-cover"
                  />
                </motion.div>
                <CardContent className="p-8">
                  <div className="flex items-center mb-4">
                    <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                      <Users className="h-8 w-8 text-purple-600 mr-3" />
                    </motion.div>
                    <h2 className="text-2xl font-bold text-gray-900">Women in Animation</h2>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Is dedicated to equipping women and girls with the skills, mentorship, and opportunities they need
                    to thrive in the animation industry. From visibility to leadership, we&apos;re shaping a future where
                    female voices are seen, heard, and celebrated in animation.
                  </p>
                  <Button
                    variant="outline"
                    className="border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white bg-transparent transform hover:scale-105 transition-all duration-200"
                    disabled
                  >
                    Coming Soon
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Get Involved?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join our community and help us create meaningful change through mentorship and creative initiatives.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
              <Link href="/ambassador">Become an Ambassador</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-purple-600 bg-transparent"
              asChild
            >
              <Link href="/">Join Our Community</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
