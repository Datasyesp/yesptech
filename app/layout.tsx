import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Yesp Tech - Leading Web Development & eCommerce Company in Erode",
    template: "%s | Yesp Tech - Web Development Company Erode",
  },
  description:
    "Yesp Tech is the top web development company in Erode offering custom web solutions, eCommerce development, mobile apps, and digital marketing services. 50+ successful projects delivered.",
  keywords: [
    "web development company erode",
    "ecommerce development company",
    "web development company in erode",
    "mobile app development erode",
    "SEO services erode",
    "UI UX design company erode",
    "custom software development erode",
    "digital marketing erode",
    "website design company erode",
    "react development company",
    "next.js development",
    "shopify development erode",
  ],
  authors: [{ name: "Yesp Tech", url: "https://yesptech.in" }],
  creator: "Yesp Tech",
  publisher: "Yesp Tech",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://yesptech.in",
    siteName: "Yesp Tech",
    title: "Yesp Tech - Leading Web Development & eCommerce Company in Erode",
    description:
      "Professional web development and eCommerce solutions trusted by 50+ clients. Expert web development company in Erode with 3+ years of experience.",
    images: [
      {
        url: "https://yesptech.in/yesp-logo.png",
        width: 1200,
        height: 630,
        alt: "Yesp Tech - Web Development Company in Erode",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Yesp Tech - Leading Web Development & eCommerce Company in Erode",
    description:
      "Professional web development and eCommerce solutions trusted by 50+ clients. Expert web development company in Erode.",
    images: ["https://yesptech.in/yesp-logo.png"],
    creator: "@yesptech",
  },
  alternates: {
    canonical: "https://yesptech.in",
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "Technology",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/yesp-logo.ico" sizes="any" />
        <link rel="shortcut icon" href="/yesp-logo.ico" type="image/x-icon" />
        <link rel="canonical" href="https://yesptech.in" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Erode" />
        <meta name="geo.position" content="11.3410;77.7172" />
        <meta name="ICBM" content="11.3410, 77.7172" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "YESP Tech",
              description: "Leading web development and eCommerce company in Erode",
              url: "https://yesptech.in",
              logo: "https://yesptech.in/yesp-logo.png",
              image: "https://yesptech.in/yesp-logo.png",
              telephone: "+91-9751755757",
              email: "contact@yesptech.in",
              foundingDate: "2021",
              founder: {
                "@type": "Person",
                name: "Yesp Tech Team",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9751755757",
                contactType: "customer service",
                availableLanguage: ["English", "Tamil"],
                areaServed: "IN",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Erode",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
              },
              areaServed: {
                "@type": "Place",
                name: "Erode, Tamil Nadu, India",
              },
              serviceArea: {
                "@type": "Place",
                name: "Tamil Nadu, India",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Web Development Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Web Development",
                      description: "Custom website development services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "eCommerce Development",
                      description: "Online store development services",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mobile App Development",
                      description: "iOS and Android app development",
                    },
                  },
                ],
              },
              sameAs: ["https://www.linkedin.com/company/yesptech", "https://twitter.com/yesptech"],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
