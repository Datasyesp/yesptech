import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Yesp Tech - Leading Web Development & eCommerce Company in Erode",
  description:
    "Yesp Tech is the top web development company in Erode offering custom web solutions, eCommerce development, mobile apps, and digital marketing services. 50+ successful projects delivered.",
  keywords:
    "web development company erode, ecommerce development company, web development company in erode, mobile app development, SEO services, UI UX design company, custom software development, digital marketing erode",
  authors: [{ name: "Yesp Tech" }],
  creator: "Yesp Tech",
  publisher: "Yesp Tech",
  robots: "index, follow",
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
        url: "/yesp-logo.png",
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
    images: ["/yesp-logo.png"],
  },
  alternates: {
    canonical: "https://yesptech.in",
  },
    
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/yeso-logo.ico" sizes="any" />
      <link rel="shortcut icon" href="/yesp-logo.ico" type="image/x-icon" />
        <link rel="canonical" href="https://yesptech.in" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Erode" />
        <meta name="geo.position" content="11.3410;77.7172" />
        <meta name="ICBM" content="11.3410, 77.7172" />
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
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9751755757",
                contactType: "customer service",
                availableLanguage: ["English", "Tamil"],
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Erode",
                addressRegion: "Tamil Nadu",
                addressCountry: "IN",
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
