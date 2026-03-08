import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
    { num: '28+', label: 'PROJECTS: shipped' },
    { num: '4YRS', label: 'EXPERIENCE: total' },
    { num: '12+', label: 'CLIENTS: happy' },
    { num: '∞', label: 'CURIOSITY: infinite' },
]

function StatCard({ num, label, delay }) {
    return (
        <motion.div
            className="stat-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.4 }}
        >
            <div className="font-mono font-extrabold text-[2.4rem] leading-none mb-1.5">{num}</div>
            <div className="font-label text-[11px] tracking-widest uppercase text-gray-500">{label}</div>
        </motion.div>
    )
}

export default function About() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    return (
        <section id="about" className="px-14 md:px-16 py-20 border-b-4 border-black">
            <div className="section-label">about</div>
            <h2 className="section-title">
                Who<br />Am I.<span className="text-yellow">_</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
                {/* Text */}
                <div ref={ref} className="space-y-4">
                    {[
                        <>Hey — I'm <strong className="font-mono text-black">Dipesh Kewat</strong>, a Front-End Developer who treats the browser like a canvas and code like craft. I specialize in building <code className="font-mono bg-yellow px-1.5 py-0.5 border border-black text-sm">fast</code>, <code className="font-mono bg-yellow px-1.5 py-0.5 border border-black text-sm">accessible</code>, and visually striking interfaces.</>,
                        <>I believe good design is honest. No gradients for gradients' sake. No animations that exist just to show off. Everything I build has a reason — and that reason is usually to make users say <em>"damn, that's smooth."</em></>,
                        <>Currently open to <strong className="font-mono">freelance</strong> projects and <strong className="font-mono">full-time</strong> opportunities. If you've got a product that needs a developer who actually cares about craft, let's talk.</>,
                    ].map((p, i) => (
                        <motion.p
                            key={i}
                            className="font-body text-[15px] text-gray-700 leading-relaxed"
                            initial={{ opacity: 0, y: 18 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                        >
                            {p}
                        </motion.p>
                    ))}
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                    {stats.map((s, i) => (
                        <StatCard key={s.label} {...s} delay={i * 0.1} />
                    ))}
                </div>
            </div>
        </section>
    )
}
