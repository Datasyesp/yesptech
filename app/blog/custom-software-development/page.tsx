"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import { Calendar, Clock, User, ArrowLeft, CheckCircle, Code } from "lucide-react"
import FAQ from "@/components/FAQ"

export default function CustomSoftwareBlogPage() {
  const faqs = [
    {
      question: "What is custom software development?",
      answer:
        "Custom software development is the process of creating software applications specifically designed for your business needs, requirements, and processes, rather than using off-the-shelf solutions.",
    },
    {
      question: "Why choose custom software over ready-made solutions?",
      answer:
        "Custom software offers better scalability, perfect fit for your business processes, enhanced security, competitive advantage, and long-term cost effectiveness compared to generic solutions.",
    },
    {
      question: "How long does custom software development take?",
      answer:
        "Development timelines vary based on complexity. Simple applications take 2-4 months, medium complexity projects take 4-8 months, and enterprise solutions can take 8-18 months including planning, development, and testing.",
    },
    {
      question: "What technologies do you use for custom software development?",
      answer:
        "We use modern technologies including React, Node.js, Python, .NET, Java, MongoDB, PostgreSQL, AWS, and other cutting-edge tools based on project requirements and scalability needs.",
    },
    {
      question: "Do you provide ongoing support and maintenance?",
      answer:
        "Yes, we provide comprehensive support and maintenance services including bug fixes, security updates, performance optimization, feature enhancements, and technical support to ensure your software runs smoothly.",
    },
    {
      question: "Can you integrate custom software with existing systems?",
      answer:
        "We specialize in creating custom software that seamlessly integrates with your existing systems, databases, third-party APIs, and business tools to ensure smooth workflow continuity.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Sidebar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-indigo-50 to-white">
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
                <span className="bg-indigo-600 text-white px-3 py-1 rounded-full font-medium">Software</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>January 03, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>YESP Tech Team</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Custom Software Development Company - Tailored Solutions
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Get custom software solutions designed specifically for your business needs. We develop scalable,
                secure, and efficient software applications that streamline your operations and drive growth.
              </p>

              <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-12">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Custom Software Development Company - YESP Tech"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Leading Custom Software Development Company</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                In today's competitive business environment, having software that perfectly fits your unique
                requirements is crucial for success. As a premier <strong>custom software development company</strong>,
                YESP Tech specializes in creating tailored software solutions that address your specific business
                challenges and opportunities.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Custom Software Development Services</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-indigo-50 rounded-2xl p-6">
                  <Code className="w-8 h-8 text-indigo-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Enterprise Software</h4>
                  <p className="text-gray-700">
                    Scalable enterprise solutions for large organizations with complex business processes.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Web Applications</h4>
                  <p className="text-gray-700">
                    Custom web applications with modern frameworks and responsive design for optimal performance.
                  </p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">API Development</h4>
                  <p className="text-gray-700">
                    RESTful APIs and microservices for seamless integration and data exchange between systems.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Database Solutions</h4>
                  <p className="text-gray-700">
                    Custom database design and optimization for efficient data storage and retrieval.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Types of Custom Software We Develop</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>CRM Systems:</strong> Customer relationship management solutions tailored to your business
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>ERP Solutions:</strong> Enterprise resource planning systems for streamlined operations
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Inventory Management:</strong> Custom inventory tracking and management systems
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Financial Software:</strong> Accounting, billing, and financial management applications
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Workflow Automation:</strong> Business process automation and workflow management tools
                  </span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Development Process</h3>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Requirements Analysis</h4>
                    <p className="text-gray-700">
                      Thorough analysis of your business requirements, processes, and objectives.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">System Architecture</h4>
                    <p className="text-gray-700">
                      Designing scalable and secure system architecture that meets your current and future needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Development & Testing</h4>
                    <p className="text-gray-700">
                      Agile development with continuous testing to ensure quality and functionality.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Deployment & Integration</h4>
                    <p className="text-gray-700">
                      Smooth deployment and integration with your existing systems and workflows.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Support & Maintenance</h4>
                    <p className="text-gray-700">
                      Ongoing support, updates, and enhancements to keep your software running optimally.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Technologies We Use</h3>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Frontend</div>
                  <div className="text-sm text-gray-600">React, Angular, Vue.js</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Backend</div>
                  <div className="text-sm text-gray-600">Node.js, Python, .NET, Java</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Database</div>
                  <div className="text-sm text-gray-600">PostgreSQL, MongoDB, MySQL</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white mb-8">
                <h4 className="text-2xl font-bold mb-6">Benefits of Custom Software</h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold mb-3">Business Benefits</h5>
                    <ul className="space-y-2 text-indigo-100">
                      <li>• Perfect fit for your processes</li>
                      <li>• Competitive advantage</li>
                      <li>• Improved efficiency</li>
                      <li>• Better ROI over time</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold mb-3">Technical Benefits</h5>
                    <ul className="space-y-2 text-purple-100">
                      <li>• Scalable architecture</li>
                      <li>• Enhanced security</li>
                      <li>• Easy integration</li>
                      <li>• Full control & ownership</li>
                    </ul>
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
              className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-8 text-white text-center mb-12"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Build Your Custom Software?</h3>
              <p className="text-indigo-100 mb-6">
                Get a free consultation from our custom software development experts. Let's discuss your requirements
                and create the perfect solution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/yesptech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-indigo-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2"
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
