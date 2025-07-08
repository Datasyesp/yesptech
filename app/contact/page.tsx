import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Contact Us - Get Free Consultation | Yesp Tech Web Development Erode",
  description:
    "Contact Yesp Tech for web development, eCommerce, and mobile app services in Erode. Get free consultation, call +91 9751755757 or email contact@yesptech.in",
  keywords: [
    "contact yesp tech",
    "web development company erode contact",
    "yesp tech phone number",
    "yesp tech email",
    "free consultation erode",
    "web development quote erode",
  ],
  openGraph: {
    title: "Contact Us - Get Free Consultation | Yesp Tech Web Development Erode",
    description:
      "Contact Yesp Tech for web development, eCommerce, and mobile app services in Erode. Get free consultation, call +91 9751755757",
    url: "https://yesptech.in/contact",
    images: [
      {
        url: "https://yesptech.in/yesp-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Yesp Tech - Web Development Company in Erode",
      },
    ],
  },
  alternates: {
    canonical: "https://yesptech.in/contact",
  },
}

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <ContactPageClient />
      <Footer />
    </>
  )
}
