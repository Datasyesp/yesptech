"use client"

import { motion } from "framer-motion"

export default function TrustedClients() {
  // Placeholder client logos - you can replace these with actual client logos
  const clients = [
    { name: "TechCorp", logo: "/placeholder.svg?height=60&width=120" },
    { name: "InnovateLab", logo: "/placeholder.svg?height=60&width=120" },
    { name: "DigitalFlow", logo: "/placeholder.svg?height=60&width=120" },
    { name: "CloudSync", logo: "/placeholder.svg?height=60&width=120" },
    { name: "DataVision", logo: "/placeholder.svg?height=60&width=120" },
    { name: "WebMaster", logo: "/placeholder.svg?height=60&width=120" },
    { name: "EcomPlus", logo: "/placeholder.svg?height=60&width=120" },
    { name: "StartupHub", logo: "/placeholder.svg?height=60&width=120" },
    { name: "TechFlow", logo: "/placeholder.svg?height=60&width=120" },
    { name: "DevStudio", logo: "/placeholder.svg?height=60&width=120" },
    { name: "CodeCraft", logo: "/placeholder.svg?height=60&width=120" },
    { name: "PixelPro", logo: "/placeholder.svg?height=60&width=120" },
  ]

  // Duplicate the array for seamless infinite scroll
  const duplicatedClients = [...clients, ...clients]

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by <span className="text-blue-600">Leading Brands</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We're proud to work with innovative companies that trust us with their digital transformation
          </p>
        </motion.div>

        {/* Scrolling logos */}
        <div className="relative">
          <div className="flex animate-scroll">
            {duplicatedClients.map((client, index) => (
              <div key={`${client.name}-${index}`} className="flex-shrink-0 mx-8 group">
                <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-40 h-24 flex items-center justify-center">
                  <img
                    src={client.logo || "/placeholder.svg"}
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-500 italic">
            "Working with YESP Tech has been a game-changer for our business. Their expertise and dedication are
            unmatched."
          </p>
          <p className="text-gray-700 font-medium mt-2">- Happy Client</p>
        </motion.div>
      </div>
    </section>
  )
}
