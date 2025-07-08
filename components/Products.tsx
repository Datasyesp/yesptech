"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Rocket, Zap, ShoppingBag, BarChart3, Smartphone } from "lucide-react"
import EarlyAccessModal from "./EarlyAccessModal"

export default function Products() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section id="products" className="py-20 relative overflow-hidden bg-gray-50">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1000 600" fill="none">
            <path d="M100 100C200 50 300 150 500 100" stroke="#1e40af" strokeWidth="2" strokeDasharray="8,4" />
            <circle cx="700" cy="200" r="30" stroke="#1e40af" strokeWidth="2" fill="none" />
            <rect x="200" y="400" width="60" height="60" stroke="#1e40af" strokeWidth="2" fill="none" rx="12" />
            <path d="M600 500C650 450 700 550 800 500" stroke="#1e40af" strokeWidth="2" strokeDasharray="6,3" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              Coming Soon
            </div>

            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
              Introducing <span className="text-blue-600">Yesp Ecom Studio</span>
            </h2>
          </motion.div>

          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
            >
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="relative bg-white rounded-3xl p-4 shadow-lg border border-gray-100">
                      <Image
                        src="/ecom-studio-logo.png"
                        alt="Yesp Ecom Studio"
                        width={80}
                        height={80}
                        className="drop-shadow-sm"
                      />
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">!</span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">Yesp Ecom Studio</h3>
                      <p className="text-blue-600 font-medium">The Future of eCommerce</p>
                    </div>
                  </div>

                  <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                    A revolutionary eCommerce platform that combines powerful features with intuitive design. Build,
                    manage, and scale your online store with cutting-edge technology and seamless user experience.
                  </p>

                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {[
                      { icon: ShoppingBag, text: "AI-Powered Recommendations" },
                      { icon: BarChart3, text: "Advanced Analytics" },
                      { icon: Zap, text: "Lightning Fast Performance" },
                      { icon: Smartphone, text: "Mobile-First Design" },
                    ].map((feature, index) => (
                      <motion.div
                        key={feature.text}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3 bg-blue-50 rounded-2xl p-4"
                      >
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                          <feature.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-gray-800 font-medium">{feature.text}</span>
                      </motion.div>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button
                      onClick={() => setIsModalOpen(true)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      Get Early Access
                    </Button>
                    <Link href="/products">
                      <Button
                        variant="outline"
                        className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 rounded-full font-semibold bg-transparent w-full sm:w-auto"
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="relative">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="relative"
                  >
                    <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl">
                      <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center gap-2">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                        </div>
                        <div className="text-gray-400 text-sm">ecom-studio.yesptech.in</div>
                      </div>

                      <div className="space-y-4">
                        <div className="h-4 bg-blue-500 rounded w-3/4"></div>
                        <div className="h-4 bg-gray-600 rounded w-1/2"></div>
                        <div className="grid grid-cols-3 gap-4 mt-6">
                          <div className="h-20 bg-blue-500 rounded-2xl"></div>
                          <div className="h-20 bg-indigo-500 rounded-2xl"></div>
                          <div className="h-20 bg-cyan-500 rounded-2xl"></div>
                        </div>
                        <div className="h-8 bg-green-500 rounded-full w-2/3 mt-6"></div>
                      </div>
                    </div>

                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                      className="absolute -top-4 -right-4 w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg"
                    >
                      <Zap className="w-6 h-6 text-white" />
                    </motion.div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <EarlyAccessModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
