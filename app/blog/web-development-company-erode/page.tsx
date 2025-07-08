"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import { Calendar, Clock, User, ArrowLeft, CheckCircle } from "lucide-react"
import FAQ from "@/components/FAQ"

export default function WebDevelopmentBlogPage() {
  const faqs = [
    {
      question: "Why choose YESP Tech as your web development company in Erode?",
      answer:
        "YESP Tech is the leading web development company in Erode with 3+ years of experience, 50+ successful projects, and expertise in modern technologies like React, Next.js, and Node.js. We provide custom solutions, responsive design, and ongoing support with 24/7 customer service.",
    },
    {
      question: "What web development services do you offer in Erode?",
      answer:
        "We offer comprehensive web development services including custom website development, responsive design, e-commerce solutions, CMS development, web application development, API integration, website maintenance, SEO optimization, and digital marketing services.",
    },
    {
      question: "How much does web development cost in Erode?",
      answer:
        "Web development costs vary based on project complexity, features, and requirements. We offer competitive pricing starting from ₹15,000 for basic websites, ₹50,000 for business websites, and ₹2,00,000+ for complex web applications. Contact us for a detailed quote tailored to your needs.",
    },
    {
      question: "What technologies do you use for web development?",
      answer:
        "We use modern technologies including React, Next.js, Node.js, MongoDB, PostgreSQL, Tailwind CSS, TypeScript, Python, PHP, and cloud platforms like AWS, Vercel, and Netlify for scalable and efficient web solutions.",
    },
    {
      question: "Do you provide website maintenance services?",
      answer:
        "Yes, we provide comprehensive website maintenance services including security updates, performance optimization, content updates, backup management, bug fixes, feature enhancements, and 24/7 technical support to keep your website running smoothly.",
    },
    {
      question: "How long does it take to develop a website?",
      answer:
        "Website development timeline depends on complexity. Simple websites take 1-2 weeks, business websites take 2-4 weeks, e-commerce sites take 4-6 weeks, and complex web applications can take 6-12 weeks. We provide detailed timelines during project planning.",
    },
    {
      question: "Do you create mobile-responsive websites?",
      answer:
        "Yes, all our websites are mobile-first and fully responsive. We ensure your website looks perfect and functions flawlessly on all devices including desktops, tablets, and smartphones with optimal user experience across all screen sizes.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "We specialize in website redesign services. We analyze your current website, identify areas for improvement, and create a modern, user-friendly design that improves performance, SEO, and conversion rates while maintaining your brand identity.",
    },
    {
      question: "Do you provide SEO services with web development?",
      answer:
        "Yes, we integrate SEO best practices into every website we develop. This includes on-page SEO, technical SEO, site speed optimization, mobile optimization, schema markup, and SEO-friendly URL structure to help your website rank higher in search engines.",
    },
    {
      question: "What is your web development process?",
      answer:
        "Our process includes: 1) Discovery & Planning, 2) Design & Wireframing, 3) Development & Coding, 4) Testing & Quality Assurance, 5) Launch & Deployment, 6) Training & Support, 7) Ongoing Maintenance. We keep you involved throughout the entire process.",
    },
    {
      question: "Do you provide hosting and domain services?",
      answer:
        "Yes, we provide complete hosting solutions including domain registration, SSL certificates, cloud hosting, CDN setup, email hosting, and backup services. We recommend the best hosting solution based on your website's requirements and traffic expectations.",
    },
    {
      question: "Can you integrate third-party services into my website?",
      answer:
        "Yes, we can integrate various third-party services including payment gateways (Razorpay, PayU, Stripe), CRM systems, email marketing tools, analytics platforms, social media APIs, booking systems, and other business tools to enhance your website's functionality.",
    },
    {
      question: "Do you provide e-commerce website development in Erode?",
      answer:
        "Yes, we specialize in e-commerce website development with features like product catalogs, shopping carts, secure payment gateways, inventory management, order tracking, customer accounts, and admin panels. We work with platforms like WooCommerce, Shopify, and custom solutions.",
    },
    {
      question: "What makes YESP Tech different from other web development companies in Erode?",
      answer:
        "YESP Tech stands out with our modern technology stack, transparent pricing, timely delivery, ongoing support, local expertise in Erode market, personalized service, and commitment to quality. We focus on building long-term relationships with our clients.",
    },
    {
      question: "Do you provide website security services?",
      answer:
        "Yes, we implement comprehensive security measures including SSL certificates, secure coding practices, regular security updates, malware protection, firewall setup, backup solutions, and security monitoring to protect your website from cyber threats and data breaches.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Sidebar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <div className="max-w-4xl mx-auto">
              <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                <span className="bg-blue-600 text-white px-3 py-1 rounded-full font-medium">Web Development</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>January 15, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>12 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>YESP Tech Team</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Best Web Development Company in Erode - YESP Tech | Professional Website Development Services
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Looking for the best web development company in Erode? YESP Tech offers professional website development
                services with modern technologies, responsive design, SEO optimization, and ongoing support to help your
                business succeed online. Get custom web solutions at affordable prices.
              </p>

              <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-12">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Best Web Development Company in Erode - YESP Tech Professional Website Development Services"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="prose prose-lg max-w-none"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Why YESP Tech is the Leading Web Development Company in Erode, Tamil Nadu
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                In today's digital age, having a professional website is crucial for business success. As the premier{" "}
                <strong>web development company in Erode</strong>, YESP Tech has been helping businesses establish their
                online presence with cutting-edge web solutions since 2021. We specialize in creating custom websites
                that not only look stunning but also drive results for your business.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Our team of expert web developers in Erode combines creativity with technical expertise to deliver
                websites that are fast, secure, mobile-responsive, and SEO-optimized. Whether you need a simple business
                website, complex e-commerce platform, or custom web application, we have the skills and experience to
                bring your vision to life.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Our Comprehensive Web Development Services in Erode
              </h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-blue-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Custom Website Development</h4>
                  <p className="text-gray-700">
                    Tailored websites built specifically for your business needs using modern technologies like React,
                    Next.js, and Node.js. We create unique designs that reflect your brand identity and engage your
                    target audience.
                  </p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Responsive Web Design</h4>
                  <p className="text-gray-700">
                    Mobile-first approach ensuring your website looks perfect and functions flawlessly on all devices
                    including desktops, tablets, and smartphones with optimal user experience.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">E-commerce Development</h4>
                  <p className="text-gray-700">
                    Complete online store solutions with secure payment gateways, inventory management, order tracking,
                    and user-friendly shopping experiences to boost your online sales.
                  </p>
                </div>
                <div className="bg-orange-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">SEO-Optimized Development</h4>
                  <p className="text-gray-700">
                    Built-in SEO best practices including fast loading speeds, clean code structure, schema markup, and
                    mobile optimization to help your website rank higher in search engines.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Complete Web Development Solutions for Erode Businesses
              </h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                As a full-service <strong>web development company in Erode</strong>, we offer comprehensive solutions
                that cover every aspect of your online presence:
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Business Websites:</strong> Professional corporate websites that establish credibility and
                    showcase your services effectively
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>E-commerce Platforms:</strong> Feature-rich online stores with secure payment integration,
                    inventory management, and customer accounts
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Web Applications:</strong> Custom web apps tailored to your specific business requirements
                    and workflows
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>CMS Development:</strong> Content management systems that allow you to easily update and
                    manage your website content
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>API Integration:</strong> Seamless integration with third-party services, payment gateways,
                    and business tools
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Website Maintenance:</strong> Ongoing support, security updates, performance optimization,
                    and technical assistance
                  </span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why Choose YESP Tech for Web Development in Erode?
              </h3>

              <div className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white mb-8">
                <h4 className="text-2xl font-bold mb-6">Our Proven Track Record</h4>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">50+</div>
                    <div className="text-blue-100">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">3+</div>
                    <div className="text-blue-100">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="text-blue-100">Client Satisfaction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-blue-100">Support Available</div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <h4 className="text-2xl font-bold text-gray-900 mb-6">
                  What Sets Us Apart from Other Web Development Companies in Erode
                </h4>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-gray-900 mb-3">Technical Excellence</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Modern technology stack (React, Next.js, Node.js)</li>
                      <li>• Clean, maintainable code structure</li>
                      <li>• Fast loading speeds and performance optimization</li>
                      <li>• Mobile-first responsive design approach</li>
                      <li>• SEO-friendly development practices</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-3">Business Focus</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Understanding of local Erode market</li>
                      <li>• Transparent pricing with no hidden costs</li>
                      <li>• Timely project delivery and communication</li>
                      <li>• Ongoing support and maintenance</li>
                      <li>• Focus on ROI and business growth</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Proven Web Development Process</h3>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Discovery & Planning</h4>
                    <p className="text-gray-700">
                      We start by understanding your business goals, target audience, project requirements, and budget.
                      This helps us create a detailed project plan and timeline.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Design & Wireframing</h4>
                    <p className="text-gray-700">
                      Our design team creates user-friendly wireframes and mockups that align with your brand identity
                      and provide excellent user experience.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Development & Coding</h4>
                    <p className="text-gray-700">
                      Our developers build your website using modern technologies and best practices, ensuring clean
                      code, fast performance, and scalability.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Testing & Quality Assurance</h4>
                    <p className="text-gray-700">
                      Thorough testing across different devices, browsers, and screen sizes to ensure your website works
                      perfectly everywhere.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Launch & Deployment</h4>
                    <p className="text-gray-700">
                      We handle the complete launch process including domain setup, hosting configuration, SSL
                      installation, and go-live procedures.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    6
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Support & Maintenance</h4>
                    <p className="text-gray-700">
                      Ongoing support, updates, security monitoring, and maintenance to keep your website running
                      smoothly and securely.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Modern Technologies We Use for Web Development</h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                As a modern <strong>web development company in Erode</strong>, we use cutting-edge technologies to
                deliver high-performance, scalable websites:
              </p>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Frontend Technologies</div>
                  <div className="text-sm text-gray-600">
                    React, Next.js, Vue.js, TypeScript, Tailwind CSS, HTML5, CSS3
                  </div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Backend Technologies</div>
                  <div className="text-sm text-gray-600">Node.js, Express.js, Python, PHP, Laravel, Django</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Database & Cloud</div>
                  <div className="text-sm text-gray-600">MongoDB, PostgreSQL, MySQL, AWS, Vercel, Netlify</div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industries We Serve in Erode</h3>

              <p className="text-gray-700 leading-relaxed mb-6">
                Our web development expertise spans across various industries in Erode and Tamil Nadu:
              </p>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-bold text-gray-900 mb-2">Manufacturing & Textiles</h5>
                  <p className="text-sm text-gray-600">
                    Custom websites for textile mills, garment manufacturers, and industrial businesses
                  </p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h5 className="font-bold text-gray-900 mb-2">Healthcare & Medical</h5>
                  <p className="text-sm text-gray-600">
                    Professional websites for hospitals, clinics, and healthcare providers
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-bold text-gray-900 mb-2">Education & Training</h5>
                  <p className="text-sm text-gray-600">
                    Educational websites, e-learning platforms, and training institutes
                  </p>
                </div>
                <div className="bg-orange-50 rounded-lg p-4">
                  <h5 className="font-bold text-gray-900 mb-2">Retail & E-commerce</h5>
                  <p className="text-sm text-gray-600">
                    Online stores, marketplace platforms, and retail business websites
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-8 text-white text-center mb-12"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Start Your Web Development Project in Erode?</h3>
              <p className="text-blue-100 mb-6">
                Get a free consultation from the leading web development company in Erode. Let's discuss your project
                requirements and create a website that drives results for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/yesptech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Free Consultation
                </a>
                <a
                  href="https://wa.me/919751755757"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-white text-white hover:bg-white/10 border-2 px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </motion.div>

            {/* FAQ Section */}
            <FAQ faqs={faqs} />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
