import type { Metadata } from "next"
import ClientPage from "./ClientPage"

export const metadata: Metadata = {
  title: "Yesp Tech - Leading Web Development & eCommerce Company in Erode",
  description:
    "Yesp Tech is the top web development company in Erode offering custom web solutions, eCommerce development, mobile apps, and digital marketing services. 50+ successful projects delivered.",
  keywords: [
    "web development company erode",
    "ecommerce development company erode",
    "mobile app development erode",
    "seo services erode",
    "ui ux design company erode",
    "custom software development erode",
    "digital marketing erode",
    "website design company erode",
  ],
  openGraph: {
    title: "Yesp Tech - Leading Web Development & eCommerce Company in Erode",
    description:
      "Professional web development and eCommerce solutions trusted by 50+ clients. Expert web development company in Erode with 3+ years of experience.",
    url: "https://yesptech.in",
    images: [
      {
        url: "https://yesptech.in/yesp-logo.png",
        width: 1200,
        height: 630,
        alt: "Yesp Tech - Web Development Company in Erode",
      },
    ],
  },
  alternates: {
    canonical: "https://yesptech.in",
  },
}

export default function HomePage() {
  return <ClientPage />
}
