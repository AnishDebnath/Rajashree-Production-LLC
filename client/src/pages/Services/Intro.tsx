import { useState } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { gearSlides } from '../../data/services';

interface IntroProps {
    onCollaborateClick: () => void;
    onShowMessage: (msg: string, type: 'info' | 'success') => void;
}

export default function Intro({ onCollaborateClick, onShowMessage }: IntroProps) {
    const [currentGearSlide, setCurrentGearSlide] = useState(1);

    const handleNextGear = () => {
        setCurrentGearSlide((prev) => (prev + 1) % gearSlides.length);
    };

    const handlePrevGear = () => {
        setCurrentGearSlide((prev) => (prev - 1 + gearSlides.length) % gearSlides.length);
    };

    return (
        <section className="relative py-20 z-20 bg-transparent px-6 md:px-12" id="studio-awaits-section">
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

            <div className="max-w-6xl mx-auto text-center space-y-12">

                <div className="space-y-4 max-w-3xl mx-auto">
                    <h2 className="font-sans font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
                        Rent, Shoot, Wow: Our Studio Awaits!
                    </h2>
                    <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed">
                        We've got the coolest tech and all the resources to bring your ideas to life. Book a tour and come be a part of the excitement – we're eager to show you around with a smile!
                    </p>

                    <div className="pt-4">
                        <button
                            onClick={() => {
                                onCollaborateClick();
                                onShowMessage("Scheduling a Studio Tour Briefing with our team!", "success");
                            }}
                            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-red hover:bg-[#ff3b3b] text-white font-sans font-bold text-[10px] sm:text-xs tracking-widest uppercase cursor-pointer select-none transition-all duration-300"
                        >
                            <span>Book a Tour</span>
                        </button>
                    </div>
                </div>

                {/* Interactive Gears Image Carousel with a premium 3D deck transition */}
                <div className="relative max-w-5xl mx-auto pt-6 flex flex-col items-center gap-y-6">
                    <div className="relative w-full h-75 sm:h-100 md:h-120 flex items-center justify-center overflow-hidden">

                        {/* Left navigation arrow button */}
                        <button
                            onClick={handlePrevGear}
                            className="absolute left-4 sm:left-[4%] md:left-[6%] lg:left-[10%] xl:left-[12%] z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 hover:border-gold/50 hover:bg-gold/10 flex items-center justify-center text-neutral-400 hover:text-gold transition-all duration-300 cursor-pointer bg-neutral-950/60 backdrop-blur-md"
                        >
                            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>

                        {/* Cards Stage Container */}
                        <div className="relative w-full h-full flex items-center justify-center overflow-hidden">
                            {gearSlides.map((slide, idx) => {
                                const total = gearSlides.length;
                                let diff = idx - currentGearSlide;
                                if (diff > total / 2) diff -= total;
                                if (diff < -total / 2) diff += total;

                                const isActive = diff === 0;
                                const isLeft = diff === -1;
                                const isRight = diff === 1;

                                let x = '0%';
                                let scale = 0.8;
                                let opacity = 0;
                                let zIndex = 0;
                                let pointerEvents: 'auto' | 'none' = 'none';

                                if (isActive) {
                                    x = '0%';
                                    scale = 1;
                                    opacity = 1;
                                    zIndex = 30;
                                    pointerEvents = 'auto';
                                } else if (isLeft) {
                                    x = '-58%';
                                    scale = 0.82;
                                    opacity = 0.45;
                                    zIndex = 20;
                                    pointerEvents = 'auto';
                                } else if (isRight) {
                                    x = '58%';
                                    scale = 0.82;
                                    opacity = 0.45;
                                    zIndex = 20;
                                    pointerEvents = 'auto';
                                } else if (diff < -1) {
                                    x = '-120%';
                                    scale = 0.65;
                                    opacity = 0;
                                    zIndex = 10;
                                } else if (diff > 1) {
                                    x = '120%';
                                    scale = 0.65;
                                    opacity = 0;
                                    zIndex = 10;
                                }

                                return (
                                    <motion.div
                                        key={idx}
                                        onClick={() => {
                                            if (!isActive) setCurrentGearSlide(idx);
                                        }}
                                        className={`absolute w-[85%] sm:w-[70%] md:w-[60%] lg:w-[55%] aspect-4/3 rounded-2xl overflow-hidden cursor-pointer select-none border transition-all duration-500 ${isActive
                                            ? 'shadow-[0_20px_50px_rgba(0,0,0,0.9)] border-gold/30'
                                            : 'shadow-lg shadow-black/40 border-white/5 hover:border-white/15'
                                            }`}
                                        style={{
                                            zIndex,
                                            pointerEvents,
                                        }}
                                        animate={{
                                            x,
                                            scale,
                                            opacity,
                                        }}
                                        transition={{
                                            type: "spring",
                                            stiffness: 100,
                                            damping: 18,
                                            mass: 0.8
                                        }}
                                    >
                                        {/* Image Frame */}
                                        <div className="absolute inset-0 w-full h-full">
                                            <img
                                                src={slide.image}
                                                alt={slide.title}
                                                referrerPolicy="no-referrer"
                                                className={`w-full h-full object-cover object-center transition-transform duration-700 ${isActive ? 'scale-100' : 'scale-105 brightness-[0.35]'
                                                    }`}
                                            />
                                            {/* Progressive overlay for perfect legibility */}
                                            <div className={`absolute inset-0 bg-linear-to-t from-black/95 via-black/40 to-transparent transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-80'
                                                }`} />
                                        </div>

                                        {/* Brand Label & Heading overlay only - NO descriptions/subheading! */}
                                        <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end text-left z-10 pointer-events-none">
                                            <motion.span
                                                animate={{ opacity: isActive ? 1 : 0.4, y: isActive ? 0 : 5 }}
                                                transition={{ duration: 0.4 }}
                                                className="font-mono text-[8px] sm:text-[9px] text-gold font-bold tracking-[0.25em] uppercase mb-1 sm:mb-2"
                                            >
                                                STUDIO EQUIPMENT
                                            </motion.span>
                                            <motion.h3
                                                animate={{
                                                    opacity: isActive ? 1 : 0.6,
                                                    y: isActive ? 0 : 5,
                                                    scale: isActive ? 1 : 0.95
                                                }}
                                                transition={{ duration: 0.4 }}
                                                className="font-sans font-extrabold text-xs sm:text-base md:text-lg lg:text-xl text-white tracking-tight leading-tight uppercase"
                                            >
                                                {slide.title}
                                            </motion.h3>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Right navigation arrow button */}
                        <button
                            onClick={handleNextGear}
                            className="absolute right-4 sm:right-[4%] md:right-[6%] lg:right-[10%] xl:right-[12%] z-40 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/10 hover:border-gold/50 hover:bg-gold/10 flex items-center justify-center text-neutral-400 hover:text-gold transition-all duration-300 cursor-pointer bg-neutral-950/60 backdrop-blur-md"
                        >
                            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>

                    </div>

                    {/* Dots Indicator */}
                    <div className="flex justify-center gap-x-2 pt-2 z-20">
                        {gearSlides.map((_, idx) => (
                            <button
                                key={idx}
                                onClick={() => setCurrentGearSlide(idx)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentGearSlide ? 'bg-gold w-6' : 'bg-neutral-600 hover:bg-neutral-400'
                                    }`}
                            />
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
