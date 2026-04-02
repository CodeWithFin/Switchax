"use client"

import { useState } from "react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Icon } from "@iconify/react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (res.ok) {
        setStatus("success")
        setFormData({ name: "", email: "", company: "", message: "" })
      } else {
        setStatus("error")
      }
    } catch (err) {
      console.error(err)
      setStatus("error")
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="px-6 md:px-12 lg:px-20 py-24 max-w-[82rem] mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
          <div className="lg:w-1/2">
            <h1 className="font-heading text-[3.5rem] md:text-[5rem] font-semibold tracking-tighter text-foreground leading-none mb-8">
              Let’s start your Zoho journey.
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-lg mb-12">
              Have a question about Zoho or want to optimize your business workflows? Our experts are ready to help.
            </p>

            <div className="flex flex-col gap-8">
              <div>
                <h4 className="font-heading text-lg font-medium mb-2">Email Us</h4>
                <a href="mailto:hello@hanson.com" className="text-foreground hover:underline">hello@hanson.com</a>
              </div>
              <div>
                <h4 className="font-heading text-lg font-medium mb-2">Visit Us</h4>
                <p className="text-muted">45 Delancey Street, New York, 9CA</p>
              </div>
              <div className="flex gap-4">
                {['linkedin', 'instagram', 'facebook'].map(social => (
                  <a key={social} href="#" className="w-10 h-10 rounded-full border border-border-line flex items-center justify-center hover:bg-foreground hover:text-background transition-colors">
                    <Icon icon={`solar:${social}-linear`} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 bg-gray-100 p-8 md:p-12 rounded-3xl">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={e => setFormData({...formData, name: e.target.value})}
                  required
                  placeholder="John Doe" 
                  className="bg-transparent border-b border-border-line py-3 focus:outline-none focus:border-foreground"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={e => setFormData({...formData, email: e.target.value})}
                  required
                  placeholder="john@example.com" 
                  className="bg-transparent border-b border-border-line py-3 focus:outline-none focus:border-foreground"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Company</label>
                <input 
                  type="text" 
                  value={formData.company}
                  onChange={e => setFormData({...formData, company: e.target.value})}
                  placeholder="Company Name" 
                  className="bg-transparent border-b border-border-line py-3 focus:outline-none focus:border-foreground"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium">Message</label>
                <textarea 
                  rows={4} 
                  value={formData.message}
                  onChange={e => setFormData({...formData, message: e.target.value})}
                  required
                  placeholder="Tell us about your Zoho needs..." 
                  className="bg-transparent border border-border-line p-4 rounded-xl focus:outline-none focus:border-foreground resize-none"
                />
              </div>

              <button 
                type="submit" 
                disabled={status === "loading"}
                className="mt-4 bg-zoho-blue text-white rounded-full py-3 px-6 sm:py-4 sm:px-8 font-medium hover:bg-zoho-blue/90 transition-colors flex items-center justify-center gap-2"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                <Icon icon="solar:paper-plane-linear" />
              </button>
              
              {status === "success" && (
                <p className="text-green-600 text-sm font-medium text-center">Message sent successfully!</p>
              )}
              {status === "error" && (
                <p className="text-red-600 text-sm font-medium text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
