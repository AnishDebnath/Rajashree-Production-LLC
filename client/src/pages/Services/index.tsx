import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import Marquee from '../../components/ui/Marquee';
import { CategoryInteractiveCard } from './CategoryInteractiveCard';
import { categoriesData } from '../../data/services';
import StudioAwaits from './StudioAwaits';
import PreProduction from './PreProduction';
import Production from './Production';
import PostProduction from './PostProduction';
import FAQs from './FAQs';

interface ServicesPageProps {
  onCollaborateClick: () => void;
  onShowMessage: (msg: string, type: 'info' | 'success') => void;
  onCollaborateWithContext?: (projectName: string) => void;
}

export default function ServicesPage({ onCollaborateClick, onShowMessage, onCollaborateWithContext }: ServicesPageProps) {
  const [scrollYState, setScrollYState] = useState(0);
  const [globalCategoryStep, setGlobalCategoryStep] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  useEffect(() => {
    const timer = setInterval(() => {
      setGlobalCategoryStep((prev) => prev + 1);
    }, 1400);
    return () => clearInterval(timer);
  }, []);

  // Mouse coordinate springs for parallax
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

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const timer = setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 250);
      return () => clearTimeout(timer);
    }
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
    <div className="relative w-full bg-bg-dark text-neutral-200 font-sans" id="services-page-root">

      {/* 1. CINEMATIC HERO BACKGROUND (Sticky) */}
      <div className="sticky top-0 h-dvh w-full z-0 pointer-events-none overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/src/assets/images/film-crew-set-kolkata.jpg"
            alt="Film Production Set in Kolkata"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center opacity-75 scale-100 filter brightness-65 contrast-110"
          />
          {/* Gradients to seamlessly blend the image and provide high contrast readability for text */}
          <div className="absolute inset-y-0 left-0 w-full md:w-3/4 bg-linear-to-r from-bg-dark via-bg-dark/85 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-black/30 pointer-events-none" />

          {/* Top shadow mask */}
          <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-bg-dark via-bg-dark/70 to-transparent pointer-events-none" />
        </div>
      </div>

      {/* 2. CINEMATIC HERO CONTENT & PAGE FLOW (Relative overlay) */}
      <div className="relative z-10 mt-[-100dvh]">
        <section
          ref={heroRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="h-dvh w-full flex items-center justify-start overflow-hidden bg-transparent select-none perspective-distant"
          id="services-hero-section"
        >

          {/* Hero content */}
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
            <motion.div
              className="max-w-2xl relative"
              style={{ x: textX, y: textY }}
            >
              {/* Elegant design wireline */}
              <div className="absolute -left-50 -right-250 top-[40%] h-px bg-white/5 pointer-events-none -z-10 hidden md:block" />

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="font-display font-bold tracking-tight text-4xl sm:text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-4 md:mb-6 relative inline-block text-transparent bg-clip-text bg-linear-to-r from-white via-neutral-100 to-neutral-400"
              >
                Services
                <span className="absolute left-full top-[55%] ml-6 w-96 h-px bg-white/10 hidden lg:block" />
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-sans text-neutral-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-lg font-normal mt-1 md:mt-2"
              >
                Join us on a journey where ideas transform into captivating video content, with a dash of creativity and a whole lot of fun.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Aligned Scroll Indicator */}
          <motion.div
            style={{ opacity: scrollIndicatorOpacity }}
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
        </section>

        {/* Subsequent sections wrapper with solid, opaque ambient gradient */}
        <div
          className="relative w-full z-20"
          style={{
            background: 'linear-gradient(180deg, #050505 0%, #100e07 50%, #030303 100%)'
          }}
        >
          {/* 2. STUDIO AWAITS SECTION */}
          <StudioAwaits
            onCollaborateClick={onCollaborateClick}
            onShowMessage={onShowMessage}
          />

          {/* 3. PRE-PRODUCTION SECTION */}
          <PreProduction />

          {/* 4. PRODUCTION SECTION */}
          <Production />

          {/* 5. POST-PRODUCTION SECTION */}
          <PostProduction />

          {/* 6. CATEGORIES EXPERTS GRID LIST */}
          <section className="relative py-24 px-4 sm:px-6 md:px-12" id="categories-section">
            <div className="max-w-6xl mx-auto bg-neutral-950/40 backdrop-blur-md rounded-3xl border border-white/10 p-6 sm:p-10 lg:p-14 space-y-20 shadow-2xl">

              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h2 className="font-sans font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-tight">
                  We are your experts in these categories
                </h2>
                <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed font-light">
                  Our creative toolbox overflows with video possibilities! From captivating stories to informative animations, we craft videos that fit every need.
                </p>
              </div>

              {/* Cards Grid structured elegantly matching the mockup design precisely with interactive auto-cycling image accordions */}
              <div className="grid grid-cols-1 gap-y-24 max-w-3xl mx-auto">
                {categoriesData.map((cat, idx) => (
                  <CategoryInteractiveCard
                    key={idx}
                    cat={cat}
                    catIndex={idx}
                    globalStep={globalCategoryStep}
                    onCollaborateWithContext={onCollaborateWithContext}
                    onCollaborateClick={onCollaborateClick}
                    onShowMessage={onShowMessage}
                  />
                ))}
              </div>

            </div>
          </section>

          {/* 7. FAQS ACCORDION SECTION */}
          <FAQs onShowMessage={onShowMessage} />

          {/* 8. MARQUEE TEXT SECTION */}
          <div className="relative w-full bg-bg-dark" id="services-marquee-section">
            <Marquee />

            {/* Seamless Melt/Blend Transition with the CTA's Fixed Background at the bottom with overlap */}
            <div
              className="absolute left-0 right-0 h-64 pointer-events-none z-30 overflow-hidden"
              style={{ bottom: '-256px' }}
            >
              <div
                className="w-full h-full absolute inset-0"
                style={{
                  background: 'linear-gradient(to bottom, #050505 0%, #050505 20%, rgba(5, 5, 5, 0.85) 30%, rgba(5, 5, 5, 0) 100%)'
                }}
              />
              <div
                className="w-full h-48 absolute top-8 backdrop-blur-xs"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)'
                }}
              />
              <div
                className="w-full h-32 absolute top-8 backdrop-blur-md"
                style={{
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
                }}
              />
            </div>
          </div>
          {/* End of subsequent sections gradient wrapper */}
        </div>

      </div>
    </div>
  );
}
