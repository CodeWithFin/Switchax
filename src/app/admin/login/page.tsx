"use client"

import { useState } from "react"
import { Icon } from "@iconify/react"
import { useRouter } from "next/navigation"

export default function AdminLoginPage() {
  const [password, setPassword] = useState("")
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(false)
    
    // Server Action would be cleaner, but using document.cookie for MVP
    try {
      // In a real app, this should be a proper POST with a signed session
      // For this MVP, we match the simple Middleware check
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ password })
      })

      if (res.ok) {
        router.push('/admin')
      } else {
        setError(true)
      }
    } catch (err) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-gray-100 p-10 rounded-3xl border border-border-line">
        <div className="flex flex-col items-center gap-6 mb-10">
          <div className="bg-zoho-blue text-white w-12 h-12 flex items-center justify-center rounded-xl font-bold text-2xl">S</div>
          <h1 className="font-heading text-2xl font-semibold tracking-tight">Admin Dashboard</h1>
        </div>

        <form onSubmit={handleLogin} className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium">Access Password</label>
            <input 
              type="password" 
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••" 
              className="bg-transparent border-b border-border-line py-3 focus:outline-none focus:border-foreground"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="bg-zoho-blue text-white py-4 px-8 rounded-full font-medium hover:bg-zoho-blue/90 transition-colors flex items-center justify-center gap-2 mt-4"
          >
            {loading ? "Authenticating..." : "Login to Dashboard"}
            <Icon icon="solar:lock-password-linear" />
          </button>

          {error && (
            <p className="text-zoho-red text-sm font-medium text-center">Invalid password, please try again.</p>
          )}
        </form>
      </div>
    </div>
  )
}
