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
            entries => {
                entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id) })
            },
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
            className={`
        fixed top-0 left-0 h-screen w-[220px]
        bg-cream border-r-4 border-black
        flex flex-col z-[100]
        ${mobileOpen ? 'open' : ''}
      `}
        >
            {/* Logo */}
            <div className="px-5 py-7 border-b-2 border-black font-mono font-bold text-sm tracking-tight">
                <span className="text-gray-400">&lt;</span>
                DipeshKewat
                <span className="text-gray-400">&nbsp;/&gt;</span>
            </div>

            {/* Nav label */}
            <div className="px-5 pt-3 pb-1 font-label text-[10px] uppercase tracking-widest text-gray-400">
                <span className="text-gray-500">// </span>navigate
            </div>

            {/* Links */}
            <nav className="flex-1 py-1">
                {navLinks.map(link => (
                    <button
                        key={link.id}
                        onClick={() => handleClick(link.id)}
                        className={`
              w-full text-left flex items-center px-5 py-[9px]
              font-mono text-[13px] tracking-tight
              border-l-4 transition-colors duration-75 cursor-none
              ${active === link.id
                                ? 'bg-yellow border-black'
                                : 'border-transparent hover:bg-yellow hover:border-black'}
            `}
                    >
                        <span className={`mr-1.5 ${active === link.id ? 'text-black' : 'text-gray-400'}`}>
                            {link.num}
                        </span>
                        {link.label}
                    </button>
                ))}
            </nav>

            {/* Bottom: socials + status */}
            <div className="border-t-2 border-black px-5 py-4">
                <div className="flex gap-3 mb-3">
                    {['github', 'linkedin', 'resume'].map(s => (
                        <a
                            key={s}
                            href="#"
                            className="font-label text-[11px] text-black underline decoration-dotted hover:decoration-solid"
                        >
                            {s}
                        </a>
                    ))}
                </div>
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-neon border-2 border-black animate-pulse-dot inline-block" />
                    <span className="font-label text-[11px]">available</span>
                </div>
            </div>
        </aside>
    )
}
