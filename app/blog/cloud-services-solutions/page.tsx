"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import { Calendar, Clock, User, ArrowLeft, CheckCircle, Cloud } from "lucide-react"
import FAQ from "@/components/FAQ"

export default function CloudServicesBlogPage() {
  const faqs = [
    {
      question: "What cloud services does YESP Tech offer?",
      answer:
        "We offer comprehensive cloud services including cloud migration, infrastructure setup, serverless solutions, cloud security, monitoring, backup solutions, and managed cloud services for AWS, Azure, and Google Cloud Platform.",
    },
    {
      question: "Which cloud platforms do you work with?",
      answer:
        "We work with major cloud platforms including Amazon Web Services (AWS), Microsoft Azure, Google Cloud Platform (GCP), and other cloud providers to deliver scalable and reliable cloud solutions.",
    },
    {
      question: "Can you help migrate our existing infrastructure to the cloud?",
      answer:
        "Yes, we provide seamless cloud migration services with minimal downtime. We assess your current infrastructure, plan the migration strategy, and execute the migration while ensuring data security and business continuity.",
    },
    {
      question: "What are the benefits of cloud services?",
      answer:
        "Cloud services offer scalability, cost-effectiveness, improved security, automatic backups, global accessibility, reduced IT maintenance, and the ability to scale resources up or down based on demand.",
    },
    {
      question: "Do you provide cloud security services?",
      answer:
        "Yes, we implement comprehensive cloud security measures including encryption, access controls, network security, compliance management, and continuous monitoring to protect your cloud infrastructure and data.",
    },
    {
      question: "What ongoing support do you provide for cloud services?",
      answer:
        "We provide 24/7 cloud monitoring, performance optimization, security updates, backup management, cost optimization, and technical support to ensure your cloud infrastructure runs efficiently.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Sidebar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-sky-50 to-white">
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
                <span className="bg-sky-600 text-white px-3 py-1 rounded-full font-medium">Cloud</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>December 25, 2023</span>
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
                Professional Cloud Services Solutions - Scale Your Business
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Expert cloud services including migration, infrastructure setup, and managed cloud solutions to help
                your business scale efficiently while reducing costs and improving performance.
              </p>

              <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-12">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Cloud Services Solutions - YESP Tech"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Leading Cloud Services Solutions Provider</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                In today's digital landscape, cloud computing has become essential for businesses looking to scale
                efficiently and reduce operational costs. As a premier <strong>cloud services solutions</strong>{" "}
                provider, YESP Tech helps businesses leverage the power of cloud computing to achieve their goals with
                scalable, secure, and cost-effective solutions.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Cloud Services Solutions</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-sky-50 rounded-2xl p-6">
                  <Cloud className="w-8 h-8 text-sky-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Cloud Migration</h4>
                  <p className="text-gray-700">
                    Seamless migration of your existing infrastructure to the cloud with minimal downtime.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Infrastructure Setup</h4>
                  <p className="text-gray-700">
                    Complete cloud infrastructure design and setup optimized for your business requirements.
                  </p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Auto Scaling</h4>
                  <p className="text-gray-700">
                    Automatic scaling solutions that adjust resources based on demand to optimize costs.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Cloud Security</h4>
                  <p className="text-gray-700">
                    Comprehensive security measures to protect your cloud infrastructure and data.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete Cloud Solutions</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>AWS Services:</strong> Complete Amazon Web Services setup and management
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Azure Solutions:</strong> Microsoft Azure cloud infrastructure and services
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Google Cloud:</strong> Google Cloud Platform implementation and optimization
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Serverless Computing:</strong> Function-as-a-Service and serverless architecture
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-sky-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Cloud Monitoring:</strong> 24/7 monitoring and performance optimization
                  </span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Cloud Implementation Process</h3>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Assessment & Planning</h4>
                    <p className="text-gray-700">
                      Comprehensive assessment of your current infrastructure and cloud migration planning.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Architecture Design</h4>
                    <p className="text-gray-700">
                      Designing scalable and secure cloud architecture tailored to your business needs.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Migration & Setup</h4>
                    <p className="text-gray-700">
                      Executing cloud migration and infrastructure setup with minimal business disruption.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Testing & Optimization</h4>
                    <p className="text-gray-700">
                      Thorough testing and performance optimization to ensure optimal cloud performance.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-sky-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Monitoring & Support</h4>
                    <p className="text-gray-700">
                      Ongoing monitoring, maintenance, and support to ensure reliable cloud operations.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Platforms We Work With</h3>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Amazon AWS</div>
                  <div className="text-sm text-gray-600">EC2, S3, RDS, Lambda, CloudFront</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Microsoft Azure</div>
                  <div className="text-sm text-gray-600">Virtual Machines, Storage, SQL Database</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Google Cloud</div>
                  <div className="text-sm text-gray-600">Compute Engine, Cloud Storage, BigQuery</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-sky-600 to-blue-600 rounded-3xl p-8 text-white mb-8">
                <h4 className="text-2xl font-bold mb-6">Cloud Benefits for Your Business</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">60%</div>
                    <div className="text-sky-100">Cost Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">99.9%</div>
                    <div className="text-sky-100">Uptime Guarantee</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">10x</div>
                    <div className="text-sky-100">Faster Deployment</div>
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
              className="bg-gradient-to-br from-sky-600 to-blue-600 rounded-3xl p-8 text-white text-center mb-12"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Move to the Cloud?</h3>
              <p className="text-sky-100 mb-6">
                Get a free cloud consultation from our experts. Let's discuss your cloud migration and optimization
                strategy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/yesptech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-sky-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Cloud Consultation
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
