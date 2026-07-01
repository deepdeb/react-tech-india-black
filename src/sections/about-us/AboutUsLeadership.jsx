import { motion } from "framer-motion";
import leadershipImg from "../../assets/images/aboutusfolder/img2.jpeg";

const AboutUsLeadership = () => {
    return (
        <section className="py-12 lg:py-24 bg-black px-4 lg:px-24">
            <div className="max-w-7xl mx-auto">
                <div className="relative rounded-3xl lg:rounded-[3rem] overflow-hidden bg-gradient-to-br from-zinc-900 to-black border border-white/5 p-8 lg:p-20">
                    {/* Background Detail */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-cyan-500/5 blur-[100px] pointer-events-none" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        <div className="space-y-6 lg:space-y-8">
                            <div className="space-y-3 lg:space-y-4 text-center lg:text-left">
                                <span className="text-cyan-400 font-mono tracking-[0.3em] text-[10px] lg:text-xs uppercase">
                  // LEADERSHIP COMMITMENT
                                </span>
                                <h2 className="text-3xl lg:text-6xl font-bold text-white tracking-tighter leading-tight lg:leading-none">
                                    Engineering <br className="hidden lg:block" />
                                    with <span className="text-cyan-500">Integrity.</span>
                                </h2>
                            </div>

                            <div className="space-y-4 lg:space-y-6 text-zinc-400 text-base lg:text-lg leading-relaxed text-center lg:text-left">
                                <p>
                                    At the heart of Tech-India is a leadership team committed to the radical idea that business growth and technical excellence are inseparable. We don't just manage projects; we steward your vision.
                                </p>
                                <p className="hidden md:block">
                                    Our promise is transparency. From initial architecture to final deployment, we maintain a direct line of communication, ensuring that you are always in control of your digital evolution.
                                </p>
                            </div>

                            <div className="flex flex-col lg:flex-row items-center gap-4 lg:gap-6 pt-2 lg:pt-4">
                                <div className="flex flex-col items-center lg:items-start">
                                    <span className="text-white font-bold text-lg lg:text-xl">Leadership Collective</span>
                                    <span className="text-cyan-500/60 text-[10px] lg:text-sm font-mono tracking-widest uppercase">Tech-India Systems</span>
                                </div>
                            </div>
                        </div>

                        <div className="relative aspect-square lg:aspect-square rounded-2xl lg:rounded-3xl overflow-hidden border border-white/10 group">
                            <img
                                src={leadershipImg}
                                alt="Leadership"
                                className="w-full h-full object-cover grayscale brightness-75 transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4 lg:bottom-8 lg:left-8 lg:right-8 p-4 lg:p-6 bg-white/5 backdrop-blur-md rounded-xl lg:rounded-2xl border border-white/10">
                                <p className="text-white italic text-[12px] lg:text-sm text-center lg:text-left">
                                    "We measure our success not by the lines of code we write, but by the business milestones our clients achieve."
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUsLeadership;
