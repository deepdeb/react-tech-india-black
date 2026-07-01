import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import devImg from "../../assets/images/developmentimage.png";

const WhatWeDo = () => {
  const sectionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms
  const imageY = useTransform(scrollYProgress, [0, 1], ["70px", "-70px"]);
  const glowOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black pt-15 md:py-36 text-white"
    >
      {/* Scan lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.02)_1px,transparent_1px,transparent_4px)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 md:gap-24 md:grid-cols-2">

          {/* Text content */}
          <div className="relative rounded-2xl border border-cyan-400/10 bg-white/[0.02] p-8 backdrop-blur-sm">
            {/* HUD label */}
            <motion.span
              className="mb-6 inline-block text-xs tracking-[0.45em] text-cyan-400/80"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4 }}
            >
              // CORE CAPABILITIES
            </motion.span>

            {/* Heading */}
            <motion.h2
              className="text-4xl font-semibold tracking-tight text-cyan-300 md:text-5xl drop-shadow-[0_0_12px_rgba(34,211,238,0.25)]"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              What We Do
            </motion.h2>

            {/* Energy divider */}
            <motion.div
              className="mt-6 h-[2px] w-36 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.5)]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
            />

            {/* Paragraph */}
            <motion.p
              className="mt-8 max-w-xl text-base leading-relaxed text-zinc-300 md:text-[17px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <span className="md:hidden">
                We deliver end-to-end IT and software solutions tailored to your business.
                From startups to enterprises, we build scalable technology that fits your goals,
                timelines, and budgets.
              </span>
              <span className="hidden md:block">
                We offer end-to-end IT and software services, professionally
                tailored to meet each client’s unique business needs. Serving
                startups, enterprises, and global organizations, we design and
                deliver comprehensive technology solutions that align with
                business goals, timelines, and budgets. Whether it’s a robust
                software product, a scalable enterprise system, or a dedicated
                development team — we do it all.
              </span>
            </motion.p>
          </div>

          {/* Image with parallax */}
          <div className="relative flex justify-center">
            {/* Ambient glow */}
            <motion.div
              style={{ opacity: glowOpacity }}
              className="absolute inset-0 rounded-2xl bg-cyan-400/25 blur-3xl"
            />

            <motion.img
              src={devImg}
              alt="Development"
              style={{ y: imageY }}
              className="relative z-10 max-w-full rounded-xl border border-cyan-400/30"
            />

            {/* HUD frame layers */}
            <span className="pointer-events-none absolute inset-0 rounded-xl border border-cyan-400/40" />
            <span className="pointer-events-none absolute inset-2 rounded-lg border border-cyan-400/10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;