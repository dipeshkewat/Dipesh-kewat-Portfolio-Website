import { useState, useEffect } from 'react'
import SideNav from './components/SideNav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  // Custom cursor
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    if (!cursor) return
    const move = e => {
      cursor.style.left = (e.clientX - 7) + 'px'
      cursor.style.top = (e.clientY - 7) + 'px'
    }
    document.addEventListener('mousemove', move)

    const interactives = document.querySelectorAll('a, button, [data-hover]')
    interactives.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovering'))
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'))
    })
    return () => document.removeEventListener('mousemove', move)
  }, [])

  return (
    <>
      {/* Custom cursor */}
      <div id="cursor" />

      {/* Mobile top bar */}
      <header className="hidden max-[900px]:flex fixed top-0 left-0 right-0 h-14 bg-white border-b-4 border-black z-[200] items-center justify-between px-5">
        <span className="font-mono font-bold text-sm">
          <span className="text-gray-400">&lt;</span>DipeshKewat<span className="text-gray-400"> /&gt;</span>
        </span>
        <button
          className="w-9 h-9 bg-yellow border-2 border-black flex flex-col justify-center items-center gap-[5px] cursor-none"
          onClick={() => setMobileNavOpen(o => !o)}
        >
          <span className={`w-4 h-[2px] bg-black block transition-transform ${mobileNavOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`w-4 h-[2px] bg-black block transition-opacity ${mobileNavOpen ? 'opacity-0' : ''}`} />
          <span className={`w-4 h-[2px] bg-black block transition-transform ${mobileNavOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </header>

      {/* Mobile overlay */}
      {mobileNavOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-[250] hidden max-[900px]:block"
          onClick={() => setMobileNavOpen(false)}
        />
      )}

      {/* Side Nav */}
      <SideNav mobileOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      {/* Main content */}
      <main id="main-content" className="ml-[220px] max-[900px]:ml-0">
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />

        {/* Footer */}
        <footer className="bg-black border-t-2 border-gray-800 px-14 py-6 flex justify-between items-center max-[600px]:flex-col max-[600px]:gap-3 max-[600px]:text-center">
          <p className="font-mono text-[11px] text-gray-600">
            &copy; 2024 <span className="text-yellow">Dipesh Kewat</span>. Built with obsession &amp; monospace fonts.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-label text-[11px] uppercase tracking-widest text-gray-600 hover:text-yellow transition-colors cursor-none"
          >
            ↑ back_to_top()
          </button>
        </footer>
      </main>
    </>
  )
}
