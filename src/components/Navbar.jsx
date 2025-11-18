import { useState, useEffect } from 'react'
import { Menu, X, Sparkles, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all ${scrolled ? 'backdrop-blur-xl bg-slate-900/60 border-b border-white/10' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="p-2 rounded-xl bg-gradient-to-tr from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <p className="text-white font-semibold tracking-tight leading-none">Idan Schorr</p>
            <p className="text-xs text-blue-200/80 leading-none">Innovation & Change • AI + Process Optimisation</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          {[
            { label: 'Work', href: '#work' },
            { label: 'Approach', href: '#approach' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a key={item.href} href={item.href} className="text-blue-100/80 hover:text-white transition-colors">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:you@example.com" className="inline-flex items-center gap-2 text-white/90 hover:text-white bg-white/10 hover:bg-white/15 border border-white/10 px-4 py-2 rounded-lg transition">
            <Mail className="w-4 h-4" />
            <span>Get in touch</span>
          </a>
          <a href="https://www.linkedin.com/in/idan-schorr" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white/80 hover:text-white transition">
            <Github className="w-5 h-5" />
          </a>
        </div>

        <button onClick={() => setOpen(!open)} className="md:hidden p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white">
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 space-y-4">
          {[
            { label: 'Work', href: '#work' },
            { label: 'Approach', href: '#approach' },
            { label: 'About', href: '#about' },
            { label: 'Contact', href: '#contact' },
          ].map((item) => (
            <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="block text-blue-100/90 hover:text-white">
              {item.label}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            <a href="mailto:you@example.com" className="inline-flex items-center gap-2 text-white/90 bg-white/10 border border-white/10 px-4 py-2 rounded-lg">
              <Mail className="w-4 h-4" />
              <span>Email</span>
            </a>
            <a href="https://www.linkedin.com/in/idan-schorr" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-white/5 border border-white/10 text-white/80">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
