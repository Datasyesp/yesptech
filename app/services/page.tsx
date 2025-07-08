import type { Metadata } from "next"
import ServicesPageClient from "./ServicesPageClient"

export const metadata: Metadata = {
  title: "Services - Web Development, eCommerce & Mobile Apps | Yesp Tech Erode",
  description:
    "Comprehensive digital services by Yesp Tech Erode: Web Development, eCommerce Solutions, Mobile Apps, SEO, UI/UX Design, Custom Software, Database Solutions & Cloud Services.",
  keywords: [
    "web development services erode",
    "ecommerce development services",
    "mobile app development erode",
    "seo services erode",
    "ui ux design services",
    "custom software development erode",
    "database solutions erode",
    "cloud services erode",
  ],
  openGraph: {
    title: "Services - Web Development, eCommerce & Mobile Apps | Yesp Tech Erode",
    description:
      "Comprehensive digital services by Yesp Tech Erode: Web Development, eCommerce Solutions, Mobile Apps, SEO, UI/UX Design, Custom Software, Database Solutions & Cloud Services.",
    url: "https://yesptech.in/services",
    images: [
      {
        url: "https://yesptech.in/yesp-logo.png",
        width: 1200,
        height: 630,
        alt: "Yesp Tech Services - Web Development Company in Erode",
      },
    ],
  },
  alternates: {
    canonical: "https://yesptech.in/services",
  },
}

export default function ServicesPage() {
  return <ServicesPageClient />
}
