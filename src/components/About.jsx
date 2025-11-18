import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="relative max-w-5xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="md:col-span-1">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-400 p-1 shadow-lg shadow-blue-500/30">
              <div className="w-full h-full rounded-[14px] bg-slate-900/90 border border-white/10 overflow-hidden">
                <img src="https://i.ibb.co/ZRmqxnbH/Gemini-Generated-Image-si39itsi39itsi39.png" alt="Idan Schorr" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.08, duration: 0.5 }} className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold text-white">Idan Schorr</h2>
            <p className="mt-2 text-blue-200/90 text-sm">Innovation & Change Specialist | AI-Enabled Process Optimisation | Automation Strategy | Turning Data Into Action</p>

            <p className="mt-4 text-blue-100/90">
              Analytical and self-directed transformation specialist leveraging AI, automation, and data intelligence to deliver measurable performance improvements.
            </p>
            <p className="mt-3 text-blue-100/90">
              Skilled in integrating large language models, workflow design, and insight analysis to build intelligent tools that optimise processes and empower teams.
            </p>
            <p className="mt-3 text-blue-100/90">
              Recognised for innovation and initiative, including development of Guidant, an AI-driven decision support system that improved operational accuracy and reduced discretionary spend.
            </p>
            <p className="mt-3 text-blue-100/90">
              Early adopter of AI long before it became mainstream — using multiple LLMs since 2021 to accelerate learning, design, and automation. Driven by curiosity, systems thinking, and the desire to simplify complexity through logic and ethical innovation.
            </p>
            <p className="mt-3 text-blue-100/90">
              I’m always keen to connect with people who share a passion for innovation, AI, process optimisation, and transformation. If that’s you, let’s connect.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {["Process Mining","RAG & Agents","Experiment Design","Change Management"].map((skill) => (
                <div key={skill} className="px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white/90 text-sm">
                  {skill}
                </div>
              ))}
            </div>

            <div className="mt-6">
              <a href="https://www.linkedin.com/in/idan-schorr" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-cyan-200 hover:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.027-3.058-1.864-3.058-1.865 0-2.152 1.455-2.152 2.959v5.703h-3v-10h2.881v1.367h.041c.401-.761 1.379-1.562 2.838-1.562 3.035 0 3.6 2.001 3.6 4.605v5.59z"/></svg>
                <span>linkedin.com/in/idan-schorr</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
