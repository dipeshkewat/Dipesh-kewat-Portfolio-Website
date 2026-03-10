import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import useTypewriter from '../hooks/useTypewriter'

const roles = ['Computer Eng. Student', 'ML Developer', 'AI Agent Builder', 'Web Developer']

export default function Hero() {
    const nameRef = useRef(null)
    const ctaRef = useRef(null)
    const { text } = useTypewriter(roles, 100, 55, 1800)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(nameRef.current, { y: 60, opacity: 0, duration: 1, ease: 'power4.out', delay: 0.2 })
            gsap.from(ctaRef.current?.children, { y: 30, opacity: 0, stagger: 0.12, duration: 0.7, ease: 'power3.out', delay: 0.6 })
        })
        return () => ctx.revert()
    }, [])

    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center px-5 sm:px-8 md:px-14 lg:px-16 py-16 sm:py-20 md:py-24 relative overflow-hidden pattern-bg"
            style={{ borderBottom: '1px solid rgba(201, 168, 76, 0.08)' }}>

            {/* Ambient glow orbs */}
            <div className="absolute top-[20%] right-[10%] w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] rounded-full opacity-[0.06] pointer-events-none"
                style={{ background: 'radial-gradient(circle, #C9A84C 0%, transparent 70%)' }} />
            <div className="absolute bottom-[15%] left-[5%] w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] rounded-full opacity-[0.04] pointer-events-none"
                style={{ background: 'radial-gradient(circle, #6366F1 0%, transparent 70%)' }} />

            {/* Decorative elements — hidden on very small screens */}
            <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}
                className="absolute top-[14%] right-[8%] font-serif text-2xl sm:text-3xl select-none opacity-20 hidden sm:block"
                style={{ color: '#C9A84C' }}
            >✦</motion.span>
            <motion.span
                animate={{ y: [-6, 6, -6] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-[55%] right-[15%] font-serif text-lg sm:text-xl select-none opacity-15 hidden sm:block"
                style={{ color: '#F472B6' }}
            >◆</motion.span>
            <motion.span
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
                className="absolute bottom-[22%] left-[5%] font-serif text-lg sm:text-xl select-none opacity-15 hidden sm:block"
                style={{ color: '#4ADE80' }}
            >✦</motion.span>

            {/* Eyebrow */}
            <motion.div
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}
                className="font-mono text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.25em] uppercase mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3"
                style={{ color: '#C9A84C' }}
            >
                <span className="hidden sm:inline-block" style={{ width: 32, height: 1, background: 'linear-gradient(90deg, #C9A84C, transparent)' }} />
                Portfolio — 2024
            </motion.div>

            {/* Name block */}
            <div ref={nameRef} className="relative mb-3 sm:mb-4">
                <h1 className="font-serif font-bold leading-[0.92] sm:leading-[0.95] tracking-[-0.02em]"
                    style={{ fontSize: 'clamp(2.5rem, 12vw, 7.5rem)', color: '#F5ECD7' }}>
                    Dipesh
                    <br />
                    <span style={{
                        background: 'linear-gradient(135deg, #C9A84C, #E8C96A, #C9A84C)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                    }}>
                        Kewat
                    </span>
                </h1>
            </div>

            {/* Typewriter */}
            <div className="font-mono mt-3 sm:mt-4 flex items-center gap-2" style={{ fontSize: 'clamp(0.8rem, 2.5vw, 1.3rem)', color: '#7A7A92' }}>
                <span style={{ color: '#C9A84C', fontWeight: 500 }}>&gt;</span>
                <span style={{ color: '#B8B8CC' }}>{text}</span>
                <span className="inline-block w-[2px] h-[1.2em] align-middle animate-blink" style={{ background: '#C9A84C' }} />
            </div>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
                className="font-sans text-[13px] sm:text-[15px] max-w-[520px] mt-4 sm:mt-6 leading-relaxed"
                style={{ color: '#7A7A92' }}
            >
                Engineering student building elegant, fast & functional digital experiences.
                I write code that's clean, purposeful, and gets the job done.
            </motion.p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-3 sm:gap-4 mt-7 sm:mt-10">
                <a href="#work" className="btn btn-primary btn-hire text-[13px] sm:text-sm px-5 sm:px-7 py-3 sm:py-3.5">Hire Me</a>
                <a href="#contact" className="btn btn-ghost text-[13px] sm:text-sm px-5 sm:px-7 py-3 sm:py-3.5">Get in Touch</a>
                <a href="#" className="btn btn-outline text-[13px] sm:text-sm px-5 sm:px-7 py-3 sm:py-3.5">Resume ↗</a>
            </div>

            {/* Scroll indicator — hidden on mobile */}
            <motion.div
                className="absolute bottom-8 left-14 flex-col items-center gap-2 hidden md:flex"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            >
                <span className="font-mono text-[10px] tracking-widest uppercase" style={{ color: '#7A7A92', writingMode: 'vertical-rl' }}>
                    Scroll
                </span>
                <div style={{ width: 1, height: 40, background: 'linear-gradient(180deg, #C9A84C, transparent)' }} />
            </motion.div>
        </section>
    )
}
