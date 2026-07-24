import { useRef, useEffect, useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface IntroBannerProps {
    heroSlides: { image: string; title: string; brand: string; subtitle: string }[];
    currentHeroSlide: number;
    setCurrentHeroSlide: (idx: number) => void;
    isMobile: boolean;
}

export default function IntroBanner({ heroSlides, currentHeroSlide, setCurrentHeroSlide, isMobile }: IntroBannerProps) {
    const showreelSectionRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress: showreelScrollProgress } = useScroll({
        target: showreelSectionRef,
        offset: ["start start", "end end"]
    });

    // Smooth scroll transformations for Rajashree Production section
    const showreelTitleOpacity = useTransform(showreelScrollProgress, [0, 0.22], [1, 0]);
    const showreelTitleY = useTransform(showreelScrollProgress, [0, 0.22], [0, -40]);

    const bgTextScale = useTransform(showreelScrollProgress, [0, 0.35], [1, 0.85]);
    const bgTextOpacity = useTransform(showreelScrollProgress, [0, 0.2, 0.45], [0.75, 0.45, 0]);

    const cardWidth = useTransform(
        showreelScrollProgress,
        [0.25, 0.75],
        [isMobile ? "85vw" : "55vw", "100vw"]
    );
    const cardHeight = useTransform(
        showreelScrollProgress,
        [0.25, 0.75],
        [isMobile ? "48vw" : "31vw", "100vh"]
    );
    const cardY = useTransform(
        showreelScrollProgress,
        [0, 0.28],
        [isMobile ? "10vh" : "12vh", "0vh"]
    );
    const cardBorderRadius = useTransform(
        showreelScrollProgress,
        [0.45, 0.75],
        ["24px", "0px"]
    );

    return (
        <section
            ref={showreelSectionRef}
            className="relative bg-transparent z-20"
            id="showreel-section"
            style={{ height: "240vh" }}
        >
            {/* Interactive Thumbnail Filmstrip Navigation at the Bottom - Positioned relative to showreel-section top to beat stacking context */}
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-12 sm:mb-16 z-30 flex items-center justify-center select-none pointer-events-auto">
                {/* Sharp, Sleek Filmstrip Container with individual items (matching screenshot exactly) */}
                <div className="flex items-center gap-1 sm:gap-1.5 overflow-visible">
                    {heroSlides.map((slide, idx) => {
                        const isActive = idx === currentHeroSlide;
                        return (
                            <button
                                key={idx}
                                onClick={() => setCurrentHeroSlide(idx)}
                                className={`relative w-16 sm:w-28 aspect-video overflow-visible transition-all duration-500 cursor-pointer flex items-center justify-center ${isActive
                                    ? 'z-10'
                                    : 'hover:scale-[1.02]'
                                    }`}
                                aria-label={`Go to slide ${slide.title}`}
                            >
                                {/* Dynamic Active Label positioned exactly above this active thumbnail, left-aligned, with graceful truncation for lengthy names */}
                                <AnimatePresence>
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 6 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: -6 }}
                                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                                            className="absolute bottom-full left-0 mb-2.5 font-sans text-[10px] sm:text-xs font-bold tracking-[0.15em] text-white uppercase flex items-center gap-1 whitespace-nowrap pointer-events-none drop-shadow-[0_2px_5px_rgba(0,0,0,0.95)]"
                                        >
                                            <span className="truncate max-w-17.5 sm:max-w-27.5 inline-block">{slide.title}</span>
                                            <ArrowUpRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-white/80 shrink-0 stroke-[2.5]" />
                                        </motion.div>
                                    )}
                                </AnimatePresence>

                                {/* Thumbnail Image Wrapper with rounded corners */}
                                <div className={`w-full h-full overflow-hidden border rounded transition-all duration-300 ${isActive ? 'border-gold shadow-[0_4px_20px_rgba(212,175,55,0.45)] ring-1 ring-gold/50' : 'border-white/20 hover:border-white/50 shadow-md bg-black/60'
                                    }`}>
                                    <img
                                        src={slide.image}
                                        alt={slide.title}
                                        className={`w-full h-full object-cover object-center pointer-events-none transition-all duration-300 ${isActive
                                            ? 'opacity-100 brightness-110 contrast-105 scale-100'
                                            : 'opacity-45 brightness-70 contrast-90 hover:opacity-85 hover:brightness-95'
                                            }`}
                                    />
                                </div>

                                {/* Active Slide Bottom Gold Theme Indicator Bar conforming to the rounded shape */}
                                {isActive && (
                                    <motion.div
                                        layoutId="activeUnderline"
                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold rounded-b z-20 shadow-[0_1px_5px_rgba(212,175,55,0.6)]"
                                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                                    />
                                )}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Seamless Melt/Blend Transition with the Hero's Fixed Background */}
            <div className="absolute top-0 left-0 right-0 h-48 -translate-y-full pointer-events-none z-10 overflow-hidden">
                {/* Smooth color gradient from transparent to solid bg-bg-dark */}
                <div className="w-full h-full absolute inset-0 bg-linear-to-t from-bg-dark via-bg-dark/85 to-transparent" />

                {/* Layered progressive backdrop blurs with vertical gradient masks to 'melt' the fixed image */}
                <div
                    className="w-full h-32 absolute bottom-0 backdrop-blur-xs"
                    style={{
                        WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
                        maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)'
                    }}
                />
                <div
                    className="w-full h-20 absolute bottom-0 backdrop-blur-md"
                    style={{
                        WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                        maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
                    }}
                />
            </div>

            {/* Sticky viewport container */}
            <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center bg-transparent z-20">

                {/* Subtly animated theatrical glow beam backdrop */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-neutral-900/40 via-transparent to-transparent pointer-events-none" />

                {/* Giant Bold Gradient-filled text "RAJASHREE PRODUCTION" with beautiful spacing from the top of the viewport */}
                <div className="absolute top-[12vh] sm:top-[16vh] left-0 right-0 w-full flex justify-center pointer-events-none z-0 overflow-hidden">
                    <motion.h2
                        style={{ scale: bgTextScale, opacity: bgTextOpacity }}
                        className="font-display font-black text-[7.5vw] md:text-[8vw] tracking-[-0.04em] leading-none uppercase bg-linear-to-r from-white via-neutral-400 to-transparent bg-clip-text text-transparent select-none text-center px-4 whitespace-nowrap"
                    >
                        RAJASHREE PRODUCTION
                    </motion.h2>
                </div>

                {/* Center-centered Scroll-scaling Video Card */}
                <motion.div
                    style={{
                        width: cardWidth,
                        height: cardHeight,
                        y: cardY,
                        borderRadius: cardBorderRadius
                    }}
                    className="relative overflow-hidden border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.95)] z-10"
                >
                    {/* Dark vignette gradient overlays */}
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-black/20 z-10 pointer-events-none" />

                    {/* Clean inner border bezel */}
                    <div className="absolute inset-0 border border-white/5 rounded-[inherit] z-20 pointer-events-none" />

                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="https://images.unsplash.com/photo-1508739773434-c26b3d09e071?auto=format&fit=crop&q=80&w=1600"
                        src="https://assets.mixkit.co/videos/preview/mixkit-gorgeous-woman-under-rain-looking-at-neon-lights-40441-large.mp4"
                        className="w-full h-full object-cover object-center"
                    />
                </motion.div>

            </div>
        </section>
    );
}
