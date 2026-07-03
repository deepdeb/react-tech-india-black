import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../components/Logo";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "ABOUT US", path: "/about-us" },
    { name: "PRODUCTS & SERVICES", path: "/products-and-services" },
    { name: "CAREER", path: "/career" },
    { name: "CONTACT US", path: "/contact-us" },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.95)" : "rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="top-0 left-0 right-0 z-50 px-4 md:px-20 py-4"
    >
      {/* Top neon rail */}
      <motion.div
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="h-px bg-linear-to-r from-transparent via-cyan-400/60 to-transparent"
      />

      <div className="relative mx-auto max-w-7xl px-2 md:px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Logo />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((item) => {
              const isContact = item.name === "CONTACT US";
              return (
                <NavLink key={item.path} to={item.path} className="relative group">
                  {({ isActive }) => (
                    <>
                      {isContact ? (
                        <div className={`px-4 py-2 rounded-lg border ${isActive ? 'border-cyan-400 bg-cyan-400/10' : 'border-cyan-400/30 group-hover:border-cyan-400'} transition-all duration-300`}>
                          <span className={`relative z-10 font-bold text-sm tracking-[0.25em] ${isActive ? 'text-cyan-400' : 'text-zinc-300 group-hover:text-cyan-400'}`}>
                            {item.name}
                          </span>
                        </div>
                      ) : (
                        <>
                          <span
                            className={`relative z-10 font-bold text-sm tracking-[0.25em] transition-colors duration-200
                              ${isActive
                                ? "text-cyan-400"
                                : "text-zinc-500 group-hover:text-cyan-300"
                              }`}
                          >
                            {item.name}
                          </span>

                          {/* Active energy bar */}
                          {isActive && (
                            <motion.span
                              layoutId="energy-bar"
                              className="absolute -bottom-2 left-0 right-0 h-px bg-cyan-400"
                              transition={{ duration: 0.25 }}
                            />
                          )}

                          {/* Hover scan pulse */}
                          <span className="absolute -inset-x-2 -inset-y-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <span className="absolute inset-0 bg-linear-to-r from-transparent via-cyan-400/10 to-transparent animate-pulse" />
                          </span>
                        </>
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative h-10 w-10 flex items-center justify-center text-cyan-400"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="sr-only">Toggle Menu</span>
            <div className="relative w-6 h-5">
              {isMobileMenuOpen ? (
                <FaTimes className="w-5 h-5" />
              ) : (
                <FaBars className="w-5 h-5" />
              )}
            </div>
          </button>
        </div>
      </div>

      {/* Bottom rail */}
      <motion.div
        animate={{ opacity: scrolled ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="h-px bg-linear-to-r from-transparent via-cyan-400/40 to-transparent"
      />

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 z-40 bg-black/90 backdrop-blur-sm md:hidden"
            />

            {/* Sidebar Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 z-50 h-full w-[80%] max-w-sm bg-black border-l border-cyan-400/20 shadow-2xl shadow-cyan-900/50 md:hidden"
            >
              <div className="flex flex-col h-full relative overflow-hidden">
                {/* Background Effects */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.02)_1px,transparent_1px,transparent_4px)]" />
                  <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 blur-[80px]" />
                </div>

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-cyan-400/10">
                  <span className="text-sm font-bold tracking-[0.3em] text-cyan-400">MENU</span>
                  <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-cyan-400 hover:text-white">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>

                {/* Links */}
                <nav className="flex-1 flex flex-col p-6 gap-6">
                  {navLinks.map((item, index) => (
                    <NavLink
                      key={item.path}
                      to={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={({ isActive }) => `text-xl font-bold tracking-[0.2em] transition-all hover:translate-x-2 ${isActive ? "text-cyan-400" : "text-zinc-500 hover:text-cyan-300"}`}
                    >
                      <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {item.name}
                      </motion.div>
                    </NavLink>
                  ))}
                </nav>

                {/* Footer Info */}
                <div className="p-6 border-t border-cyan-400/10 text-center">
                  <p className="text-xs text-zinc-600 tracking-widest">TECH-INDIA SISTEMS</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </motion.header>
  );
}