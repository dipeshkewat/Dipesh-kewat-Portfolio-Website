import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/projects'

function SkillBar({ name, pct, delay }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    return (
        <div ref={ref} className="mb-1">
            <div className="flex justify-between items-center mb-1.5">
                <span className="font-mono text-[13px] font-bold" style={{ color: '#000000' }}>{name}</span>
                <span className="font-mono text-[11px] font-bold border-2 px-1.5 py-0.5" style={{ color: '#000000', background: '#99E885', borderColor: '#000000' }}>{pct}%</span>
            </div>
            <div className="skill-bar">
                <div className="skill-fill" style={{ width: inView ? `${pct}%` : '0%', transitionDelay: `${delay}s` }} />
            </div>
        </div>
    )
}

export default function Skills() {
    return (
        <section id="skills" className="px-14 md:px-16 py-20 border-b-4" style={{ background: '#FFDC8B', borderColor: '#000000' }}>
            <div className="section-label" style={{ color: '#555555' }}>
                <span style={{ color: '#99E885', fontWeight: 900 }}>//</span> skills
            </div>
            <h2 className="section-title" style={{ color: '#000000' }}>
                Tech<br />Stack<span style={{ color: '#FE90E8' }}>_</span>
            </h2>

            <motion.div
                className="terminal-window"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <div className="terminal-header">
                    <div className="terminal-dot" style={{ background: '#FF5F57' }} />
                    <div className="terminal-dot" style={{ background: '#FFBD2E' }} />
                    <div className="terminal-dot" style={{ background: '#28CA41' }} />
                    <span className="font-mono text-[11px] ml-2 font-bold" style={{ color: '#000000' }}>dipesh@portfolio ~ skills.sh</span>
                </div>
                <div className="p-6" style={{ background: '#FFFFFF' }}>
                    <p className="font-mono text-[12px] mb-2" style={{ color: '#555555' }}>
                        <span style={{ color: '#555555' }}>// </span>skills audit for Dipesh Kewat — current stack
                    </p>
                    <p className="font-mono text-[12px] mb-6" style={{ color: '#000000' }}>
                        <span style={{ color: '#99E885', fontWeight: 700 }}>$ </span>run skills --show-all --format=bar
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                        {skills.map((s, i) => <SkillBar key={s.name} {...s} delay={i * 0.08} />)}
                    </div>
                    <p className="font-mono text-[12px] mt-6 font-bold" style={{ color: '#000000' }}>
                        <span style={{ color: '#99E885', fontWeight: 900 }}>✓ </span>audit complete. all systems operational.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
