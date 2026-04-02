import { db } from "@/db"
import { leads } from "@/db/schema"
import { desc, count } from "drizzle-orm"
import { Icon } from "@iconify/react/dist/iconify.js"
import Link from "next/link"

export const dynamic = "force-dynamic"

export default async function AdminDashboard() {
  const allLeads = await db.query.leads.findMany({
    orderBy: [desc(leads.createdAt)],
  })

  // Simple stats
  const totalLeads = allLeads.length
  const todayLeads = allLeads.filter(l => 
    new Date(l.createdAt).toDateString() === new Date().toDateString()
  ).length

  return (
    <div className="p-8 md:p-12 lg:p-16 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-16">
        <div>
          <h1 className="font-heading text-4xl font-semibold tracking-tight mb-2">Leads Overview</h1>
          <p className="text-muted">Direct inquiries from the Switchax website.</p>
        </div>
        
        <div className="flex gap-4">
          <div className="bg-gray-50 border border-border-line p-6 rounded-2xl min-w-[200px]">
            <span className="text-sm text-muted uppercase tracking-wider block mb-1">Total Leads</span>
            <span className="text-3xl font-heading font-semibold text-zoho-blue">{totalLeads}</span>
          </div>
          <div className="bg-gray-50 border border-border-line p-6 rounded-2xl min-w-[200px]">
            <span className="text-sm text-muted uppercase tracking-wider block mb-1">Today</span>
            <span className="text-3xl font-heading font-semibold text-zoho-green">{todayLeads}</span>
          </div>
        </div>
      </div>

      <div className="bg-white border border-border-line rounded-3xl overflow-hidden shadow-sm">
        <div className="p-8 border-b border-border-line flex justify-between items-center bg-gray-50/50">
          <h3 className="font-heading text-xl font-medium">Recent Inquiries</h3>
          <div className="flex gap-2">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><Icon icon="solar:filter-linear" className="text-xl" /></button>
            <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors"><Icon icon="solar:export-linear" className="text-xl" /></button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50 text-muted uppercase text-[10px] tracking-wider font-bold">
                <th className="px-8 py-4">Status</th>
                <th className="px-8 py-4">Name</th>
                <th className="px-8 py-4">Email</th>
                <th className="px-8 py-4">Company</th>
                <th className="px-8 py-4">Message</th>
                <th className="px-8 py-4">Date</th>
                <th className="px-8 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-line">
              {allLeads.map((lead) => (
                <tr key={lead.id} className="hover:bg-gray-50/50 transition-colors group">
                  <td className="px-8 py-6">
                    <span className="w-2 h-2 rounded-full bg-zoho-blue inline-block mr-2 ring-4 ring-zoho-blue/10 animate-pulse"></span>
                    <span className="text-xs font-medium uppercase tracking-wider text-zoho-blue">New</span>
                  </td>
                  <td className="px-8 py-6 font-medium text-foreground">{lead.name}</td>
                  <td className="px-8 py-6 text-muted">{lead.email}</td>
                  <td className="px-8 py-6 text-muted italic">{lead.company || "-"}</td>
                  <td className="px-8 py-6 text-muted text-sm max-w-[200px] truncate" title={lead.message}>
                    {lead.message}
                  </td>
                  <td className="px-8 py-6 text-xs text-muted">
                    {new Date(lead.createdAt).toLocaleDateString('en-US', { day: '2-digit', month: 'short', year: 'numeric' })}
                  </td>
                  <td className="px-8 py-6 text-right">
                    <Link href={`/admin/leads/${lead.id}`} className="text-zoho-blue hover:underline text-sm font-medium">
                      Open
                    </Link>
                  </td>
                </tr>
              ))}
              {allLeads.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-8 py-20 text-center text-muted italic">
                    No leads found yet. Time to market!
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
