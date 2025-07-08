import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = "https://yesptech.in"

  const staticPages = ["", "/about", "/services", "/products", "/contact", "/blog"]

  const blogPosts = [
    "/blog/web-development-company-erode",
    "/blog/ecommerce-development-company",
    "/blog/seo-services-company",
    "/blog/mobile-app-development-services",
    "/blog/custom-software-development",
    "/blog/ui-ux-design-company",
    "/blog/database-solutions-services",
    "/blog/cloud-services-solutions",
    "/blog/security-audit-services",
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${staticPages
    .map(
      (page) => `
  <url>
    <loc>${baseUrl}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === "" ? "daily" : "weekly"}</changefreq>
    <priority>${page === "" ? "1.0" : "0.8"}</priority>
  </url>`,
    )
    .join("")}
  ${blogPosts
    .map(
      (post) => `
  <url>
    <loc>${baseUrl}${post}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`,
    )
    .join("")}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
