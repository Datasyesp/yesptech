import type { Metadata } from "next"
import ProductPageClient from "./ProductPageClient"

export const metadata: Metadata = {
  title: "Products - Yesp Ecom Studio | Next-Gen eCommerce Platform by Yesp Tech",
  description:
    "Discover Yesp Ecom Studio - the next-generation eCommerce platform with AI-powered recommendations, advanced analytics, mobile-first design, and secure payments. Coming soon!",
  keywords: [
    "yesp ecom studio",
    "ecommerce platform",
    "online store builder",
    "ai powered ecommerce",
    "mobile ecommerce platform",
    "secure payment gateway",
    "ecommerce analytics",
  ],
  openGraph: {
    title: "Products - Yesp Ecom Studio | Next-Gen eCommerce Platform by Yesp Tech",
    description:
      "Discover Yesp Ecom Studio - the next-generation eCommerce platform with AI-powered recommendations, advanced analytics, and mobile-first design.",
    url: "https://yesptech.in/products",
    images: [
      {
        url: "https://yesptech.in/ecom-studio-logo.png",
        width: 1200,
        height: 630,
        alt: "Yesp Ecom Studio - Next-Gen eCommerce Platform",
      },
    ],
  },
  alternates: {
    canonical: "https://yesptech.in/products",
  },
}

export default function ProductsPage() {
  return <ProductPageClient />
}
