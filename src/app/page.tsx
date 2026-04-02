import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Marquee from "@/components/Marquee";
import { Icon } from "@iconify/react/dist/iconify.js";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="px-6 md:px-12 lg:px-20 pt-16 md:pt-24 pb-20">
          <div className="max-w-[82rem] mx-auto flex flex-col mb-16">
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6 overflow-hidden">
              <div className="relative w-32 h-20 md:w-40 md:h-28 overflow-hidden rounded-xl">
                <Image 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                  alt="Hero" 
                  fill
                  className="object-cover"
                />
              </div>
              <h1 className="font-heading font-semibold text-[3.5rem] md:text-[6rem] leading-[1.1] tracking-tighter text-foreground">
                Transform Your
              </h1>
            </div>
            <h1 className="font-heading font-semibold text-[3.5rem] md:text-[6rem] leading-[1.1] tracking-tighter text-foreground mt-2 md:mt-0">
              Business with Zoho.
            </h1>
            <p className="mt-8 text-lg md:text-xl text-muted max-w-2xl font-normal leading-relaxed">
              Authorized Zoho Partner. We bridge the gap between Zoho's powerful ecosystem and your unique business needs. Expert implementation, seamless migration, and ongoing strategic support.
            </p>
            <div className="flex gap-4 mt-10">
              <Link href="/contact" className="bg-zoho-blue text-white px-8 py-4 rounded-full font-medium hover:bg-zoho-blue/90 transition-colors">
                Start Your Transformation
              </Link>
              <button className="border border-zoho-blue text-zoho-blue px-8 py-4 rounded-full font-medium hover:bg-zoho-blue hover:text-white transition-colors">
                Explore Services
              </button>
            </div>
          </div>

          {/* Image Marquee */}
          <div className="w-full relative py-4">
            <Marquee speed="slow" className="gap-6" innerClassName="gap-6">
              {[1, 2, 3, 4, 1].map((i, idx) => (
                <div key={idx} className="relative w-64 h-48 md:w-72 md:h-56 shrink-0 overflow-hidden rounded-xl">
                  <Image 
                    src={`https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop&sig=${i}`}
                    alt="Work"
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </Marquee>
          </div>
        </section>

        {/* About Stats Section */}
        <section className="px-6 md:px-12 lg:px-20 py-20 md:py-28 max-w-[82rem] mx-auto">
          <div className="flex items-center gap-4 mb-14">
            <div className="border border-border-line rounded-full px-4 py-1.5 overflow-hidden w-24">
              <Marquee speed="fast">
                <span className="text-[10px] uppercase tracking-wider font-medium text-foreground shrink-0 w-full text-center">About</span>
              </Marquee>
            </div>
            <div className="h-[1px] bg-border-line flex-grow" />
          </div>

          <h2 className="font-heading text-[2rem] md:text-[3.5rem] font-medium tracking-tight text-foreground leading-[1.2] max-w-5xl mb-20">
            We are the complete Zoho suite experts. We implement, customize, and integrate the entire Zoho ecosystem to create a unified operating system for your business.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-end">
            <div className="grid grid-cols-2 gap-y-12 gap-x-8 md:gap-x-16">
              {[
                { value: "250+", label: "Successful Implementations", unit: "" },
                { value: "45", label: "Certified Experts", unit: "" },
                { value: "10+", label: "Years Experience", unit: "" },
                { value: "98%", label: "Client Retention", unit: "" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col border-l border-border-line pl-6">
                  <div className="flex items-start gap-2">
                    <span className="font-heading text-[3.5rem] md:text-[4.5rem] font-medium tracking-tighter text-foreground leading-none">
                      {stat.value}
                    </span>
                    <span className="text-sm font-normal text-muted mt-2">{stat.unit}</span>
                  </div>
                  <span className="text-base font-normal text-muted mt-2">{stat.label}</span>
                </div>
              ))}
            </div>
            <div className="flex justify-start md:justify-end">
              <button className="inline-flex items-center gap-2 border border-foreground text-foreground rounded-full py-2 px-5 hover:bg-foreground hover:text-background transition-colors group">
                <span className="text-sm font-normal">Learn More</span>
                <Icon 
                  icon="solar:arrow-right-linear" 
                  className="text-lg transition-transform group-hover:translate-x-1" 
                />
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="px-6 md:px-12 lg:px-20 py-20 max-w-[82rem] mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="border border-border-line rounded-full px-4 py-1.5 overflow-hidden w-40">
              <Marquee speed="fast">
                <span className="text-[10px] uppercase tracking-wider font-medium text-foreground shrink-0 w-full text-center">The Complete Suite</span>
              </Marquee>
            </div>
            <div className="h-[1px] bg-border-line flex-grow" />
          </div>

          <div className="flex flex-col">
            {[
              { 
                id: "01.", 
                title: "Zoho CRM", 
                tags: ["Sales", "Automation"],
                color: "text-zoho-red",
                desc: "Close more deals in less time with the world's favorite CRM."
              },
              { 
                id: "02.", 
                title: "Zoho Books", 
                tags: ["Finance", "Accounting"],
                color: "text-zoho-blue",
                desc: "Smart accounting for growing businesses, from GST to global trade."
              },
              { 
                id: "03.", 
                title: "Zoho Projects", 
                tags: ["Collab", "Planning"],
                color: "text-zoho-yellow",
                desc: "Plan, track, and collaborate on your work with powerful tools."
              },
              { 
                id: "04.", 
                title: "Zoho People", 
                tags: ["HRMS", "Workforce"],
                color: "text-zoho-green",
                desc: "Organize and empower your workforce with modern HR solutions."
              },
              { 
                id: "05.", 
                title: "Zoho Desk", 
                tags: ["Support", "Omnichannel"],
                color: "text-zoho-blue",
                desc: "Deliver top-tier customer service across all communication channels."
              },
              { 
                id: "06.", 
                title: "Zoho One", 
                tags: ["OS", "Unified"],
                color: "text-zoho-red",
                desc: "The operating system for business. 45+ integrated applications."
              },
            ].map((service) => (
              <div 
                key={service.id} 
                className="flex flex-col lg:flex-row lg:items-center gap-6 border-b border-border-line py-10 group hover:bg-black/[0.02] transition-colors -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-20 lg:px-20 cursor-pointer relative overflow-hidden"
              >
                <div className={`font-heading text-[2rem] font-medium w-16 shrink-0 ${service.color}`}>{service.id}</div>
                <div className="font-heading text-[2rem] font-medium text-foreground w-full lg:w-1/3 tracking-tight">{service.title}</div>
                <div className="flex-grow flex flex-col gap-4">
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map(tag => (
                      <span key={tag} className="border border-border-line rounded-full px-3 py-1 text-xs text-foreground bg-background">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-muted text-base max-w-lg leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Expert Services Section */}
        <section className="px-6 md:px-12 lg:px-20 py-24 max-w-[82rem] mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="border border-border-line rounded-full px-4 py-1.5 overflow-hidden w-36">
              <Marquee speed="fast">
                <span className="text-[10px] uppercase tracking-wider font-medium text-foreground shrink-0 w-full text-center">Expert Services</span>
              </Marquee>
            </div>
            <div className="h-[1px] bg-border-line flex-grow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Strategic Implementation", desc: "We don't just install software. We map Zoho to your unique business processes." },
              { title: "Custom Development", desc: "Our developers build custom modules, Deluge scripts, and bespoke integrations." },
              { title: "Data Migration", desc: "Secure, zero-downtime migration from Salesforce, Hubspot, or legacy systems." },
              { title: "Team Training", desc: "Ensuring high adoption with tailored training programs and technical support." },
            ].map((item, idx) => (
              <div key={idx} className="p-8 border border-border-line rounded-2xl hover:bg-gray-50 transition-colors">
                <span className="font-heading text-2xl font-medium block mb-4">0{idx + 1}.</span>
                <h3 className="font-heading text-xl font-semibold mb-4">{item.title}</h3>
                <p className="text-muted leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Advantage Section */}
        <section className="bg-dark text-white px-6 md:px-12 lg:px-20 py-24">
          <div className="max-w-[82rem] mx-auto">
            <div className="flex items-center gap-4 mb-16">
              <div className="border border-muted/50 rounded-full px-4 py-1.5 overflow-hidden w-40">
                <Marquee speed="fast">
                  <span className="text-[10px] uppercase tracking-wider font-medium text-white shrink-0 w-full text-center">Partner Advantage</span>
                </Marquee>
              </div>
              <div className="h-[1px] bg-muted/50 flex-grow" />
            </div>

            <div className="flex flex-col md:flex-row gap-16 lg:gap-24 items-center">
              <div className="md:w-1/2">
                <h2 className="font-heading text-[3rem] md:text-[4rem] font-medium tracking-tighter leading-tight mb-8">
                  Why not just go direct?
                </h2>
                <p className="text-gray-300 text-lg mb-12">
                  Buying Zoho is easy. Making it work perfectly for your exact business model is hard. That's where we come in.
                </p>
                <div className="flex flex-col gap-6">
                  {[
                    { t: "Tailored Architecture", d: "We configure the system to fit your workflow, not the other way around." },
                    { t: "Avoid Costly Mistakes", d: "Done wrong, implementations take months to fix. We get it right the first time." },
                    { t: "Local, Dedicated Contact", d: "Skip the generic support queues. You get a dedicated technical account manager." },
                  ].map(adv => (
                    <div key={adv.t} className="flex gap-4">
                      <Icon icon="solar:check-circle-linear" className="text-2xl text-white shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg">{adv.t}</h4>
                        <p className="text-gray-400">{adv.d}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-1/2 relative w-full h-[300px] md:h-[500px] rounded-3xl overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1552581234-26160f608093?q=80&w=2070&auto=format&fit=crop" 
                  alt="Switchax Strategy" 
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Global Reach Section */}
        <section className="px-6 md:px-12 lg:px-20 py-24 max-w-[82rem] mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="border border-border-line rounded-full px-4 py-1.5 overflow-hidden w-28">
              <Marquee speed="fast">
                <span className="text-[10px] uppercase tracking-wider font-medium text-foreground shrink-0 w-full text-center">About Us</span>
              </Marquee>
            </div>
            <div className="h-[1px] bg-border-line flex-grow" />
          </div>

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
            <h2 className="font-heading text-[2.5rem] md:text-[3.5rem] font-medium tracking-tight text-foreground leading-[1.2] max-w-4xl">
              We are Switchax, an Authorized Zoho Partner committed to your digital success.
            </h2>
            <p className="text-base text-muted max-w-[444px] md:text-right">
              Official Zoho Premium Partner delivering enterprise-grade implementations and support globally.
            </p>
          </div>

          <div className="w-full h-[50vw] md:h-[40vw] rounded-2xl overflow-hidden relative">
            <Image 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
              alt="Hanson Team" 
              fill
              className="object-cover"
            />
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="px-6 md:px-12 lg:px-20 py-24 max-w-[82rem] mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="border border-border-line rounded-full px-4 py-1.5 overflow-hidden w-36">
              <Marquee speed="fast">
                <span className="text-[10px] uppercase tracking-wider font-medium text-foreground shrink-0 w-full text-center">Testimonial</span>
              </Marquee>
            </div>
            <div className="h-[1px] bg-border-line flex-grow" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
            <div className="flex flex-col justify-between">
              <div>
                <Image 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" 
                  alt="Avatar" 
                  width={64} 
                  height={64} 
                  className="rounded-full object-cover mb-8" 
                />
                <p className="text-[1.25rem] md:text-[1.5rem] font-medium text-foreground leading-snug tracking-tight mb-8">
                  "Choosing Hanson was the best decision we made for our Zoho transformation. Their deep technical expertise and understanding of our business processes led to a seamless integration that has significantly boosted our productivity."
                </p>
                <div>
                  <div className="font-heading text-[1.125rem] font-semibold text-foreground">Jennifer Anderson</div>
                  <div className="text-sm font-normal text-muted mt-1">Operations Director, TechNova</div>
                </div>
              </div>
              <div className="flex gap-4 mt-12">
                <button className="w-12 h-12 rounded-full border border-border-line flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors">
                  <Icon icon="solar:arrow-left-linear" className="text-xl" />
                </button>
                <button className="w-12 h-12 rounded-full border border-border-line flex items-center justify-center text-foreground hover:bg-foreground hover:text-background transition-colors">
                  <Icon icon="solar:arrow-right-linear" className="text-xl" />
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {['CRM', 'BOOKS', 'CREATOR', 'ANALYTICS', 'PROJECTS', 'DESK'].map((word) => (
                <div key={word} className="bg-gray-100 flex items-center justify-center p-8 md:p-12 rounded-xl">
                  <span className="font-heading font-semibold text-xl tracking-tighter text-foreground">{word}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 md:px-12 lg:px-20 py-24 max-w-[82rem] mx-auto">
          <div className="flex items-center gap-4 mb-16">
            <div className="border border-border-line rounded-full px-4 py-1.5 overflow-hidden w-64">
              <Marquee speed="slow">
                <span className="text-[10px] uppercase tracking-wider font-medium text-foreground shrink-0 w-full text-center">Frequently Asked Questions</span>
              </Marquee>
            </div>
            <div className="h-[1px] bg-border-line flex-grow" />
          </div>

          <h2 className="font-heading text-[2rem] md:text-[3.5rem] font-medium tracking-tight text-foreground leading-[1.2] max-w-4xl mb-16">
            We’re here to answer your questions and provide clarity on your Zoho journey.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
            {[
              { q: "What Zoho services do you offer?", a: "We offer CRM implementation, Creator development, Books/Finance setup, and Workplace digital transformation." },
              { q: "How long does a typical implementation take?", a: "Timelines vary based on complexity, but most projects range from 4-12 weeks." },
              { q: "Do you offer post-implementation support?", a: "Yes, we provide ongoing maintenance and managed services for all our clients." },
              { q: "Can you migrate data from our current CRM?", a: "Absolutely. We specialize in secure data migration from Salesforce, HubSpot, and legacy systems." },
              { q: "Is Hanson a certified Zoho partner?", a: "Yes, we are a certified Zoho Advanced Partner with over 10 years of experience." },
              { q: "Do you provide custom training?", a: "Yes, we offer tailored training sessions for your admin and end-user teams." },
            ].map((item, idx) => (
              <div key={idx} className="border-b border-border-line pb-6 cursor-pointer group">
                <div className="flex justify-between items-center py-4">
                  <h3 className="text-lg md:text-xl font-medium text-foreground">{idx + 1}. {item.q}</h3>
                  <Icon icon="solar:add-circle-linear" className="text-2xl text-foreground group-hover:rotate-90 transition-transform" />
                </div>
                <div className="pr-12 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-300">
                  <p className="text-base text-muted pb-2 leading-relaxed">{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Marquee Contact */}
        <section className="bg-gray-100 py-16 md:py-20 overflow-hidden mb-[-1px]">
          <Marquee speed="slow">
            <div className="flex items-center">
              <span className="font-heading font-medium text-[4rem] md:text-[6rem] uppercase tracking-tighter text-foreground whitespace-nowrap px-8">Ready to unlock Zoho's full potential?</span>
              <span className="font-heading font-medium text-[4rem] md:text-[6rem] uppercase tracking-tighter text-foreground whitespace-nowrap px-8">Book Your Strategy Session</span>
              <span className="font-heading font-medium text-[4rem] md:text-[6rem] uppercase tracking-tighter text-foreground whitespace-nowrap px-8">Switchax Expertise</span>
            </div>
          </Marquee>
        </section>
      </main>

      <Footer />
    </div>
  );
}
