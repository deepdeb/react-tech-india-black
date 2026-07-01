import { motion } from "framer-motion";

const values = [
    {
        title: "TEAMWORK AND MUTUAL RESPECT",
        desc: "We believe in the power of collective intelligence. By fostering an environment of respect and open communication, we ensure that every solution is the result of diverse technical perspectives working in harmony.",
        color: "text-blue-500",
        icon: (
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
        )
    },
    {
        title: "CONTINUOUS LEARNING AND INNOVATION",
        desc: "The tech landscape evolves hourly. We stay ahead by dedicating ourselves to constant learning and experimental development, ensuring our clients always benefit from the state-of-the-art.",
        color: "text-orange-500",
        icon: (
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z" />
            </svg>
        )
    },
    {
        title: "CLIENT-FOCUSED, TAILORED SOLUTIONS",
        desc: "We don't believe in one-size-fits-all. Every line of code is written with your specific business logic and growth trajectory in mind, creating unique digital assets that provide competitive advantages.",
        color: "text-emerald-500",
        icon: (
            <svg className="w-10 h-10" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="12" cy="12" r="1.5" fill="currentColor" />
            </svg>

        )
    },
    {
        title: "QUALITY, ACCOUNTABILITY, AND GROWTH",
        desc: "Excellence is non-negotiable. We maintain rigorous testing standards and take full ownership of our deployments, ensuring robust performance that drives sustainable business expansion.",
        color: "text-zinc-500",
        icon: (
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.5 3H6c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM6 19V5h12v14H6z" />
            </svg>
        )
    }
];

const AboutUsValues = () => {
    return (
        <section className="py-24 bg-black px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {values.map((v, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-center text-center group"
                        >
                            <div className={`${v.color} mb-6 transition-transform duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.2)]`}>
                                {v.icon}
                            </div>
                            <h3 className="text-white font-bold text-sm tracking-widest mb-4 h-12 flex items-center">
                                {v.title}
                            </h3>
                            <p className="text-zinc-500 text-sm leading-relaxed max-w-xs">
                                {v.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutUsValues;
