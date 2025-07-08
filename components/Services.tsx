"use client"

import { motion } from "framer-motion"
import { Globe, ShoppingCart, Search, Smartphone, Code, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "Custom websites built with modern technologies for optimal performance and user experience.",
      icon: Globe,
    },
    {
      title: "eCommerce Solutions",
      description: "Powerful online stores with secure payment gateways and inventory management systems.",
      icon: ShoppingCart,
    },
    {
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic to your business.",
      icon: Search,
    },
    {
      title: "Mobile Development",
      description: "Responsive mobile applications that work seamlessly across all devices.",
      icon: Smartphone,
    },
    {
      title: "Custom Software",
      description: "Tailored software solutions to meet your specific business requirements.",
      icon: Code,
    },
    {
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that enhance user engagement and conversion.",
      icon: Palette,
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our <span className="text-blue-600">Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern marketplace.
          </p>
        </motion.div>

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
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                  <IconComponent className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your project requirements and get a customized solution.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <a href="https://calendly.com/contact-yesptech/30min" target="_blank" rel="noopener noreferrer">
              Schedule Free Consultation
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
