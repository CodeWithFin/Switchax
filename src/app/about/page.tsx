import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* About Hero */}
        <section className="px-6 md:px-12 lg:px-20 pt-24 pb-20 max-w-[82rem] mx-auto text-center">
          <h1 className="font-heading text-[3.5rem] md:text-[5rem] font-semibold tracking-tighter text-foreground leading-[1.1] mb-8">
            Our Mission: Bridging the Gap Between Zoho and Your Success.
          </h1>
          <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-12">
            Authorized Zoho Premium Partner. We specialize in transforming businesses through innovative Zoho solutions, from CRM implementation to custom automation.
          </p>
          <div className="relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden mb-24">
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Switchax Team" 
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* Why Switchax */}
        <section className="px-6 md:px-12 lg:px-20 py-24 bg-gray-50">
          <div className="max-w-[82rem] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { title: "Strategic Alignment", desc: "We align Zoho products with your long-term business goals for maximum impact." },
              { title: "Seamless Integration", desc: "Our specialists ensure that Zoho flows perfectly within your existing tech stack." },
              { title: "Ongoing Growth", desc: "We provide strategic audits and updates to keep your business ahead of the curve." },
            ].map((v, i) => (
              <div key={i} className="flex flex-col gap-4">
                <Icon icon="solar:star-linear" className="text-3xl text-zoho-blue" />
                <h3 className="font-heading text-2xl font-semibold">{v.title}</h3>
                <p className="text-muted leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Global Expertise */}
        <section className="px-6 md:px-12 lg:px-20 py-24 max-w-[82rem] mx-auto">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
              <h2 className="font-heading text-[2.5rem] md:text-[3.5rem] font-medium tracking-tight mb-8">
                Official Zoho Premium Partner with Global Reach.
              </h2>
              <p className="text-lg text-muted mb-12">
                Delivering enterprise-grade implementations and support globally. We have successfully delivered over 500 implementations across multiple industries.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-8">
              {[
                { v: "250+", l: "Implementations" },
                { v: "2", l: "Years Exp" },
                { v: "45", l: "Certified Experts" },
                { v: "98%", l: "Client Retention" },
              ].map((s, i) => (
                <div key={i} className="border-l-2 border-zoho-blue pl-6">
                  <div className="text-4xl font-heading font-semibold">{s.v}</div>
                  <div className="text-sm text-muted uppercase tracking-wider">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
