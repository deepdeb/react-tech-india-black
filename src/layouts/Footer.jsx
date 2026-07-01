import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const Footer = () => {
    return (
        <footer className="relative overflow-hidden bg-black pt-20 md:py-16 text-white border-t border-cyan-400/10">
            {/* Background Texture */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.015),rgba(255,255,255,0.015)_1px,transparent_1px,transparent_4px)]" />
                <div className="absolute top-0 right-0 w-125 h-125 bg-cyan-500/5 blur-[120px]" />
            </div>

            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
                <div className="grid gap-12 lg:grid-cols-4 lg:gap-8">

                    {/* Column 1: Brand & Social */}
                    <div className="space-y-6">

                        <Logo />

                        <p className="text-sm leading-relaxed text-zinc-400 max-w-sm">
                            At Tech-India, we are proud to be a premier IT solutions provider. Since our inception, we have been dedicated to delivering exceptional digital solutions to our clients.
                        </p>

                        <div className="pt-4">
                            <h4 className="text-sm font-semibold text-white mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                <SocialLink href="https://linkedin.com" icon={<LinkedinIcon />} label="LinkedIn" />
                                <SocialLink href="https://twitter.com" icon={<TwitterIcon />} label="Twitter" />
                                <SocialLink href="https://instagram.com" icon={<InstagramIcon />} label="Instagram" />
                                <SocialLink href="https://youtube.com" icon={<YoutubeIcon />} label="YouTube" />
                            </div>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            <FooterLink to="/" label="Home" />
                            <FooterLink to="/about-us" label="About Us" />
                            <FooterLink to="/products-and-services" label="Products & Services" />
                            <FooterLink to="/career" label="Career" />
                            <FooterLink to="/contact-us" label="Contact Us" />
                        </ul>
                    </div>

                    {/* Column 3: Locations */}
                    <div>
                        <h3 className="text-lg font-bold text-white mb-6">Locations:</h3>
                        <div className="text-sm text-zinc-400 space-y-6">
                            <div>
                                <strong className="text-white block mb-1">Kolkata Office:</strong>
                                <p className="leading-relaxed">
                                    342, PS Abacus, Action Area IIE, Newtown,<br />
                                    Kolkata – 700161, West Bengal
                                </p>
                                <p className="mt-1">Ph: +91 9288287778</p>
                                <p>Email: info@tech-india.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Column 4: Map */}
                    <div>
                        <div className="relative h-64 w-full overflow-hidden rounded-xl border border-cyan-400/20 bg-zinc-900">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.05284893708!2d88.47352831495966!3d22.576856985180556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027533f5d5b3f7%3A0x6f3f50055106506!2sPS%20Abacus!5e0!3m2!1sen!2sin!4v1625641234567!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Kolkata Office Location"
                            />
                            <div className="pointer-events-none absolute inset-0 border border-cyan-400/10 shadow-[inset_0_0_20px_rgba(0,0,0,0.5)]" />
                        </div>
                    </div>

                </div>

                <div className="mt-16 border-t border-white/5 pt-8 text-center">
                    <p className="text-sm text-zinc-500">
                        &copy; {new Date().getFullYear()} Tech-India Pvt Ltd. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

// Helper Components
const FooterLink = ({ to, label }) => (
    <li>
        <Link to={to} className="group flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-cyan-400">
            <span className="h-px w-0 bg-cyan-400 transition-all duration-300 group-hover:w-4" />
            {label}
        </Link>
    </li>
);

const SocialLink = ({ href, icon, label }) => (
    <motion.a
        href={href}
        target="_blank"
        whileHover={{ y: -3 }}
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-zinc-900 text-zinc-400 transition-colors hover:bg-cyan-400/10 hover:text-cyan-400"
        aria-label={label}
    >
        {icon}
    </motion.a>
);

// Icons
const LinkedinIcon = () => (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
);
const TwitterIcon = () => (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);
const InstagramIcon = () => (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
);
const YoutubeIcon = () => (
    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" /></svg>
);

export default Footer;