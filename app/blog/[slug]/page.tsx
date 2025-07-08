"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import { PortableText } from "@portabletext/react"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"
import FAQ from "@/components/FAQ"
import { Calendar, Clock, User, ArrowLeft, Share2, Bookmark } from "lucide-react"
import { client, BLOG_POST_QUERY, urlFor } from "@/lib/sanity"

interface BlogPost {
  _id: string
  title: string
  slug: { current: string }
  excerpt: string
  publishedAt: string
  readTime: string
  category: {
    title: string
    slug: { current: string }
  }
  author: {
    name: string
    image?: any
    bio?: any[]
  }
  mainImage?: any
  body?: any[]
  seo?: {
    metaTitle?: string
    metaDescription?: string
    keywords?: string[]
  }
  faqs?: Array<{
    question: string
    answer: string
  }>
  tags?: string[]
}

const portableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <div className="my-8">
        <Image
          src={urlFor(value).width(800).height(400).url() || "/placeholder.svg"}
          alt={value.alt || ""}
          width={800}
          height={400}
          className="rounded-lg shadow-sm"
        />
      </div>
    ),
  },
  block: {
    h1: ({ children }: any) => <h1 className="text-3xl font-bold text-gray-900 mb-6 mt-8">{children}</h1>,
    h2: ({ children }: any) => <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">{children}</h2>,
    h3: ({ children }: any) => <h3 className="text-xl font-bold text-gray-900 mb-4 mt-6">{children}</h3>,
    h4: ({ children }: any) => <h4 className="text-lg font-bold text-gray-900 mb-3 mt-4">{children}</h4>,
    normal: ({ children }: any) => <p className="text-gray-700 leading-relaxed mb-6 text-lg">{children}</p>,
    blockquote: ({ children }: any) => (
      <blockquote className="border-l-4 border-blue-500 pl-6 my-6 italic text-gray-700 bg-blue-50 py-4 rounded-r-lg">
        {children}
      </blockquote>
    ),
  },
  list: {
    bullet: ({ children }: any) => (
      <ul className="list-disc list-inside space-y-2 mb-6 text-gray-700 text-lg">{children}</ul>
    ),
  },
  marks: {
    strong: ({ children }: any) => <strong className="font-semibold text-gray-900">{children}</strong>,
    em: ({ children }: any) => <em className="italic">{children}</em>,
    link: ({ children, value }: any) => (
      <a
        href={value.href}
        className="text-blue-600 hover:text-blue-700 underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        {children}
      </a>
    ),
  },
}

export default function BlogPostPage() {
  const params = useParams()
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        const slug = params.slug as string
        const post = await client.fetch(BLOG_POST_QUERY, { slug })

        if (!post) {
          setError("Blog post not found")
        } else {
          setBlogPost(post)
        }
      } catch (error) {
        console.error("Error fetching blog post:", error)
        setError("Failed to load blog post")
      } finally {
        setLoading(false)
      }
    }

    if (params.slug) {
      fetchBlogPost()
    }
  }, [params.slug])

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <Sidebar />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading blog post...</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (error || !blogPost) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <Sidebar />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
              <p className="text-gray-600 mb-8">{error || "The blog post you are looking for does not exist."}</p>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Web Development": "bg-blue-100 text-blue-800",
      eCommerce: "bg-green-100 text-green-800",
      "Mobile Development": "bg-purple-100 text-purple-800",
      SEO: "bg-orange-100 text-orange-800",
      Design: "bg-pink-100 text-pink-800",
      Software: "bg-indigo-100 text-indigo-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Sidebar />

      {/* Article Header */}
      <article className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 mb-8 font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Article Meta */}
            <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
              <span className={`px-3 py-1 rounded-full font-medium ${getCategoryColor(blogPost.category.title)}`}>
                {blogPost.category.title}
              </span>
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{new Date(blogPost.publishedAt).toLocaleDateString()}</span>
              </div>
              {blogPost.readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{blogPost.readTime}</span>
                </div>
              )}
            </div>

            {/* Article Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{blogPost.title}</h1>

            {/* Article Excerpt */}
            <p className="text-xl text-gray-600 leading-relaxed mb-8">{blogPost.excerpt}</p>

            {/* Author and Actions */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <User className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{blogPost.author.name}</p>
                  <p className="text-sm text-gray-500">Author</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <Share2 className="w-5 h-5" />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Featured Image */}
            {blogPost.mainImage && (
              <div className="relative h-64 md:h-96 rounded-lg overflow-hidden mb-12">
                <Image
                  src={urlFor(blogPost.mainImage).width(800).height(400).url() || "/placeholder.svg"}
                  alt={blogPost.mainImage.alt || blogPost.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}
          </motion.div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="prose prose-lg max-w-none"
          >
            {blogPost.body && <PortableText value={blogPost.body} components={portableTextComponents} />}
          </motion.div>

          {/* Tags */}
          {blogPost.tags && blogPost.tags.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 mb-8"
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Tags:</h3>
              <div className="flex flex-wrap gap-2">
                {blogPost.tags.map((tag, index) => (
                  <span key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-blue-50 rounded-lg p-8 text-center mb-12"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-600 mb-6">
              Get a free consultation from the leading web development company in Erode. Let's discuss your project
              requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://calendly.com/yesptech"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Free Consultation
              </a>
              <a
                href="https://wa.me/919751755757"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </motion.div>

          {/* FAQ Section */}
          {blogPost.faqs && blogPost.faqs.length > 0 && <FAQ faqs={blogPost.faqs} />}
        </div>
      </article>

      <Footer />
    </div>
  )
}
