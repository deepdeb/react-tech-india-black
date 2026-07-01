import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ContactModal from "../../components/ContactModal";

const CTA = () => {
    const sectionRef = useRef(null);
    const [isContactModalOpen, setIsContactModalOpen] = useState(false);

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // TRUE parallax: background moves slower
    const bgY = useTransform(scrollYProgress, [0, 1], ["-2%", "2%"]);
    const contentY = useTransform(scrollYProgress, [0, 1], ["60px", "-60px"]);

    return (
        <section
            ref={sectionRef}
            className="relative pt-15 md:py-36 overflow-hidden bg-black text-white"
        >
            {/* Premium Tech Background */}
            <motion.div
                style={{ y: bgY }}
                className="absolute inset-0 will-change-transform bg-black"
            >
                {/* 1. Base Gradient */}
                <div className="absolute inset-0 bg-linear-to-b from-black via-zinc-900/80 to-black" />

                {/* 2. Cyber Grid Pattern */}
                <div
                    className="absolute inset-0 opacity-20"
                    style={{
                        backgroundImage: `linear-gradient(to right, #0891b2 1px, transparent 1px), linear-gradient(to bottom, #0891b2 1px, transparent 1px)`,
                        backgroundSize: '40px 40px',
                        maskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)',
                        WebkitMaskImage: 'radial-gradient(ellipse at center, black 40%, transparent 80%)'
                    }}
                />

                {/* 3. Glowing Orbs */}
                <div className="absolute top-0 left-1/4 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/20 blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-blue-600/20 blur-[120px]" />
            </motion.div>

            {/* Overlays */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/60" />
                <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.015),rgba(255,255,255,0.015)_1px,transparent_1px,transparent_4px)]" />
            </div>

            {/* Content (moves naturally, faster than bg) */}
            <motion.div
                style={{ y: contentY }}
                className="relative z-10 flex h-full items-center justify-center px-6 text-center"
            >
                <div className="max-w-4xl rounded-2xl border border-cyan-400/15 bg-black/35 p-10 backdrop-blur-sm">
                    <motion.span
                        className="mb-6 inline-block text-xs tracking-[0.45em] text-cyan-400/80"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.4 }}
                    >
            // LET’S BUILD TOGETHER
                    </motion.span>

                    <motion.h2
                        className="text-4xl font-semibold tracking-tight text-cyan-300 md:text-5xl"
                        initial={{ opacity: 0, y: 15 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        What are you waiting for?
                    </motion.h2>

                    <div className="mx-auto mt-6 h-0.5 w-36 bg-linear-to-r from-transparent via-cyan-400 to-transparent" />

                    <motion.p
                        className="mt-8 text-base leading-relaxed text-zinc-200 md:text-[17px]"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ delay: 0.1, duration: 0.5 }}
                    >
                        Ready to take the next step? Let’s bring your vision to life! Explore
                        our services and get in touch today for a consultation. Together,
                        we’ll make it happen.
                    </motion.p>

                    <motion.div
                        className="mt-10"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ delay: 0.2, duration: 0.4 }}
                    >
                        <motion.button
                            onClick={() => setIsContactModalOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative overflow-hidden rounded-xl border border-cyan-400/30 bg-linear-to-r from-cyan-500 to-blue-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/40"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                <svg
                                    className="h-5 w-5"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                    />
                                </svg>
                                Contact Us
                                <svg
                                    className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                                    />
                                </svg>
                            </span>
                            <div className="absolute inset-0 -z-10 bg-linear-to-r from-blue-600 to-cyan-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </motion.button>
                    </motion.div>
                </div>
            </motion.div>

            {/* Contact Modal */}
            <ContactModal
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
            />
        </section>
    );
};

export default CTA;