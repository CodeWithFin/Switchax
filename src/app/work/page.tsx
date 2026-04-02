import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

const caseStudies = [
  {
    title: "E-commerce Optimization",
    desc: "Integrated Zoho CRM and Inventory for a global retailer, resulting in a 40% efficiency boost in order fulfillment.",
    tags: ["Retail", "2024"],
    image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "SaaS Workflow Automation",
    desc: "Built a custom subscription management portal using Zoho Creator for a leading tech startup.",
    tags: ["Tech", "2023"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Financial Transformation",
    desc: "Seamlessly migrated financial data from legacy systems to Zoho Books for a professional services firm.",
    tags: ["Finance", "2024"],
    image: "https://images.unsplash.com/photo-1454165833767-027ffea9e77b?q=80&w=1200&auto=format&fit=crop"
  }
]

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="px-6 md:px-12 lg:px-20 py-24 max-w-[82rem] mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
          <div className="md:w-[60%]">
            <h1 className="font-heading text-[3.5rem] md:text-[5rem] font-semibold tracking-tighter leading-none mb-4 break-words">
              Success Stories.
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-xl">
              Showcase of our most impactful Zoho implementations and strategic digital transformations.
            </p>
          </div>
          <div className="flex flex-col gap-4 text-right">
            <span className="text-4xl font-heading font-medium tracking-tighter">500+</span>
            <span className="text-sm uppercase tracking-wider text-muted">Successful Projects</span>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          {caseStudies.map((project, idx) => (
            <div key={project.title} className="flex flex-col md:flex-row border border-border-line bg-gray-50/50 group overflow-hidden rounded-3xl">
              <div className="w-full md:w-[45%] p-10 md:p-14 flex flex-col justify-between">
                <div>
                  <h3 className="font-heading text-[2rem] font-medium tracking-tight mb-4">{project.title}</h3>
                  <p className="text-muted text-base leading-relaxed mb-8">{project.desc}</p>
                  <Link href="/contact" className="flex items-center gap-2 text-sm font-medium underline decoration-1 underline-offset-4 group-hover:text-zoho-blue transition-colors">
                    View Success Study <Icon icon="solar:arrow-right-up-linear" />
                  </Link>
                </div>
                <div className="flex items-center gap-3 mt-12 md:mt-0">
                  {project.tags.map(tag => (
                    <span key={tag} className="border border-border-line rounded-full px-4 py-1.5 text-xs font-medium bg-background">{tag}</span>
                  ))}
                </div>
              </div>
              <div className="w-full md:w-[55%] h-64 md:h-auto overflow-hidden relative">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <section className="mt-32 py-24 bg-dark text-white rounded-[3rem] px-10 md:px-20 text-center flex flex-col items-center overflow-hidden relative">
          <Icon icon="solar:star-fall-2-linear" className="text-6xl text-zoho-blue mb-8 animate-pulse" />
          <h2 className="font-heading text-[3rem] md:text-[4rem] font-medium tracking-tighter mb-8 leading-tight">
            Our Business Could Be Next.
          </h2>
          <Link href="/contact" className="bg-zoho-blue text-white px-8 py-4 rounded-full font-medium hover:bg-zoho-blue/90 transition-colors">
            Book Your Strategy Session
          </Link>
        </section>
      </main>

      <Footer />
    </div>
  );
}
