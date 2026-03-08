import { motion } from 'framer-motion'

const socials = ['github', 'linkedin', 'twitter', 'resume.pdf']

export default function Contact() {
    return (
        <section id="contact" className="bg-black text-cream px-14 md:px-16 py-24 border-b-4 border-black text-center">
            {/* label */}
            <div className="flex justify-center mb-6">
                <span className="font-label text-[10px] uppercase tracking-widest text-gray-600 flex items-center gap-2">
                    <span className="text-yellow">//</span> contact
                </span>
            </div>

            {/* Headline */}
            <motion.h2
                className="font-mono font-extrabold text-[clamp(2rem,7vw,5.5rem)] leading-[1.02] uppercase tracking-tight text-cream mb-10"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                LET'S BUILD<br />
                <span className="text-yellow">SOMETHING.</span>
            </motion.h2>

            {/* Terminal email */}
            <motion.p
                className="font-mono text-[clamp(13px,2vw,18px)] text-neon mb-10"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                <span className="text-gray-600">$ contact → </span>
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
                        className="font-label text-[12px] text-cream border-2 border-gray-700 px-4 py-2 hover:border-yellow hover:text-yellow transition-colors duration-75 no-underline"
                    >
                        <span className="text-gray-600">[ </span>{s}<span className="text-gray-600"> *]</span>
                    </a>
                ))}
            </motion.div>

            {/* CTA buttons */}
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
                    style={{ boxShadow: '4px 4px 0 #FFE500, 8px 8px 0 #333' }}
                >
                    → Send a Message
                </a>
                <a
                    href="#"
                    className="btn border-gray-700 text-cream bg-transparent hover:bg-yellow hover:text-black hover:border-black"
                    style={{ boxShadow: '4px 4px 0 #333' }}
                >
                    * Schedule a Call
                </a>
            </motion.div>
        </section>
    )
}
