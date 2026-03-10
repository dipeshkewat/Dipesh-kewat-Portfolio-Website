import { motion } from 'framer-motion'

const socials = [
    { label: 'GitHub', href: 'https://github.com/dipeshkewat' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dipesh-kewat' },
    { label: 'LeetCode', href: 'https://leetcode.com/u/dipeshkewat' },
    { label: 'Resume', href: '#' },
]

export default function Contact() {
    return (
        <section id="contact" className="px-5 sm:px-8 md:px-14 lg:px-16 py-16 sm:py-20 md:py-28 text-center relative overflow-hidden max-[900px]:pb-24"
            style={{ background: '#0A0A0F', borderBottom: '1px solid rgba(201, 168, 76, 0.06)' }}>

            {/* Ambient glows */}
            <div className="absolute top-[20%] left-[20%] w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] rounded-full opacity-[0.05] pointer-events-none"
                style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }} />
            <div className="absolute bottom-[10%] right-[15%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full opacity-[0.04] pointer-events-none"
                style={{ background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)' }} />

            {/* Label */}
            <div className="flex justify-center mb-6 sm:mb-8">
                <span className="font-mono text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.25em] flex items-center gap-2 sm:gap-3" style={{ color: '#C9A84C' }}>
                    <span className="hidden sm:inline-block" style={{ width: 24, height: 1, background: '#C9A84C' }} />
                    Contact
                    <span className="hidden sm:inline-block" style={{ width: 24, height: 1, background: '#C9A84C' }} />
                </span>
            </div>

            {/* Headline */}
            <motion.h2
                className="font-serif font-bold leading-[1.05] uppercase tracking-tight mb-5 sm:mb-8"
                style={{ fontSize: 'clamp(1.8rem, 8vw, 5.5rem)', color: '#F5ECD7' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                Let's Build
                <br />
                <span style={{
                    background: 'linear-gradient(135deg, #C9A84C, #E8C96A)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                }}>
                    Something.
                </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
                className="font-sans text-[13px] sm:text-[15px] max-w-md mx-auto mb-7 sm:mb-10 px-2"
                style={{ color: '#7A7A92' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                Have an idea? Let's turn it into reality. I'm always open to discussing new projects and creative ideas.
            </motion.p>

            {/* Email card */}
            <motion.div
                className="glass-card inline-block px-5 sm:px-8 py-3 sm:py-4 mb-7 sm:mb-10"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                <span className="font-mono text-[12px] sm:text-[14px]" style={{ color: '#7A7A92' }}>→ </span>
                <span className="font-mono text-[12px] sm:text-[14px] font-medium" style={{ color: '#E8C96A' }}>
                    dipeshkewat.m@gmail.com
                </span>
            </motion.div>

            {/* Social links */}
            <motion.div
                className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-12"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                {socials.map(s => (
                    <a
                        key={s.label}
                        href={s.href}
                        target={s.href !== '#' ? '_blank' : undefined}
                        rel={s.href !== '#' ? 'noopener noreferrer' : undefined}
                        className="font-sans text-[11px] sm:text-[12px] font-medium px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg transition-all duration-300 no-underline"
                        style={{
                            color: '#B8B8CC',
                            background: 'rgba(255,255,255,0.03)',
                            border: '1px solid rgba(255,255,255,0.06)',
                        }}
                        onMouseEnter={e => {
                            e.currentTarget.style.background = 'rgba(201,168,76,0.08)'
                            e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)'
                            e.currentTarget.style.color = '#E8C96A'
                            e.currentTarget.style.transform = 'translateY(-2px)'
                        }}
                        onMouseLeave={e => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
                            e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                            e.currentTarget.style.color = '#B8B8CC'
                            e.currentTarget.style.transform = 'none'
                        }}
                    >
                        {s.label}
                    </a>
                ))}
            </motion.div>

            {/* CTA */}
            <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
            >
                <a href="mailto:dipeshkewat.m@gmail.com" className="btn btn-primary text-[13px] sm:text-[14px] px-7 sm:px-10 py-3 sm:py-4">
                    Send a Message →
                </a>
            </motion.div>
        </section>
    )
}
