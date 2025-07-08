"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import { Calendar, Clock, User, ArrowLeft, CheckCircle, Search } from "lucide-react"
import FAQ from "@/components/FAQ"

export default function SEOServicesBlogPage() {
  const faqs = [
    {
      question: "What SEO services does YESP Tech offer?",
      answer:
        "We offer comprehensive SEO services including keyword research, on-page optimization, technical SEO, content optimization, link building, local SEO, SEO audits, competitor analysis, and ongoing SEO monitoring to improve your search engine rankings and organic traffic.",
    },
    {
      question: "How long does it take to see SEO results?",
      answer:
        "SEO is a long-term strategy. You can typically see initial improvements in 3-6 months, with significant results in 6-12 months. The timeline depends on competition, current website status, industry competitiveness, and the SEO strategies implemented. We provide monthly reports to track progress.",
    },
    {
      question: "Do you provide local SEO services in Erode?",
      answer:
        "Yes, we specialize in local SEO services for businesses in Erode and Tamil Nadu. We optimize your Google My Business profile, local citations, location-based keywords, local content creation, and review management to improve local search visibility and attract nearby customers.",
    },
    {
      question: "What is included in your SEO audit?",
      answer:
        "Our comprehensive SEO audit includes technical SEO analysis, on-page optimization review, keyword analysis, competitor research, backlink profile analysis, site speed assessment, mobile-friendliness evaluation, content quality review, and detailed recommendations with priority levels.",
    },
    {
      question: "How much do SEO services cost?",
      answer:
        "SEO service costs vary based on project scope, competition level, and business goals. Our SEO packages start from ₹15,000/month for small businesses, ₹30,000/month for medium businesses, and ₹50,000+/month for enterprise solutions. Contact us for a custom quote based on your needs.",
    },
    {
      question: "Do you provide SEO reporting and analytics?",
      answer:
        "Yes, we provide detailed monthly SEO reports including keyword rankings, organic traffic growth, backlink analysis, technical improvements, content performance metrics, and ROI tracking. We use tools like Google Analytics, Search Console, and professional SEO software for transparent reporting.",
    },
    {
      question: "Can you help improve my website's Google rankings?",
      answer:
        "We specialize in improving Google rankings through proven SEO strategies including keyword optimization, quality content creation, technical improvements, link building, and user experience enhancements. We focus on sustainable, white-hat SEO techniques for long-term results.",
    },
    {
      question: "What is the difference between on-page and off-page SEO?",
      answer:
        "On-page SEO involves optimizing elements on your website like content, meta tags, headers, internal links, and site structure. Off-page SEO focuses on external factors like backlinks, social signals, and online reputation. We provide both services for comprehensive SEO coverage.",
    },
    {
      question: "Do you offer content writing services for SEO?",
      answer:
        "Yes, we provide SEO content writing services including blog posts, web page content, product descriptions, and landing page copy. Our content is optimized for target keywords while providing value to users and following Google's content quality guidelines.",
    },
    {
      question: "How do you conduct keyword research?",
      answer:
        "We use professional tools like SEMrush, Ahrefs, and Google Keyword Planner to identify high-value keywords. Our process includes analyzing search volume, competition level, user intent, local search terms, and competitor keywords to create a comprehensive keyword strategy.",
    },
    {
      question: "Can you help with technical SEO issues?",
      answer:
        "Yes, we specialize in technical SEO including site speed optimization, mobile responsiveness, crawlability improvements, schema markup implementation, XML sitemap creation, robots.txt optimization, and fixing technical errors that impact search rankings.",
    },
    {
      question: "Do you provide e-commerce SEO services?",
      answer:
        "Yes, we offer specialized e-commerce SEO services including product page optimization, category page SEO, shopping feed optimization, review schema implementation, and conversion rate optimization to help online stores increase visibility and sales.",
    },
    {
      question: "What tools do you use for SEO analysis?",
      answer:
        "We use industry-leading SEO tools including Google Analytics, Google Search Console, SEMrush, Ahrefs, Moz, Screaming Frog, GTMetrix, and other professional tools to analyze, monitor, and improve your website's SEO performance.",
    },
    {
      question: "How do you measure SEO success?",
      answer:
        "We measure SEO success through various KPIs including organic traffic growth, keyword ranking improvements, conversion rate increases, bounce rate reduction, page load speed improvements, and ultimately, ROI and business growth from organic search traffic.",
    },
    {
      question: "Do you follow Google's SEO guidelines?",
      answer:
        "Yes, we strictly follow Google's SEO guidelines and best practices. We use only white-hat SEO techniques that comply with search engine policies, ensuring sustainable long-term results without risk of penalties or ranking drops.",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Sidebar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-white">
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
                <span className="bg-orange-600 text-white px-3 py-1 rounded-full font-medium">SEO</span>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>January 08, 2024</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>15 min read</span>
                </div>
                <div className="flex items-center gap-1">
                  <User className="w-4 h-4" />
                  <span>YESP Tech Team</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Best SEO Services Company in Erode - Professional Search Engine Optimization Services | YESP Tech
              </h1>

              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Looking for the best SEO services company in Erode? YESP Tech offers professional search engine
                optimization services to improve your website rankings, drive organic traffic, and grow your business
                online with proven SEO strategies and measurable results. Get affordable SEO packages tailored for your
                business needs.
              </p>

              <div className="relative h-64 md:h-96 rounded-3xl overflow-hidden mb-12">
                <Image
                  src="/placeholder.svg?height=400&width=800"
                  alt="Best SEO Services Company in Erode - Professional Search Engine Optimization Services YESP Tech"
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
                Leading SEO Services Company in Erode, Tamil Nadu
              </h2>

              <p className="text-gray-700 leading-relaxed mb-6">
                In today's competitive digital landscape, having a strong online presence is crucial for business
                success. As a premier <strong>SEO services company in Erode</strong>, YESP Tech specializes in improving
                your search engine rankings, driving organic traffic, and helping your business grow online with
                data-driven SEO strategies that deliver measurable results.
              </p>

              <p className="text-gray-700 leading-relaxed mb-8">
                Our team of experienced SEO experts understands the unique challenges faced by businesses in Erode and
                Tamil Nadu. We combine local market knowledge with advanced SEO techniques to help your website rank
                higher on Google, attract more qualified leads, and increase your online revenue.
              </p>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Comprehensive SEO Services We Offer</h3>

              <div className="grid md:grid-cols-2 gap-6 mb-8">
                <div className="bg-orange-50 rounded-2xl p-6">
                  <Search className="w-8 h-8 text-orange-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Keyword Research & Strategy</h4>
                  <p className="text-gray-700">
                    Comprehensive keyword analysis to identify high-value search terms that your target audience uses to
                    find businesses like yours in Erode and surrounding areas.
                  </p>
                </div>
                <div className="bg-blue-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-blue-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">On-Page SEO Optimization</h4>
                  <p className="text-gray-700">
                    Optimize your website content, meta tags, headers, internal linking, and site structure for better
                    search engine visibility and user experience.
                  </p>
                </div>
                <div className="bg-green-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-green-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Technical SEO Audit</h4>
                  <p className="text-gray-700">
                    Improve website speed, mobile-friendliness, crawlability, and technical aspects that impact your
                    search engine rankings and user experience.
                  </p>
                </div>
                <div className="bg-purple-50 rounded-2xl p-6">
                  <CheckCircle className="w-8 h-8 text-purple-600 mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">Local SEO Services</h4>
                  <p className="text-gray-700">
                    Optimize your business for local searches in Erode with Google My Business optimization, local
                    citations, and location-based SEO strategies.
                  </p>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Complete SEO Solutions for Erode Businesses</h3>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>SEO Audits & Analysis:</strong> Comprehensive analysis of your website's SEO performance
                    with detailed recommendations for improvement
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Content Optimization:</strong> SEO-friendly content creation and optimization that engages
                    users and ranks well in search engines
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Link Building Services:</strong> High-quality backlink acquisition strategies to improve
                    domain authority and search rankings
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Analytics & Reporting:</strong> Detailed performance tracking and monthly reports showing
                    your SEO progress and ROI
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>Competitor Analysis:</strong> Strategic insights from competitor research to identify
                    opportunities and stay ahead
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                  <span className="text-gray-700">
                    <strong>E-commerce SEO:</strong> Specialized SEO services for online stores to increase product
                    visibility and sales
                  </span>
                </li>
              </ul>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Proven SEO Process</h3>

              <div className="space-y-6 mb-8">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">SEO Audit & Analysis</h4>
                    <p className="text-gray-700">
                      Comprehensive analysis of your website's current SEO performance, technical issues, content
                      quality, and competitive landscape to identify opportunities.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Keyword Research & Strategy</h4>
                    <p className="text-gray-700">
                      Creating a customized SEO strategy based on thorough keyword research, competitor analysis, and
                      your business goals and target audience.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">On-Page Optimization</h4>
                    <p className="text-gray-700">
                      Executing on-page, technical, and content optimizations systematically to improve your website's
                      search engine visibility and user experience.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Content Creation & Link Building</h4>
                    <p className="text-gray-700">
                      Creating high-quality, SEO-optimized content and building authoritative backlinks to improve your
                      website's authority and rankings.
                    </p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-orange-600 text-white rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    5
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">Monitoring & Reporting</h4>
                    <p className="text-gray-700">
                      Continuous monitoring of rankings, traffic, and performance with detailed monthly reports and
                      strategy refinement for sustained growth.
                    </p>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Professional SEO Tools We Use</h3>

              <div className="grid md:grid-cols-3 gap-4 mb-8">
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Analytics & Tracking</div>
                  <div className="text-sm text-gray-600">Google Analytics, Search Console, Google Tag Manager</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">SEO Research Tools</div>
                  <div className="text-sm text-gray-600">SEMrush, Ahrefs, Moz, Ubersuggest</div>
                </div>
                <div className="bg-gray-50 rounded-xl p-4 text-center">
                  <div className="font-bold text-gray-900 mb-2">Technical SEO</div>
                  <div className="text-sm text-gray-600">Screaming Frog, GTMetrix, PageSpeed Insights</div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 text-white mb-8">
                <h4 className="text-2xl font-bold mb-6">SEO Results You Can Expect</h4>
                <div className="grid md:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">200%+</div>
                    <div className="text-orange-100">Organic Traffic Increase</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">Top 10</div>
                    <div className="text-orange-100">Google Rankings</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">300%+</div>
                    <div className="text-orange-100">Lead Generation</div>
                  </div>
                  <div className="text-center">
                    <div className="text-4xl font-bold mb-2">85%</div>
                    <div className="text-orange-100">Client Retention Rate</div>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Why Choose YESP Tech for SEO Services in Erode?</h3>

              <div className="bg-gray-50 rounded-2xl p-8 mb-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h5 className="font-bold text-gray-900 mb-3">Local Expertise</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Deep understanding of Erode market</li>
                      <li>• Local keyword research and optimization</li>
                      <li>• Google My Business optimization</li>
                      <li>• Local citation building and management</li>
                      <li>• Tamil and English content optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-bold text-gray-900 mb-3">Proven Results</h5>
                    <ul className="space-y-2 text-gray-700">
                      <li>• White-hat SEO techniques only</li>
                      <li>• Transparent reporting and communication</li>
                      <li>• Customized strategies for each business</li>
                      <li>• Long-term partnership approach</li>
                      <li>• Affordable pricing with no hidden costs</li>
                    </ul>
                  </div>
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Industries We Serve with SEO Services</h3>

              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h5 className="font-bold text-gray-900 mb-2">Manufacturing & Textiles</h5>
                  <p className="text-sm text-gray-600">
                    SEO for textile mills, garment manufacturers, and industrial businesses in Erode
                  </p>
                </div>
                <div className="bg-blue-50 rounded-lg p-4">
                  <h5 className="font-bold text-gray-900 mb-2">Healthcare & Medical</h5>
                  <p className="text-sm text-gray-600">Medical SEO for hospitals, clinics, and healthcare providers</p>
                </div>
                <div className="bg-green-50 rounded-lg p-4">
                  <h5 className="font-bold text-gray-900 mb-2">Education & Training</h5>
                  <p className="text-sm text-gray-600">
                    Educational SEO for schools, colleges, and training institutes
                  </p>
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h5 className="font-bold text-gray-900 mb-2">Retail & E-commerce</h5>
                  <p className="text-sm text-gray-600">E-commerce SEO for online stores and retail businesses</p>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-orange-600 to-red-600 rounded-3xl p-8 text-white text-center mb-12"
            >
              <h3 className="text-2xl font-bold mb-4">Ready to Boost Your Search Rankings in Erode?</h3>
              <p className="text-orange-100 mb-6">
                Get a free SEO audit and consultation from our SEO experts. Let's improve your online visibility and
                drive more organic traffic to grow your business in Erode and Tamil Nadu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://calendly.com/yesptech"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2"
                >
                  <Calendar className="w-5 h-5" />
                  Book Free SEO Audit
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
