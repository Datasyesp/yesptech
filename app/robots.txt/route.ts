import { NextResponse } from "next/server"

export async function GET() {
  const robotsTxt = `User-agent: *
Allow: /

# Disallow admin and private areas
Disallow: /admin/
Disallow: /api/
Disallow: /studio/

# Allow important pages
Allow: /
Allow: /about
Allow: /services
Allow: /products
Allow: /contact
Allow: /blog

# Sitemap location
Sitemap: https://yesptech.in/sitemap.xml

# Crawl delay
Crawl-delay: 1`

  return new NextResponse(robotsTxt, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
