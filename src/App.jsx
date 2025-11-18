import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Work from './components/Work'
import Approach from './components/Approach'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(56,189,248,0.15),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(99,102,241,0.12),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(14,165,233,0.12),transparent_40%)]" />
      <Navbar />
      <main className="relative">
        <Hero />
        <Work />
        <Approach />
        <About />
        <Contact />
      </main>
      <footer className="relative border-t border-white/10 py-10 text-center text-blue-200/70">
        <p>© {new Date().getFullYear()} Idan Schorr — Innovation & AI</p>
      </footer>
    </div>
  )
}

export default App
