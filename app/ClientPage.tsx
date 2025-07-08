"use client"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Products from "@/components/Products"
import Clients from "@/components/Clients"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function ClientPage() {
  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "YESP Tech",
            url: "https://yesptech.in",
            description: "Leading web development and eCommerce company in Erode",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://yesptech.in/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
            publisher: {
              "@type": "Organization",
              name: "YESP Tech",
              logo: {
                "@type": "ImageObject",
                url: "https://yesptech.in/yesp-logo.png",
              },
            },
          }),
        }}
      />

      <Navbar />
      <Sidebar />
      <Hero />
      <About />
      <Services />
      <Products />
      {/*       <TrustedClients /> */}
      <Clients />
      <Contact />
      <Footer />
    </div>
  )
}
