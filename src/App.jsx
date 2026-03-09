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

  // Glitch cursor
  useEffect(() => {
    const cursor = document.getElementById('cursor')
    if (!cursor) return
    const move = e => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }
    document.addEventListener('mousemove', move)

    const addHover = () => cursor.classList.add('hovering')
    const rmHover = () => cursor.classList.remove('hovering')

    // Attach hover to all interactive elements (use mutation observer for dynamic content)
    const attachHover = () => {
      document.querySelectorAll('a, button, [data-hover]').forEach(el => {
        el.addEventListener('mouseenter', addHover)
        el.addEventListener('mouseleave', rmHover)
      })
    }
    attachHover()
    const mo = new MutationObserver(attachHover)
    mo.observe(document.body, { childList: true, subtree: true })

    return () => {
      document.removeEventListener('mousemove', move)
      mo.disconnect()
    }
  }, [])

  return (
    <>
      {/* Glitch cursor element */}
      <div id="cursor" />

      {/* Mobile top bar */}
      <header className="hidden max-[900px]:flex fixed top-0 left-0 right-0 h-14 border-b-4 z-[200] items-center justify-between px-5"
        style={{ background: '#FFFDF5', borderColor: '#000000' }}>
        <span className="font-mono font-bold text-sm" style={{ color: '#000000' }}>
          <span style={{ color: '#FE90E8' }}>&lt;</span>DipeshKewat<span style={{ color: '#FE90E8' }}> /&gt;</span>
        </span>
        <button
          className="w-9 h-9 border-2 flex flex-col justify-center items-center gap-[5px] cursor-none"
          style={{ background: '#F7CB46', borderColor: '#000000' }}
          onClick={() => setMobileNavOpen(o => !o)}
        >
          {[0, 1, 2].map(n => (
            <span key={n} className="w-4 h-[2px] block transition-transform" style={{
              background: '#000000',
              ...(mobileNavOpen && n === 0 ? { transform: 'rotate(45deg) translate(4px,4px)' } : {}),
              ...(mobileNavOpen && n === 1 ? { opacity: 0 } : {}),
              ...(mobileNavOpen && n === 2 ? { transform: 'rotate(-45deg) translate(4px,-4px)' } : {}),
            }} />
          ))}
        </button>
      </header>

      {/* Mobile overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-[250] hidden max-[900px]:block" style={{ background: 'rgba(0,0,0,0.7)' }}
          onClick={() => setMobileNavOpen(false)} />
      )}

      <SideNav mobileOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="ml-[220px] max-[900px]:ml-0">
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />

        <footer className="border-t-4 px-14 py-6 flex justify-between items-center max-[600px]:flex-col max-[600px]:gap-3 max-[600px]:text-center"
          style={{ background: '#F7CB46', borderColor: '#000000' }}>
          <p className="font-mono text-[11px]" style={{ color: '#000000' }}>
            &copy; 2024 <span style={{ fontWeight: 700 }}>Dipesh Kewat</span>. Built with obsession &amp; monospace fonts.
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-label text-[11px] uppercase tracking-widest cursor-none transition-colors font-bold"
            style={{ color: '#000000' }}
            onMouseEnter={e => e.target.style.color = '#FE90E8'}
            onMouseLeave={e => e.target.style.color = '#000000'}
          >
            ↑ back_to_top()
          </button>
        </footer>
      </main>
    </>
  )
}
