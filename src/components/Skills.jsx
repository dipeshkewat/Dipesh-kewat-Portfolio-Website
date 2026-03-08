import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { skills } from '../data/projects'

function SkillBar({ name, pct, delay }) {
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })

    return (
        <div ref={ref} className="mb-1">
            <div className="flex justify-between items-center mb-1.5">
                <span className="font-mono text-[13px] text-cream">{name}</span>
                <span className="font-mono text-[11px] text-neon">{pct}%</span>
            </div>
            <div className="skill-bar">
                <div
                    className="skill-fill"
                    style={{ width: inView ? `${pct}%` : '0%', transitionDelay: `${delay}s` }}
                />
            </div>
        </div>
    )
}

export default function Skills() {
    return (
        <section id="skills" className="bg-black px-14 md:px-16 py-20 border-b-4 border-black">
            <div className="section-label" style={{ '--tw-text-opacity': 1 }}>
                <span className="text-gray-600 text-[10px] font-label tracking-widest uppercase flex items-center gap-2">
                    <span className="text-neon">//</span> skills
                </span>
            </div>
            <h2 className="font-header text-5xl md:text-7xl font-bold uppercase leading-none tracking-tight mb-10 text-cream">
                Tech<br />Stack<span className="text-neon">_</span>
            </h2>

            <motion.div
                className="terminal-window"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                {/* header */}
                <div className="terminal-header">
                    <div className="terminal-dot bg-[#FF5F57]" />
                    <div className="terminal-dot bg-[#FFBD2E]" />
                    <div className="terminal-dot bg-[#28CA41]" />
                    <span className="font-mono text-[11px] text-gray-500 ml-2">
                        dipesh@portfolio ~ skills.sh
                    </span>
                </div>

                {/* body */}
                <div className="bg-[#0a0a0a] p-6">
                    <p className="font-mono text-[12px] text-gray-600 mb-2">
                        <span className="text-gray-500">// </span>skills audit for Dipesh Kewat — current stack
                    </p>
                    <p className="font-mono text-[12px] text-gray-600 mb-6">
                        <span className="text-neon">$ </span>run skills --show-all --format=bar
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5">
                        {skills.map((s, i) => (
                            <SkillBar key={s.name} {...s} delay={i * 0.08} />
                        ))}
                    </div>

                    <p className="font-mono text-[12px] text-gray-600 mt-6">
                        <span className="text-gray-500">// </span>
                        <span className="text-neon">✓</span> audit complete. all systems operational.
                    </p>
                </div>
            </motion.div>
        </section>
    )
}
