import { useState } from 'react'

export default function Contact() {
  const [status, setStatus] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) setStatus('Thanks — I\'ll get back to you shortly!')
      else setStatus('Something went wrong. Please email me directly.')
    } catch (e) {
      setStatus('Network error. Try again or email me directly.')
    }
  }

  return (
    <section id="contact" className="relative py-24">
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Let\'s build something</h2>
            <p className="mt-3 text-blue-200/80">Tell me about your process challenges and goals. I\'ll propose a path to measurable impact.</p>
          </div>
          <form onSubmit={submit} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 space-y-4">
            <div>
              <label className="block text-sm text-blue-200/80 mb-2">Name</label>
              <input name="name" required className="w-full px-3 py-2 rounded-lg bg-slate-900/80 border border-white/10 text-white outline-none focus:ring-2 focus:ring-cyan-400/40" />
            </div>
            <div>
              <label className="block text-sm text-blue-200/80 mb-2">Email</label>
              <input type="email" name="email" required className="w-full px-3 py-2 rounded-lg bg-slate-900/80 border border-white/10 text-white outline-none focus:ring-2 focus:ring-cyan-400/40" />
            </div>
            <div>
              <label className="block text-sm text-blue-200/80 mb-2">What are you trying to improve?</label>
              <textarea name="message" rows="4" required className="w-full px-3 py-2 rounded-lg bg-slate-900/80 border border-white/10 text-white outline-none focus:ring-2 focus:ring-cyan-400/40" />
            </div>
            <button className="w-full px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold">Send</button>
            {status && <p className="text-sm text-blue-200/90">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
