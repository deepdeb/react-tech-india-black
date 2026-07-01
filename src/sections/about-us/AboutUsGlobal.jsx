import { motion } from "framer-motion";

const regions = [
    { name: "North America", clients: "25+ active partners" },
    { name: "Europe", clients: "15+ active partners" },
    { name: "Asia Pacific", clients: "40+ active partners" },
    { name: "Middle East", clients: "10+ active partners" },
];

const AboutUsGlobal = () => {
    return (
        <section className="py-5 lg:py-24 bg-[#080808] px-4 lg:px-24 overflow-hidden">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

                {/* Text Side */}
                <div className="flex-1 space-y-6 lg:space-y-8 text-center lg:text-left">
                    <div className="space-y-2 lg:space-y-4">
                        <span className="text-cyan-500 font-mono tracking-[0.3em] text-[10px] lg:text-xs uppercase underline underline-offset-8 decoration-cyan-500/30">
                            // GLOBAL FOOTPRINT
                        </span>
                        <h2 className="text-3xl lg:text-5xl font-bold text-white tracking-tight leading-tight pt-2">
                            A Partner to Businesses <br className="hidden lg:block" />
                            <span className="text-cyan-400">Around the Globe.</span>
                        </h2>
                    </div>

                    <p className="text-zinc-400 text-base lg:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                        At Tech-India, geographical boundaries don't limit innovation. We have successfully deployed enterprise-grade solutions across four continents, maintaining consistent quality and high-speed delivery regardless of time zones.
                    </p>

                    <div className="grid grid-cols-2 lg:grid-cols-2 gap-4 lg:gap-6 pt-4 text-left">
                        {regions.map((region, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-3 lg:p-4 border-l border-cyan-500/20 bg-white/5"
                            >
                                <h4 className="text-white font-bold tracking-wider text-sm lg:text-base">{region.name}</h4>
                                <p className="text-zinc-500 text-[10px] lg:text-xs mt-1">{region.clients}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Visual Side (Mock Map/Globe Effect) */}
                <div className="flex-1 relative w-full aspect-square max-w-[300px] lg:max-w-none flex items-center justify-center">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1),transparent_70%)] animate-pulse" />

                    {/* Decorative HUD Circle */}
                    <div className="absolute w-[80%] h-[80%] border border-cyan-400/10 rounded-full flex items-center justify-center">
                        <div className="w-[60%] h-[60%] border border-cyan-400/20 rounded-full animate-[spin_10s_linear_infinite]" />
                        <div className="absolute w-[110%] h-[110%] border-t border-cyan-400/5 rounded-full animate-[spin_15s_linear_infinite_reverse]" />
                    </div>

                    {/* Core Data Node */}
                    <div className="relative z-10 p-8 lg:p-12 rounded-full border border-cyan-400/30 bg-black/50 backdrop-blur-2xl text-center">
                        <span className="block text-4xl lg:text-5xl font-black text-white">4+</span>
                        <span className="block text-[8px] lg:text-[10px] font-bold text-cyan-400 tracking-[0.4em] mt-1 lg:mt-2">CONTINENTS</span>
                    </div>

                    {/* Floating Nodes */}
                    {[...Array(6)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="absolute w-2 h-2 bg-cyan-500 rounded-full shadow-[0_0_10px_#06b6d4]"
                            animate={{
                                y: [0, Math.sin(i) * 30, 0],
                                x: [0, Math.cos(i) * 30, 0],
                                opacity: [0.5, 1, 0.5]
                            }}
                            transition={{
                                duration: 3 + i,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                            style={{
                                top: `${20 + (i * 15)}%`,
                                left: `${20 + (i * 12)}%`
                            }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUsGlobal;
