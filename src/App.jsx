import { useState, useEffect } from 'react'
import SideNav from './components/SideNav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Contact from './components/Contact'
import SocialBar from './components/SocialBar'

export default function App() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  // Custom cursor — only on devices that have a pointer (not touch-only)
  useEffect(() => {
    const hasPointer = window.matchMedia('(pointer: fine)').matches
    if (!hasPointer) {
      document.body.style.cursor = 'auto'
      const cursorEl = document.getElementById('cursor')
      if (cursorEl) cursorEl.style.display = 'none'
      return
    }

    const cursor = document.getElementById('cursor')
    if (!cursor) return
    const move = e => {
      cursor.style.left = e.clientX + 'px'
      cursor.style.top = e.clientY + 'px'
    }
    document.addEventListener('mousemove', move)

    const addHover = () => cursor.classList.add('hovering')
    const rmHover = () => cursor.classList.remove('hovering')

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
      {/* Custom cursor */}
      <div id="cursor" />

      {/* Social shortcuts bar */}
      <SocialBar />

      {/* Mobile top bar */}
      <header className="hidden max-[900px]:flex fixed top-0 left-0 right-0 h-14 z-[200] items-center justify-between px-4 sm:px-5"
        style={{
          background: 'rgba(10, 10, 15, 0.92)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: '1px solid rgba(201, 168, 76, 0.12)',
        }}>
        <span className="font-serif font-bold text-sm tracking-tight" style={{ color: '#F5ECD7' }}>
          <span style={{ color: '#C9A84C' }}>D</span>ipesh<span style={{ color: '#C9A84C' }}>K</span>ewat
        </span>
        <button
          className="w-9 h-9 flex flex-col justify-center items-center gap-[5px] cursor-none rounded-md"
          style={{ background: 'rgba(201, 168, 76, 0.1)', border: '1px solid rgba(201, 168, 76, 0.2)' }}
          onClick={() => setMobileNavOpen(o => !o)}
        >
          {[0, 1, 2].map(n => (
            <span key={n} className="w-4 h-[1.5px] block transition-all duration-300" style={{
              background: '#C9A84C',
              ...(mobileNavOpen && n === 0 ? { transform: 'rotate(45deg) translate(4px,4px)' } : {}),
              ...(mobileNavOpen && n === 1 ? { opacity: 0 } : {}),
              ...(mobileNavOpen && n === 2 ? { transform: 'rotate(-45deg) translate(4px,-4px)' } : {}),
            }} />
          ))}
        </button>
      </header>

      {/* Mobile overlay */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-[250] hidden max-[900px]:block"
          style={{ background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(4px)', WebkitBackdropFilter: 'blur(4px)' }}
          onClick={() => setMobileNavOpen(false)} />
      )}

      <SideNav mobileOpen={mobileNavOpen} onClose={() => setMobileNavOpen(false)} />

      <main id="main-content" className="ml-[240px] max-[900px]:ml-0">
        <Hero />
        <Ticker />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />

        <footer className="px-6 sm:px-14 py-6 sm:py-8 flex justify-between items-center max-[600px]:flex-col max-[600px]:gap-3 max-[600px]:text-center max-[900px]:pb-20"
          style={{
            background: 'rgba(10, 10, 15, 0.95)',
            borderTop: '1px solid rgba(201, 168, 76, 0.1)',
          }}>
          <p className="font-sans text-[11px] sm:text-[12px]" style={{ color: '#7A7A92' }}>
            © 2024 <span style={{ fontWeight: 600, color: '#B8B8CC' }}>Dipesh Kewat</span>. Crafted with precision & passion.
          </p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-mono text-[11px] uppercase tracking-widest cursor-none transition-colors font-medium"
            style={{ color: '#7A7A92' }}
            onMouseEnter={e => e.target.style.color = '#C9A84C'}
            onMouseLeave={e => e.target.style.color = '#7A7A92'}
          >
            ↑ Back to top
          </button>
        </footer>
      </main>
    </>
  )
}
