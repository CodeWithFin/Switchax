import { db } from "@/db"
import { leads } from "@/db/schema"
import { eq } from "drizzle-orm"
import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link"
import { notFound } from "next/navigation"

export const dynamic = "force-dynamic"

export default async function LeadDetailsPage({ params }: { params: { id: string } }) {
  const { id } = await params
  const leadId = parseInt(id)
  
  if (isNaN(leadId)) notFound()

  const lead = await db.query.leads.findFirst({
    where: eq(leads.id, leadId),
  })

  if (!lead) notFound()

  return (
    <div className="p-8 md:p-12 lg:p-16 max-w-4xl mx-auto">
      <Link 
        href="/admin" 
        className="inline-flex items-center gap-2 text-muted hover:text-foreground transition-colors mb-12 group"
      >
        <Icon icon="solar:alt-arrow-left-linear" className="text-xl transition-transform group-hover:-translate-x-1" />
        <span className="text-sm font-medium">Back to Leads</span>
      </Link>

      <div className="flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="w-3 h-3 rounded-full bg-zoho-blue"></span>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-zoho-blue">Inquiry Details</span>
            </div>
            <h1 className="font-heading text-4xl font-semibold tracking-tight">{lead.name}</h1>
            <p className="text-muted mt-2">{lead.company || "Independent Professional"}</p>
          </div>
          <div className="text-right">
            <p className="text-xs text-muted uppercase font-bold tracking-wider mb-1">Received On</p>
            <p className="font-medium">
              {new Date(lead.createdAt).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
              })}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-border-line p-8 rounded-3xl md:col-span-1">
             <p className="text-[10px] uppercase font-bold tracking-widest text-muted mb-4">Contact Info</p>
             <div className="flex flex-col gap-6">
                <div>
                  <label className="text-xs text-muted block mb-1">Email Address</label>
                  <a href={`mailto:${lead.email}`} className="text-foreground font-medium hover:text-zoho-blue transition-colors flex flex-wrap items-center gap-2 break-all">
                    {lead.email}
                    <Icon icon="solar:copy-linear" className="text-sm opacity-50 shrink-0" />
                  </a>
                </div>
                <div>
                  <label className="text-xs text-muted block mb-1">Source</label>
                  <span className="text-foreground font-medium flex items-center gap-2">
                    Main CTA Form
                    <Icon icon="solar:globus-linear" className="text-sm opacity-50" />
                  </span>
                </div>
             </div>
          </div>

          <div className="bg-white border border-border-line p-8 rounded-3xl md:col-span-2">
            <p className="text-[10px] uppercase font-bold tracking-widest text-muted mb-4">Client Message</p>
            <div className="relative">
              <Icon icon="solar:quote-left-bold" className="absolute -left-2 -top-2 text-4xl text-gray-100 -z-0" />
              <p className="text-lg text-foreground leading-relaxed relative z-10 font-normal">
                {lead.message}
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-4 mt-6">
           <button className="border border-border-line text-foreground px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors flex items-center gap-2">
             <Icon icon="solar:archive-linear" />
             Archive
           </button>
           <button className="bg-zoho-blue text-white px-8 py-3 rounded-full font-medium hover:bg-zoho-blue/90 transition-colors flex items-center gap-2">
             <Icon icon="solar:letter-linear" />
             Reply via Email
           </button>
        </div>
      </div>
    </div>
  )
}
