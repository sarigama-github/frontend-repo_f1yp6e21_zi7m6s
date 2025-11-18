import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="md:col-span-1">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 p-1 shadow-lg shadow-blue-500/30">
              <div className="w-full h-full rounded-[14px] bg-slate-900/90 border border-white/10" />
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08, duration: 0.5 }} className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">About</h2>
            <p className="mt-4 text-blue-100/90">
              I translate messy processes into crisp systems. My background blends lean operations, analytics, and modern AI — enabling end-to-end improvements from discovery to deployment.
            </p>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {["Process Mining","RAG & Agents","Experiment Design","Change Management"].map((skill) => (
                <div key={skill} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/90 text-sm">
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
