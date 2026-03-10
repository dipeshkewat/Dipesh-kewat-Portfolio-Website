import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/projects'

function SkillBar({ name, pct, delay }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
    return (
        <div ref={ref} className="mb-1">
            <div className="flex justify-between items-center mb-1.5 sm:mb-2">
                <span className="font-sans text-[12px] sm:text-[13px] font-medium" style={{ color: '#F5ECD7' }}>{name}</span>
                <span className="font-mono text-[10px] sm:text-[11px] font-medium px-1.5 sm:px-2 py-0.5 rounded"
                    style={{ color: '#C9A84C', background: 'rgba(201, 168, 76, 0.1)' }}>{pct}%</span>
            </div>
            <div className="skill-bar">
                <div className="skill-fill" style={{ width: inView ? `${pct}%` : '0%', transitionDelay: `${delay}s` }} />
            </div>
        </div>
    )
}

export default function Skills() {
    return (
        <section id="skills" className="px-5 sm:px-8 md:px-14 lg:px-16 py-16 sm:py-20 md:py-24 relative"
            style={{
                background: '#111118',
                borderBottom: '1px solid rgba(201, 168, 76, 0.06)',
            }}>

            {/* Ambient glow */}
            <div className="absolute top-[20%] right-[10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full opacity-[0.04] pointer-events-none"
                style={{ background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)' }} />

            <div className="section-label">Skills</div>
            <h2 className="section-title text-4xl sm:text-5xl md:text-7xl mb-8 sm:mb-12">
                Tech
                <br />Stack<span style={{ color: '#C9A84C' }}>.</span>
            </h2>

            <motion.div
                className="terminal-window max-w-4xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="terminal-header">
                    <div className="terminal-dot" style={{ background: '#FF5F57' }} />
                    <div className="terminal-dot" style={{ background: '#FFBD2E' }} />
                    <div className="terminal-dot" style={{ background: '#28CA41' }} />
                    <span className="font-mono text-[10px] sm:text-[11px] ml-2 sm:ml-3 font-medium truncate" style={{ color: '#7A7A92' }}>
                        dipesh@portfolio ~ skills.sh
                    </span>
                </div>
                <div className="p-4 sm:p-6 md:p-8" style={{ background: 'rgba(10, 10, 15, 0.8)' }}>
                    <p className="font-mono text-[11px] sm:text-[12px] mb-1.5 sm:mb-2" style={{ color: '#7A7A92' }}>
                        <span style={{ color: '#7A7A92' }}>// </span>skills audit — current stack
                    </p>
                    <p className="font-mono text-[11px] sm:text-[12px] mb-5 sm:mb-8" style={{ color: '#B8B8CC' }}>
                        <span style={{ color: '#C9A84C', fontWeight: 500 }}>$ </span>run skills --show-all
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-4 sm:gap-y-6">
                        {skills.map((s, i) => <SkillBar key={s.name} {...s} delay={i * 0.08} />)}
                    </div>
                    <div className="mt-5 sm:mt-8 pt-4 sm:pt-6" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                        <p className="font-mono text-[11px] sm:text-[12px] font-medium" style={{ color: '#B8B8CC' }}>
                            <span style={{ color: '#4ADE80', fontWeight: 600 }}>✓ </span>audit complete. all systems operational.
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    )
}
