"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import { Calendar, Clock, User, ArrowLeft, CheckCircle, Shield } from "lucide-react"
import FAQ from "@/components/FAQ"

export default function SecurityAuditBlogPage() {
  const faqs = [
    {
      question: "What is included in a security audit?",
      answer:
        "Our security audit includes vulnerability assessment, penetration testing, code review, network security analysis, access control evaluation, compliance checking, and detailed security recommendations with remediation steps.",
    },
    {
      question: "How often should we conduct security audits?",
      answer:
        "We recommend conducting comprehensive security audits at least annually, with quarterly assessments for high-risk environments. Critical systems should be audited after major changes or security incidents.",
    },
    {
      question: "What types of vulnerabilities do you test for?",
      answer:
        "We test for OWASP Top 10 vulnerabilities, SQL injection, XSS, CSRF, authentication flaws, authorization issues, data exposure, configuration errors, and other security weaknesses specific to your technology stack.",
    },
    {
      question: "Do you provide compliance auditing?",
      answer:
        "Yes, we provide compliance auditing for various standards including GDPR, HIPAA, PCI DSS, SOC 2, ISO 27001, and other industry-specific compliance requirements to ensure your systems meet regulatory standards.",
    },
    {
      question: "What happens after the security audit?",
      answer:
        "After the audit, we provide a detailed report with findings, risk ratings, and prioritized remediation recommendations. We also offer ongoing support to help implement security improvements and verify fixes.",
    },
    {
      question: "Can you perform security audits on live systems?",
      answer:
        "Yes, we can perform security audits on live systems using non-intrusive testing methods. We work closely with your team to minimize any potential impact on business operations during the audit process.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Sidebar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-red-50 to-white">
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
                <span className="bg-red-600 text-white px-3 py-1 rounded-full font-medium">Security</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>December 22, 2023</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>9 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>YESP Tech Team</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Professional Security Audit Services - Protect Your Business
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Comprehensive security audit services including vulnerability assessment, penetration testing, and
                compliance auditing to protect your applications and data from cyber threats.
              </p>

              <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-12">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Security Audit Services - YESP Tech"
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
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Expert Security Audit Services</h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                In an era of increasing cyber threats, protecting your digital assets is more critical than ever. As a
                leading provider of <strong>security audit services</strong>, YESP Tech helps businesses identify
                vulnerabilities, assess security risks, and implement robust security measures to protect against cyber
                attacks and data breaches.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Security Audit Services</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-red-50 rounded-2xl p-6">
                  <Shield className="w-8 h-8 text-red-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Vulnerability Assessment</h4>
                  <p className="text-gray-700">
                    Comprehensive scanning and analysis to identify security vulnerabilities in your systems.
                  </p>
                </div>
                <div className="bg-orange-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-orange-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Penetration Testing</h4>
                  <p className="text-gray-700">
                    Ethical hacking to simulate real-world attacks and test your security defenses.
                  </p>
                </div>
                <div className="bg-yellow-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-yellow-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Code Review</h4>
                  <p className="text-gray-700">
                    Static and dynamic code analysis to identify security flaws in your applications.
                  </p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Compliance Auditing</h4>
                  <p className="text-gray-700">
                    Ensuring your systems meet industry standards and regulatory compliance requirements.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive Security Assessment</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Network Security:</strong> Assessment of network infrastructure and security controls
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Web Application Security:</strong> OWASP Top 10 and custom vulnerability testing
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Database Security:</strong> Database configuration and access control review
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Cloud Security:</strong> Cloud infrastructure and configuration security assessment
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Mobile Security:</strong> Mobile application and API security testing
                  </span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Security Audit Process</h3>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Scope Definition</h4>
                    <p className="text-gray-700">
                      Defining the audit scope, objectives, and methodology based on your business requirements.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Information Gathering</h4>
                    <p className="text-gray-700">
                      Collecting information about your systems, architecture, and existing security measures.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Vulnerability Testing</h4>
                    <p className="text-gray-700">
                      Conducting automated and manual testing to identify security vulnerabilities.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Risk Assessment</h4>
                    <p className="text-gray-700">
                      Analyzing and prioritizing identified vulnerabilities based on risk and business impact.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Reporting & Recommendations</h4>
                    <p className="text-gray-700">
                      Providing detailed reports with findings, recommendations, and remediation strategies.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Security Testing Tools</h3>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Vulnerability Scanners</div>
                  <div className="text-sm text-gray-600">Nessus, OpenVAS, Qualys</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Penetration Testing</div>
                  <div className="text-sm text-gray-600">Metasploit, Burp Suite, OWASP ZAP</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Code Analysis</div>
                  <div className="text-sm text-gray-600">SonarQube, Checkmarx, Veracode</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-8 text-white mb-8">
                <h4 className="text-2xl font-bold mb-6">Security Audit Benefits</h4>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">95%</div>
                    <div className="text-red-100">Vulnerability Detection</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">80%</div>
                    <div className="text-red-100">Risk Reduction</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <div className="text-red-100">Compliance Coverage</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-red-600 to-orange-600 rounded-3xl p-8 text-white text-center mb-12"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Business?</h3>
              <p className="text-red-100 mb-6">
                Get a free security consultation from our cybersecurity experts. Let's assess and strengthen your
                security posture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/yesptech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-red-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Security Consultation
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
