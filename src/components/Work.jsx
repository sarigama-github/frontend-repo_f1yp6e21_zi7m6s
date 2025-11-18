import { motion } from 'framer-motion'
import { Cpu, Workflow, Bot, Gauge } from 'lucide-react'

const projects = [
  {
    icon: Workflow,
    title: 'Process Mining → Automation',
    impact: '42% faster cycle time',
    description: 'Mapped as-is flows from event logs, identified bottlenecks, and automated approvals with an AI agent for triage.',
    tags: ['Celonis', 'RPA', 'Agents', 'LLM'],
  },
  {
    icon: Gauge,
    title: 'Demand Forecasting',
    impact: '19% inventory reduction',
    description: 'Built probabilistic forecasts using gradient boosting and seasonality features with a human-in-the-loop review UI.',
    tags: ['Time Series', 'XGBoost', 'MLOps'],
  },
  {
    icon: Bot,
    title: 'AI Service Desk',
    impact: '65% automated resolution',
    description: 'Multi-tool retrieval and action agents integrated with ticketing platform; measurable CSAT lift and MTTR drop.',
    tags: ['RAG', 'Actions', 'Zendesk'],
  },
  {
    icon: Cpu,
    title: 'Quality Inspection',
    impact: 'Defects down 31%',
    description: 'Vision pipeline with active learning model management; deployed on edge devices with streaming analytics.',
    tags: ['Vision', 'Edge', 'Active Learning'],
  },
]

export default function Work() {
  return (
    <section id="work" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-930 to-slate-900">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_55%)]" />
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">Selected Work</h2>
          <p className="mt-2 text-blue-200/80 max-w-2xl">A few examples that show how I combine lean thinking with modern AI to deliver measurable outcomes.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ delay: i * 0.06, duration: 0.5 }} className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 overflow-hidden hover:border-cyan-400/30">
              <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full bg-cyan-400/10 blur-3xl group-hover:bg-cyan-400/20 transition" />
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-400/15 border border-cyan-300/20 text-cyan-200">
                  {p.icon && <p.icon className="w-5 h-5" />}
                </div>
                <div>
                  <h3 className="text-white font-semibold tracking-tight">{p.title}</h3>
                  <p className="text-cyan-300/90 text-sm">{p.impact}</p>
                </div>
              </div>
              <p className="mt-4 text-blue-100/90 text-sm">{p.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="px-2.5 py-1 rounded-md bg-white/10 border border-white/10 text-white/80 text-xs">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
