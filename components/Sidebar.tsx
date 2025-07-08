"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { X, Menu, Phone, Mail, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Toggle Button */}
      <motion.button
        onClick={toggleSidebar}
        className="fixed top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-l-2xl shadow-lg z-40 transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Menu className="w-5 h-5" />
      </motion.button>

      {/* Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={toggleSidebar}
            className="fixed inset-0 bg-black/50 z-40"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-gray-900">Quick Contact</h2>
                <button onClick={toggleSidebar} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Contact Options */}
              <div className="space-y-4 mb-8">
                <a
                  href="tel:9751755757"
                  className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Call Us</p>
                    <p className="text-blue-600">+91 9751755757</p>
                  </div>
                </a>

                <a
                  href="mailto:contact@yesptech.in"
                  className="flex items-center gap-4 p-4 bg-green-50 rounded-2xl hover:bg-green-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Email Us</p>
                    <p className="text-green-600">contact@yesptech.in</p>
                  </div>
                </a>

                <a
  href="https://wa.me/919751755757?text=Hello%21%20I%E2%80%99m%20interested%20in%20your%20services.%20Please%20assist%20me."
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center gap-4 p-4 bg-emerald-50 rounded-2xl hover:bg-emerald-100 transition-colors"
>
  <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center">
    <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
      <path d="M17.472 14.382c-.297... (SVG path continues)" />
    </svg>
  </div>
  <div>
    <p className="font-semibold text-gray-900">WhatsApp</p>
    <p className="text-emerald-600">Quick Response</p>
  </div>
</a>

              </div>

              {/* Quick Actions */}
              <div className="space-y-3">
                <a href="https://calendly.com/contact-yesptech/30min" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Schedule Meeting
                  </Button>
                </a>
          
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-4 bg-gray-50 rounded-2xl">
                <h3 className="font-semibold text-gray-900 mb-3">Business Hours</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-6 p-4 bg-red-50 rounded-2xl border border-red-200">
                <h3 className="font-semibold text-red-900 mb-2">Emergency Support</h3>
                <p className="text-sm text-red-700 mb-3">For urgent technical issues with existing projects</p>
                <a href="tel:9751755757" className="text-red-600 font-medium text-sm hover:text-red-700">
                  Call: +91 9751755757
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
