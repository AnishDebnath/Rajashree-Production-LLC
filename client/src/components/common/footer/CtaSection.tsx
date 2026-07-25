import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface CtaSectionProps {
    onCollaborateClick: () => void;
}

export default function CtaSection({ onCollaborateClick }: CtaSectionProps) {
    const sectionRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 90, damping: 22, mass: 0.6 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    const driftX = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);
    const driftY = useTransform(smoothMouseY, [-0.5, 0.5], [-12, 12]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!sectionRef.current) return;
        const rect = sectionRef.current.getBoundingClientRect();
        const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
        const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(normalizedX);
        mouseY.set(normalizedY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    return (
        <section
            ref={sectionRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative w-full py-16 md:py-18 overflow-hidden flex items-center justify-center bg-transparent select-none"
        >
            <motion.div
                style={{ x: driftX, y: driftY }}
                className="relative z-10 max-w-4xl mx-auto px-6 text-center flex flex-col items-center"
            >
                <motion.span
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.6 }}
                    className="font-mono text-[9px] md:text-[10px] tracking-[0.4em] text-gold font-bold uppercase mb-4 block"
                >
                    START A PROJECT
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="text-section-heading max-w-2xl mb-3"
                >
                    Let's shape your next visual masterpiece
                </motion.h2>
                <div className="w-16 h-[1.5px] bg-gold mx-auto mb-6" />

                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="font-sans text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-md md:max-w-lg mb-10"
                >
                    Partner with Rajashree Production LLP for world-class cinematic storytelling, high-end commercial spots, and
                    stunning visual campaigns that leave a lasting legacy.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <button
                        onClick={onCollaborateClick}
                        className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-accent-red hover:bg-accent-red-hover text-white text-xs tracking-widest font-bold uppercase cursor-pointer select-none overflow-hidden transition-all duration-300 shadow-[0_12px_40px_rgba(214,40,40,0.25)] hover:shadow-[0_16px_50px_rgba(214,40,40,0.45)] hover:-translate-y-0.5"
                    >
                        <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                        <span>Collaborate With Us</span>
                        <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                </motion.div>
            </motion.div>
        </section>
    );
}
