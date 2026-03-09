import { motion } from 'framer-motion'

const socials = ['github', 'linkedin', 'twitter', 'resume.pdf']

export default function Contact() {
    return (
        <section id="contact" className="px-14 md:px-16 py-24 border-b-4 text-center" style={{ background: '#C0F7FE', borderColor: '#000000' }}>
            {/* label */}
            <div className="flex justify-center mb-6">
                <span className="font-label text-[10px] uppercase tracking-widest flex items-center gap-2 font-bold" style={{ color: '#000000' }}>
                    <span style={{ color: '#99E885', fontWeight: 900 }}>//</span> contact
                </span>
            </div>

            {/* Headline */}
            <motion.h2
                className="font-mono font-extrabold text-[clamp(2rem,7vw,5.5rem)] leading-[1.02] uppercase tracking-tight mb-10"
                style={{ color: '#000000' }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                LET'S BUILD<br />
                <span style={{ color: '#FE90E8', WebkitTextStroke: '2px #000000' }}>SOMETHING.</span>
            </motion.h2>

            {/* Terminal email */}
            <motion.p
                className="font-mono text-[clamp(13px,2vw,18px)] mb-10 border-4 inline-block px-6 py-3"
                style={{ color: '#000000', background: '#F7CB46', borderColor: '#000000', boxShadow: '4px 4px 0 #000000' }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <span style={{ color: '#555555' }}>$ contact → </span>
                dipeshkewat@gmail.com
            </motion.p>

            {/* Social links */}
            <motion.div
                className="flex flex-wrap justify-center gap-4 mb-12"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
            >
                {socials.map(s => (
                    <a
                        key={s}
                        href="#"
                        className="font-label text-[12px] font-bold border-4 px-4 py-2 transition-all duration-75 no-underline"
                        style={{ color: '#000000', background: '#FFFFFF', borderColor: '#000000', boxShadow: '3px 3px 0 #000000' }}
                        onMouseEnter={e => { e.currentTarget.style.background = '#FE90E8'; e.currentTarget.style.boxShadow = '1px 1px 0 #000000'; e.currentTarget.style.transform = 'translate(2px,2px)'; }}
                        onMouseLeave={e => { e.currentTarget.style.background = '#FFFFFF'; e.currentTarget.style.boxShadow = '3px 3px 0 #000000'; e.currentTarget.style.transform = 'none'; }}
                    >
                        <span style={{ color: '#555555' }}>[ </span>{s}<span style={{ color: '#555555' }}> *]</span>
                    </a>
                ))}
            </motion.div>

            {/* CTA button */}
            <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
            >
                <a
                    href="mailto:dipeshkewat@gmail.com"
                    className="btn btn-yellow text-[15px] px-9 py-4"
                >
                    → Send a Message
                </a>
            </motion.div>
        </section>
    )
}
