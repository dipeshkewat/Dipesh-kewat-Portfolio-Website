import { motion } from 'framer-motion'
import { experiences } from '../data/projects'

const accentColors = ['#FE90E8', '#C0F7FE', '#99E885', '#F7CB46']

function ExpBlock({ period, company, role, bullets, i }) {
    const accent = accentColors[i % accentColors.length]
    return (
        <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
        >
            <p className="font-mono text-[12px] mb-2 font-bold" style={{ color: '#555555' }}>
                <span style={{ color: '#99E885', fontWeight: 900 }}>// </span>{period}
            </p>

            <div
                className="border-4 relative p-5 pr-12"
                style={{
                    borderColor: '#000000',
                    borderLeftColor: accent,
                    borderLeftWidth: '8px',
                    background: '#FFFFFF',
                    boxShadow: `4px 4px 0 #000000`,
                }}
            >
                <span className="absolute top-3 right-4 font-mono text-[11px]" style={{ color: '#AAAAAA' }}>/*</span>
                <span className="absolute bottom-3 right-4 font-mono text-[11px]" style={{ color: '#AAAAAA' }}>*/</span>

                <h3 className="font-mono font-bold text-[18px] tracking-tight leading-snug" style={{ color: '#000000' }}>
                    {company}
                </h3>
                <p className="font-label text-[11px] uppercase tracking-widest mt-1 mb-4 font-bold inline-block px-2 py-0.5 border-2" style={{ color: '#000000', background: accent, borderColor: '#000000' }}>
                    {role}
                </p>
                <ul className="space-y-1.5">
                    {bullets.map((b, bi) => (
                        <li key={bi} className="font-body text-[13px] leading-relaxed flex gap-2" style={{ color: '#333333' }}>
                            <span className="flex-shrink-0 mt-0.5 font-mono font-bold" style={{ color: '#99E885' }}>*</span>
                            {b}
                        </li>
                    ))}
                </ul>
            </div>
        </motion.div>
    )
}

export default function Experience() {
    return (
        <section id="exp" className="px-14 md:px-16 py-20 border-b-4" style={{ borderColor: '#000000', background: '#FFFDF5' }}>
            <div className="section-label">experience</div>
            <h2 className="section-title">
                Work<br />History<span style={{ color: '#F7CB46' }}>_</span>
            </h2>
            <div className="max-w-2xl">
                {experiences.map((exp, i) => (
                    <ExpBlock key={exp.company} {...exp} i={i} />
                ))}
            </div>
        </section>
    )
}
