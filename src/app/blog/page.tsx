import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

const posts = [
  {
    title: "Zoho CRM vs Salesforce: Which is Right for Your SMB?",
    category: "Insights",
    date: "March 28, 2024",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "5 Automation Workflows That Will Save You 10 Hours a Week",
    category: "Productivity",
    date: "March 20, 2024",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
  },
  {
    title: "Why Every Growing Business Needs Zoho One in 2024",
    category: "Strategy",
    date: "March 15, 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
  }
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      
      <main className="px-6 md:px-12 lg:px-20 py-24 max-w-[82rem] mx-auto">
        <h1 className="font-heading text-[3.5rem] md:text-[5rem] font-semibold tracking-tighter leading-none mb-8 break-words text-center">
          Zoho Resource Hub.
        </h1>
        <p className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-20 text-center">
          Expert insights, product updates, and strategic business automation guides.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32">
          {posts.map((post, idx) => (
            <div key={idx} className="flex flex-col group cursor-pointer">
              <div className="relative h-64 w-full rounded-2xl overflow-hidden mb-6">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-zoho-blue px-2 py-1 bg-zoho-blue/10 rounded">{post.category}</span>
                <span className="text-xs text-muted">{post.date}</span>
              </div>
              <h3 className="font-heading text-xl font-semibold leading-tight group-hover:text-zoho-blue transition-colors">
                {post.title}
              </h3>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <section className="bg-gray-100 p-10 md:p-20 rounded-[3rem] text-center max-w-4xl mx-auto">
          <Icon icon="solar:letter-linear" className="text-5xl text-zoho-blue mb-8 mx-auto" />
          <h2 className="font-heading text-3xl md:text-4xl font-medium tracking-tighter mb-8 leading-tight">
            Stay Updated with Zoho Insights.
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow bg-white px-6 py-3 rounded-full border border-border-line focus:outline-none focus:border-zoho-blue"
            />
            <button className="bg-zoho-blue text-white px-6 py-3 sm:px-8 sm:py-3.5 rounded-full font-medium hover:bg-zoho-blue/90 transition-colors whitespace-nowrap">
              Subscribe Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
