import React, { useRef, useEffect, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';

interface CtaButton {
    label: string;
    onClick: () => void;
}

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface HeroSectionProps {
    /** Background image URL (required for 'left' layout, optional for 'center') */
    backgroundImage?: string;
    /** Main title text or element */
    title: ReactNode;
    /** Subtitle description */
    subtitle?: string;
    /** Gold eyebrow label (center layout only) */
    eyebrow?: string;
    /** Breadcrumb trail */
    breadcrumbs?: BreadcrumbItem[];
    /** Primary CTA button */
    primaryCta?: CtaButton;
    primaryCta?: CtaButton;
    /** Secondary CTA button */
    secondaryCta?: CtaButton;
    /** Show scroll indicator at bottom (left layout only, default true) */
    showScrollIndicator?: boolean;
    /** Include sticky background (left layout only, default true). Set false when page-level bg handles it */
    withStickyBg?: boolean;
    /** Layout variant */
    layout?: 'left' | 'center';
}

export default function HeroSection({
    backgroundImage,
    title,
    subtitle,
    eyebrow,
    breadcrumbs,
    primaryCta,
    secondaryCta,
    showScrollIndicator = true,
    withStickyBg = true,
    layout = 'left',
}: HeroSectionProps) {
    const [scrollYState, setScrollYState] = React.useState(0);
    const heroRef = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();

    // Mouse coordinates mapped to springs for absolute fluid performance
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const springConfig = { stiffness: 90, damping: 22, mass: 0.6 };
    const smoothMouseX = useSpring(mouseX, springConfig);
    const smoothMouseY = useSpring(mouseY, springConfig);

    // Transform coordinates into translations for text parallax
    const textX = useTransform(smoothMouseX, [-0.5, 0.5], [-12, 12]);
    const textY = useTransform(smoothMouseY, [-0.5, 0.5], [-12, 12]);

    // Smooth scroll-linked 3D transforms for the Hero folding effect
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

    const opacityIndicator = Math.max(0, 1 - scrollYState / 280);

    // Left-aligned fullscreen layout (Albums, Artists, Projects, Home)
    if (layout === 'left') {
        return (
            <>
                {withStickyBg && (
                    <>
                        {/* 1. CINEMATIC HERO BACKGROUND (Sticky) */}
                        <div className="sticky top-0 h-dvh w-full z-0 pointer-events-none overflow-hidden">
                            <div className="absolute inset-0">
                                <img
                                    src={backgroundImage || '/src/assets/images/kolkata-film-hero.jpg'}
                                    alt="Cinematic Hero Background"
                                    referrerPolicy="no-referrer"
                                    loading="lazy"
                                    className="w-full h-full object-cover object-center opacity-85 scale-100 filter brightness-75 contrast-110"
                                />
                                {/* Gradients to blend the image seamlessly */}
                                <div className="absolute inset-y-0 left-0 w-full md:w-3/4 bg-linear-to-r from-bg-dark via-bg-dark/85 to-transparent pointer-events-none" />
                                <div className="absolute inset-0 bg-black/15 pointer-events-none" />

                                {/* Top shadow mask */}
                                <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-bg-dark via-bg-dark/70 to-transparent pointer-events-none" />
                            </div>
                        </div>
                    </>
                )}

                {/* 2. CINEMATIC HERO CONTENT & PAGE FLOW */}
                <section
                    ref={heroRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    className={`relative w-full flex items-center justify-start overflow-hidden bg-transparent select-none perspective-distant ${withStickyBg ? 'mt-[-100dvh] h-dvh z-10' : 'min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh]'}`}
                >
                    {/* Main Content Container with 3D scroll-linked zoom out and folding rotation */}
                    <motion.div
                        style={{
                            scale: smoothScale,
                            rotateX: smoothRotateX,
                            z: smoothTranslateZ,
                            y: smoothTranslateY,
                            opacity: smoothOpacity,
                            transformStyle: 'preserve-3d',
                        }}
                        className="relative z-10 max-w-5xl mx-auto px-7 w-full h-full flex flex-col justify-center pt-20"
                    >
                        {/* Headline / Description Block with subtle 3D hover parallax */}
                        <motion.div
                            className="max-w-2xl relative"
                            style={{ x: textX, y: textY }}
                        >
                            {/* Aesthetic Horizontal Divider Behind Heading */}
                            <div className="absolute -left-50 -right-250 top-[40%] h-px bg-white/5 pointer-events-none -z-10 hidden md:block" />

                            {/* Breadcrumb trail */}
                            {breadcrumbs && breadcrumbs.length > 0 && (
                                <motion.nav
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="flex items-center gap-2 mb-4 md:mb-6 font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase"
                                >
                                    {breadcrumbs.map((crumb, idx) => (
                                        <span key={idx} className="flex items-center gap-2">
                                            {idx > 0 && (
                                                <span className="text-neutral-600 font-light text-[9px]">/</span>
                                            )}
                                            {crumb.href ? (
                                                <span className="text-neutral-500 hover:text-gold transition-colors duration-200">
                                                    {crumb.label}
                                                </span>
                                            ) : (
                                                <span className="text-gold">{crumb.label}</span>
                                            )}
                                        </span>
                                    ))}
                                </motion.nav>
                            )}

                            {/* Title with elegant gradient text */}
                            <motion.h1
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                className="font-display font-bold tracking-tight text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-4 md:mb-6 relative inline-block text-transparent bg-clip-text bg-linear-to-r from-white via-neutral-100 to-neutral-400"
                            >
                                {title}
                                {/* Elegant design detail */}
                                <span className="absolute left-full top-[55%] ml-6 w-96 h-px bg-white/10 hidden lg:block" />
                            </motion.h1>

                            {/* Subtitle */}
                            {subtitle && (
                                <motion.p
                                    initial={{ opacity: 0, y: 15 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                                    className="font-sans text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg font-normal mt-1 md:mt-2"
                                >
                                    {subtitle}
                                </motion.p>
                            )}
                        </motion.div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    {showScrollIndicator && (
                        <motion.div
                            style={{ opacity: opacityIndicator }}
                            className="absolute bottom-10 md:bottom-16 left-1/2 -translate-x-1/2 w-full max-w-5xl px-7 z-30 pointer-events-none"
                        >
                            <div className="flex flex-col items-start gap-3 md:gap-4 w-max">
                                <span className="font-mono text-[9px] tracking-[0.35em] uppercase text-neutral-300 font-medium block">
                                    SCROLL
                                </span>
                                <div className="w-[1.5px] h-12 md:h-16 bg-linear-to-b from-white/30 to-transparent relative overflow-hidden rounded-full">
                                    <motion.div
                                        animate={{
                                            y: ['-100%', '100%'],
                                        }}
                                        transition={{
                                            duration: 2,
                                            repeat: Infinity,
                                            ease: 'easeInOut',
                                        }}
                                        className="absolute top-0 left-0 w-full h-2/3 bg-linear-to-b from-transparent via-gold to-transparent shadow-[0_0_8px_#d4af37]"
                                    />
                                </div>
                            </div>
                        </motion.div>
                    )}
                </section>
            </>
        );
    }

    // Centered section layout (Blogs)
    return (
        <section
            ref={heroRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative z-10 min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center px-6 pointer-events-auto"
            style={{ perspective: '1200px' }}
        >
            {/* Decorative glints matching Hero parallax aesthetic */}
            <div className="absolute top-[15%] left-[10%] w-48 h-48 rounded-full bg-gold/3 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[20%] right-[8%] w-64 h-64 rounded-full bg-gold/2 blur-[150px] pointer-events-none" />

            <motion.div
                className="max-w-5xl w-full mx-auto flex flex-col items-center text-center gap-8 py-24"
                style={{
                    scale: smoothScale,
                    rotateX: smoothRotateX,
                    translateZ: smoothTranslateZ,
                    translateY: smoothTranslateY,
                    opacity: smoothOpacity,
                }}
            >
                {/* Eyebrow label with sparkling design accent */}
                {eyebrow && (
                    <div className="flex items-center gap-3 text-gold/80 font-mono text-[10px] sm:text-[11px] tracking-[0.3em] uppercase font-bold">
                        <span className="w-6 h-px bg-gold/40" />
                        <span>{eyebrow}</span>
                        <span className="w-6 h-px bg-gold/40" />
                    </div>
                )}

                {/* Breadcrumb trail */}
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <motion.nav
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                        className="flex items-center gap-2 font-sans text-[10px] sm:text-[11px] font-bold tracking-[0.15em] uppercase"
                    >
                        {breadcrumbs.map((crumb, idx) => (
                            <span key={idx} className="flex items-center gap-2">
                                {idx > 0 && (
                                    <span className="text-neutral-600 font-light text-[9px]">/</span>
                                )}
                                {crumb.href ? (
                                    <span className="text-neutral-500 hover:text-gold transition-colors duration-200">
                                        {crumb.label}
                                    </span>
                                ) : (
                                    <span className="text-gold">{crumb.label}</span>
                                )}
                            </span>
                        ))}
                    </motion.nav>
                )}

                {/* Main Hero Heading */}
                <motion.h1
                    className="font-display font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.05] tracking-tight"
                    style={{ x: textX, y: textY }}
                >
                    {title}
                </motion.h1>

                {/* Subtitle */}
                {subtitle && (
                    <motion.p
                        className="max-w-xl text-neutral-400 font-sans text-sm sm:text-base leading-relaxed font-light"
                        style={{ x: textX, y: textY }}
                    >
                        {subtitle}
                    </motion.p>
                )}

                {/* CTA Buttons */}
                {(primaryCta || secondaryCta) && (
                    <motion.div
                        className="flex items-center gap-4 mt-4"
                        style={{ x: textX, y: textY }}
                    >
                        {primaryCta && (
                            <button
                                onClick={primaryCta.onClick}
                                className="relative inline-flex items-center gap-2.5 px-6 py-3 text-xs font-bold tracking-widest uppercase rounded-full bg-accent-red text-white hover:bg-accent-red/90 transition-all duration-300 cursor-pointer"
                            >
                                {primaryCta.label}
                            </button>
                        )}
                        {secondaryCta && (
                            <button
                                onClick={secondaryCta.onClick}
                                className="relative inline-flex items-center gap-2.5 px-6 py-3 text-xs font-bold tracking-widest uppercase rounded-full border border-white/20 text-white/90 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                            >
                                {secondaryCta.label}
                            </button>
                        )}
                    </motion.div>
                )}
            </motion.div>
        </section>
    );
}
