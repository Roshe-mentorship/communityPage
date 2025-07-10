"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, MapPin, GraduationCap, Star, Gift, Network, TrendingUp } from "lucide-react"

export default function AmbassadorPage() {
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
            <Link href="/initiatives" className="text-base font-medium hover:text-roshe-purple transition-colors">
              Initiatives
            </Link>
            <Link href="/blog" className="text-base font-medium hover:text-roshe-purple transition-colors">
              Blog
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
            Ambassador Program
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-2xl md:text-3xl text-roshe-purple mb-8 font-semibold"
          >
            Join Us – Be the Change. Help us democratize mentorship globally
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <Image
              src="/images/community-2.jpg"
              alt="Ambassadors working together"
              width={800}
              height={400}
              className="rounded-2xl shadow-2xl mx-auto transform hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        </div>
      </section>

      {/* Ambassador Roles */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-roshe-purple-light transform hover:-translate-y-2">
                <CardContent className="pt-6 text-center">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                    <MapPin className="h-16 w-16 text-roshe-purple mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">Become a Roshe Ambassador in your city</h3>
                  <p className="text-gray-600 mb-6">
                    Lead your local community and organize events that bring mentors and mentees together.
                  </p>
                  <Button
                    className="bg-roshe-purple hover:bg-roshe-purple-hover text-white w-full transform hover:scale-105 transition-all duration-200"
                    asChild
                  >
                    <Link href="#city-ambassador">Become a City Ambassador</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 hover:shadow-lg transition-all duration-300 border-2 hover:border-roshe-purple-light transform hover:-translate-y-2">
                <CardContent className="pt-6 text-center">
                  <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                    <GraduationCap className="h-16 w-16 text-roshe-purple mx-auto mb-6" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-4">Become a Roshe ambassador on your campus</h3>
                  <p className="text-gray-600 mb-6">
                    Bring mentorship opportunities directly to students and help them connect with industry
                    professionals.
                  </p>
                  <Button
                    className="bg-roshe-purple hover:bg-roshe-purple-hover text-white w-full transform hover:scale-105 transition-all duration-200"
                    asChild
                  >
                    <Link href="#campus-ambassador">Become a Campus Ambassador</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* City Ambassador Section */}
      <section id="city-ambassador" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">City Ambassador</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              We are constantly inspired by students who use Roshe mentorship to expand their knowledge. Roshe
              mentorship City Leaders are passionate, volunteer enthusiasts who share Roshe mentorship with others. They
              lead city communities, organize online and offline events, produce and create helpful content and much
              more.
            </p>

            <div className="text-center mb-12">
              <Button size="lg" className="bg-roshe-purple hover:bg-roshe-purple-hover text-white" asChild>
                <Link href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
                  Apply as City Ambassador <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

            {/* How it Works */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">How it works</h3>
              <h4 className="text-xl font-semibold mb-4">What does it mean to be a city ambassador</h4>
              <p className="text-gray-600 mb-6">
                Roshe mentorship City Ambassador are passionate enthusiasts who teach and share Roshe mentorship in
                these ways:
              </p>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <Card className="p-6">
                  <CardContent className="pt-6">
                    <Users className="h-8 w-8 text-roshe-purple mb-4" />
                    <h5 className="font-semibold mb-2">Community Building</h5>
                    <p className="text-gray-600 text-sm">
                      Creating and managing user groups online and around the world, teaching Roshe mentorship through
                      workshops, courses and webinars, hosting virtual events.
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="pt-6">
                    <Star className="h-8 w-8 text-roshe-purple mb-4" />
                    <h5 className="font-semibold mb-2">Content Creation</h5>
                    <p className="text-gray-600 text-sm">
                      Creating and sharing resources like writing articles, producing videos (live streams, tutorials,
                      etc.), or even up to your creativity!
                    </p>
                  </CardContent>
                </Card>
              </div>

              <p className="text-gray-600 mb-4">
                All participation in the Roshe mentorship Ambassadors program is completely voluntary. We understand
                that you have many commitments outside of this capacity. If at any point you no longer want to
                participate, please let us know. There will never be any hard feelings.
              </p>

              <p className="text-gray-600">
                To kickstart the program, our team will be sharing resources and providing you with the right knowledge
                with a set of starter activities, to begin with!
              </p>
            </div>

            {/* Qualities */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Qualities of a City Ambassador</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-roshe-purple text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    1
                  </div>
                  <p className="text-gray-600">
                    You love Roshe mentorship and are excited to help students grow and bring people together
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-roshe-purple text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    2
                  </div>
                  <p className="text-gray-600">
                    You agree to our Code of Conduct, making the experience safe and inclusive for all attendees
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-roshe-purple text-white rounded-full flex items-center justify-center text-sm font-bold mt-1">
                    3
                  </div>
                  <p className="text-gray-600">
                    As a group leader, you&apos;re committed to keeping your group active by hosting at least one meet-up
                    event per quarter
                  </p>
                </div>
              </div>
            </div>

            {/* Perks */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Perks of Being a City Leader</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <Card className="p-6">
                  <CardContent className="pt-6">
                    <TrendingUp className="h-8 w-8 text-roshe-purple mb-4" />
                    <h5 className="font-semibold mb-2">Build Your Resume</h5>
                    <p className="text-gray-600 text-sm">Recognition as a leader with Roshe mentorship</p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="pt-6">
                    <Network className="h-8 w-8 text-roshe-purple mb-4" />
                    <h5 className="font-semibold mb-2">Network Magic</h5>
                    <p className="text-gray-600 text-sm">
                      Private Slack channel for Campus Ambassadors & City Leaders worldwide to share best practices
                    </p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="pt-6">
                    <Gift className="h-8 w-8 text-roshe-purple mb-4" />
                    <h5 className="font-semibold mb-2">Swag It</h5>
                    <p className="text-gray-600 text-sm">Gift Cards, Cool swag!</p>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardContent className="pt-6">
                    <Users className="h-8 w-8 text-roshe-purple mb-4" />
                    <h5 className="font-semibold mb-2">Impact Your Peers</h5>
                    <p className="text-gray-600 text-sm">
                      Closer engagement with the Roshe mentorship team and product through sneak peeks and beta programs
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Community Objectives */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold mb-6">Community Objectives</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-roshe-purple rounded-full mt-3"></div>
                  <p className="text-gray-600">
                    For Ambassadors to partake in a mutually beneficial relationship by amplifying the voice of our
                    community while having the opportunity to grow professionally and personally.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-roshe-purple rounded-full mt-3"></div>
                  <p className="text-gray-600">
                    For Mentors to help them grow professionally into a more senior role in the design, increasing their
                    visibility and credibility as a source of design through leadership.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-roshe-purple rounded-full mt-3"></div>
                  <p className="text-gray-600">
                    For Roshe, mentorship to achieve our mission of Giving every person the freedom to grow together. By
                    extending our reach to a wide base of people, no matter where they&apos;re based.
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-roshe-purple rounded-full mt-3"></div>
                  <p className="text-gray-600">
                    For Mentees to get opportunities to grow, benefitting from the knowledge of someone that they can
                    book mentoring sessions with & gain knowledge from ambassadors.
                  </p>
                </div>
              </div>
            </div>

            {/* Meet Our Ambassadors */}
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-8">Meet Our Ambassadors</h3>
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <Image
                  src="/images/community-1.jpg"
                  alt="Ambassador team"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg mx-auto"
                />
                <Image
                  src="/images/community-2.jpg"
                  alt="Ambassador team"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg mx-auto"
                />
                <Image
                  src="/images/community-3.jpg"
                  alt="Ambassador team"
                  width={300}
                  height={200}
                  className="rounded-lg shadow-lg mx-auto"
                />
              </div>
              <Button
                size="lg"
                variant="outline"
                className="border-roshe-purple text-roshe-purple hover:bg-roshe-purple hover:text-white bg-transparent"
                asChild
              >
                <Link href="https://forms.google.com" target="_blank" rel="noopener noreferrer">
                  Apply as Campus Ambassador
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
