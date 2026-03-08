import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { motion } from 'framer-motion'
import useTypewriter from '../hooks/useTypewriter'

const roles = ['Front-End Developer_', 'React Engineer_', 'UI/UX Craftsman_', 'Code Artist_']

export default function Hero() {
    const nameRef = useRef(null)
    const ctaRef = useRef(null)
    const { text } = useTypewriter(roles, 110, 60, 1800)

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(nameRef.current, {
                y: 60, opacity: 0, duration: 0.9, ease: 'power4.out', delay: 0.1,
            })
            gsap.from(ctaRef.current?.children, {
                y: 30, opacity: 0, stagger: 0.12, duration: 0.6, ease: 'power3.out', delay: 0.5,
            })
        })
        return () => ctx.revert()
    }, [])

    return (
        <section
            id="hero"
            className="min-h-screen flex flex-col justify-center px-14 md:px-16 py-24 relative overflow-hidden stripe-bg border-b-4 border-black"
        >
            {/* Decorative elements */}
            <span className="absolute top-[14%] right-[8%] font-mono text-2xl text-black/10 animate-spin-slow select-none">*</span>
            <span className="absolute top-[60%] right-[14%] font-mono text-lg text-black/10 animate-pulse select-none">[ ]</span>
            <span className="absolute bottom-[22%] left-[5%] font-mono text-2xl text-black/10 animate-spin-slow select-none">*</span>
            <span className="absolute top-[30%] left-[42%] font-mono text-[11px] text-black/10 select-none">{"{"}"role":"dev"{"}"}</span>
            <span className="absolute bottom-[16%] right-[4%] font-mono text-lg text-black/10 animate-pulse select-none">[ ]</span>

            {/* Eyebrow */}
            <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="font-label text-xs tracking-[0.2em] uppercase text-gray-500 mb-4"
            >
                <span className="text-neon">&gt; </span>init portfolio.exe
            </motion.div>

            {/* Name block */}
            <div ref={nameRef} className="relative inline-block mb-2 self-start">
                {/* Yellow offset bg */}
                <div className="absolute top-2 -left-2 w-full h-full bg-yellow border-4 border-black z-0" />
                <h1 className="relative z-10 font-mono font-extrabold text-[clamp(3.5rem,11vw,8rem)] leading-[0.95] uppercase tracking-[-0.04em] bg-black text-cream px-4 py-2 block">
                    Dipesh<br />Kewat
                </h1>
            </div>

            {/* Role typewriter */}
            <div className="font-mono text-[clamp(1rem,2.5vw,1.5rem)] mt-6 flex items-center gap-1">
                <span>{text}</span>
                <span className="inline-block w-[14px] h-[1.2em] bg-black align-middle animate-blink" />
            </div>

            {/* Description */}
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="font-body text-[15px] text-gray-600 max-w-[480px] mt-5 leading-relaxed"
            >
                Building brutal, fast, and functional web experiences.
                I write code that doesn't apologize for being opinionated.
            </motion.p>

            {/* CTA Row */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-4 mt-9">
                <a href="#work" className="btn btn-yellow btn-hire">
                    [ HIRE ME ]
                </a>
                <a href="#contact" className="btn btn-ghost">
          // get in touch
                </a>
                <a href="#" className="btn btn-ghost">
                    * resume.pdf
                </a>
            </div>
        </section>
    )
}
