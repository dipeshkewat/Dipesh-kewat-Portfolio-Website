import { motion } from 'framer-motion'

const socials = [
    {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/dipesh-kewat',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
            </svg>
        ),
    },
    {
        label: 'GitHub',
        href: 'https://github.com/dipeshkewat',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
            </svg>
        ),
    },
    {
        label: 'LeetCode',
        href: 'https://leetcode.com/u/dipeshkewat',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 16H4a1 1 0 0 1 0-2h8" />
                <path d="M14.5 3.5 20 9l-5.5 5.5" />
                <path d="M7.5 20.5 2 15l5.5-5.5" />
            </svg>
        ),
    },
    {
        label: 'Instagram',
        href: 'https://instagram.com/dipeshkewat',
        icon: (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        ),
    },
]

export default function SocialBar() {
    return (
        <>
            {/* Desktop: Fixed vertical bar on right side */}
            <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[150] hidden min-[901px]:flex flex-col items-center gap-1"
                style={{
                    background: 'rgba(10, 10, 15, 0.7)',
                    backdropFilter: 'blur(12px)',
                    border: '1px solid rgba(201, 168, 76, 0.08)',
                    borderRight: 'none',
                    borderRadius: '12px 0 0 12px',
                    padding: '8px 6px',
                }}>
                {/* Top accent */}
                <div className="w-[2px] h-4 mb-1 rounded-full" style={{ background: 'linear-gradient(180deg, #C9A84C, transparent)' }} />

                {socials.map((s, i) => (
                    <motion.a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        title={s.label}
                        className="w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 cursor-none relative group"
                        style={{ color: '#7A7A92' }}
                        whileHover={{ color: '#C9A84C', background: 'rgba(201, 168, 76, 0.08)' }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + i * 0.1, duration: 0.4 }}
                    >
                        {s.icon}
                        {/* Tooltip */}
                        <span className="absolute right-full mr-3 px-2.5 py-1 rounded-md font-sans text-[11px] font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 translate-x-2 group-hover:translate-x-0"
                            style={{
                                background: 'rgba(10, 10, 15, 0.95)',
                                color: '#E8C96A',
                                border: '1px solid rgba(201, 168, 76, 0.15)',
                            }}>
                            {s.label}
                        </span>
                    </motion.a>
                ))}

                {/* Bottom accent */}
                <div className="w-[2px] h-4 mt-1 rounded-full" style={{ background: 'linear-gradient(180deg, transparent, #C9A84C)' }} />
            </div>

            {/* Mobile: Fixed bottom bar */}
            <div className="fixed bottom-0 left-0 right-0 z-[150] min-[901px]:hidden flex justify-center items-center gap-2 py-2.5 px-4"
                style={{
                    background: 'rgba(10, 10, 15, 0.92)',
                    backdropFilter: 'blur(16px)',
                    borderTop: '1px solid rgba(201, 168, 76, 0.1)',
                }}>
                {socials.map((s) => (
                    <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300"
                        style={{
                            color: '#7A7A92',
                            background: 'rgba(255, 255, 255, 0.04)',
                            border: '1px solid rgba(255, 255, 255, 0.06)',
                        }}
                        onTouchStart={e => {
                            e.currentTarget.style.color = '#C9A84C'
                            e.currentTarget.style.background = 'rgba(201, 168, 76, 0.1)'
                            e.currentTarget.style.borderColor = 'rgba(201, 168, 76, 0.2)'
                        }}
                        onTouchEnd={e => {
                            setTimeout(() => {
                                e.currentTarget.style.color = '#7A7A92'
                                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.04)'
                                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.06)'
                            }, 300)
                        }}
                    >
                        {s.icon}
                    </a>
                ))}
            </div>
        </>
    )
}
