"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import { Calendar, Clock, User, ArrowLeft, CheckCircle, Smartphone } from "lucide-react"
import FAQ from "@/components/FAQ"

export default function MobileAppBlogPage() {
  const faqs = [
    {
      question: "What mobile app development services does YESP Tech offer?",
      answer:
        "We offer comprehensive mobile app development services including native iOS and Android apps, cross-platform development using React Native and Flutter, mobile app UI/UX design, app store optimization, and ongoing maintenance and support.",
    },
    {
      question: "How much does mobile app development cost?",
      answer:
        "Mobile app development costs vary based on complexity, features, and platform. Simple apps start from ₹1,00,000, while complex enterprise apps can cost ₹5,00,000+. We provide detailed quotes after understanding your requirements.",
    },
    {
      question: "Do you develop both iOS and Android apps?",
      answer:
        "Yes, we develop native apps for both iOS and Android platforms. We also offer cross-platform development using React Native and Flutter to reduce development time and costs while maintaining native performance.",
    },
    {
      question: "How long does it take to develop a mobile app?",
      answer:
        "Development timeline depends on app complexity. Simple apps take 2-3 months, medium complexity apps take 4-6 months, and complex enterprise apps can take 6-12 months. We provide detailed project timelines during planning.",
    },
    {
      question: "Do you help with app store submission and approval?",
      answer:
        "Yes, we handle the complete app store submission process for both Google Play Store and Apple App Store. We ensure your app meets all guidelines and requirements for successful approval and launch.",
    },
    {
      question: "Do you provide mobile app maintenance services?",
      answer:
        "Yes, we offer comprehensive mobile app maintenance services including bug fixes, performance optimization, security updates, feature enhancements, and compatibility updates for new OS versions.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Sidebar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 to-white">
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
                <span className="bg-purple-600 text-white px-3 py-1 rounded-full font-medium">Mobile Development</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>January 10, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>7 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>YESP Tech Team</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Professional Mobile App Development Services in Tamil Nadu
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Expert mobile app development company offering iOS and Android app development with cutting-edge
                technology, user-friendly design, and seamless performance across all devices.
              </p>

              <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-12">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Mobile App Development Services - YESP Tech"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Leading Mobile App Development Company</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                In today's mobile-first world, having a professional mobile app is crucial for business success. As a
                premier <strong>mobile app development company</strong>, YESP Tech specializes in creating innovative,
                user-friendly, and high-performance mobile applications for iOS and Android platforms.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mobile App Development Services</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-purple-50 rounded-2xl p-6">
                  <Smartphone className="w-8 h-8 text-purple-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Native App Development</h4>
                  <p className="text-gray-700">
                    Platform-specific apps for iOS and Android with optimal performance and native user experience.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Cross-Platform Apps</h4>
                  <p className="text-gray-700">
                    Cost-effective solutions using React Native and Flutter for multiple platforms.
                  </p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">UI/UX Design</h4>
                  <p className="text-gray-700">
                    Intuitive and engaging mobile app designs that enhance user experience and retention.
                  </p>
                </div>
                <div className="bg-orange-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">App Store Optimization</h4>
                  <p className="text-gray-700">
                    Complete app store submission and optimization for maximum visibility and downloads.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Mobile Apps We Develop</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Business Apps:</strong> Enterprise solutions for productivity and workflow management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>E-commerce Apps:</strong> Mobile shopping apps with secure payment integration
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Social Media Apps:</strong> Community and networking platforms
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Educational Apps:</strong> Learning and training applications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-purple-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Healthcare Apps:</strong> Medical and wellness applications
                  </span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mobile App Development Process</h3>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Strategy & Planning</h4>
                    <p className="text-gray-700">
                      Understanding your business goals, target audience, and app requirements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">UI/UX Design</h4>
                    <p className="text-gray-700">Creating wireframes, prototypes, and user-centered designs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Development</h4>
                    <p className="text-gray-700">Building your app using modern technologies and best practices.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Testing & QA</h4>
                    <p className="text-gray-700">Comprehensive testing across devices and platforms.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Launch & Support</h4>
                    <p className="text-gray-700">App store submission and ongoing maintenance support.</p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technologies We Use</h3>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Native iOS</div>
                  <div className="text-sm text-gray-600">Swift, Objective-C, Xcode</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Native Android</div>
                  <div className="text-sm text-gray-600">Kotlin, Java, Android Studio</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Cross-Platform</div>
                  <div className="text-sm text-gray-600">React Native, Flutter</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-purple-600 to-blue-600 rounded-3xl p-8 text-white text-center mb-12"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Build Your Mobile App?</h3>
              <p className="text-purple-100 mb-6">
                Get a free consultation from our mobile app development experts. Let's discuss your app idea and
                requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/yesptech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
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
