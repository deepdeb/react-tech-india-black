import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Navbar from "../layouts/Navbar";
import Footer from "../layouts/Footer";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaTwitter, FaInstagram, FaChevronDown } from "react-icons/fa";

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [activeAccordion, setActiveAccordion] = useState(0);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus("success");
            setTimeout(() => {
                setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
                setSubmitStatus(null);
            }, 3000);
        }, 1500);
    };

    const theoryPoints = [
        {
            title: "Strategic Innovation",
            description: "At TECH-INDIA, we don't just follow trends; we set them. Our approach to engineering involves deep-dive analysis and forward-thinking architecture to ensure your business stays ahead of the curve."
        },
        {
            title: "Client-Centric Philosophy",
            description: "We believe in building partnerships, not just projects. Our dedicated team works as an extension of your organization, ensuring that every solution is perfectly aligned with your strategic goals."
        },
        {
            title: "Future-Ready Engineering",
            description: "Our solutions are built with scalability in mind. We use the latest technology stacks to create robust systems that grow with your business, minimizing technical debt and maximizing ROI."
        },
        {
            title: "Global Synergy",
            description: "Leveraging our global reach and local expertise, we provide specialized services that cater to diverse markets while maintaining the highest standards of international quality."
        }
    ];

    return (
        <div className="min-h-screen bg-black text-white">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(6,182,212,0.1)_0%,transparent_70%)]" />
                    <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.01),rgba(255,255,255,0.01)_1px,transparent_1px,transparent_4px)]" />
                </div>

                <div className="relative z-10 container mx-auto px-6 text-center">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="inline-block text-cyan-400 font-bold tracking-[0.5em] text-sm mb-4 font-mono uppercase"
                    >
                        // CONNECTING THE FUTURE
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-b from-white to-zinc-500 bg-clip-text text-transparent uppercase tracking-tighter"
                    >
                        Contact Us
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="max-w-2xl mx-auto text-zinc-400 text-lg leading-relaxed"
                    >
                        Have a question or proposal? We'd love to hear from you.
                        Let's build something extraordinary together.
                    </motion.p>
                </div>
            </section>

            {/* Main Content */}
            <section className="pt-0 py-10 md:py-20 relative px-6 md:px-20 lg:px-32">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

                    {/* Left Side: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-xl" />
                        <div className="relative bg-zinc-900/50 border border-white/10 p-8 md:p-12 rounded-3xl backdrop-blur-xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-cyan-400/80 tracking-widest uppercase">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 focus:outline-none transition-colors"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-medium text-cyan-400/80 tracking-widest uppercase">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 focus:outline-none transition-colors"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-cyan-400/80 tracking-widest uppercase">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 focus:outline-none transition-colors"
                                        placeholder="How can we help?"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-cyan-400/80 tracking-widest uppercase">Message</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
                                        placeholder="Your message here..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 py-4 rounded-xl font-bold tracking-widest uppercase hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20"
                                >
                                    {isSubmitting ? "Sending..." : submitStatus === "success" ? "Message Sent!" : "Submit Message"}
                                </button>
                            </form>
                        </div>
                    </motion.div>

                    {/* Right Side: Theory & Contact Info */}
                    <div className="space-y-12">
                        {/* Theory Section */}
                        <div className="space-y-8">
                            <h2 className="text-3xl text-center font-bold text-white uppercase tracking-tight">Our Engineering Excellence</h2>
                            <div className="space-y-4">
                                {theoryPoints.map((point, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className={`border rounded-2xl overflow-hidden transition-all duration-300 ${activeAccordion === idx
                                            ? "border-cyan-400/50 bg-zinc-900/50 shadow-lg shadow-cyan-500/5"
                                            : "border-white/10 bg-zinc-900/20 hover:border-white/20"
                                            }`}
                                    >
                                        <button
                                            onClick={() => setActiveAccordion(activeAccordion === idx ? null : idx)}
                                            className="w-full flex items-center justify-between p-6 text-left transition-colors"
                                        >
                                            <h3 className={`font-bold tracking-wide uppercase text-sm transition-colors ${activeAccordion === idx ? "text-cyan-300" : "text-cyan-400/70"
                                                }`}>
                                                {point.title}
                                            </h3>
                                            <motion.span
                                                animate={{ rotate: activeAccordion === idx ? 180 : 0 }}
                                                className={`transition-colors ${activeAccordion === idx ? "text-cyan-400" : "text-zinc-500"
                                                    }`}
                                            >
                                                <FaChevronDown />
                                            </motion.span>
                                        </button>
                                        <AnimatePresence>
                                            {activeAccordion === idx && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <div className="px-6 pb-6 text-zinc-400 text-sm leading-relaxed border-t border-white/5 pt-4">
                                                        <motion.p
                                                            initial={{ y: 10, opacity: 0 }}
                                                            animate={{ y: 0, opacity: 1 }}
                                                            transition={{ delay: 0.1 }}
                                                        >
                                                            {point.description}
                                                        </motion.p>
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Contact Details */}
                        <div className="grid md:grid-cols-2 gap-8 pt-8 border-t border-white/10">
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                                        <FaPhone />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Phone</p>
                                        <p className="text-zinc-200">+91 98765 43210</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                                        <FaEnvelope />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Email</p>
                                        <p className="text-zinc-200">info@tech-india.in</p>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4 group">
                                    <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-all">
                                        <FaMapMarkerAlt />
                                    </div>
                                    <div>
                                        <p className="text-xs text-zinc-500 uppercase font-bold tracking-widest">Location</p>
                                        <p className="text-zinc-200">Tech-India, Kolkata, India</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <motion.a whileHover={{ y: -3 }} href="#" className="p-2 text-zinc-400 hover:text-cyan-400 transition-colors"><FaLinkedin size={20} /></motion.a>
                                    <motion.a whileHover={{ y: -3 }} href="#" className="p-2 text-zinc-400 hover:text-cyan-400 transition-colors"><FaTwitter size={20} /></motion.a>
                                    <motion.a whileHover={{ y: -3 }} href="#" className="p-2 text-zinc-400 hover:text-cyan-400 transition-colors"><FaInstagram size={20} /></motion.a>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <Footer />
        </div>
    );
};

export default ContactUs;
