"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Rocket, Zap, ShoppingBag, BarChart3, Smartphone, Shield, Globe } from "lucide-react"
import { useState } from "react"
import EarlyAccessModal from "@/components/EarlyAccessModal"

export default function ProductsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const features = [
    {
      icon: ShoppingBag,
      title: "AI-Powered Recommendations",
      description: "Smart product suggestions that increase sales and improve customer experience",
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive insights into your store performance and customer behavior",
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Optimized for mobile devices with responsive design and fast loading",
    },
    {
      icon: Shield,
      title: "Secure Payments",
      description: "Multiple payment gateways with bank-level security and fraud protection",
    },
    {
      icon: Globe,
      title: "Multi-Channel Integration",
      description: "Seamlessly connect with social media, marketplaces, and other platforms",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized performance with CDN integration and caching mechanisms",
    },
  ]

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Sidebar />
      <EarlyAccessModal isOpen={isModalOpen} onClose={handleCloseModal} />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
            <path d="M100 100C200 50 300 150 500 100" stroke="#1e40af" strokeWidth="2" strokeDasharray="8,4" />
            <circle cx="700" cy="200" r="30" stroke="#1e40af" strokeWidth="2" fill="none" />
            <rect x="200" y="400" width="60" height="60" stroke="#1e40af" strokeWidth="2" fill="none" rx="12" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              Coming Soon
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Yesp <span className="text-blue-600">Ecom Studio</span>
            </h1>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
              The next-generation eCommerce platform that combines powerful features with intuitive design. Build,
              manage, and scale your online store with cutting-edge technology.
            </p>

            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-100">
                <Image src="/ecom-studio-logo.png" alt="YESP Ecom Studio" width={80} height={80} />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create, manage, and grow your online business in one comprehensive platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Launch Your Store?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join the waitlist and be among the first to experience the future of eCommerce with YESP Ecom Studio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-full font-semibold text-lg"
                onClick={handleOpenModal}
              >
                Join Waitlist
              </Button>
              <Button
              
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-3 rounded-full font-semibold text-lg bg-transparent"
              >
                 <a href="https://calendly.com/contact-yesptech/30min" target="_blank" rel="noopener noreferrer">
              book a demo
            </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
