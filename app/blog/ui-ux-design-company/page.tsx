"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import { Calendar, Clock, User, ArrowLeft, CheckCircle, Palette } from "lucide-react"
import FAQ from "@/components/FAQ"

export default function UIUXDesignBlogPage() {
  const faqs = [
    {
      question: "What UI/UX design services does YESP Tech offer?",
      answer:
        "We offer comprehensive UI/UX design services including user research, wireframing, prototyping, visual design, interaction design, usability testing, and design system creation for web and mobile applications.",
    },
    {
      question: "What's the difference between UI and UX design?",
      answer:
        "UX (User Experience) design focuses on the overall user journey and how users interact with your product, while UI (User Interface) design focuses on the visual elements, layout, and interactive components that users see and interact with.",
    },
    {
      question: "How long does a UI/UX design project take?",
      answer:
        "UI/UX design timelines vary based on project complexity. Simple projects take 2-4 weeks, medium complexity projects take 4-8 weeks, and complex applications can take 8-16 weeks including research, design, and testing phases.",
    },
    {
      question: "Do you provide design systems and style guides?",
      answer:
        "Yes, we create comprehensive design systems including color palettes, typography, component libraries, style guides, and design tokens to ensure consistency across your digital products and facilitate future development.",
    },
    {
      question: "Can you redesign our existing website or app?",
      answer:
        "We specialize in redesigning existing websites and applications. We conduct thorough analysis of your current design, identify pain points, and create improved user experiences while maintaining brand consistency.",
    },
    {
      question: "Do you conduct user testing and research?",
      answer:
        "Yes, we conduct user research, usability testing, A/B testing, and user interviews to validate design decisions and ensure the final product meets user needs and business objectives effectively.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Sidebar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-pink-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="bg-pink-600 text-white px-3 py-1 rounded-full font-medium">Design</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>January 05, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>6 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>YESP Tech Team</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Top UI/UX Design Company - Create Stunning User Experiences
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Professional UI/UX design services that enhance user engagement, improve conversion rates, and create
                memorable digital experiences for your customers.
              </p>

              <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-12">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="UI/UX Design Company - YESP Tech"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Leading UI/UX Design Company</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                In today's digital world, exceptional user experience is what sets successful businesses apart. As a
                premier <strong>UI/UX design company</strong>, YESP Tech specializes in creating intuitive, engaging,
                and conversion-focused designs that delight users and drive business results.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our UI/UX Design Services</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-pink-50 rounded-2xl p-6">
                  <Palette className="w-8 h-8 text-pink-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">User Research</h4>
                  <p className="text-gray-700">
                    In-depth user research to understand your audience and their needs for better design decisions.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Wireframing</h4>
                  <p className="text-gray-700">
                    Detailed wireframes and prototypes to visualize user flows and interface structure.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Visual Design</h4>
                  <p className="text-gray-700">
                    Beautiful, modern visual designs that align with your brand and engage users effectively.
                  </p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Usability Testing</h4>
                  <p className="text-gray-700">
                    Comprehensive testing to ensure optimal user experience and identify improvement opportunities.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Design Solutions</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Web Design:</strong> Responsive website designs for optimal user experience
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Mobile App Design:</strong> Native and cross-platform mobile app interfaces
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Design Systems:</strong> Comprehensive design systems and component libraries
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Branding:</strong> Logo design, brand identity, and visual guidelines
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-pink-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Prototyping:</strong> Interactive prototypes for testing and validation
                  </span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Design Process</h3>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Discovery & Research</h4>
                    <p className="text-gray-700">
                      Understanding your business goals, target audience, and user needs through research.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Information Architecture</h4>
                    <p className="text-gray-700">
                      Creating user flows, sitemaps, and wireframes to structure the user experience.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Visual Design</h4>
                    <p className="text-gray-700">
                      Creating beautiful, functional designs that align with your brand and user expectations.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Prototyping</h4>
                    <p className="text-gray-700">
                      Building interactive prototypes to test functionality and user interactions.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-pink-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Testing & Refinement</h4>
                    <p className="text-gray-700">
                      User testing and iterative improvements to ensure optimal user experience.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Design Tools We Use</h3>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Design</div>
                  <div className="text-sm text-gray-600">Figma, Adobe XD, Sketch</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Prototyping</div>
                  <div className="text-sm text-gray-600">InVision, Principle, Framer</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Research</div>
                  <div className="text-sm text-gray-600">Hotjar, Maze, UserTesting</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-3xl p-8 text-white mb-8">
                <h4 className="text-2xl font-bold mb-6">Design Impact on Business</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">200%+</div>
                    <div className="text-pink-100">Conversion Rate Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">85%</div>
                    <div className="text-pink-100">User Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">60%</div>
                    <div className="text-pink-100">Reduced Bounce Rate</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-pink-600 to-purple-600 rounded-3xl p-8 text-white text-center mb-12"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your User Experience?</h3>
              <p className="text-pink-100 mb-6">
                Get a free design consultation from our UI/UX experts. Let's create exceptional user experiences that
                drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/yesptech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-pink-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Design Consultation
                </a>
                <a
                  href="https://wa.me/919751755757"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-white text-white hover:bg-white/10 border-2 px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
