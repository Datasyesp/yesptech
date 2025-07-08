import type { Metadata } from "next"
import AboutClientPage from "./AboutClientPage"

export const metadata: Metadata = {
  title: "About Us - Yesp Tech | Leading Web Development Company in Erode",
  description:
    "Learn about Yesp Tech, the leading web development company in Erode with 3+ years of experience and 50+ successful projects. Meet our expert team and discover our mission.",
  keywords: [
    "about yesp tech",
    "web development company erode team",
    "erode web development company history",
    "yesp tech mission vision",
    "web development experts erode",
  ],
  openGraph: {
    title: "About Us - Yesp Tech | Leading Web Development Company in Erode",
    description:
      "Learn about Yesp Tech, the leading web development company in Erode with 3+ years of experience and 50+ successful projects.",
    url: "https://yesptech.in/about",
    images: [
      {
        url: "https://yesptech.in/yesp-logo.png",
        width: 1200,
        height: 630,
        alt: "About Yesp Tech - Web Development Company in Erode",
      },
    ],
  },
  alternates: {
    canonical: "https://yesptech.in/about",
  },
}

export default function AboutPage() {
  return <AboutClientPage />
}
