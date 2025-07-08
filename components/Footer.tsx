"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-white rounded-3xl p-3 shadow-lg">
                  <Image src="/yesp-logo.png" alt="YESP Tech Logo" width={48} height={48} className="drop-shadow-sm" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Yesp Tech</h3>
                  <p className="text-gray-400">Web & eCommerce Solutions</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed max-w-md">
                Transforming businesses through innovative web development and eCommerce solutions. Trusted by 50+
                clients worldwide with 3+ years of expertise.
              </p>
            </motion.div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-gray-300">+91 9751755757</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-gray-300">contact@yesptech.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {["Home", "About", "Services", "Products", "Contact"].map((item) => (
                <Link
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {item}
                </Link>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <div className="space-y-3">
              {["Web Development", "eCommerce Solutions", "UI/UX Design", "SEO Optimization", "Mobile Apps"].map(
                (service) => (
                  <div key={service} className="text-gray-300">
                    {service}
                  </div>
                ),
              )}
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <span className="text-gray-400">Follow us:</span>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, href: "https://www.linkedin.com/company/yesptech/" },
                  { icon: Twitter, href: "https://x.com/yesptech?s=21" },
                  { icon: Instagram, href: "https://www.instagram.com/yesptech/?hl=en" },
                ].map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 hover:bg-blue-600 rounded-xl flex items-center justify-center transition-colors duration-200"
                  >
                    <social.icon className="w-5 h-5" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400">© {currentYear} Yesp Tech. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
