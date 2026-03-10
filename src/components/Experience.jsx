import { motion } from 'framer-motion'
import { experiences } from '../data/projects'

const accentColors = ['#C9A84C', '#6366F1', '#4ADE80', '#F472B6']

function ExpBlock({ period, company, role, bullets, i }) {
    const accent = accentColors[i % accentColors.length]
    return (
        <motion.div
            className="mb-6 sm:mb-8 relative"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
        >
            {/* Timeline connector */}
            {i > 0 && (
                <div className="absolute -top-6 sm:-top-8 left-[11px] w-[1px] h-6 sm:h-8"
                    style={{ background: 'linear-gradient(180deg, rgba(201,168,76,0.15), rgba(201,168,76,0.05)' }} />
            )}

            <div className="flex items-start gap-3 sm:gap-5">
                {/* Timeline dot */}
                <div className="flex-shrink-0 mt-1.5">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full flex items-center justify-center"
                        style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}>
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full" style={{ background: accent }} />
                    </div>
                </div>

                {/* Content card */}
                <div className="flex-1 glass-card p-4 sm:p-6 relative overflow-hidden min-w-0">
                    {/* Accent border on left */}
                    <div className="absolute top-0 left-0 w-[2px] h-full" style={{ background: `linear-gradient(180deg, ${accent}, transparent)` }} />

                    <p className="font-mono text-[10px] sm:text-[11px] mb-1.5 sm:mb-2 tracking-wider" style={{ color: '#7A7A92' }}>
                        {period}
                    </p>

                    <h3 className="font-serif font-bold text-[15px] sm:text-[17px] leading-snug mb-1" style={{ color: '#F5ECD7' }}>
                        {company}
                    </h3>
                    <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-wider inline-block mb-3 sm:mb-4 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded"
                        style={{ color: accent, background: `${accent}10` }}>
                        {role}
                    </span>
                    <ul className="space-y-1.5 sm:space-y-2">
                        {bullets.map((b, bi) => (
                            <li key={bi} className="font-sans text-[12px] sm:text-[13px] leading-relaxed flex gap-2 sm:gap-2.5" style={{ color: '#B8B8CC' }}>
                                <span className="flex-shrink-0 mt-1.5 w-1 h-1 rounded-full" style={{ background: accent }} />
                                {b}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    )
}

export default function Experience() {
    return (
        <section id="exp" className="px-5 sm:px-8 md:px-14 lg:px-16 py-16 sm:py-20 md:py-24"
            style={{ background: '#111118', borderBottom: '1px solid rgba(201, 168, 76, 0.06)' }}>
            <div className="section-label">Experience</div>
            <h2 className="section-title text-4xl sm:text-5xl md:text-7xl mb-8 sm:mb-12">
                Work
                <br />History<span style={{ color: '#C9A84C' }}>.</span>
            </h2>
            <div className="max-w-2xl">
                {experiences.map((exp, i) => (
                    <ExpBlock key={exp.company} {...exp} i={i} />
                ))}
            </div>
        </section>
    )
}
