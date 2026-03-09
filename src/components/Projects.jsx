import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'

const cardAccents = ['#FE90E8', '#C0F7FE', '#99E885', '#F7CB46']

function ProjectCard({ project, idx }) {
    const [open, setOpen] = useState(false)
    const accent = cardAccents[idx % cardAccents.length]

    return (
        <div
            className="project-card relative overflow-hidden cursor-none"
            style={{ border: '4px solid #000000' }}
            onClick={() => setOpen(o => !o)}
        >
            {/* Image / placeholder */}
            <motion.div
                className="w-full aspect-video flex items-center justify-center font-mono text-[13px] border-b-4 font-bold"
                style={{ borderColor: '#000000' }}
                animate={{ background: open ? accent : '#FFDC8B', color: '#000000' }}
                whileHover={{ background: accent, color: '#000000' }}
                transition={{ duration: 0.1 }}
            >
                {project.placeholder}
            </motion.div>

            {/* Body */}
            <motion.div
                className="p-5 transition-colors"
                animate={{ backgroundColor: open ? accent : '#FFFFFF' }}
                whileHover={{ backgroundColor: accent + '55' }}
                transition={{ duration: 0.1 }}
            >
                <h3 className="font-mono font-bold text-lg tracking-tight mb-1" style={{ color: '#000000' }}>
                    {project.name}
                </h3>
                <p className="font-body text-[13px] mb-3" style={{ color: '#555555' }}>
                    {project.subtitle}
                </p>
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(t => (
                        <span key={t} className="font-label text-[10px] uppercase tracking-wider px-2 py-0.5 border-2 font-bold"
                            style={{
                                borderColor: '#000000',
                                color: '#000000',
                                background: '#C0F7FE',
                            }}
                        >{t}</span>
                    ))}
                </div>
            </motion.div>

            {/* Overlay */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="absolute inset-0 p-6 flex flex-col justify-center z-10"
                        style={{ background: '#000000' }}
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ duration: 0.22, ease: [0.5, 0, 0, 1] }}
                        onClick={e => e.stopPropagation()}
                    >
                        <h3 className="font-mono font-bold text-lg mb-3" style={{ color: accent }}>{project.name}</h3>
                        <p className="font-body text-[13px] leading-relaxed mb-4" style={{ color: '#CCCCCC' }}>{project.desc}</p>
                        <div className="flex gap-4 mb-4">
                            <a href={project.github} className="font-label text-[11px] font-bold border-2 px-3 py-1 hover:no-underline transition-colors" style={{ color: '#000000', background: accent, borderColor: accent }}>
                                {project.linkLabel}
                            </a>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="font-mono text-[12px] tracking-widest uppercase text-left cursor-none font-bold"
                            style={{ color: '#FFFFFF' }}
                        >
                            [click to close ×]
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function Projects() {
    return (
        <section id="work" className="px-14 md:px-16 py-20 border-b-4" style={{ borderColor: '#000000', background: '#FFFDF5' }}>
            <div className="section-label">work</div>
            <h2 className="section-title">
                Selected<br />Projects<span style={{ color: '#99E885' }}>_</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 border-4" style={{ borderColor: '#000000' }}>
                {projects.map((p, i) => (
                    <div
                        key={p.id}
                        className={[
                            i % 2 === 0 ? 'md:border-r-4' : '',
                            i < projects.length - 2 ? 'border-b-4' : '',
                        ].join(' ')}
                        style={{ borderColor: '#000000' }}
                    >
                        <ProjectCard project={p} idx={i} />
                    </div>
                ))}
            </div>
        </section>
    )
}
