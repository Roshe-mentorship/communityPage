"use client"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"
import { Shield, Users, Heart, CheckCircle, XCircle } from "lucide-react"

export default function PoliciesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/images/roshe-logo.png" alt="Roshe Mentorship" width={200} height={50} className="h-8 w-auto" />
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-base font-medium hover:text-purple-600 transition-colors">
              Home
            </Link>
            <Link href="/ambassador" className="text-base font-medium hover:text-purple-600 transition-colors">
              Ambassador Program
            </Link>
            <Link href="/initiatives" className="text-base font-medium hover:text-purple-600 transition-colors">
              Initiatives
            </Link>
            <Link href="/blog" className="text-base font-medium hover:text-purple-600 transition-colors">
              Blog
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
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-8"
          >
            Community Policies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            This policy outlines what to expect—and what is expected of you—as a member of the Roshe Mentorship
            community. Our goal is to ensure that every member has a consistently positive, trusted, and safe
            experience. This applies to all mentors, mentees, volunteers, ambassadors, and members across our global
            community.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-gray-500 mt-6"
          >
            This policy is a living document and may be updated as needed to reflect improvements that keep Roshe
            Mentorship welcoming and safe for everyone.
          </motion.p>
        </div>
      </section>

      {/* Policy Navigation */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <motion.div whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
                    <Shield className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">Mentor Standards</h3>
                  <p className="text-gray-600 text-sm mb-4">Guidelines and expectations for mentors</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="transform hover:scale-105 transition-all duration-200 bg-transparent"
                    asChild
                  >
                    <Link href="#mentor-standards">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                    <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">Mentee Standards</h3>
                  <p className="text-gray-600 text-sm mb-4">Guidelines and expectations for mentees</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="transform hover:scale-105 transition-all duration-200 bg-transparent"
                    asChild
                  >
                    <Link href="#mentee-standards">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-2">
                <CardContent className="p-6 text-center">
                  <motion.div whileHover={{ scale: 1.2 }} transition={{ duration: 0.3 }}>
                    <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2">Community Standards</h3>
                  <p className="text-gray-600 text-sm mb-4">General community principles and guidelines</p>
                  <Button
                    variant="outline"
                    size="sm"
                    className="transform hover:scale-105 transition-all duration-200 bg-transparent"
                    asChild
                  >
                    <Link href="#community-standards">Learn More</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mentor Standards */}
      <section id="mentor-standards" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Mentor Standards</h2>
            <p className="text-lg text-gray-600 mb-8">
              Sharing your experience with someone you&apos;ve never met can feel like a leap of faith. But the impact you
              make through knowledge-sharing can be transformational. Mentees across the world join Roshe Mentorship
              eager to learn, grow, and evolve—thanks to your contributions.
            </p>

            <h3 className="text-2xl font-semibold mb-4">What are Mentor Standards?</h3>
            <p className="text-gray-600 mb-8">
              To help guide your experience, we&apos;ve created clear expectations for what it means to be a Roshe Mentorship
              mentor. This includes basic requirements like communication, calendar accuracy, and professional conduct.
              Mentees also leave reviews based on their experience with you.
            </p>

            <div className="space-y-8">
              {/* Responsive */}
              <Card className="p-6">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    Responsive
                  </h4>
                  <p className="text-gray-600">
                    Responding to mentee inquiries within 24 hours creates trust and sets the tone for a great
                    relationship. Response rates are tracked to help us maintain mentor accountability.
                  </p>
                </CardContent>
              </Card>

              {/* Accepting Bookings */}
              <Card className="p-6">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                    Accepting Bookings
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>
                      • Keep your calendar updated with your actual availability to avoid unnecessary rejections or
                      delays. Use your settings to prevent last-minute or same-day bookings.
                    </li>
                    <li>• Bookings expire in 48 hours if not accepted or declined.</li>
                    <li>
                      • Email reminders are sent 24 hours before sessions. SMS reminders are optional depending on
                      availability in your region.
                    </li>
                    <li>
                      • Mentorship sessions can be booked from 1 week in advance to 1 month ahead to reduce no-shows.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Cancellations */}
              <Card className="p-6">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-3">Cancellations</h4>
                  <p className="text-gray-600">
                    We understand that life happens. However, avoid cancelling confirmed bookings unless it&apos;s truly
                    necessary. In cases of emergency, we expect prompt and respectful communication.
                  </p>
                </CardContent>
              </Card>

              {/* Trust & Safety */}
              <Card className="p-6 border-red-200">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center text-red-600">
                    <XCircle className="h-6 w-6 mr-2" />
                    Trust & Safety: What We Do Not Allow
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>
                      • <strong>No-shows:</strong> Booking a session and not attending without cancelling.
                    </li>
                    <li>
                      • <strong>Last-minute cancellations:</strong> Cancelling within 1 hour of the session without
                      valid reason.
                    </li>
                    <li>
                      • <strong>Ghosting:</strong> Not replying to messages or follow-ups in a timely way.
                    </li>
                    <li>
                      • <strong>Fake profiles:</strong> Using avatars, cartoon images, or misleading credentials (e.g.,
                      job titles or industries you&apos;re not involved in) may result in removal from Roshe Mentorship.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card className="p-6">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-3">Reviews</h4>
                  <p className="text-gray-600 mb-3">Great mentors are consistently praised for:</p>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Clear communication</li>
                    <li>• Actionable advice</li>
                    <li>• Being present and supportive</li>
                    <li>• Helping mentees grow with skill-building and motivation</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Mentee Standards */}
      <section id="mentee-standards" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Mentee Standards</h2>
            <p className="text-lg text-gray-600 mb-8">
              Mentors join Roshe Mentorship to genuinely help people grow. It&apos;s a rewarding commitment, and mentees must
              also be respectful, responsible, and prepared. Poor behavior can disrupt the mentor&apos;s time, energy, and
              willingness to keep giving back.
            </p>

            <h3 className="text-2xl font-semibold mb-4">What are Mentee Standards?</h3>
            <p className="text-gray-600 mb-8">
              We&apos;ve introduced mentee guidelines to help ensure all users contribute to a respectful and productive
              environment. Repeated failure to meet these expectations may result in temporary or permanent suspension
              from Roshe Mentorship.
            </p>

            <div className="space-y-8">
              {/* Authentic Representation */}
              <Card className="p-6">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-3">Authentic Representation</h4>
                  <p className="text-gray-600">
                    You must provide accurate, complete, and truthful information about yourself in your profile,
                    including a valid name and real profile photo.
                  </p>
                </CardContent>
              </Card>

              {/* What We Do Not Allow */}
              <Card className="p-6 border-red-200">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-3 flex items-center text-red-600">
                    <XCircle className="h-6 w-6 mr-2" />
                    What We Do Not Allow
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>
                      • <strong>Fake identity or incomplete profile:</strong> Missing photo, misleading name or unclear
                      identity will lead to flags or removal.
                    </li>
                    <li>
                      • <strong>Failure to verify identity:</strong> If requested, you must confirm your account through
                      verification steps. Failure to comply may result in account suspension.
                    </li>
                    <li>
                      • <strong>Commercial or spam requests:</strong> Using Roshe Mentorship to sell services, promote
                      products, or for job leads will result in an immediate ban.
                    </li>
                    <li>
                      • <strong>Duplicate accounts:</strong> Only one account per person is allowed.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              {/* Trust & Safety */}
              <Card className="p-6">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-3">Trust & Safety</h4>
                  <p className="text-gray-600 mb-4">
                    Mentors volunteer their time. Respecting this generosity is essential. Think of mentorship as
                    building a new, professional relationship rooted in trust.
                  </p>
                  <h5 className="font-semibold mb-2 text-red-600">What We Do Not Allow</h5>
                  <ul className="text-gray-600 space-y-2">
                    <li>
                      • <strong>No-shows:</strong> Failing to attend your session without cancelling.
                    </li>
                    <li>
                      • <strong>Last-minute cancellations:</strong> Canceling within 1 hour of the scheduled time
                      without reason.
                    </li>
                    <li>
                      • <strong>Not responding to your mentor:</strong> Ignoring messages for over 48 hours without
                      follow-up.
                    </li>
                    <li>
                      • <strong>Biased or irrelevant reviews:</strong> Leave feedback only if it&apos;s constructive,
                      respectful, and relevant.
                    </li>
                    <li>
                      • <strong>Requesting mentorship for school or job tasks:</strong> Roshe Mentorship is not a
                      freelancing or assignment-help platform.
                    </li>
                    <li>
                      • <strong>Referral requests:</strong> Do not ask mentors for job referrals. Mentorship is for
                      guidance and growth, not job placement.
                    </li>
                  </ul>
                  <p className="text-gray-600 mt-4 text-sm italic">
                    Note: A mentor may voluntarily offer help beyond the session, but they are under no obligation to
                    refer or recommend you.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Community Standards */}
      <section id="community-standards" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Community Principles</h2>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="p-6 border-green-200">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-4 flex items-center text-green-600">
                    <CheckCircle className="h-6 w-6 mr-2" />
                    What Is Expected
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>
                      • <strong>Respect:</strong> Acknowledge and value diverse perspectives.
                    </li>
                    <li>
                      • <strong>Inclusion:</strong> Everyone deserves a space where they feel safe and heard.
                    </li>
                    <li>
                      • <strong>Trust & Safety:</strong> Help maintain a space that promotes mutual trust.
                    </li>
                    <li>
                      • <strong>Responsiveness:</strong> Reply to messages and schedule updates in a timely manner.
                    </li>
                    <li>
                      • <strong>Empathy & professionalism:</strong> Be mindful of others&apos; time, values, and effort.
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="p-6 border-red-200">
                <CardContent className="pt-6">
                  <h4 className="text-xl font-semibold mb-4 flex items-center text-red-600">
                    <XCircle className="h-6 w-6 mr-2" />
                    What Is Not Tolerated
                  </h4>
                  <ul className="text-gray-600 space-y-2">
                    <li>• Discrimination or abuse</li>
                    <li>• Sexual harassment of any form</li>
                    <li>• Publishing personal information without consent</li>
                    <li>• Unprofessional or unethical behavior</li>
                    <li>• Bullying, personal attacks, or offensive comments</li>
                    <li>• Spamming or phishing</li>
                    <li>• Using the platform for unrelated promotions or self-gain</li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="p-8 bg-purple-50 border-purple-200">
              <CardContent className="pt-6 text-center">
                <h3 className="text-2xl font-bold text-purple-800 mb-4">Our Commitment</h3>
                <p className="text-purple-700 text-lg">
                  Let us build a strong, safe, and empowering community at Roshe Mentorship where mutual growth,
                  respect, and trust guide every connection.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join Our Community?</h2>
          <p className="text-xl mb-8 opacity-90">
            By joining Roshe Mentorship, you agree to uphold these community standards and help create a positive
            environment for all.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-purple-600 hover:bg-gray-100" asChild>
            <Link href="/">Join Roshe Mentorship</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
