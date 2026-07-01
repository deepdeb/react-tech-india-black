import { motion } from "framer-motion";
import { useRef } from "react";

const faqs = [
  {
    title: "Experienced In-House Team",
    desc: "Highly experienced in-house IT and software development team with deep expertise across modern technologies, enterprise systems, and scalable architectures.",
  },
  {
    title: "Customized Solutions",
    desc: "We design and develop fully customized solutions based on each client’s specific business requirements, goals, and technical constraints.",
  },
  {
    title: "Competitive & Transparent Pricing",
    desc: "Competitive pricing models combined with global delivery standards ensure maximum value without compromising quality or timelines.",
  },
  {
    title: "Trusted Global IT Partner",
    desc: "A trusted IT partner for Indian and international clients, delivering reliable solutions backed by long-term relationships and proven results.",
  },
];

const FAQ = () => {
  const sectionRef = useRef(null);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-black pt-15 md:py-10 text-white"
    >
      {/* Scan lines */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.02)_1px,transparent_1px,transparent_4px)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        {/* Section header */}
        <div className="mx-auto mb-15 max-w-3xl text-center">
          <motion.span
            className="mb-6 inline-block text-xs tracking-[0.45em] text-cyan-400/80"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            // FAQ
          </motion.span>

          <motion.h2
            className="text-4xl font-semibold tracking-tight text-cyan-300 md:text-5xl drop-shadow-[0_0_12px_rgba(34,211,238,0.25)]"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.div
            className="mx-auto mt-6 h-[2px] w-36 bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_12px_rgba(34,211,238,0.5)]"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          />
        </div>

        {/* FAQ grid */}
        <div className="grid gap-4 md:gap-8 md:grid-cols-2">
          {faqs.map((item, index) => (
            <motion.div
              key={index}
              className="relative rounded-2xl border border-cyan-400/10 bg-white/[0.02] p-8 backdrop-blur-sm"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              {/* Subtle glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-cyan-400/5 blur-2xl" />

              <h3 className="relative z-10 mb-3 text-lg font-semibold text-cyan-300">
                {item.title}
              </h3>

              <p className="relative z-10 text-sm leading-relaxed text-zinc-300 md:text-base">
                {item.desc}
              </p>

              {/* HUD frame */}
              <span className="pointer-events-none absolute inset-0 rounded-2xl border border-cyan-400/30" />
              <span className="pointer-events-none absolute inset-2 rounded-xl border border-cyan-400/10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;