import { motion } from "framer-motion";

const stats = [
    { label: "YEARS OF EXCELLENCE", value: "10+" },
    { label: "PROJECTS DELIVERED", value: "200+" },
    { label: "VETTED ENGINEERS", value: "50+" },
    { label: "GLOBAL CLIENTS", value: "80+" },
];

const AboutUsMissionStats = () => {
    return (
        <section className="py-5 lg:py-24 bg-black px-4 lg:px-24 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[300px] lg:w-[500px] h-[300px] lg:h-[500px] bg-cyan-950/10 blur-[80px] lg:blur-[120px] rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto space-y-16 lg:space-y-24">

                {/* Mission & Vision Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-6 lg:p-10 rounded-2xl lg:rounded-3xl border border-white/5 bg-zinc-900/40 backdrop-blur-xl space-y-4 lg:space-y-6"
                    >
                        <div className="w-10 lg:w-12 h-1 bg-cyan-500 mb-2 lg:mb-4" />
                        <h2 className="text-2xl lg:text-3xl font-bold text-white uppercase tracking-tight">Our Mission</h2>
                        <p className="text-zinc-400 text-base lg:text-lg leading-relaxed">
                            To empower organizations worldwide by delivering high-impact, scalable, and ethically-engineered technology solutions. We aim to bridge the gap between complex business challenges and elegant digital execution.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-6 lg:p-10 rounded-2xl lg:rounded-3xl border border-white/5 bg-zinc-900/40 backdrop-blur-xl space-y-4 lg:space-y-6"
                    >
                        <div className="w-10 lg:w-12 h-1 bg-cyan-500 mb-2 lg:mb-4" />
                        <h2 className="text-2xl lg:text-3xl font-bold text-white uppercase tracking-tight">Our Vision</h2>
                        <p className="text-zinc-400 text-base lg:text-lg leading-relaxed">
                            To be the most trusted global partner for digital transformation, recognized for our engineering integrity, creative problem-solving, and commitment to the sustained growth of our clients and our people.
                        </p>
                    </motion.div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="text-center space-y-1 lg:space-y-2 p-4 lg:p-6 rounded-xl lg:rounded-2xl border border-white/5 bg-zinc-950/50 hover:border-cyan-500/30 transition-all group"
                        >
                            <h3 className="text-3xl lg:text-6xl font-black text-white group-hover:text-cyan-500 transition-colors duration-500">
                                {stat.value}
                            </h3>
                            <p className="text-[9px] lg:text-xs font-bold text-zinc-500 uppercase tracking-[0.2em]">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default AboutUsMissionStats;
