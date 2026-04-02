"use client"

import Link from "next/link"
import { Icon } from "@iconify/react"

export default function Footer() {
  return (
    <footer className="bg-footer-bg text-white pt-24 pb-8 px-6 md:px-12 lg:px-20">
      <div className="max-w-[82rem] mx-auto flex flex-col">
        
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 mb-24">
          <div className="flex flex-col gap-8 max-w-lg">
            <h2 className="font-heading text-[2rem] md:text-[2.5rem] font-medium tracking-tight leading-snug">
              Official Zoho Premium Partner delivering enterprise-grade implementations.
            </h2>
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 border border-white text-white rounded-full py-2.5 px-6 hover:bg-white hover:text-foreground transition-colors w-max group"
            >
              <span className="text-sm font-normal">Book Your Strategy Session</span>
              <Icon 
                icon="solar:arrow-right-up-linear" 
                className="text-lg transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" 
              />
            </Link>
          </div>
          
          <div className="grid grid-cols-3 gap-12 lg:gap-24">
            <div className="flex flex-col gap-6">
              <h4 className="font-heading text-lg font-medium">Services</h4>
              <div className="flex flex-col gap-3 text-sm text-gray-400">
                <Link href="#" className="hover:text-white transition-colors">Implementation</Link>
                <Link href="#" className="hover:text-white transition-colors">Customization</Link>
                <Link href="#" className="hover:text-white transition-colors">Data Migration</Link>
                <Link href="#" className="hover:text-white transition-colors">Training</Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="font-heading text-lg font-medium">Company</h4>
              <div className="flex flex-col gap-3 text-sm text-gray-400">
                <Link href="#" className="hover:text-white transition-colors">About Us</Link>
                <Link href="#" className="hover:text-white transition-colors">Case Studies</Link>
                <Link href="#" className="hover:text-white transition-colors">Careers</Link>
                <Link href="#" className="hover:text-white transition-colors">Contact</Link>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h4 className="font-heading text-lg font-medium">Follow Us</h4>
              <div className="flex flex-col gap-3 text-sm text-gray-400">
                <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Facebook</a>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center w-full mt-10">
          <span className="font-heading font-medium text-[15vw] md:text-[12vw] tracking-tighter leading-none block w-full text-center">
            Switchax
          </span>
        </div>

        <div className="h-[1px] w-full bg-accent/30 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-400">
          <div>© 2026 Switchax. All rights reserved. switchax.com</div>
          <div className="flex flex-wrap justify-center gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <div className="text-right">
            Zoho and the Zoho logo are trademarks of Zoho Corporation Pvt. Ltd.
          </div>
        </div>

      </div>
    </footer>
  )
}
