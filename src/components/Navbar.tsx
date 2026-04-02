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

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full flex items-center justify-between px-6 py-5 md:px-12 lg:px-20 relative z-50">
      <Link href="/" className="font-heading text-[1.5rem] font-medium tracking-tighter text-foreground flex items-center gap-2">
        <span className="bg-zoho-blue text-white w-8 h-8 flex items-center justify-center rounded-lg font-bold">S</span>
        Switchax
      </Link>

      {/* Desktop Links */}
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
        {/* Desktop CTA */}
        <Link 
          href="/contact" 
          className="hidden md:flex items-center bg-zoho-blue text-white rounded-full py-2.5 px-6 gap-2 hover:bg-zoho-blue/90 transition-colors"
        >
          <span className="text-sm font-normal">Lets talk</span>
          <Icon icon="solar:arrow-right-up-linear" />
        </Link>
        
        {/* Mobile Hamburger Toggle */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-foreground text-[1.8rem] flex items-center justify-center z-50 relative"
          aria-label="Toggle Menu"
        >
          <Icon icon={isMenuOpen ? "solar:close-circle-linear" : "solar:hamburger-menu-linear"} />
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-background z-40 flex flex-col pt-32 px-10 md:hidden"
          >
            <div className="flex flex-col gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-4xl font-heading font-medium text-foreground tracking-tight"
                >
                  {link.name}
                </Link>
              ))}
              <Link 
                href="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-between bg-zoho-blue text-white rounded-full py-3 px-6 mt-8"
              >
                <span className="text-lg font-medium">Lets talk</span>
                <Icon icon="solar:arrow-right-up-linear" className="text-xl" />
              </Link>
            </div>
            
            <div className="mt-auto pb-10 flex gap-6">
              {['linkedin', 'instagram', 'facebook'].map(social => (
                <a key={social} href="#" className="text-2xl text-muted hover:text-zoho-blue transition-colors">
                  <Icon icon={`solar:${social}-linear`} />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
