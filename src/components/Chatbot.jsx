import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef, useCallback } from "react";
import { FaPaperPlane } from "react-icons/fa";

const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [showWelcomeBubble, setShowWelcomeBubble] = useState(false);
    const [messages, setMessages] = useState([]);
    const [currentStep, setCurrentStep] = useState(0); // 0: Start, 1: Name, 2: Email, 3: Phone, 4: Purpose, 5: End
    const [userInput, setUserInput] = useState("");
    const [userData, setUserData] = useState({
        name: "",
        email: "",
        phone: "",
        reason: "",
    });
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef(null);
    const chatRef = useRef(null);

    const scrollToBottom = useCallback(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, []);

    useEffect(() => {
        scrollToBottom();
    }, [messages, isTyping, scrollToBottom]);

    // Outside click to close
    useEffect(() => {
        if (!isOpen) return;
        const handleClickOutside = (event) => {
            if (chatRef.current && !chatRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    // Escape key to close
    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };
        window.addEventListener("keydown", handleEsc);
        return () => window.removeEventListener("keydown", handleEsc);
    }, []);

    // Show welcome bubble logic
    useEffect(() => {
        const showTimer = setTimeout(() => {
            setShowWelcomeBubble(true);
        }, 2000);
        const hideTimer = setTimeout(() => {
            setShowWelcomeBubble(false);
        }, 12000);
        return () => {
            clearTimeout(showTimer);
            clearTimeout(hideTimer);
        };
    }, []);

    // Initial Greeting
    useEffect(() => {
        if (isOpen && messages.length === 0) {
            setIsTyping(true);
            setTimeout(() => {
                addBotMessage("👋 Hello! Welcome to Tech-India.");
                setTimeout(() => {
                    addBotMessage("We’re glad to have you here. I’m here to help you with any queries you may have.");
                    setTimeout(() => {
                        addBotMessage("May I know your name, please?");
                        setIsTyping(false);
                        setCurrentStep(1); // Wait for Name
                    }, 1000);
                }, 800);
            }, 500);
        }
    }, [isOpen]);

    const addBotMessage = (text, options = null) => {
        setMessages((prev) => [...prev, { text, sender: "bot", options }]);
    };

    const addUserMessage = (text) => {
        setMessages((prev) => [...prev, { text, sender: "user" }]);
    };

    const handleSend = () => {
        if (!userInput.trim()) return;
        const input = userInput.trim();
        addUserMessage(input);
        setUserInput("");
        setIsTyping(true);

        // Process Input
        setTimeout(() => {
            processUserInput(input);
            setIsTyping(false);
        }, 800);
    };

    const handleOptionClick = (option) => {
        addUserMessage(option);
        setIsTyping(true);
        setTimeout(() => {
            processUserInput(option);
            setIsTyping(false);
        }, 800);
    };

    const processUserInput = (input) => {
        switch (currentStep) {
            case 1: // Name -> Ask Email
                setUserData(prev => ({ ...prev, name: input }));
                addBotMessage(`Thank you, ${input} 😊`);
                setTimeout(() => {
                    addBotMessage("Could you please share your email address so we can assist you better?");
                }, 500);
                setCurrentStep(2);
                break;

            case 2: // Email -> Validate -> Ask Phone (if invalid/skip) OR Ask Purpose
                if (isValidEmail(input)) {
                    setUserData(prev => ({ ...prev, email: input }));
                    addBotMessage("Thank you! 👍");
                    setTimeout(() => {
                        askPurpose();
                    }, 500);
                } else {
                    // Email invalid or skipped
                    addBotMessage("No problem!");
                    setTimeout(() => {
                        addBotMessage("In that case, please share your contact number, and our team will get in touch with you shortly.");
                    }, 500);
                    setCurrentStep(3); // Go to Phone check
                }
                break;

            case 3: // Phone -> Validate -> Mandatory Check
                if (isValidPhone(input)) {
                    setUserData(prev => ({ ...prev, phone: input }));
                    addBotMessage("Got it! 📱");
                    setTimeout(() => {
                        askPurpose();
                    }, 500);
                } else {
                    // Retry or Fail
                    if (!userData.email) {
                        addBotMessage("⚠️ Sorry, to proceed further, we need either your email address or contact number.");
                        setTimeout(() => {
                            addBotMessage("This helps our team connect with you and assist you better. Please enter a valid email or phone number.");
                            // Loop back effectively to checking input. 
                            // For simplicity, let's look for either valid email OR phone here.
                            setCurrentStep(23); // Special state: Check both
                        }, 800);
                    } else {
                        // We have email, so we can proceed if they skip phone (but here they entered invalid phone)
                        // If they entered garbage, just assume skip? 
                        // Let's enforce valid if provided.
                        addBotMessage("Please enter a valid 10-digit phone number.");
                    }
                }
                break;

            case 23: // Special "Any Contact" Check
                if (isValidEmail(input)) {
                    setUserData(prev => ({ ...prev, email: input }));
                    askPurpose();
                } else if (isValidPhone(input)) {
                    setUserData(prev => ({ ...prev, phone: input }));
                    askPurpose();
                } else {
                    addBotMessage("⚠️ Please provide a valid email or phone number to continue.");
                }
                break;

            case 4: // Purpose -> Closing
                setUserData(prev => ({ ...prev, reason: input }));
                addBotMessage(`Thank you for sharing the details, ${userData.name} 🙌`);
                setTimeout(() => {
                    addBotMessage("Our Tech-India team will connect with you soon and assist you further.");
                    setTimeout(() => {
                        addBotMessage("Have a great day! 😊");
                        setCurrentStep(5); // End
                    }, 800);
                }, 800);
                break;

            default:
                if (currentStep === 5) {
                    addBotMessage("If you need anything else, feel free to use the 'Refresh' button to start over.");
                }
                break;
        }
    };

    const askPurpose = () => {
        addBotMessage("Could you please let us know the purpose of your visit today?", [
            "Product / Service Enquiry",
            "Technical Support",
            "Partnership / Business Opportunity",
            "Request a Demo",
            "General Query",
            "Others"
        ]);
        setCurrentStep(4);
    };

    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = (phone) => /^[\d\s\-\+\(\)]{10,}$/.test(phone);

    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSend();
        }
    };

    const resetChat = () => {
        setMessages([]);
        setCurrentStep(0);
        setUserData({ name: "", email: "", phone: "", reason: "" });
        setUserInput("");
        setIsOpen(false);
        setTimeout(() => setIsOpen(true), 100); // Re-trigger greeting
    };

    return (
        <>
            <AnimatePresence>
                {!isOpen && (
                    <motion.button
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                            setIsOpen(true);
                            setShowWelcomeBubble(false);
                        }}
                        className="group fixed bottom-[calc(24px+env(safe-area-inset-bottom))] right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-blue-600 shadow-2xl shadow-cyan-500/50 transition-all duration-300 hover:shadow-cyan-500/70"
                    >
                        <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400 opacity-20"></span>
                        <svg className="relative z-10 h-8 w-8 text-white transition-transform duration-300 group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                        </svg>
                        <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">1</span>
                    </motion.button>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {!isOpen && showWelcomeBubble && (
                    <motion.div
                        initial={{ opacity: 0, x: 20, scale: 0.9 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, x: 20, scale: 0.9 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        className="fixed bottom-24 right-4 z-50 max-w-65 sm:right-6 sm:max-w-70"
                    >
                        <div className="relative rounded-2xl border border-cyan-400/30 bg-linear-to-br from-zinc-900 via-zinc-900 to-black p-4 shadow-2xl shadow-cyan-500/20 backdrop-blur-md">
                            <button onClick={() => setShowWelcomeBubble(false)} className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full border border-cyan-400/30 bg-zinc-900 text-cyan-400 hover:bg-cyan-400 hover:text-white">
                                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                            <div className="mb-2 flex items-center gap-2">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-blue-600">
                                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <span className="text-xs font-semibold text-cyan-400">Tech-India Bot</span>
                            </div>
                            <p className="text-sm leading-relaxed text-zinc-200">👋 Hello! Welcome to Tech-India. I'm here to help you!</p>
                            <button onClick={() => { setIsOpen(true); setShowWelcomeBubble(false); }} className="mt-3 w-full rounded-lg border border-cyan-400/30 bg-linear-to-r from-cyan-500/20 to-blue-500/20 px-3 py-2 text-xs font-semibold text-cyan-300 hover:from-cyan-500/30 hover:to-blue-500/30">Start Chat →</button>
                            <div className="absolute -bottom-2 right-8 h-4 w-4 rotate-45 border-b border-r border-cyan-400/30 bg-linear-to-br from-zinc-900 to-black"></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        ref={chatRef}
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        className="fixed bottom-[calc(24px+env(safe-area-inset-bottom))] right-6 z-50 flex h-[70vh] w-[85vw] flex-col overflow-hidden rounded-2xl border border-cyan-400/30 bg-linear-to-br from-black via-zinc-900 to-black shadow-2xl shadow-cyan-500/20 will-change-transform sm:bottom-6 sm:h-150 sm:w-100 sm:rounded-3xl"
                    >
                        {/* Header */}
                        <div className="relative flex items-center justify-between border-b border-cyan-400/20 bg-linear-to-r from-cyan-500 to-blue-600 p-4">
                            <span className="absolute top-2 left-2 h-4 w-4 border-l-2 border-t-2 border-white/30" />
                            <span className="absolute top-2 right-2 h-4 w-4 border-r-2 border-t-2 border-white/30" />
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                                    <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div><h3 className="text-lg font-semibold text-white">Tech-India Bot</h3><p className="text-xs text-white/80">Online • AI Assistant</p></div>
                            </div>
                            <div className="flex gap-2">
                                <button onClick={resetChat} className="rounded-lg bg-white/10 p-2 hover:bg-white/20"><svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg></button>
                                <button onClick={() => setIsOpen(false)} className="rounded-lg bg-white/10 p-2 hover:bg-white/20"><svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg></button>
                            </div>
                        </div>

                        {/* Messages Area */}
                        <div className="relative flex-1 overflow-y-auto p-4 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-cyan-500/20">
                            <div className="pointer-events-none absolute inset-0 bg-[repeating-linear-gradient(to_bottom,rgba(255,255,255,0.02),rgba(255,255,255,0.02)_1px,transparent_1px,transparent_3px)]" />
                            <div className="space-y-4">
                                {messages.map((message, index) => (
                                    <motion.div key={index} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }} className={`flex flex-col ${message.sender === "user" ? "items-end" : "items-start"}`}>
                                        <div className={`max-w-[85%] rounded-2xl px-4 py-3 ${message.sender === "user" ? "bg-linear-to-r from-cyan-500 to-blue-500 text-white" : "border border-cyan-400/20 bg-zinc-800/80 text-zinc-200 backdrop-blur-sm"}`}>
                                            <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.text}</p>
                                        </div>
                                        {/* Render Options if any */}
                                        {message.options && (
                                            <div className="mt-3 grid grid-cols-1 md:grid-cols-2 gap-2 w-full max-w-[85%]">
                                                {message.options.map((opt, i) => (
                                                    <button key={i} onClick={() => handleOptionClick(opt)} className="rounded-xl border border-cyan-400/30 bg-cyan-900/20 px-3 py-2 text-xs font-medium text-cyan-300 transition-all hover:bg-cyan-400/20 hover:text-white text-left">
                                                        {opt}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </motion.div>
                                ))}
                                {isTyping && (
                                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                                        <div className="rounded-2xl border border-cyan-400/20 bg-zinc-800/50 px-4 py-3 backdrop-blur-sm">
                                            <div className="flex gap-1"><span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.3s]"></span><span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400 [animation-delay:-0.15s]"></span><span className="h-2 w-2 animate-bounce rounded-full bg-cyan-400"></span></div>
                                        </div>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Input Area */}
                        <div className="relative border-t border-cyan-400/20 bg-zinc-900/90 p-4">
                            <div className="flex gap-2">
                                <input
                                    type="text"
                                    value={userInput}
                                    onChange={(e) => setUserInput(e.target.value)}
                                    onKeyPress={handleKeyPress}
                                    placeholder={currentStep === 4 ? "Select an option or type..." : "Type your message..."}
                                    disabled={currentStep === 5}
                                    className="flex-1 rounded-xl border border-cyan-400/20 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-cyan-400 focus:outline-none focus:ring-1 focus:ring-cyan-400/20 disabled:opacity-50"
                                />
                                <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={handleSend} disabled={!userInput.trim() || currentStep === 5} className="rounded-xl bg-linear-to-r from-cyan-500 to-blue-500 px-4 py-3 text-white shadow-lg shadow-cyan-500/20 disabled:opacity-50">
                                    <FaPaperPlane className="h-4 w-4"/>
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Chatbot;
