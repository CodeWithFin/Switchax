"use client"

import Link from "next/link"
import { Icon } from "@iconify/react"
import { cn } from "@/lib/utils"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Work", href: "/work" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
]

export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-6 py-5 md:px-12 lg:px-20 relative z-50">
      <Link href="/" className="font-heading text-[1.5rem] font-medium tracking-tighter text-foreground flex items-center gap-2">
        <span className="bg-zoho-blue text-white w-8 h-8 flex items-center justify-center rounded-lg font-bold">S</span>
        Switchax
      </Link>

      <div className="hidden md:flex items-center gap-8 text-sm font-normal text-muted group/nav">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className="hover:text-foreground transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <div className="flex items-center gap-1 cursor-pointer hover:text-foreground transition-colors group">
          Pages 
          <Icon 
            icon="solar:alt-arrow-down-linear" 
            className="text-xs transition-transform group-hover:rotate-180" 
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <Link 
          href="/contact" 
          className="hidden md:flex items-center bg-zoho-blue text-white rounded-full py-2 px-4 gap-2 hover:bg-zoho-blue/90 transition-colors"
        >
          <span className="text-sm font-normal">Lets talk</span>
          <Icon icon="solar:arrow-right-up-linear" />
        </Link>
        <button className="md:hidden text-foreground text-[1.5rem] flex items-center justify-center">
          <Icon icon="solar:hamburger-menu-linear" />
        </button>
      </div>
    </nav>
  )
}
