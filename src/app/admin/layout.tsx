import React from "react"
import Link from "next/link"
import { Icon } from "@iconify/react/dist/iconify.js"

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      {/* Admin Navbar */}
      <nav className="w-full h-20 border-b border-border-line px-6 md:px-12 lg:px-20 flex justify-between items-center bg-white sticky top-0 z-50">
        <div className="flex items-center gap-10 h-full">
          <Link href="/admin" className="font-heading text-xl font-bold tracking-tight text-foreground flex items-center gap-2">
            <span className="bg-zoho-blue text-white w-8 h-8 flex items-center justify-center rounded-lg font-bold text-sm">S</span>
            Admin Dashboard
          </Link>
          
          <div className="hidden md:flex gap-8 h-full">
             <Link href="/admin" className="h-full flex items-center text-sm font-medium border-b-2 border-zoho-blue text-zoho-blue">
               Leads
             </Link>
             <Link href="#" className="h-full flex items-center text-sm font-medium text-muted hover:text-foreground transition-colors">
                Settings
             </Link>
          </div>
        </div>

        <div className="flex items-center gap-6 h-full">
          <Link href="/" className="text-sm font-medium text-zoho-blue hover:underline">View Site</Link>
          <div className="h-4 w-[1px] bg-border-line"></div>
          <button className="flex items-center gap-2 text-sm font-medium text-muted hover:text-zoho-red transition-colors">
            Logout 
            <Icon icon="solar:logout-linear" />
          </button>
        </div>
      </nav>

      <main className="bg-gray-50 min-h-[calc(100vh-80px)] pb-32">
        {children}
      </main>
    </div>
  )
}
