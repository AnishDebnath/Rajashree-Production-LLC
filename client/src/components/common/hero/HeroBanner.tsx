import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useMotionValue, useSpring, useTransform } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface HeroBannerProps {
    heroSlides: { image: string; title: string; brand: string; subtitle: string }[];
    currentHeroSlide: number;
    setCurrentHeroSlide: React.Dispatch<React.SetStateAction<number>>;
}

export default function HeroBanner({ heroSlides, currentHeroSlide, setCurrentHeroSlide }: HeroBannerProps) {
    const [scrollYState, setScrollYState] = useState(0);
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    useEffect(() => {
        const slideTimer = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % heroSlides.length);
        }, 6000);
        return () => clearInterval(slideTimer);
    }, [heroSlides.length, setCurrentHeroSlide]);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 90, damping: 22, mass: 0.6 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    const textX = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);
    const textY = useTransform(smoothMouseY, [-0.5, 0.5], [-12, 12]);

    // Smooth scroll-linked 3D transforms for the Hero folding effect matching other pages
    const rawScale = useTransform(scrollY, [0, 1000], [1, 0.78]);
    const rawRotateX = useTransform(scrollY, [0, 1000], [0, -22]);
    const rawTranslateZ = useTransform(scrollY, [0, 1000], [0, -140]);
    const rawTranslateY = useTransform(scrollY, [0, 1000], [0, -80]);
    const rawOpacity = useTransform(scrollY, [0, 900], [1, 0.1]);

    const smoothScale = useSpring(rawScale, { stiffness: 85, damping: 22 });
    const smoothRotateX = useSpring(rawRotateX, { stiffness: 85, damping: 22 });
    const smoothTranslateZ = useSpring(rawTranslateZ, { stiffness: 85, damping: 22 });
    const smoothTranslateY = useSpring(rawTranslateY, { stiffness: 85, damping: 22 });
    const smoothOpacity = useSpring(rawOpacity, { stiffness: 85, damping: 22 });

    useEffect(() => {
        const handleScroll = () => {
            setScrollYState(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!heroRef.current) return;
        const rect = heroRef.current.getBoundingClientRect();
        const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
        const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
        mouseX.set(normalizedX);
        mouseY.set(normalizedY);
    };

    const handleMouseLeave = () => {
        mouseX.set(0);
        mouseY.set(0);
    };

    const scrollIndicatorOpacity = Math.max(0, 1 - scrollYState / 280);

    return (
        <section
            ref={heroRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="sticky top-0 h-dvh w-full flex items-center justify-center overflow-hidden bg-transparent select-none perspective-distant z-10"
            id="home-hero-section"
        >
            {/* Background Image Slideshow taking the whole hero section */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                <AnimatePresence initial={false}>
                    <motion.img
                        key={currentHeroSlide}
                        src={heroSlides[currentHeroSlide].image}
                        alt={`Cinematic hero slide ${currentHeroSlide + 1}`}
                        referrerPolicy="no-referrer"
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 0.92, scale: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 1.2, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full object-cover object-center filter brightness-105 contrast-105"
                    />
                </AnimatePresence>
                {/* Subtle gradient overlay to preserve navbar and text readability without darkening the main poster colors */}
                <div className="absolute inset-0 bg-linear-to-b from-bg-dark/60 via-transparent to-bg-dark/50 pointer-events-none" />

                {/* Top shadow mask */}
                <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-bg-dark/70 to-transparent pointer-events-none" />
            </div>
        </section>
    );
}
