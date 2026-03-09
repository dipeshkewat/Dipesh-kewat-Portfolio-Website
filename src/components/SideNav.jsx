import { useState, useEffect } from 'react'

const navLinks = [
    { id: 'hero', label: 'hero', num: '01_' },
    { id: 'about', label: 'about', num: '02_' },
    { id: 'skills', label: 'skills', num: '03_' },
    { id: 'work', label: 'work', num: '04_' },
    { id: 'exp', label: 'experience', num: '05_' },
    { id: 'contact', label: 'contact', num: '06_' },
]

export default function SideNav({ mobileOpen, onClose }) {
    const [active, setActive] = useState('hero')

    useEffect(() => {
        const sections = document.querySelectorAll('section[id]')
        const obs = new IntersectionObserver(
            entries => { entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) }) },
            { threshold: 0.4 }
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
            className={`fixed top-0 left-0 h-screen w-[220px] flex flex-col z-[100] ${mobileOpen ? 'open' : ''}`}
            style={{ background: '#FFFDF5', borderRight: '4px solid #000000' }}
        >
            {/* Logo */}
            <div className="px-5 py-7 border-b-4 font-mono font-bold text-sm tracking-tight" style={{ borderColor: '#000000', color: '#000000', background: '#F7CB46' }}>
                <span style={{ color: '#FE90E8' }}>&lt;</span>DipeshKewat<span style={{ color: '#FE90E8' }}>&nbsp;/&gt;</span>
            </div>

            {/* Label */}
            <div className="px-5 pt-3 pb-1 font-label text-[10px] uppercase tracking-widest" style={{ color: '#555555' }}>
                <span style={{ color: '#99E885', fontWeight: 700 }}>{'//'} </span>navigate
            </div>

            {/* Links */}
            <nav className="flex-1 py-1">
                {navLinks.map(link => (
                    <button
                        key={link.id}
                        onClick={() => handleClick(link.id)}
                        className="w-full text-left flex items-center px-5 py-[9px] font-mono text-[13px] tracking-tight border-l-4 transition-colors duration-75 cursor-none"
                        style={{
                            color: '#000000',
                            borderLeftColor: active === link.id ? '#FE90E8' : 'transparent',
                            background: active === link.id ? '#FFDC8B' : 'transparent',
                            fontWeight: active === link.id ? 700 : 400,
                        }}
                        onMouseEnter={e => { if (active !== link.id) { e.currentTarget.style.background = '#C0F7FE'; e.currentTarget.style.borderLeftColor = '#000000'; } }}
                        onMouseLeave={e => { if (active !== link.id) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderLeftColor = 'transparent'; } }}
                    >
                        <span className="mr-1.5" style={{ color: active === link.id ? '#FE90E8' : '#555555' }}>{link.num}</span>
                        {link.label}
                    </button>
                ))}
            </nav>

            {/* Bottom */}
            <div className="border-t-4 px-5 py-4" style={{ borderColor: '#000000', background: '#FFDC8B' }}>
                <div className="flex gap-3 mb-3">
                    {['github', 'linkedin', 'resume'].map(s => (
                        <a key={s} href="#" className="font-label text-[11px] underline decoration-dotted hover:decoration-solid font-bold" style={{ color: '#000000' }}>
                            {s}
                        </a>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full border-2 animate-pulse-dot inline-block" style={{ background: '#99E885', borderColor: '#000000' }} />
                    <span className="font-label text-[11px] font-bold" style={{ color: '#000000' }}>available</span>
                </div>
            </div>
        </aside>
    )
}
