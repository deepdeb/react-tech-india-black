import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

const CustomCursor = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // Mouse positions
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // Smooth spring physics for the outer ring
    const springConfig = { damping: 25, stiffness: 250 };
    const springX = useSpring(mouseX, springConfig);
    const springY = useSpring(mouseY, springConfig);

    useEffect(() => {
        // Disable on touch devices
        if (window.matchMedia("(pointer: coarse)").matches) {
            setIsVisible(false);
            return;
        }

        setIsVisible(true);

        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseDown = () => setIsMouseDown(true);
        const handleMouseUp = () => setIsMouseDown(false);

        const handleMouseOver = (e) => {
            const target = e.target;
            if (target.closest("a, button, [role='button'], .hover-target")) {
                setIsHovered(true);
            } else {
                setIsHovered(false);
            }
        };

        window.addEventListener("mousemove", moveMouse);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveMouse);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, [mouseX, mouseY]);

    if (!isVisible) return null;

    return (
        <div className="pointer-events-none fixed inset-0 z-9999">
            {/* Main Dot */}
            <motion.div
                className="fixed h-1.5 w-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                style={{
                    left: mouseX,
                    top: mouseY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
            />

            {/* Outer Ring */}
            <motion.div
                className="fixed rounded-full border border-cyan-400/50"
                animate={{
                    width: isHovered ? 60 : 35,
                    height: isHovered ? 60 : 35,
                    backgroundColor: isHovered ? "rgba(34, 211, 238, 0.1)" : "rgba(34, 211, 238, 0)",
                    borderColor: isMouseDown ? "#22d3ee" : "rgba(34, 211, 238, 0.5)",
                    scale: isMouseDown ? 0.8 : 1,
                }}
                style={{
                    left: springX,
                    top: springY,
                    translateX: "-50%",
                    translateY: "-50%",
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20,
                    mass: 0.5
                }}
            />

            {/* Pulse Wave on Hover */}
            {isHovered && (
                <motion.div
                    className="fixed rounded-full border border-cyan-400/20"
                    initial={{ scale: 1, opacity: 0.5 }}
                    animate={{ scale: 1.5, opacity: 0 }}
                    transition={{ duration: 1, repeat: Infinity }}
                    style={{
                        left: springX,
                        top: springY,
                        width: 60,
                        height: 60,
                        translateX: "-50%",
                        translateY: "-50%",
                    }}
                />
            )}
        </div>
    );
};

export default CustomCursor;
