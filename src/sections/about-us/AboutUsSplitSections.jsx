import { motion, LayoutGroup } from "framer-motion";
import { useState } from "react";
import img1 from "../../assets/images/aboutusfolder/img1.jpeg";
import img3 from "../../assets/images/aboutusfolder/img3.jpeg";
import img4 from "../../assets/images/aboutusfolder/img4.jpeg";
import img5 from "../../assets/images/aboutusfolder/img5.jpeg";
import img6 from "../../assets/images/aboutusfolder/img6.jpeg";

const sections = [
    {
        title: "Who We Are",
        desc: "We are a collective of tech enthusiasts and problem solvers dedicated to transforming business ideas into high-performance digital products. Our journey is defined by innovation and a relentless pursuit of engineering excellence.",
        img: img1
    },
    {
        title: "Our People, Our Strength",
        desc: "Our greatest asset is our talent. We house specialized engineers, proactive designers, and strategic analysts who work in harmony to deliver results that exceed expectations.",
        img: img3
    },
    {
        title: "Our Work Culture",
        desc: "We believe in freedom with responsibility. Our culture promotes transparency, continuous peer learning, and a shared passion for solving the 'unsolvable' complex challenges.",
        img: img4
    },
    {
        title: "Strong Foundation",
        desc: "Built on years of domain expertise and robust technical architecture, we provide a reliable bridge between your vision and the latest technological advancements.",
        img: img5
    },
    {
        title: "Why Choose Us?",
        desc: "Because we don't just build software; we build solutions that scale. Our client-first approach ensures that quality, accountability, and growth are integrated into every phase of our collaboration.",
        img: img6
    }
];

const AboutUsSplitSections = () => {
    // Keep track of which sections are manually flipped by the user
    const [flippedIndices, setFlippedIndices] = useState({});

    const toggleFlip = (index) => {
        setFlippedIndices(prev => ({
            ...prev,
            [index]: !prev[index]
        }));
    };

    return (
        <section className="py-24 bg-black overflow-hidden px-6 lg:px-24">
            <LayoutGroup>
                <div className="max-w-7xl mx-auto space-y-32">
                    {sections.map((sec, i) => {
                        const isNormallyReversed = i % 2 !== 0;
                        const isFlipped = flippedIndices[i];
                        const shouldShowReversed = isFlipped ? !isNormallyReversed : isNormallyReversed;

                        return (
                            <motion.div
                                layout
                                key={i}
                                className={`flex flex-col lg:items-center gap-8 lg:gap-24 ${shouldShowReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} will-change-transform`}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.16, 1, 0.3, 1]
                                }}
                            >
                                {/* Text Side */}
                                <motion.div
                                    layout="position"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="flex-1 space-y-4 lg:space-y-6"
                                >
                                    <div className="flex items-center gap-4">
                                        <div className="h-px w-12 bg-cyan-500" />
                                        <span className="text-cyan-500 font-mono tracking-widest uppercase text-[10px] lg:text-xs">
                                            0{i + 1} // TECH_INDIA
                                        </span>
                                    </div>
                                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                                        {sec.title}
                                    </h2>
                                    <p className="text-zinc-400 text-base lg:text-xl leading-relaxed">
                                        {sec.desc}
                                    </p>
                                </motion.div>

                                {/* Image Side */}
                                <motion.div
                                    layout
                                    initial={{ opacity: 0, scale: 0.98 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, ease: "easeOut" }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    className="flex-1 w-full will-change-transform"
                                >
                                    <div
                                        className="relative group cursor-pointer"
                                        onClick={() => toggleFlip(i)}
                                    >
                                        <div className="absolute -inset-2 lg:-inset-4 border border-cyan-400/20 lg:group-hover:border-cyan-400/40 transition-all duration-500 rounded-xl lg:rounded-2xl" />
                                        <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-lg lg:rounded-xl border border-white/10 shadow-xl lg:shadow-2xl">
                                            <img
                                                src={sec.img}
                                                alt={sec.title}
                                                loading="lazy"
                                                className="w-full h-full object-cover grayscale-[0.2] lg:grayscale-[0.3] lg:group-hover:grayscale-0 transition-all duration-700 lg:group-hover:scale-105 pointer-events-none"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                                            {/* Interaction Prompt Overlay - Desktop Only */}
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 hidden lg:flex">
                                                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-full border border-cyan-400/30">
                                                    <span className="text-cyan-400 text-xs font-bold tracking-widest uppercase">Click to Swap View</span>
                                                </div>
                                            </div>

                                            {/* Decorative corner */}
                                            <div className="absolute bottom-3 right-3 lg:bottom-4 lg:right-4 h-6 w-6 lg:h-8 lg:w-8 border-b-2 border-r-2 border-cyan-500/50" />
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>
                        );
                    })}
                </div>
            </LayoutGroup>
        </section>
    );
};

export default AboutUsSplitSections;
