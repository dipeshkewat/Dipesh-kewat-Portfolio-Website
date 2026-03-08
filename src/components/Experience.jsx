import { motion } from 'framer-motion'
import { experiences } from '../data/projects'

function ExpBlock({ period, company, role, bullets, i }) {
    return (
        <motion.div
            className="mb-10"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
        >
            {/* Date comment */}
            <p className="font-mono text-[12px] text-neon mb-2">
                <span className="text-gray-500">// </span>{period}
            </p>

            {/* Code block card */}
            <div
                className="border-4 border-black border-l-[6px] bg-white relative"
                style={{ borderLeftColor: '#FFE500', boxShadow: '4px 4px 0 #0D0D0D' }}
            >
                {/* /* marker */}
                <span className="absolute top-3 right-4 font-mono text-[11px] text-gray-400">/*</span>
                <span className="absolute bottom-3 right-4 font-mono text-[11px] text-gray-400">*/</span>

                <div className="p-5 pr-12">
                    <h3 className="font-mono font-bold text-[18px] tracking-tight leading-snug">{company}</h3>
                    <p className="font-label text-[11px] uppercase tracking-widest text-gray-500 mt-1 mb-4">{role}</p>
                    <ul className="space-y-1.5">
                        {bullets.map((b, bi) => (
                            <li key={bi} className="font-body text-[13px] text-gray-600 leading-relaxed flex gap-2">
                                <span className="text-neon font-mono flex-shrink-0 mt-0.5">*</span>
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
        <section id="exp" className="px-14 md:px-16 py-20 border-b-4 border-black bg-cream">
            <div className="section-label">experience</div>
            <h2 className="section-title">
                Work<br />History<span className="text-yellow">_</span>
            </h2>

            <div className="max-w-2xl">
                {experiences.map((exp, i) => (
                    <ExpBlock key={exp.company} {...exp} i={i} />
                ))}
            </div>
        </section>
    )
}
