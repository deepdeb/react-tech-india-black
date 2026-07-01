import { motion } from "framer-motion";
import { useState } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import JobApplicationModal from "../components/JobApplicationModal";
import { BiRocket } from "react-icons/bi";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";

const Career = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState("");

    const handleApply = (title) => {
        setSelectedJob(title);
        setIsModalOpen(true);
    };

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative h-[70vh] w-full overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0">
                    <img
                        src="https://tech-india.in/wp-content/uploads/2025/12/DSC04542-2-scaled.jpg"
                        alt="Career at Tech-India"
                        className="h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-r from-black via-black/60 to-transparent" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 flex h-full items-center px-6 lg:px-24">
                    <div className="max-w-2xl">
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            className="mb-4 inline-block text-xs font-bold tracking-[0.4em] text-cyan-400 uppercase font-mono"
                        >
              // CAREER AT TECH-INDIA
                        </motion.span>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl"
                        >
                            Shape the Future <br />
                            <span className="text-cyan-400">With Us</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mb-8 text-lg text-zinc-300 md:text-xl"
                        >
                            Work on cutting-edge technologies and join a community of passionate individuals dedicated to creating transformative digital experiences.
                        </motion.p>

                        <motion.button
                            onClick={() => document.getElementById('openings-section')?.scrollIntoView({ behavior: 'smooth' })}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="group relative overflow-hidden rounded-xl border border-cyan-400/30 bg-linear-to-r from-cyan-500 to-blue-500 px-8 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/40"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                View Openings
                            </span>
                            <div className="absolute inset-0 -z-10 bg-linear-to-r from-blue-600 to-cyan-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                        </motion.button>
                    </div>
                </div>
            </section>

            {/* Why Join Us Section */}
            <section className="py-24 px-6 lg:px-24 bg-black">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-20 text-center">
                        <h2 className="text-3xl font-bold text-white md:text-5xl">Why Join Tech-India?</h2>
                        <div className="mx-auto mt-6 h-1 w-24 bg-cyan-500" />
                        <p className="mt-8 text-zinc-400 max-w-2xl mx-auto">
                            We empower our employees to own their work and grow their skills in a supportive, innovative environment.
                        </p>
                    </div>

                    <div className="grid gap-8 md:grid-cols-3">
                        <BenefitCard
                            icon=<BiRocket />
                            title="Innovative Projects"
                            desc="Work on high-impact projects that leverage the latest in AI, Cloud, and Software Engineering."
                        />
                        <BenefitCard
                            icon=<BsGraphUpArrow />
                            title="Growth Opportunity"
                            desc="We invest in your development through mentorship, learning resources, and career advancement paths."
                        />
                        <BenefitCard
                            icon=<FaHandshake />
                            title="Vibrant Culture"
                            desc="Experience a collaborative environment where diverse perspectives are valued and celebrated."
                        />
                    </div>
                </div>
            </section>

            {/* Current Openings */}
            <section id="openings-section" className="pb-15 md:py-24 px-6 lg:px-24 bg-zinc-900/30">
                <div className="mx-auto max-w-7xl">
                    <h2 className="mb-12 text-3xl text-center font-bold">Current Openings</h2>
                    <div className="space-y-4">
                        <JobItem
                            title="Full Stack Developer"
                            type="Full Time"
                            location="Kolkata / Remote"
                            onApply={() => handleApply("Full Stack Developer")}
                        />
                        <JobItem
                            title="React Native Developer"
                            type="Contract"
                            location="Ranchi"
                            onApply={() => handleApply("React Native Developer")}
                        />
                        <JobItem
                            title="AI / ML Engineer"
                            type="Full Time"
                            location="Remote"
                            onApply={() => handleApply("AI / ML Engineer")}
                        />
                        <JobItem
                            title="UI/UX Designer"
                            type="Full Time"
                            location="Kolkata"
                            onApply={() => handleApply("UI/UX Designer")}
                        />
                    </div>
                </div>
            </section>

            <JobApplicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                jobTitle={selectedJob}
            />

            <Footer />
        </div>
    );
};

// Helper Components
const BenefitCard = ({ icon, title, desc }) => (
    <motion.div
        whileHover={{ y: -10 }}
        className="rounded-2xl border border-white/5 bg-zinc-900/50 p-8 transition-colors hover:border-cyan-400/20"
    >
        <div className="mb-4 text-4xl">{icon}</div>
        <h3 className="mb-3 text-xl font-bold text-white uppercase tracking-wider">{title}</h3>
        <p className="text-zinc-400">{desc}</p>
    </motion.div>
);

const JobItem = ({ title, type, location, onApply }) => (
    <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="group flex flex-col justify-between rounded-xl border border-white/5 bg-zinc-900 p-6 transition-all hover:bg-zinc-800 md:flex-row md:items-center"
    >
        <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors uppercase tracking-wider">{title}</h3>
            <div className="mt-2 flex items-center gap-4 text-sm text-zinc-500">
                <span className="font-mono text-cyan-400/70">{type}</span>
                <span className="h-1 w-1 rounded-full bg-zinc-700" />
                <span>{location}</span>
            </div>
        </div>
        <button
            onClick={onApply}
            className="rounded-lg border border-cyan-400/30 px-6 py-2 text-sm font-bold text-cyan-400 transition-colors hover:bg-cyan-400 hover:text-black active:scale-95"
        >
            Apply Now
        </button>
    </motion.div>
);

export default Career;
