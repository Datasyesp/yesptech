"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import { X, Rocket, Mail, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface EarlyAccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function EarlyAccessModal({ isOpen, onClose }: EarlyAccessModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500))
      setSubmitStatus("success")
      setFormData({ name: "", email: "" })

      // Close modal after success
      setTimeout(() => {
        onClose()
        setSubmitStatus("idle")
      }, 2000)
    } catch (error) {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
          >
            <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl border border-gray-100">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-2xl flex items-center justify-center">
                    <Rocket className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">Early Access</h2>
                    <p className="text-blue-600 text-sm">YESP Ecom Studio</p>
                  </div>
                </div>
                <button onClick={onClose} className="p-2 hover:bg-gray-100 rounded-xl transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {submitStatus === "success" ? (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center py-8">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl">🎉</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">You're In!</h3>
                  <p className="text-gray-600">
                    Thanks for joining our early access list. We'll notify you as soon as YESP Ecom Studio is ready!
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6">
                    <p className="text-gray-600 leading-relaxed">
                      Be among the first to experience the future of eCommerce. Get exclusive early access to YESP Ecom
                      Studio and special launch pricing.
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="Your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <Input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="pl-10 w-full rounded-xl border-gray-200 focus:border-blue-500 focus:ring-blue-500"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Joining...
                        </>
                      ) : (
                        <>
                          <Rocket className="w-5 h-5" />
                          Get Early Access
                        </>
                      )}
                    </Button>

                    {submitStatus === "error" && (
                      <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                        <p className="text-red-700 text-sm text-center">Something went wrong. Please try again.</p>
                      </div>
                    )}
                  </form>

                  <div className="mt-6 pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                      <span>Join 500+ others on the waitlist</span>
                    </div>
                  </div>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
