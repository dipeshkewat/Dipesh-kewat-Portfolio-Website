import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
    { num: '4+', label: 'PROJECTS: shipped', bg: '#FE90E8' },
    { num: '3rd', label: 'YEAR: comp. eng.', bg: '#F7CB46' },
    { num: '2', label: 'INTERNSHIPS: done', bg: '#C0F7FE' },
    { num: '∞', label: 'CURIOSITY: infinite', bg: '#99E885' },
]

function StatCard({ num, label, delay, bg }) {
    return (
        <motion.div
            className="border-4 p-5 transition-all duration-75 cursor-default"
            style={{ background: bg, borderColor: '#000000', boxShadow: '4px 4px 0 #000000' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.4 }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translate(2px,2px)'; e.currentTarget.style.boxShadow = '2px 2px 0 #000000'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '4px 4px 0 #000000'; }}
        >
            <div className="font-mono font-extrabold text-[2.4rem] leading-none mb-1.5" style={{ color: '#000000' }}>{num}</div>
            <div className="font-label text-[11px] tracking-widest uppercase font-bold" style={{ color: '#000000' }}>{label}</div>
        </motion.div>
    )
}

export default function About() {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true, margin: '-80px' })

    const paragraphs = [
        <>Hi, I'm <strong className="font-mono" style={{ color: '#000000', background: '#F7CB46', padding: '0 4px' }}>Dipesh Kewat</strong>, a 3rd-year Computer Engineering student who genuinely enjoys building things with code and understanding how software works behind the scenes. I like turning ideas into <code className="font-mono px-1.5 py-0.5 border-2 text-sm font-bold" style={{ background: '#99E885', borderColor: '#000000', color: '#000000' }}>clean</code>, <code className="font-mono px-1.5 py-0.5 border-2 text-sm font-bold" style={{ background: '#C0F7FE', borderColor: '#000000', color: '#000000' }}>simple</code>, and practical web applications that actually solve problems.</>,
        <>I'm always learning — whether it's exploring new technologies, improving my backend skills, or working on real projects that push me out of my comfort zone. I believe the best way to grow is by building, experimenting, and learning from mistakes. I value <em>consistency</em>, <em>clarity</em>, and <em>creativity</em> in my work.</>,
        <>Currently open to <strong className="font-mono" style={{ background: '#FE90E8', padding: '0 4px' }}>freelance</strong> projects and <strong className="font-mono" style={{ background: '#FE90E8', padding: '0 4px' }}>full-time</strong> opportunities. If you've got a product that needs a developer who actually cares about craft, let's talk.</>,
    ]

    return (
        <section id="about" className="px-14 md:px-16 py-20 border-b-4" style={{ borderColor: '#000000', background: '#FFFDF5' }}>
            <div className="section-label">about</div>
            <h2 className="section-title">
                Who<br />Am I.<span style={{ color: '#FE90E8' }}>_</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-start">
                <div ref={ref} className="space-y-4">
                    {paragraphs.map((p, i) => (
                        <motion.p
                            key={i}
                            className="font-body text-[15px] leading-relaxed"
                            style={{ color: '#333333' }}
                            initial={{ opacity: 0, y: 18 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.15, duration: 0.5 }}
                        >
                            {p}
                        </motion.p>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    {stats.map((s, i) => <StatCard key={s.label} {...s} delay={i * 0.1} />)}
                </div>
            </div>
        </section>
    )
}
