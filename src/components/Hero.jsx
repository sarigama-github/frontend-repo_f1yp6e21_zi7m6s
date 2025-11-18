import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-36 pb-24">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: 'easeOut' }} className="max-w-2xl">
          <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-white/80 text-xs backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Process Improvement • AI Automation • Analytics
          </span>
          <h1 className="mt-6 text-5xl sm:text-6xl font-black tracking-tight text-white drop-shadow-[0_8px_40px_rgba(59,130,246,0.35)]">
            Smarter Operations with AI-driven Process Design
          </h1>
          <p className="mt-6 text-lg text-blue-100/90">
            I design, build, and automate high-leverage systems that reduce waste, accelerate cycle times, and unlock new value using modern AI.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="px-5 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition">See selected work</a>
            <a href="#contact" className="px-5 py-3 rounded-xl bg-white/10 border border-white/15 text-white/90 hover:bg-white/15 transition">Start a project</a>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/40 via-transparent to-slate-950" />
    </section>
  )
}
