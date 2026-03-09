import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import useTypewriter from '../hooks/useTypewriter'

const roles = ['Computer Eng. Student_', 'ML Developer_', 'AI Agent Builder_', 'Web Developer_']

export default function Hero() {
    const nameRef = useRef(null)
    const ctaRef = useRef(null)
    const { text } = useTypewriter(roles, 100, 55, 1800)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(nameRef.current, { y: 60, opacity: 0, duration: 0.9, ease: 'power4.out', delay: 0.1 })
            gsap.from(ctaRef.current?.children, { y: 30, opacity: 0, stagger: 0.12, duration: 0.6, ease: 'power3.out', delay: 0.5 })
        })
        return () => ctx.revert()
    }, [])

    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center px-14 md:px-16 py-24 relative overflow-hidden stripe-bg border-b-4" style={{ borderColor: '#000000' }}>
            {/* Decorative shapes */}
            <span className="absolute top-[14%] right-[8%] font-mono text-4xl animate-spin-slow select-none font-bold" style={{ color: 'rgba(247,203,70,0.4)' }}>✦</span>
            <span className="absolute top-[60%] right-[14%] font-mono text-2xl animate-pulse select-none" style={{ color: 'rgba(254,144,232,0.4)' }}>◆</span>
            <span className="absolute bottom-[22%] left-[5%] font-mono text-2xl animate-spin-slow select-none" style={{ color: 'rgba(153,232,133,0.4)' }}>★</span>
            <span className="absolute top-[30%] left-[42%] font-mono text-[11px] select-none" style={{ color: 'rgba(192,247,254,0.5)' }}>{"{"}"role":"dev"{"}"}</span>
            <span className="absolute bottom-[16%] right-[4%] font-mono text-xl animate-pulse select-none" style={{ color: 'rgba(247,203,70,0.35)' }}>▲</span>

            {/* Eyebrow */}
            <motion.div
                initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}
                className="font-label text-xs tracking-[0.2em] uppercase mb-4 flex items-center gap-2"
                style={{ color: '#555555' }}
            >
                <span style={{ color: '#99E885', fontWeight: 700 }}>&gt; </span>init portfolio.exe
            </motion.div>

            {/* Name block */}
            <div ref={nameRef} className="relative inline-block mb-2 self-start">
                <div className="absolute top-2 -left-2 w-full h-full border-4 z-0" style={{ background: '#FE90E8', borderColor: '#000000' }} />
                <h1 className="relative z-10 font-mono font-extrabold leading-[0.95] uppercase tracking-[-0.04em] px-4 py-2 block border-4"
                    style={{ fontSize: 'clamp(3.5rem,11vw,8rem)', background: '#F7CB46', color: '#000000', borderColor: '#000000' }}>
                    Dipesh<br />Kewat
                </h1>
            </div>

            {/* Typewriter */}
            <div className="font-mono mt-6 flex items-center gap-1" style={{ fontSize: 'clamp(1rem,2.5vw,1.5rem)', color: '#000000' }}>
                <span style={{ color: '#FE90E8', fontWeight: 700 }}>{text}</span>
                <span className="inline-block w-[14px] h-[1.2em] align-middle animate-blink" style={{ background: '#F7CB46', border: '2px solid #000000' }} />
            </div>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.5 }}
                className="font-body text-[15px] max-w-[480px] mt-5 leading-relaxed"
                style={{ color: '#555555' }}
            >
                Engineering student building brutal, fast & functional digital experiences.
                I write code that's clean, purposeful, and gets the job done.
            </motion.p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mt-9">
                <a href="#work" className="btn btn-yellow btn-hire">[ HIRE ME ]</a>
                <a href="#contact" className="btn btn-ghost">// get in touch</a>
                <a href="#" className="btn" style={{ background: '#C0F7FE' }}>* resume.pdf</a>
            </div>
        </section>
    )
}
