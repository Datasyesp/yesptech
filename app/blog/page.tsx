import type { Metadata } from "next"
import BlogClientPage from "./BlogClientPage"

export const metadata: Metadata = {
  title: "Blog - Web Development Insights & Tutorials | Yesp Tech Erode",
  description:
    "Read expert insights on web development, SEO, mobile apps, and digital marketing from Yesp Tech team in Erode. Latest tutorials, tips, and industry updates.",
  keywords: [
    "web development blog",
    "seo tutorials",
    "mobile app development blog",
    "ecommerce development tips",
    "digital marketing blog erode",
    "web development tutorials",
    "yesp tech blog",
  ],
  openGraph: {
    title: "Blog - Web Development Insights & Tutorials | Yesp Tech Erode",
    description:
      "Read expert insights on web development, SEO, mobile apps, and digital marketing from Yesp Tech team in Erode.",
    url: "https://yesptech.in/blog",
    images: [
      {
        url: "https://yesptech.in/yesp-logo.png",
        width: 1200,
        height: 630,
        alt: "Yesp Tech Blog - Web Development Insights",
      },
    ],
  },
  alternates: {
    canonical: "https://yesptech.in/blog",
  },
}

export default function BlogPage() {
  return <BlogClientPage />
}
