import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

import img1 from "../../assets/images/aboutusfolder/img1.jpeg";
import img2 from "../../assets/images/aboutusfolder/img2.jpeg";
import img3 from "../../assets/images/aboutusfolder/img3.jpeg";
import img4 from "../../assets/images/aboutusfolder/img4.jpeg";
import img5 from "../../assets/images/aboutusfolder/img5.jpeg";
import img6 from "../../assets/images/aboutusfolder/img6.jpeg";
const slides = [
  {
    title: "Innovation Hub",
    subtitle: "A collective of problem-solvers turning complex challenges into scalable digital solutions.",
    img: img1
  },
  {
    title: "Expert Collective",
    subtitle: "Driven by curiosity, collaboration, and a shared passion for building meaningful technology.",
    img: img2
  },
  {
    title: "Excellence Powered",
    subtitle: "Engineers, designers, and strategists aligned by one goal — delivering impact through innovation.",
    img: img3
  },
  {
    title: "Future Focused",
    subtitle: "Where diverse perspectives meet disciplined execution to create reliable, future-ready systems.",
    img: img4
  },
  {
    title: "Standard Bearers",
    subtitle: "Built on strong fundamentals, modern architectures, and a commitment to engineering excellence.",
    img: img5
  },
  {
    title: "Growth Partners",
    subtitle: "Focused on long-term value, transparent delivery, and technology that grows with your business.",
    img: img6
  },
];


const AboutUsIntro = () => {
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center bg-[#050505] overflow-hidden py-16 lg:py-20 px-6">
      {/* 1. Cinematic Background Text - Subtle & Static on Mobile */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.02] lg:opacity-[0.03] select-none pointer-events-none">
        <h2 className="text-[25vw] lg:text-[20vw] font-black uppercase italic leading-none text-cyan-500">
          {slides[index].title.split(' ')[0]}
        </h2>
      </div>

      <div className="relative z-10 w-full max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* Left Side: Dynamic Typography */}
        <div className="flex flex-col space-y-4 lg:space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={`text-${index}`}
            transition={{ duration: 0.5 }}
            className="will-change-transform"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mt-2 leading-[1.1]">
              {slides[index].title}
            </h1>
            <p className="text-lg lg:text-xl text-zinc-400 max-w-md mt-4">
              {slides[index].subtitle}
            </p>
          </motion.div>

          {/* Progress Indicators */}
          <div className="flex gap-2 pt-6 lg:pt-8">
            {slides.map((_, i) => (
              <div
                key={i}
                className="h-1 bg-zinc-800 rounded-full transition-all duration-500"
                style={{ width: i === index ? (isMobile ? "30px" : "40px") : "10px", background: i === index ? "#06b6d4" : "" }}
              />
            ))}
          </div>
        </div>

        {/* Right Side: The Kinetic Visuals */}
        <div
          className="relative h-[400px] lg:h-[500px] flex items-center justify-center mt-8 lg:mt-0"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {/* The Main Image */}
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isMobile ? 20 : 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: isMobile ? -20 : -100 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="absolute w-full max-w-[280px] lg:max-w-lg aspect-[3/4] z-30 shadow-2xl shadow-cyan-500/10 lg:shadow-cyan-500/30 will-change-transform"
            >
              <div className="relative h-full w-full rounded-xl lg:rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img src={slides[index].img} loading="eager" className="w-full h-full object-cover bg-black" alt="" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* HUD Corners */}
                <div className="absolute top-3 left-3 lg:top-4 lg:left-4 w-5 h-5 lg:w-6 lg:h-6 border-t-2 border-l-2 border-cyan-400" />
                <div className="absolute bottom-3 right-3 lg:bottom-4 lg:right-4 w-5 h-5 lg:w-6 lg:h-6 border-b-2 border-r-2 border-cyan-400" />
              </div>
            </motion.div>

            {/* The Ghost/Next Image (Depth Effect) - Shown only on Desktop for performance */}
            {!isMobile && (
              <motion.div
                key={(index + 1) % slides.length}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.2, x: 40, scale: 0.9, rotate: 2 }}
                className="absolute w-full max-w-lg aspect-[3/4] z-20"
              >
                <div className="h-full w-full rounded-2xl bg-zinc-900 border border-white/5 overflow-hidden grayscale">
                  <img src={slides[(index + 1) % slides.length].img} className="w-full h-full object-cover opacity-50 bg-black" alt="" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Grid Decor */}
      <div className="absolute bottom-0 left-0 w-full h-24 lg:h-32 bg-gradient-to-t from-cyan-900/10 to-transparent pointer-events-none" />
    </section>
  );
};

export default AboutUsIntro;