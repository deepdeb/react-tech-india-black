import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative pt-30 px-6 md:py-40 w-full overflow-hidden bg-black text-white">
      {/* Background video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover brightness-40"
      >
        <source
          src="https://tech-india.in/wp-content/uploads/2026/01/Render-Settings-1.mp4"
          type="video/mp4"
        />
      </video>

      {/* Vignette + energy glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/20 to-black/80" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.12),transparent_55%)]" />
      </div>

      {/* Scan lines overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.02)_1px,transparent_1px,transparent_4px)]" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">

        {/* Heading */}
        <motion.h1
          className="max-w-5xl text-4xl font-semibold leading-tight tracking-tight text-cyan-300 md:text-6xl"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Empowering Businesses
          <br />
          with Tailored IT & Software Solutions
        </motion.h1>

        {/* Energy divider */}
        <motion.div
          className="mt-8 h-px w-40 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
        />

        {/* Paragraph */}
        <motion.p
          className="mt-8 max-w-3xl text-base leading-relaxed text-zinc-300 md:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          Tech-India is a leading IT solutions and software development company
          in India, delivering customized, scalable, and cost-effective
          technology solutions to businesses worldwide. Built on the strong
          foundation of a decade-old enterprise organization, we combine agility
          with proven delivery discipline to serve clients globally.
        </motion.p>

      </div>
    </section>
  );
}