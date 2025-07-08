"use client"

import { motion } from "framer-motion"
import { Users, Award, Clock, Star } from "lucide-react"

export default function Clients() {
  const stats = [
    { icon: Users, number: "50+", label: "Happy Clients" },
    { icon: Award, number: "100+", label: "Projects Completed" },
    { icon: Clock, number: "3+", label: "Years Experience" },
    { icon: Star, number: "4.9", label: "Client Rating" },
  ]

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-indigo-900 to-blue-900" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Over{" "}
            <span className="bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent">50+ brands</span>{" "}
            trust YESP
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            In just 3 years, we've built lasting partnerships and delivered exceptional results for businesses
            worldwide.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="backdrop-blur-sm bg-white/10 rounded-3xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-10 h-10 text-white" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: index * 0.2 + 0.5 }}
                    viewport={{ once: true }}
                    className="text-4xl font-bold text-white mb-2"
                  >
                    {stat.number}
                  </motion.div>
                  <p className="text-cyan-200 font-medium">{stat.label}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
