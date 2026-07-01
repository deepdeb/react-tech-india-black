import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import ContactModal from "../components/ContactModal";

const offerings = [
  {
    title: "Custom Software Development",
    desc: "Scalable, secure, and high-performance software solutions built to address specific business challenges. We build tailored software that fits your exact needs, ensuring maximum efficiency and competitive advantage.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
  },
  {
    title: "Web Application Development",
    desc: "Responsive, user-friendly, and robust web applications using modern technologies and frameworks like React, Next.js, and Node.js to deliver seamless user experiences.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
      </svg>
    ),
  },
  {
    title: "Mobile Application Development",
    desc: "Native and cross-platform mobile apps designed for performance, usability, and scalability. We create intuitive mobile experiences for iOS and Android platforms.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "AI, ML & Automation Solutions",
    desc: "Intelligent systems and automation tools to improve productivity and operational efficiency. Leverage the power of Artificial Intelligence and Machine Learning to transform your data into actionable insights.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "IT Consulting & Digital Transformation",
    desc: "Strategic consulting to help businesses adopt the right technologies and transform digitally. We guide you through the digital landscape to optimize processes and drive growth.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
  },
  {
    title: "Dedicated Development Teams",
    desc: "Skilled professionals working exclusively on your project as an extension of your in-house team. Scale your workforce instantly with our vetted engineers and developers.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: "Application Support & Maintenance",
    desc: "Ongoing support, upgrades, and performance optimization to ensure system reliability. We keep your applications running smoothly and securely, around the clock.",
    icon: (
      <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
];

const ProductsAndServices = () => {
  const [activeService, setActiveService] = useState(0);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="bg-black text-white">
      <Navbar />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

      {/* Hero Section with Video */}
      <section className="relative h-[60vh] w-full overflow-hidden bg-black text-white">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover brightness-90"
        >
          <source
            src="https://tech-india.in/wp-content/uploads/2025/12/Final-Product-Video.mp4"
            type="video/mp4"
          />
        </video>

        {/* Overlay Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.15),transparent_50%)]" />

      </section>

      {/* Description Section */}
      <section className="relative overflow-hidden bg-black py-24 text-white">
        {/* Background Decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.02)_1px,transparent_1px,transparent_4px)]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-4 md:p-0"
          >
            <span className="mb-6 inline-block text-xs tracking-[0.3em] text-cyan-400 font-mono">
               // COMPREHENSIVE SOLUTIONS
            </span>
            <p className="text-lg leading-relaxed text-zinc-300 md:text-xl md:leading-loose">
              Tech-India offers a comprehensive range of IT and software services,
              designed to help businesses build, scale, and optimize their digital
              capabilities. Our solutions are end-to-end and fully tailored,
              ensuring they align with each client’s unique requirements,
              objectives, and budget.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section className="relative bg-black pb-16 md:pt-10 text-white md:min-h-[800px]">
        <div className="relative z-10 mx-auto max-w-7xl px-6">

          {/* Section Header */}
          <div className="mb-10 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-4 inline-block text-xs tracking-[0.3em] text-cyan-400 font-mono"
            >
              // OUR EXPERTISE
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-3xl font-bold tracking-tight text-white md:text-5xl"
            >
              What We Offer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mx-auto mt-6 max-w-2xl text-zinc-400"
            >
              Select an option below to explore our specialized services.
            </motion.p>
          </div>

          {/* Desktop Interactive Layout */}
          <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-start">
            {/* Left: Interactive Vertical List */}
            <div className="flex flex-col space-y-2">
              {offerings.map((offer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  onMouseEnter={() => setActiveService(index)}
                  onClick={() => setActiveService(index)}
                  className={`group flex items-center gap-6 p-6 rounded-xl cursor-pointer transition-all duration-300 border ${activeService === index
                    ? "bg-zinc-900/60 border-cyan-400/30 shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                    : "bg-transparent border-transparent hover:bg-zinc-900/20"
                    }`}
                >
                  {/* Icon Indicator */}
                  <span className={`flex items-center justify-center p-2 rounded-lg transition-colors ${activeService === index ? "text-cyan-400 bg-cyan-400/10" : "text-zinc-600 group-hover:text-zinc-400"}`}>
                    <div className="w-6 h-6">
                      {offer.icon}
                    </div>
                  </span>

                  {/* Title */}
                  <h3 className={`text-xl font-bold transition-all ${activeService === index ? "text-cyan-400 translate-x-2" : "text-zinc-400 group-hover:text-white"}`}>
                    {offer.title}
                  </h3>

                  {/* Arrow */}
                  <div className={`ml-auto transition-all duration-300 ${activeService === index ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
                    <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Right: Sticky Detail Card */}
            <div className="sticky top-24">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeService}
                  layout
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-gradient-to-br from-zinc-900/90 to-black p-12 shadow-2xl shadow-cyan-900/20"
                >
                  {/* Background Detail */}
                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/5 blur-[80px]" />

                  <div className="relative z-10 flex flex-col h-full min-h-[400px] justify-center">
                    <div className="mb-6 flex items-center gap-4">
                      <motion.div
                        initial={{ scale: 0, rotate: -20 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", duration: 0.6 }}
                        className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400 shadow-lg shadow-cyan-500/10"
                      >
                        {offerings[activeService].icon}
                      </motion.div>
                      <span className="text-xs font-bold tracking-[0.2em] text-cyan-400/60 uppercase">
                        Enterprise Solutions
                      </span>
                    </div>

                    <h3 className="mb-6 text-3xl font-bold text-white leading-tight">
                      {offerings[activeService].title}
                    </h3>

                    <p className="text-lg leading-relaxed text-zinc-400 mb-8">
                      {offerings[activeService].desc}
                    </p>


                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Mobile Layout (Stacked Cards) */}
          <div className="grid gap-6 md:grid-cols-2 lg:hidden">
            {offerings.map((offer, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-cyan-400/10 bg-zinc-900/20 p-8"
              >
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                  {offer.icon}
                </div>

                <h3 className="mb-3 text-xl font-bold text-white">
                  {offer.title}
                </h3>

                <p className="text-sm leading-relaxed text-zinc-400 mb-6">
                  {offer.desc}
                </p>

              </motion.div>
            ))}
          </div>

        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default ProductsAndServices;
