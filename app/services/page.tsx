"use client"

import { motion } from "framer-motion"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Globe, ShoppingCart, Search, Smartphone, Code, Palette, Database, Cloud, Shield } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      description:
        "Custom websites built with modern technologies like React, Next.js, and Node.js for optimal performance and user experience.",
      icon: Globe,
      features: ["Responsive Design", "SEO Optimized", "Fast Loading", "Modern Frameworks"],
      blogSlug: "web-development-company-erode",
    },
    {
      title: "eCommerce Solutions",
      description:
        "Powerful online stores with secure payment gateways, inventory management, and seamless shopping experiences.",
      icon: ShoppingCart,
      features: ["Payment Integration", "Inventory Management", "Order Tracking", "Mobile Optimized"],
      blogSlug: "ecommerce-development-company",
    },
    {
      title: "SEO Optimization",
      description:
        "Improve your search rankings and drive organic traffic with our comprehensive SEO strategies and techniques.",
      icon: Search,
      features: ["Keyword Research", "On-page SEO", "Technical SEO", "Analytics Setup"],
      blogSlug: "seo-services-company",
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that work seamlessly across iOS and Android devices.",
      icon: Smartphone,
      features: ["Cross-platform", "Native Performance", "App Store Deployment", "Push Notifications"],
      blogSlug: "mobile-app-development-services",
    },
    {
      title: "Custom Software",
      description: "Tailored software solutions to meet your specific business requirements and streamline operations.",
      icon: Code,
      features: ["Custom Logic", "Database Design", "API Integration", "Scalable Architecture"],
      blogSlug: "custom-software-development",
    },
    {
      title: "UI/UX Design",
      description:
        "Beautiful, intuitive designs that enhance user engagement, improve conversion rates, and create memorable experiences.",
      icon: Palette,
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      blogSlug: "ui-ux-design-company",
    },
    {
      title: "Database Solutions",
      description:
        "Robust database design and management solutions for efficient data storage, retrieval, and analytics.",
      icon: Database,
      features: ["Database Design", "Performance Optimization", "Data Migration", "Backup Solutions"],
      blogSlug: "database-solutions-services",
    },
    {
      title: "Cloud Services",
      description:
        "Cloud infrastructure setup and management for scalable, secure, and cost-effective hosting solutions.",
      icon: Cloud,
      features: ["AWS/Azure Setup", "Auto Scaling", "Load Balancing", "Monitoring"],
      blogSlug: "cloud-services-solutions",
    },
    {
      title: "Security Audits",
      description: "Comprehensive security assessments to protect your applications and data from potential threats.",
      icon: Shield,
      features: ["Vulnerability Assessment", "Penetration Testing", "Security Recommendations", "Compliance"],
      blogSlug: "security-audit-services",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Sidebar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our <span className="text-blue-600">Services</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive digital solutions to help your business thrive in the modern marketplace. From web
              development to mobile apps, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                    <IconComponent className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-100 pt-6">
                    <Link href={`/blog/${service.blogSlug}`} passHref>
                      <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-full">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together. Contact us today for a free
              consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/contact-yesptech/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                </svg>
                Book Consultation
              </a>
              <a
                href="https://wa.me/919751755757"
                target="_blank"
                rel="noopener noreferrer"
                className="border-white text-white hover:bg-white/10 border-2 px-8 py-3 rounded-full font-semibold text-lg transition-colors inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
