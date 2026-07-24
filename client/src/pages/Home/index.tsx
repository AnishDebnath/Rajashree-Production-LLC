import { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform } from 'motion/react';
import Marquee from '../../components/ui/Marquee';
import { Project } from '../../types';
import { projectsData } from '../../data/portfolio';
import { blogsData, BlogPost } from '../../data/blogs';

import HeroBanner from '../../components/common/hero/HeroBanner';
import IntroBanner from './IntroBanner';
import BrandPartners from './BrandPartners';
import FeaturedPortfolio from './FeaturedPortfolio';
import WorkflowProcess from './WorkflowProcess';
import FeaturedWork from './FeaturedWork';
import SocialReels from './SocialReels';
import AboutSection from '../../components/common/AboutSection';
import Testimonial from '../../components/common/Testimonial';
import FAQ from '../../components/common/FAQ';
import Blogs from './Blogs';
import {
  heroSlides,
  featuredProjects,
  preProductionCarouselImages,
  productionCarouselImages,
  postProductionCarouselImages,
  faqs,
  testimonials,
  industries,
} from '../../data/home';

interface HomePageProps {
  setActiveTab: (tab: string) => void;
  onShowMessage: (msg: string, type?: 'info' | 'success') => void;
  onProjectClick?: (project: Project) => void;
  onSelectBlog?: (blog: BlogPost) => void;
}

export default function HomePage({ setActiveTab, onShowMessage, onProjectClick, onSelectBlog }: HomePageProps) {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [currentHeroSlide, setCurrentHeroSlide] = useState(0);

  // Scrolling portfolio carousel refs and hooks
  const portfolioSectionRef = useRef<HTMLDivElement>(null);
  const portfolioTrackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: portfolioScrollProgress } = useScroll({
    target: portfolioSectionRef,
    offset: ["start start", "end end"]
  });

  const [portfolioTranslateRange, setPortfolioTranslateRange] = useState<[string, string]>(["0px", "0px"]);

  // Responsive layout detection
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (!portfolioTrackRef.current) return;
      const windowWidth = window.innerWidth;
      const cardWidth = windowWidth < 640 ? 300 : 420;
      const gap = windowWidth < 640 ? 16 : 32;

      // Responsive padding matching max-w-6xl mx-auto px-6 sm:px-12 md:px-16
      const leftPadding = windowWidth > 1152
        ? (windowWidth - 1152) / 2 + 64
        : (windowWidth < 640 ? 24 : 48);

      const lastCardOffset = (featuredProjects.length - 1) * (cardWidth + gap);

      const startX = windowWidth - cardWidth - 24;
      const endX = - (lastCardOffset - leftPadding);

      setPortfolioTranslateRange([`${startX}px`, `${endX}px`]);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    const timer = setTimeout(handleResize, 150);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, []);

  const portfolioX = useTransform(portfolioScrollProgress, [0, 1], portfolioTranslateRange);

  const handleCardClick = (projectId: string) => {
    const project = projectsData.find(p => p.id === projectId);
    if (project && onProjectClick) {
      onProjectClick(project);
      window.scrollTo({ top: 0, behavior: 'instant' });
      onShowMessage(`Opening cinematic project: "${project.title}"`, "success");
    } else {
      setActiveTab('projects');
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextTestimonial();
    }, 5000);
    return () => clearInterval(timer);
  }, [activeTestimonial]);

  return (
    <div className="relative w-full bg-bg-dark text-neutral-200 font-sans">

      {/* 1. HERO BANNER SECTION */}
      <HeroBanner
        heroSlides={heroSlides}
        currentHeroSlide={currentHeroSlide}
        setCurrentHeroSlide={setCurrentHeroSlide}
      />


      {/* Subsequent sections wrapper with solid, opaque ambient gradient */}
      <div
        className="relative w-full z-20"
        style={{
          background: 'linear-gradient(180deg, #050505 0%, #100e07 50%, #030303 100%)'
        }}
      >
        {/* 2. INTRO BANNER / SHOWCASE SECTION */}
        <IntroBanner
          heroSlides={heroSlides}
          currentHeroSlide={currentHeroSlide}
          setCurrentHeroSlide={setCurrentHeroSlide}
          isMobile={isMobile}
        />


        {/* 3. BRAND PARTNERS SECTION */}
        <BrandPartners />

        {/* 4. FEATURED PORTFOLIO SECTION */}
        <FeaturedPortfolio
          portfolioSectionRef={portfolioSectionRef}
          portfolioTrackRef={portfolioTrackRef}
          portfolioX={portfolioX}
          featuredProjects={featuredProjects}
          handleCardClick={handleCardClick}
          setActiveTab={setActiveTab}
          onShowMessage={onShowMessage}
        />


        {/* 5. WORKFLOW PROCESS SECTION */}
        <WorkflowProcess
          setActiveTab={setActiveTab}
          onShowMessage={onShowMessage}
          preProductionCarouselImages={preProductionCarouselImages}
          productionCarouselImages={productionCarouselImages}
          postProductionCarouselImages={postProductionCarouselImages}
        />


        {/* 6. FEATURED WORK / INDUSTRIES SECTION */}
        <FeaturedWork
          industries={industries}
          setActiveTab={setActiveTab}
          onShowMessage={onShowMessage}
        />


        {/* 7. SOCIAL REELS & SHORTS WAVE SHOWCASE */}
        <SocialReels onShowMessage={onShowMessage} />


        {/* 8. ABOUT OUR COMPANY / AGENCY SECTION */}
        <AboutSection
          showCta
          onNavigateToAbout={() => setActiveTab('about')}
          onShowMessage={onShowMessage}
        />


        {/* 9. CLIENT CHRONICLES TESTIMONIALS SLIDER */}
        <Testimonial
          testimonials={testimonials}
          activeTestimonial={activeTestimonial}
          setActiveTestimonial={setActiveTestimonial}
          prevTestimonial={prevTestimonial}
          nextTestimonial={nextTestimonial}
        />


        {/* 10. FAQs ACCORDION SECTION */}
        <FAQ faqs={faqs} onShowMessage={onShowMessage} sectionId="home-faqs" />


        {/* 11. BLOGS GRID SECTION */}
        <Blogs
          blogsData={blogsData}
          onSelectBlog={onSelectBlog}
          setActiveTab={setActiveTab}
          onShowMessage={onShowMessage}
        />


        {/* 12. MARQUEE SCROLL */}
        <div className="relative w-full bg-bg-dark" id="home-marquee-section">
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
  );
}
