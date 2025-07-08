"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-white pt-16"
    >
      {/* Enhanced Doodle Art Background */}
      <div className="absolute inset-0 opacity-8">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          {/* Animated Lines */}
      

          {/* Static Shapes */}
          <circle cx="200" cy="150" r="25" stroke="#60a5fa" strokeWidth="2" fill="none" />
          <rect x="800" y="100" width="50" height="50" stroke="#3b82f6" strokeWidth="2" fill="none" rx="12" />
          <path d="M150 400L180 370L210 400L180 430Z" stroke="#60a5fa" strokeWidth="2" fill="none" />

          {/* More Doodles */}
     

          <path d="M50 600C100 550 150 650 250 600" stroke="#60a5fa" strokeWidth="2" strokeDasharray="8,4" />
          <rect x="700" y="500" width="40" height="40" stroke="#3b82f6" strokeWidth="2" fill="none" rx="8" />

          {/* Curved Lines */}
      

          {/* Small Decorative Elements */}
          <circle cx="400" cy="500" r="15" stroke="#60a5fa" strokeWidth="2" fill="none" />
          <path d="M1000 150L1030 120L1060 150L1030 180Z" stroke="#3b82f6" strokeWidth="2" fill="none" />
        </svg>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ y: [-10, 10, -10], x: [-5, 5, -5] }}
          transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-32 left-20 w-3 h-3 bg-blue-200 rounded-full"
        />
        <motion.div
          animate={{ y: [10, -10, 10], x: [5, -5, 5] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-40 right-32 w-4 h-4 bg-blue-300 rounded-full"
        />
        <motion.div
          animate={{ y: [-8, 8, -8], x: [-3, 3, -3] }}
          transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-32 left-1/4 w-2 h-2 bg-blue-400 rounded-full"
        />
      
      </div>

      <div className="container mx-auto text-center relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          {/* Logo Section */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-100">
              <Image src="/yesp-logo.png" alt="Yesp Tech Logo" width={60} height={60} />
            </div>
            <div className="w-px h-12 bg-gray-200" />
            <div className="bg-white rounded-3xl p-4 shadow-lg border border-gray-100">
              <Image src="/ecom-studio-logo.png" alt="YESP Ecom Studio" width={60} height={60} />
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight">
            Yesp <span className="text-blue-600">Tech Solutions</span>
          </h1>

          {/* Subtitle Card */}
          <div className="bg-white rounded-3xl p-8 mb-8 shadow-xl border border-gray-100 max-w-4xl mx-auto">
            <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
              Web & eCommerce Solutions Trusted by <span className="text-blue-600 font-semibold">50+ Clients</span>
            </p>

            {/* Product Launch Badge */}
            <div className="inline-flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-full px-6 py-3">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-blue-700 font-medium">Yesp Ecom Studio - Launching Soon!</span>
            </div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Let's Build Together
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-12 py-6 text-xl font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 bg-transparent"
          >
            <a href="https://calendly.com/contact-yesptech/30min" target="_blank" rel="noopener noreferrer">
              Schedule Meeting
            </a>
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="flex flex-col items-center"
        >
          <span className="text-gray-500 text-sm mb-2">Scroll to explore</span>
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
