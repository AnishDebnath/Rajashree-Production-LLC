import React from 'react';
import { motion } from 'motion/react';

export default function Marquee() {
    const marqueeItems = [
        { type: 'two-tone', part1: 'Color', part2: 'Grading' },
        { type: 'two-tone', part1: 'Motion', part2: 'Graphics' },
        { type: 'single', text: 'VFX', bold: true },
        { type: 'single', text: 'Filming', bold: false },
        { type: 'single', text: 'Scriptwriting', bold: false },
        { type: 'two-tone', part1: 'Sound', part2: 'Design' },
        { type: 'single', text: 'Directing', bold: true },
        { type: 'two-tone', part1: 'Creative', part2: 'Production' },
        { type: 'single', text: 'Editing', bold: false },
    ];

    // Duplicating list to ensure seamless looping without any gaps
    const duplicatedItems = [...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems];

    return (
        <section
            className="relative w-full bg-bg-dark py-8 md:py-10 overflow-hidden z-20 select-none"
            id="cinematic-marquee-section"
        >
            <div className="flex w-max items-center relative">
                <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        duration: 35,
                        ease: "linear",
                    }}
                    className="flex items-center gap-x-12 sm:gap-x-16 pr-12 sm:pr-16 whitespace-nowrap"
                >
                    {duplicatedItems.map((item, index) => {
                        const isEven = index % 2 === 0;
                        return (
                            <React.Fragment key={index}>
                                {/* Item Text Container matching the typography and color weights of the website theme */}
                                <div className="flex items-center font-display tracking-tight text-2xl sm:text-4xl md:text-5xl select-none">
                                    {item.type === 'two-tone' ? (
                                        <div className="flex items-center">
                                            <span className="text-white/30 font-light tracking-tight">
                                                {item.part1}
                                            </span>
                                            <span className="text-neutral-100 font-extrabold ml-2 sm:ml-3 tracking-tight">
                                                {item.part2}
                                            </span>
                                        </div>
                                    ) : (
                                        <span className={item.bold ? "text-neutral-100 font-extrabold tracking-tight" : "text-white/40 font-light tracking-tight"}>
                                            {item.text}
                                        </span>
                                    )}
                                </div>

                                {/* Alternating glowing dots (glowing cinematic accent red & premium movie gold) */}
                                {isEven ? (
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-accent-red shrink-0 shadow-[0_0_8px_#D62828]" />
                                ) : (
                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-gold shrink-0 shadow-[0_0_8px_#D4AF37]" />
                                )}
                            </React.Fragment>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
