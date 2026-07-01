import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FaTimes, FaCloudUploadAlt, FaCheckCircle } from "react-icons/fa";

const JobApplicationModal = ({ isOpen, onClose, jobTitle }) => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        phone: "",
        linkedIn: "",
        experience: "",
        message: "",
    });

    // Lock body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 1500);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        onClick={onClose}
                        className="fixed inset-0 z-[100] bg-black/95 will-change-opacity sm:bg-black/80 sm:backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        onClick={onClose}
                        className="fixed inset-0 z-[110] flex items-center justify-center p-4 will-change-transform sm:p-6 md:p-10"
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-h-[90vh] max-w-4xl overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-black via-zinc-900 to-black shadow-2xl"
                        >

                            {/* Scan lines effect */}
                            <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_3px)]" />

                            {/* Scrollable Content Container */}
                            <div className="relative max-h-[90vh] overflow-y-auto px-6 py-10 md:p-12 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-cyan-400/20">

                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 z-20 rounded-full border border-cyan-400/30 bg-black/50 p-2 text-cyan-400 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                                >
                                    <FaTimes size={20} />
                                </button>

                                {!isSubmitted ? (
                                    <>
                                        {/* Header */}
                                        <div className="mb-10 text-center">
                                            <motion.span
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className="mb-3 inline-block font-mono text-xs tracking-[0.45em] text-cyan-400/80"
                                            >
                                                // TRANSMIT_CREDENTIALS
                                            </motion.span>
                                            <motion.h2
                                                initial={{ opacity: 0, y: -10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.1 }}
                                                className="text-3xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl"
                                            >
                                                Apply for <span className="text-cyan-400">{jobTitle}</span>
                                            </motion.h2>
                                            <motion.div
                                                initial={{ scaleX: 0 }}
                                                animate={{ scaleX: 1 }}
                                                transition={{ delay: 0.2, duration: 0.5 }}
                                                className="mx-auto mt-6 h-[2px] w-48 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                                            />
                                        </div>

                                        <form onSubmit={handleSubmit} className="space-y-8">
                                            <div className="grid gap-6 md:grid-cols-2">
                                                {/* Input Group Template */}
                                                {[
                                                    { label: "Full Name *", name: "fullName", type: "text", placeholder: "John Doe" },
                                                    { label: "Email Address *", name: "email", type: "email", placeholder: "john@example.com" },
                                                    { label: "Phone Number *", name: "phone", type: "tel", placeholder: "+91 98765 43210" },
                                                    { label: "LinkedIn Profile", name: "linkedIn", type: "url", placeholder: "https://linkedin.com/..." }
                                                ].map((field) => (
                                                    <div key={field.name} className="group">
                                                        <label className="mb-2 block text-xs font-bold tracking-widest text-cyan-400/70 uppercase">
                                                            {field.label}
                                                        </label>
                                                        <input
                                                            required={field.label.includes("*")}
                                                            type={field.type}
                                                            name={field.name}
                                                            value={formData[field.name]}
                                                            onChange={handleChange}
                                                            className="w-full rounded-xl border border-cyan-400/20 bg-black/40 px-4 py-4 text-white backdrop-blur-sm transition-all duration-300 placeholder:text-zinc-600 focus:border-cyan-400 focus:bg-black/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/10"
                                                            placeholder={field.placeholder}
                                                        />
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Experience Selection */}
                                            <div className="group">
                                                <label className="mb-2 block text-xs font-bold tracking-widest text-cyan-400/70 uppercase">
                                                    Experience Multiplier Area *
                                                </label>
                                                <div className="relative">
                                                    <select
                                                        required
                                                        name="experience"
                                                        value={formData.experience}
                                                        onChange={handleChange}
                                                        className="w-full rounded-xl border border-cyan-400/20 bg-black/40 px-4 py-4 text-white backdrop-blur-sm transition-all duration-300 focus:border-cyan-400 focus:bg-black/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/10 appearance-none cursor-pointer"
                                                    >
                                                        <option value="" disabled className="bg-zinc-900">Select Proficiency Level</option>
                                                        <option value="fresher" className="bg-zinc-900">Initiate (Fresher)</option>
                                                        <option value="junior" className="bg-zinc-900">Junior Architect (1-3 yrs)</option>
                                                        <option value="mid" className="bg-zinc-900">Core Contributor (3-5 yrs)</option>
                                                        <option value="senior" className="bg-zinc-900">Lead Engineer (5+ yrs)</option>
                                                    </select>
                                                    <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center text-cyan-400/50">
                                                        <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* File Upload Uplink */}
                                            <div className="group">
                                                <label className="mb-2 block text-xs font-bold tracking-widest text-cyan-400/70 uppercase">
                                                    Resume Data Packet (PDF) *
                                                </label>
                                                <div className="relative group/upload cursor-pointer">
                                                    <input
                                                        type="file"
                                                        accept=".pdf"
                                                        required
                                                        className="absolute inset-0 cursor-pointer opacity-0 z-10"
                                                    />
                                                    <div className="flex flex-col items-center justify-center rounded-2xl border-2 border-dashed border-cyan-400/20 bg-black/60 py-10 transition-all duration-500 group-hover/upload:border-cyan-400/60 group-hover/upload:bg-cyan-400/5">
                                                        <div className="mb-3 rounded-full bg-cyan-400/10 p-4 transition-transform duration-500 group-hover/upload:scale-110">
                                                            <FaCloudUploadAlt className="text-4xl text-cyan-400" />
                                                        </div>
                                                        <p className="text-sm font-bold tracking-[0.2em] text-zinc-300 uppercase">
                                                            Initiate <span className="text-cyan-400">Upload</span> Sequence
                                                        </p>
                                                        <p className="mt-2 text-[10px] text-zinc-500 uppercase tracking-widest">Supports PDF only | Max 5MB</p>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Cover Letter */}
                                            <div className="group">
                                                <label className="mb-2 block text-xs font-bold tracking-widest text-cyan-400/70 uppercase">
                                                    Supplemental Mission Data (Cover Letter)
                                                </label>
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleChange}
                                                    rows={4}
                                                    className="w-full rounded-xl border border-cyan-400/20 bg-black/40 px-4 py-4 text-white backdrop-blur-sm transition-all duration-300 placeholder:text-zinc-600 focus:border-cyan-400 focus:bg-black/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/10 resize-none"
                                                    placeholder="Briefly state your alignment with our vision..."
                                                />
                                            </div>

                                            {/* Submit Button */}
                                            <div className="pt-4">
                                                <motion.button
                                                    whileHover={{ scale: 1.01 }}
                                                    whileTap={{ scale: 0.98 }}
                                                    type="submit"
                                                    disabled={isSubmitting}
                                                    className="group relative w-full overflow-hidden rounded-2xl border border-cyan-400/30 bg-gradient-to-r from-cyan-600 to-blue-700 py-5 text-sm font-black uppercase tracking-[0.3em] text-white shadow-[0_0_20px_rgba(6,182,212,0.2)] transition-all duration-500 hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] disabled:opacity-50"
                                                >
                                                    <span className="relative z-10 flex items-center justify-center gap-3">
                                                        {isSubmitting ? (
                                                            <>
                                                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/20 border-t-white" />
                                                                Uplinking...
                                                            </>
                                                        ) : (
                                                            <>
                                                                {/* Transmitting Application */}
                                                                Submit
                                                                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                                            </>
                                                        )}
                                                    </span>
                                                    <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                                                </motion.button>
                                            </div>
                                        </form>
                                    </>
                                ) : (
                                    <div className="flex flex-col items-center justify-center py-20 text-center">
                                        <motion.div
                                            initial={{ scale: 0, rotate: -180 }}
                                            animate={{ scale: 1, rotate: 0 }}
                                            className="mb-10 flex h-32 w-32 items-center justify-center rounded-full border-2 border-cyan-400 bg-cyan-400/5 text-cyan-400 shadow-[0_0_50px_rgba(6,182,212,0.2)]"
                                        >
                                            <FaCheckCircle size={64} className="animate-pulse" />
                                        </motion.div>
                                        <h2 className="text-4xl font-black text-white uppercase tracking-[0.1em]">Signal Received</h2>
                                        <div className="mx-auto mt-6 h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                                        <p className="mt-10 text-lg text-zinc-400 max-w-md leading-relaxed">
                                            Your application for <span className="text-cyan-400 font-bold">{jobTitle}</span> has been successfully transmitted to our core systems. Our talent acquisition unit will review your profile and initiate contact if there is a strategic alignment.
                                        </p>
                                        <button
                                            onClick={onClose}
                                            className="mt-14 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-16 py-4 text-xs font-black uppercase tracking-[0.4em] text-cyan-400 transition-all duration-300 hover:bg-cyan-400 hover:text-black hover:shadow-[0_0_30px_rgba(6,182,212,0.4)]"
                                        >
                                            Terminate Link
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default JobApplicationModal;
