import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
    { num: '4+', label: 'Projects Shipped', icon: '◆' },
    { num: '3rd', label: 'Year — Comp. Eng.', icon: '◈' },
    { num: '2', label: 'Internships Done', icon: '✦' },
    { num: '∞', label: 'Curiosity Level', icon: '★' },
]

function StatCard({ num, label, icon, delay }) {
    return (
        <motion.div
            className="glass-card p-4 sm:p-6 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
        >
            <div className="flex items-start justify-between mb-2 sm:mb-3">
                <div className="font-serif font-bold text-[1.6rem] sm:text-[2.2rem] leading-none"
                    style={{
                        background: 'linear-gradient(135deg, #C9A84C, #E8C96A)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>{num}</div>
                <span className="text-base sm:text-lg opacity-30 group-hover:opacity-60 transition-opacity" style={{ color: '#C9A84C' }}>{icon}</span>
            </div>
            <div className="font-sans text-[10px] sm:text-[12px] tracking-wider uppercase font-medium" style={{ color: '#7A7A92' }}>{label}</div>
        </motion.div>
    )
}

export default function About() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    const paragraphs = [
        <>Hi, I'm <strong className="font-semibold" style={{ color: '#F5ECD7' }}>Dipesh Kewat</strong>, a 3rd-year Computer Engineering student who genuinely enjoys building things with code and understanding how software works behind the scenes. I like turning ideas into <span className="font-mono text-sm px-1.5 py-0.5 rounded" style={{ background: 'rgba(201, 168, 76, 0.1)', color: '#E8C96A' }}>clean</span>, <span className="font-mono text-sm px-1.5 py-0.5 rounded" style={{ background: 'rgba(99, 102, 241, 0.1)', color: '#818CF8' }}>simple</span>, and practical web applications that actually solve problems.</>,
        <>I'm always learning — whether it's exploring new technologies, improving my backend skills, or working on real projects that push me out of my comfort zone. I believe the best way to grow is by building, experimenting, and learning from mistakes. I value <em style={{ color: '#C9A84C', fontStyle: 'normal' }}>consistency</em>, <em style={{ color: '#C9A84C', fontStyle: 'normal' }}>clarity</em>, and <em style={{ color: '#C9A84C', fontStyle: 'normal' }}>creativity</em> in my work.</>,
        <>Currently open to <strong style={{ color: '#E8C96A' }}>freelance</strong> projects and <strong style={{ color: '#E8C96A' }}>full-time</strong> opportunities. If you've got a product that needs a developer who actually cares about craft, let's talk.</>,
    ]

    return (
        <section id="about" className="px-5 sm:px-8 md:px-14 lg:px-16 py-16 sm:py-20 md:py-24 relative"
            style={{ background: '#0A0A0F', borderBottom: '1px solid rgba(201, 168, 76, 0.06)' }}>

            {/* Ambient glow */}
            <div className="absolute top-[30%] left-[50%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full opacity-[0.03] pointer-events-none -translate-x-1/2"
                style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }} />

            <div className="section-label">About</div>
            <h2 className="section-title text-4xl sm:text-5xl md:text-7xl mb-8 sm:mb-12">
                Who Am
                <br />I<span style={{ color: '#C9A84C' }}>.</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 md:gap-16 items-start">
                <div ref={ref} className="space-y-4 sm:space-y-5">
                    {paragraphs.map((p, i) => (
                        <motion.p
                            key={i}
                            className="font-sans text-[13px] sm:text-[15px] leading-[1.7] sm:leading-[1.8]"
                            style={{ color: '#B8B8CC' }}
                            initial={{ opacity: 0, y: 18 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                        >
                            {p}
                        </motion.p>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    {stats.map((s, i) => <StatCard key={s.label} {...s} delay={i * 0.1} />)}
                </div>
            </div>
        </section>
    )
}
