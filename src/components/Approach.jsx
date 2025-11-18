import { motion } from 'framer-motion'
import { Wand2, Pipeline, Brain, BarChart3 } from 'lucide-react'

const steps = [
  {
    icon: Wand2,
    title: 'Discover',
    text: 'Quantify current performance with logs, interviews, and on-site observations. Identify bottlenecks and constraints.',
  },
  {
    icon: Pipeline,
    title: 'Design',
    text: 'Map the ideal future state and architect flows that combine people, process, and AI automation.',
  },
  {
    icon: Brain,
    title: 'Build',
    text: 'Rapidly prototype agents, data pipelines, and UIs. Measure with guardrails and iterate weekly.',
  },
  {
    icon: BarChart3,
    title: 'Scale',
    text: 'Harden, monitor, and train teams. Land the change with documentation, training, and KPIs that matter.',
  },
]

export default function Approach() {
  return (
    <section id="approach" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08),transparent_60%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Approach</h2>
          <p className="mt-2 text-blue-200/80 max-w-2xl">A pragmatic framework that moves from insights to outcomes fast.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.45 }} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-200 w-fit">
                <s.icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-white font-semibold">{s.title}</h3>
              <p className="mt-2 text-blue-100/90 text-sm">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
