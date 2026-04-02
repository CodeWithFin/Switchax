import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

const services = [
  { id: "01.", title: "Zoho CRM", desc: "Drive sales productivity and customer engagement with the world’s most flexible CRM." },
  { id: "02.", title: "Zoho Creator", desc: "Build custom applications tailored to your unique business processes using low-code." },
  { id: "03.", title: "Zoho Books", desc: "Automate your accounting and financial workflows with a comprehensive cloud-based suite." },
  { id: "04.", title: "Zoho Desk", desc: "Deliver omnichannel customer support and build long-lasting client relationships." },
  { id: "05.", title: "Zoho Projects", desc: "Plan, track, and collaborate on complex projects with absolute efficiency." },
  { id: "06.", title: "Zoho Analytics", desc: "Transform your business data into actionable insights with powerful BI tools." },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="px-6 md:px-12 lg:px-20 py-24 max-w-[82rem] mx-auto">
        <h1 className="font-heading text-[3.5rem] md:text-[5rem] font-semibold tracking-tighter leading-none mb-4 break-words">
          Our Services.
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mb-16">
          Official Zoho Premium Partner delivering enterprise-grade implementations, custom development, and strategic support globally.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div key={idx} className="p-8 md:p-10 border border-border-line rounded-3xl hover:bg-gray-50 transition-colors group">
              <span className="font-heading text-2xl font-medium block mb-4 text-zoho-blue">{s.id}</span>
              <h3 className="font-heading text-[1.75rem] font-semibold mb-4">{s.title}</h3>
              <p className="text-muted leading-relaxed mb-10">{s.desc}</p>
              <Link href="/contact" className="inline-flex items-center gap-2 font-medium group/link">
                Learn More <Icon icon="solar:arrow-right-up-linear" className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* Development Methodology */}
        <div className="mt-32 py-24 border-t border-border-line">
          <div className="flex flex-col md:flex-row gap-16 justify-between items-start">
            <div className="md:w-1/2">
              <h2 className="font-heading text-[2.5rem] md:text-[3.5rem] font-medium tracking-tight mb-8">
                The Switchax Process: Audit &rarr; Architecture &rarr; Deployment &rarr; Support.
              </h2>
              <p className="text-lg text-muted">
                We believe in a structured approach to business transformation. Our methodology is designed to ensure that Zoho products work specifically for your exact business model.
              </p>
            </div>
            <div className="md:w-1/2 flex flex-col gap-12">
              {[
                { title: "Audit", desc: "Comprehensive analysis of your current workflows and pain points." },
                { title: "Architecture", desc: "Mapping Zoho solutions to your specific business requirements." },
                { title: "Deployment", desc: "Smooth implementation with zero-downtime and data migration." },
                { title: "Support", desc: "Ongoing maintenance, technical account manager, and team training." },
              ].map((step, idx) => (
                <div key={idx} className="flex gap-6">
                  <div className="w-12 h-12 rounded-full bg-zoho-blue text-white flex items-center justify-center shrink-0 font-bold">{idx + 1}</div>
                  <div>
                    <h4 className="font-heading text-xl font-semibold mb-2">{step.title}</h4>
                    <p className="text-muted leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
