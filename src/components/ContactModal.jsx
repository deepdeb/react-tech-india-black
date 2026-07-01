import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const ContactModal = ({ isOpen, onClose }) => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

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

            // Reset form after success
            setTimeout(() => {
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    subject: "",
                    message: "",
                });
                setSubmitStatus(null);
            }, 2000);
        }, 1500);
    };

    const socialLinks = [
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/company/tech-india",
            icon: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
            ),
        },
        {
            name: "Twitter",
            url: "https://twitter.com/tech_india",
            icon: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
            ),
        },
        {
            name: "Instagram",
            url: "https://www.instagram.com/tech_india",
            icon: (
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
            ),
        },
    ];

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
                        className="fixed inset-0 z-50 bg-black/95 will-change-opacity sm:bg-black/80 sm:backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        onClick={onClose}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 will-change-transform sm:p-6 md:p-10"
                    >
                        <div
                            onClick={(e) => e.stopPropagation()}
                            className="relative w-full max-h-[90vh] max-w-4xl overflow-hidden rounded-3xl border border-cyan-400/30 bg-gradient-to-br from-black via-zinc-900 to-black shadow-2xl"
                        >
                            {/* Scan lines effect */}
                            <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.03),rgba(255,255,255,0.03)_1px,transparent_1px,transparent_3px)]" />

                            {/* Scrollable Content */}
                            <div className="relative max-h-[90vh] overflow-y-auto p-8 md:p-12 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-cyan-400/20">
                                {/* Close Button */}
                                <button
                                    onClick={onClose}
                                    className="absolute top-6 right-6 z-10 rounded-full border border-cyan-400/30 bg-black/50 p-2 text-cyan-400 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10 hover:text-cyan-300"
                                >
                                    <svg
                                        className="h-6 w-6"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>

                                {/* Header */}
                                <div className="mb-10 text-center">
                                    <motion.span
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1 }}
                                        className="mb-3 inline-block text-xs tracking-[0.45em] text-cyan-400/80"
                                    >
                                        // GET IN TOUCH
                                    </motion.span>
                                    <motion.h2
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.2 }}
                                        className="text-4xl font-bold tracking-tight text-cyan-300 md:text-5xl"
                                    >
                                        Contact Us
                                    </motion.h2>
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 0.3, duration: 0.5 }}
                                        className="mx-auto mt-4 h-[2px] w-32 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
                                    />
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid gap-6 md:grid-cols-2">
                                        {/* Name */}
                                        <div className="group">
                                            <label
                                                htmlFor="name"
                                                className="mb-2 block text-sm font-medium text-cyan-400/80"
                                            >
                                                Your Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-xl border border-cyan-400/20 bg-black/40 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 placeholder:text-zinc-500 focus:border-cyan-400 focus:bg-black/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                                placeholder="John Doe"
                                            />
                                        </div>

                                        {/* Email */}
                                        <div className="group">
                                            <label
                                                htmlFor="email"
                                                className="mb-2 block text-sm font-medium text-cyan-400/80"
                                            >
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-xl border border-cyan-400/20 bg-black/40 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 placeholder:text-zinc-500 focus:border-cyan-400 focus:bg-black/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                                placeholder="john@example.com"
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div className="group">
                                            <label
                                                htmlFor="phone"
                                                className="mb-2 block text-sm font-medium text-cyan-400/80"
                                            >
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full rounded-xl border border-cyan-400/20 bg-black/40 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 placeholder:text-zinc-500 focus:border-cyan-400 focus:bg-black/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                                placeholder="+91 9876543210"
                                            />
                                        </div>

                                        {/* Subject */}
                                        <div className="group">
                                            <label
                                                htmlFor="subject"
                                                className="mb-2 block text-sm font-medium text-cyan-400/80"
                                            >
                                                Subject *
                                            </label>
                                            <input
                                                type="text"
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full rounded-xl border border-cyan-400/20 bg-black/40 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 placeholder:text-zinc-500 focus:border-cyan-400 focus:bg-black/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                                placeholder="How can we help?"
                                            />
                                        </div>
                                    </div>

                                    {/* Message */}
                                    <div className="group">
                                        <label
                                            htmlFor="message"
                                            className="mb-2 block text-sm font-medium text-cyan-400/80"
                                        >
                                            Your Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full resize-none rounded-xl border border-cyan-400/20 bg-black/40 px-4 py-3 text-white backdrop-blur-sm transition-all duration-300 placeholder:text-zinc-500 focus:border-cyan-400 focus:bg-black/60 focus:outline-none focus:ring-2 focus:ring-cyan-400/20"
                                            placeholder="Tell us more about your inquiry..."
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className="flex justify-center pt-4">
                                        <motion.button
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="group relative overflow-hidden rounded-xl border border-cyan-400/30 bg-gradient-to-r from-cyan-500 to-blue-500 px-12 py-4 font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-50"
                                        >
                                            <span className="relative z-10 flex items-center gap-2">
                                                {isSubmitting ? (
                                                    <>
                                                        <svg
                                                            className="h-5 w-5 animate-spin"
                                                            fill="none"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <circle
                                                                className="opacity-25"
                                                                cx="12"
                                                                cy="12"
                                                                r="10"
                                                                stroke="currentColor"
                                                                strokeWidth="4"
                                                            />
                                                            <path
                                                                className="opacity-75"
                                                                fill="currentColor"
                                                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                                            />
                                                        </svg>
                                                        Sending...
                                                    </>
                                                ) : submitStatus === "success" ? (
                                                    <>
                                                        <svg
                                                            className="h-5 w-5"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M5 13l4 4L19 7"
                                                            />
                                                        </svg>
                                                        Message Sent!
                                                    </>
                                                ) : (
                                                    <>
                                                        Send Message
                                                        <svg
                                                            className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                        >
                                                            <path
                                                                strokeLinecap="round"
                                                                strokeLinejoin="round"
                                                                strokeWidth={2}
                                                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                                                            />
                                                        </svg>
                                                    </>
                                                )}
                                            </span>
                                            <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-600 to-cyan-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                                        </motion.button>
                                    </div>
                                </form>

                                {/* Social Media Links */}
                                <div className="mt-12 border-t border-cyan-400/20 pt-8">
                                    <p className="mb-6 text-center text-sm text-zinc-400">
                                        Or connect with us on social media
                                    </p>
                                    <div className="flex justify-center gap-6">
                                        {socialLinks.map((social, index) => (
                                            <motion.a
                                                key={social.name}
                                                href={social.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, y: 20 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.4 + index * 0.1 }}
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                className="group relative rounded-xl border border-cyan-400/20 bg-black/40 p-4 backdrop-blur-sm transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-400/10"
                                                aria-label={social.name}
                                            >
                                                <div className="text-cyan-400 transition-colors duration-300 group-hover:text-cyan-300">
                                                    {social.icon}
                                                </div>
                                                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs text-cyan-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                                    {social.name}
                                                </div>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ContactModal;
