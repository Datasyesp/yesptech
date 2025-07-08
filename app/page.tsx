"use client"
import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Services from "@/components/Services"
import Products from "@/components/Products"
import TrustedClients from "@/components/TrustedClients"
import Clients from "@/components/Clients"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
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
