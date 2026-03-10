import { useState, useEffect } from 'react'

const navLinks = [
    { id: 'hero', label: 'Home', num: '01' },
    { id: 'about', label: 'About', num: '02' },
    { id: 'skills', label: 'Skills', num: '03' },
    { id: 'work', label: 'Projects', num: '04' },
    { id: 'exp', label: 'Experience', num: '05' },
    { id: 'contact', label: 'Contact', num: '06' },
]

export default function SideNav({ mobileOpen, onClose }) {
    const [active, setActive] = useState('hero')

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]')
        const obs = new IntersectionObserver(
            entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }) },
            { threshold: 0.3 }
        )
        sections.forEach(s => obs.observe(s))
        return () => obs.disconnect()
    }, [])

    const handleClick = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        onClose?.()
    }

    return (
        <aside
            id="sidenav"
            className={`fixed top-0 left-0 h-screen w-[240px] flex flex-col z-[100] ${mobileOpen ? 'open' : ''}`}
            style={{
                background: 'rgba(10, 10, 15, 0.96)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRight: '1px solid rgba(201, 168, 76, 0.1)',
            }}
        >
            {/* Logo */}
            <div className="px-5 sm:px-6 py-6 sm:py-7 flex items-center gap-2"
                style={{ borderBottom: '1px solid rgba(201, 168, 76, 0.1)' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #C9A84C, #E8C96A)' }}>
                    <span className="font-serif font-bold text-sm" style={{ color: '#0A0A0F' }}>D</span>
                </div>
                <span className="font-serif font-semibold text-sm tracking-tight" style={{ color: '#F5ECD7' }}>
                    Dipesh Kewat
                </span>
            </div>

            {/* Navigation label */}
            <div className="px-5 sm:px-6 pt-5 sm:pt-6 pb-2 font-mono text-[10px] uppercase tracking-[0.2em]" style={{ color: '#7A7A92' }}>
                Navigation
            </div>

            {/* Links */}
            <nav className="flex-1 px-2 sm:px-3 py-1 overflow-y-auto">
                {navLinks.map(link => (
                    <button
                        key={link.id}
                        onClick={() => handleClick(link.id)}
                        className="w-full text-left flex items-center px-3 py-3 sm:py-2.5 rounded-lg font-sans text-[14px] sm:text-[13px] tracking-tight transition-all duration-300 cursor-none mb-0.5"
                        style={{
                            color: active === link.id ? '#E8C96A' : '#B8B8CC',
                            background: active === link.id ? 'rgba(201, 168, 76, 0.08)' : 'transparent',
                            fontWeight: active === link.id ? 600 : 400,
                        }}
                        onMouseEnter={e => {
                            if (active !== link.id) {
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
                                e.currentTarget.style.color = '#F5ECD7'
                            }
                        }}
                        onMouseLeave={e => {
                            if (active !== link.id) {
                                e.currentTarget.style.background = 'transparent'
                                e.currentTarget.style.color = '#B8B8CC'
                            }
                        }}
                    >
                        <span className="mr-3 font-mono text-[10px] w-5" style={{ color: active === link.id ? '#C9A84C' : '#7A7A92' }}>
                            {link.num}
                        </span>
                        {link.label}
                        {active === link.id && (
                            <span className="ml-auto w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C9A84C' }} />
                        )}
                    </button>
                ))}
            </nav>

            {/* Bottom section */}
            <div className="px-5 sm:px-6 py-4 sm:py-5" style={{ borderTop: '1px solid rgba(201, 168, 76, 0.08)' }}>
                <div className="flex gap-4 mb-3 sm:mb-4">
                    {[
                        { label: 'GitHub', href: 'https://github.com/dipeshkewat' },
                        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dipesh-kewat' },
                    ].map(s => (
                        <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                            className="font-sans text-[11px] font-medium transition-colors duration-300"
                            style={{ color: '#7A7A92' }}
                            onMouseEnter={e => e.currentTarget.style.color = '#C9A84C'}
                            onMouseLeave={e => e.currentTarget.style.color = '#7A7A92'}
                        >
                            {s.label}
                        </a>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ background: '#4ADE80' }} />
                        <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: '#4ADE80' }} />
                    </span>
                    <span className="font-mono text-[11px]" style={{ color: '#4ADE80' }}>Available for work</span>
                </div>
            </div>
        </aside>
    )
}
