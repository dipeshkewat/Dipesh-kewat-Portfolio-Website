import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'

const cardAccents = ['#C9A84C', '#6366F1', '#4ADE80', '#F472B6']

function ProjectCard({ project, idx }) {
    const [open, setOpen] = useState(false)
    const accent = cardAccents[idx % cardAccents.length]

    return (
        <motion.div
            className="glass-card relative overflow-hidden cursor-none group"
            style={{ borderRadius: 12 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            onClick={() => setOpen(o => !o)}
            whileHover={{ y: -4 }}
        >
            {/* Top accent line */}
            <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />

            {/* Placeholder */}
            <div
                className="w-full aspect-[16/10] sm:aspect-video flex items-center justify-center font-mono text-[12px] sm:text-[13px] font-medium relative overflow-hidden"
                style={{
                    background: 'rgba(255, 255, 255, 0.02)',
                    borderBottom: '1px solid rgba(255,255,255,0.04)',
                    color: '#7A7A92',
                }}
            >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at center, ${accent}08 0%, transparent 70%)` }} />
                <span className="relative z-10 group-hover:text-[var(--accent)] transition-colors duration-300"
                    style={{ '--accent': accent }}
                >
                    {project.placeholder}
                </span>
            </div>

            {/* Body */}
            <div className="p-4 sm:p-6">
                <div className="flex items-start justify-between mb-1.5 sm:mb-2">
                    <h3 className="font-serif font-bold text-base sm:text-lg" style={{ color: '#F5ECD7' }}>
                        {project.name}
                    </h3>
                    <span className="text-xs opacity-40 ml-2 flex-shrink-0" style={{ color: accent }}>0{idx + 1}</span>
                </div>
                <p className="font-sans text-[12px] sm:text-[13px] mb-3 sm:mb-4" style={{ color: '#7A7A92' }}>
                    {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(t => (
                        <span key={t} className="tag-pill">{t}</span>
                    ))}
                </div>
            </div>

            {/* Overlay */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="absolute inset-0 p-5 sm:p-7 flex flex-col justify-center z-10"
                        style={{
                            background: 'rgba(10, 10, 15, 0.96)',
                            backdropFilter: 'blur(12px)',
                            WebkitBackdropFilter: 'blur(12px)',
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        onClick={e => e.stopPropagation()}
                    >
                        <div className="h-[2px] w-10 sm:w-12 mb-4 sm:mb-5" style={{ background: accent }} />
                        <h3 className="font-serif font-bold text-base sm:text-lg mb-2 sm:mb-3" style={{ color: accent }}>{project.name}</h3>
                        <p className="font-sans text-[12px] sm:text-[13px] leading-relaxed mb-4 sm:mb-5" style={{ color: '#B8B8CC' }}>{project.desc}</p>
                        <div className="flex gap-3 mb-4 sm:mb-5">
                            <a href={project.github}
                                className="font-sans text-[11px] sm:text-[12px] font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-md transition-all duration-300"
                                style={{
                                    color: '#0A0A0F',
                                    background: accent,
                                }}
                            >
                                {project.linkLabel}
                            </a>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-left cursor-none font-medium transition-colors duration-300"
                            style={{ color: '#7A7A92' }}
                            onMouseEnter={e => e.currentTarget.style.color = accent}
                            onMouseLeave={e => e.currentTarget.style.color = '#7A7A92'}
                        >
                            ← Close
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}

export default function Projects() {
    return (
        <section id="work" className="px-5 sm:px-8 md:px-14 lg:px-16 py-16 sm:py-20 md:py-24"
            style={{ background: '#0A0A0F', borderBottom: '1px solid rgba(201, 168, 76, 0.06)' }}>
            <div className="section-label">Work</div>
            <h2 className="section-title text-4xl sm:text-5xl md:text-7xl mb-8 sm:mb-12">
                Selected
                <br />Projects<span style={{ color: '#C9A84C' }}>.</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {projects.map((p, i) => (
                    <ProjectCard key={p.id} project={p} idx={i} />
                ))}
            </div>
        </section>
    )
}
