import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/projects'

function ProjectCard({ project }) {
    const [open, setOpen] = useState(false)

    return (
        <div
            className={`project-card relative overflow-hidden border-4 border-black cursor-none ${open ? 'open' : ''}`}
            onClick={() => setOpen(o => !o)}
        >
            {/* Image area */}
            <div className="relative border-b-4 border-black aspect-video overflow-hidden">
                <motion.div
                    className="w-full h-full flex items-center justify-center font-mono text-[13px] text-gray-500"
                    animate={{ background: open ? '#FFE500' : 'linear-gradient(135deg,#e0ddd6,#cac7c0)' }}
                    whileHover={{ background: '#FFE500', color: '#0D0D0D' }}
                    transition={{ duration: 0.1 }}
                >
                    {project.placeholder}
                </motion.div>
            </div>

            {/* Card body */}
            <motion.div
                className="p-5 transition-colors"
                animate={{ backgroundColor: open ? '#FFE500' : '#F5F0E8' }}
                whileHover={{ backgroundColor: '#FFE500' }}
                transition={{ duration: 0.1 }}
            >
                <h3 className="font-mono font-bold text-lg tracking-tight mb-1">{project.name}</h3>
                <p className="font-body text-[13px] text-gray-600 mb-3">{project.subtitle}</p>
                <div className="flex flex-wrap gap-1.5">
                    {project.tags.map(t => (
                        <span
                            key={t}
                            className="tag-pill transition-colors"
                            style={{ background: open ? '#0D0D0D' : 'transparent', color: open ? '#FFE500' : 'inherit' }}
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </motion.div>

            {/* Overlay */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="absolute inset-0 bg-black text-cream p-6 flex flex-col justify-center z-10"
                        initial={{ y: '100%' }}
                        animate={{ y: 0 }}
                        exit={{ y: '100%' }}
                        transition={{ duration: 0.22, ease: [0.5, 0, 0, 1] }}
                        onClick={e => e.stopPropagation()}
                    >
                        <h3 className="font-mono font-bold text-lg text-yellow mb-3">{project.name}</h3>
                        <p className="font-body text-[13px] text-gray-300 leading-relaxed mb-4">{project.desc}</p>
                        <div className="flex gap-4 mb-4">
                            <a href={project.live} className="font-label text-[11px] text-yellow underline hover:no-underline">→ Live Demo</a>
                            <a href={project.github} className="font-label text-[11px] text-yellow underline hover:no-underline">→ GitHub</a>
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="font-mono text-[12px] text-neon tracking-widest uppercase text-left cursor-none"
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
        <section id="work" className="px-14 md:px-16 py-20 border-b-4 border-black">
            <div className="section-label">work</div>
            <h2 className="section-title">
                Selected<br />Projects<span className="text-yellow">_</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 border-4 border-black">
                {projects.map((p, i) => (
                    <div
                        key={p.id}
                        className={`
              ${i % 2 === 0 ? 'md:border-r-4 md:border-black' : ''}
              ${i < projects.length - 2 ? 'border-b-4 border-black' : ''}
            `}
                    >
                        <ProjectCard project={p} />
                    </div>
                ))}
            </div>
        </section>
    )
}
