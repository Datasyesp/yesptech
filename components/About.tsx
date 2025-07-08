"use client"

import { motion } from "framer-motion"
import { CheckCircle, Sparkles } from "lucide-react"

export default function About() {
  const features = ["Expert Web Solutions", "Powerful eCommerce Systems", "50+ Successful Clients"]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100" />

      {/* Doodle Background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 800 600" fill="none">
          <path
            d="M50 100C100 50 150 150 250 100C350 50 400 200 500 150"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray="10,5"
          />
          <circle cx="600" cy="200" r="40" stroke="currentColor" strokeWidth="3" fill="none" />
          <path d="M100 400L150 350L200 400L150 450Z" stroke="currentColor" strokeWidth="3" fill="none" />
          <rect
            x="500"
            y="400"
            width="80"
            height="80"
            stroke="currentColor"
            strokeWidth="3"
            fill="none"
            transform="rotate(30 540 440)"
          />
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
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            About Yesp Tech
          </div>

          <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-indigo-900 bg-clip-text text-transparent mb-8">
            Crafting Digital Excellence
          </h2>

          <div className="backdrop-blur-sm bg-white/60 rounded-3xl p-8 border border-white/40 max-w-4xl mx-auto">
            <p className="text-xl text-slate-700 leading-relaxed">
              We are a cutting-edge web development and eCommerce solutions provider with{" "}
              <span className="font-bold text-blue-700">3 years of expertise</span>, dedicated to transforming
              businesses through innovative digital experiences and powerful technology solutions.
            </p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="backdrop-blur-sm bg-white/70 p-8 rounded-3xl border border-white/50 hover:bg-white/80 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">{feature}</h3>
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
