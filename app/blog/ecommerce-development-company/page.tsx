"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import { Calendar, Clock, User, ArrowLeft, CheckCircle, ShoppingCart } from "lucide-react"
import FAQ from "@/components/FAQ"

export default function EcommerceBlogPage() {
  const faqs = [
    {
      question: "Why choose YESP Tech as your eCommerce development company?",
      answer:
        "YESP Tech is a leading eCommerce development company with expertise in building scalable online stores, secure payment integration, inventory management, and mobile-optimized shopping experiences. We've successfully delivered 50+ eCommerce projects.",
    },
    {
      question: "What eCommerce platforms do you work with?",
      answer:
        "We develop custom eCommerce solutions using modern technologies like React, Next.js, and Node.js. We also work with popular platforms like Shopify, WooCommerce, Magento, and can integrate with payment gateways like Razorpay, PayPal, and Stripe.",
    },
    {
      question: "How much does eCommerce development cost?",
      answer:
        "eCommerce development costs vary based on features, complexity, and requirements. Basic online stores start from ₹50,000, while advanced eCommerce platforms can cost ₹2,00,000+. We provide detailed quotes based on your specific needs.",
    },
    {
      question: "Do you provide eCommerce website maintenance?",
      answer:
        "Yes, we offer comprehensive eCommerce maintenance services including security updates, performance optimization, inventory management, payment gateway updates, and technical support to ensure your online store runs smoothly.",
    },
    {
      question: "Can you integrate payment gateways in eCommerce websites?",
      answer:
        "We integrate multiple payment gateways including Razorpay, PayU, CCAvenue, PayPal, Stripe, and other popular payment solutions to provide secure and convenient payment options for your customers.",
    },
    {
      question: "Do you develop mobile-responsive eCommerce websites?",
      answer:
        "Yes, all our eCommerce websites are mobile-first and fully responsive. We ensure your online store provides an excellent shopping experience across all devices - desktop, tablet, and mobile phones.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Sidebar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-white">
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
                <span className="bg-green-600 text-white px-3 py-1 rounded-full font-medium">eCommerce</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>January 12, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>10 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>YESP Tech Team</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Leading eCommerce Development Company - Build Your Online Store
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform your business with our professional eCommerce development services. We create powerful online
                stores with secure payments, inventory management, and mobile optimization to boost your sales.
              </p>

              <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-12">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="eCommerce Development Company - YESP Tech"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why Choose YESP Tech as Your eCommerce Development Company
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                In the rapidly growing digital marketplace, having a professional online store is essential for business
                success. As a premier <strong>eCommerce development company</strong>, YESP Tech specializes in creating
                powerful, scalable, and user-friendly online stores that drive sales and enhance customer experience.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our eCommerce Development Services</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-green-50 rounded-2xl p-6">
                  <ShoppingCart className="w-8 h-8 text-green-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Custom Online Stores</h4>
                  <p className="text-gray-700">
                    Tailored eCommerce solutions built specifically for your business needs and target audience.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Payment Integration</h4>
                  <p className="text-gray-700">
                    Secure payment gateway integration with multiple payment options for customer convenience.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Inventory Management</h4>
                  <p className="text-gray-700">
                    Advanced inventory tracking, stock management, and automated notifications.
                  </p>
                </div>
                <div className="bg-orange-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Mobile Optimization</h4>
                  <p className="text-gray-700">
                    Mobile-first design ensuring perfect shopping experience on all devices.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete eCommerce Solutions</h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                As a full-service <strong>eCommerce development company</strong>, we provide end-to-end solutions
                including:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Custom eCommerce Development:</strong> Built from scratch using modern technologies
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Multi-vendor Marketplaces:</strong> Complex platforms supporting multiple sellers
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>B2B eCommerce Portals:</strong> Wholesale and business-to-business solutions
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Shopping Cart Development:</strong> Secure and user-friendly cart functionality
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Third-party Integrations:</strong> CRM, ERP, and marketing tool integrations
                  </span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">eCommerce Features We Develop</h3>

              <div className="bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-8 text-white mb-8">
                <h4 className="text-2xl font-bold mb-6">Essential eCommerce Features</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold mb-3">Customer Features</h5>
                    <ul className="space-y-2 text-green-100">
                      <li>• User Registration & Login</li>
                      <li>• Product Search & Filters</li>
                      <li>• Shopping Cart & Wishlist</li>
                      <li>• Order Tracking</li>
                      <li>• Customer Reviews</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold mb-3">Admin Features</h5>
                    <ul className="space-y-2 text-blue-100">
                      <li>• Product Management</li>
                      <li>• Order Management</li>
                      <li>• Customer Management</li>
                      <li>• Analytics & Reports</li>
                      <li>• Inventory Control</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our eCommerce Development Process</h3>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Business Analysis</h4>
                    <p className="text-gray-700">
                      Understanding your business model, target audience, and eCommerce requirements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">UI/UX Design</h4>
                    <p className="text-gray-700">
                      Creating intuitive and conversion-focused designs for optimal user experience.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Development</h4>
                    <p className="text-gray-700">
                      Building your eCommerce platform with secure coding practices and modern technologies.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Testing & QA</h4>
                    <p className="text-gray-700">
                      Comprehensive testing including security, performance, and user acceptance testing.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Launch & Support</h4>
                    <p className="text-gray-700">
                      Smooth deployment and ongoing maintenance to ensure optimal performance.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technologies We Use for eCommerce Development</h3>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Frontend</div>
                  <div className="text-sm text-gray-600">React, Next.js, Vue.js, Angular</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Backend</div>
                  <div className="text-sm text-gray-600">Node.js, PHP, Python, .NET</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Payments</div>
                  <div className="text-sm text-gray-600">Razorpay, PayU, Stripe, PayPal</div>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-600 to-blue-600 rounded-3xl p-8 text-white text-center mb-12"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Launch Your Online Store?</h3>
              <p className="text-green-100 mb-6">
                Get a free consultation from the leading eCommerce development company. Let's discuss your online store
                requirements.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/yesptech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2"
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
