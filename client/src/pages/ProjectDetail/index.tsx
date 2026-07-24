import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { Project } from '../../types';
import { artistsData, Artist } from '../../data/artists';
import { projectsData } from '../../data/portfolio';

import ThreeDCardEffect from '../../components/ThreeDCardEffect';
import Header from './Header';
import Content from './Content';
import Casting from './Casting';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import Similar from './Similar';

interface ProjectDetailPageProps {
  project: Project;
  onBack: () => void;
  onCollaborateWithContext: (projectName: string) => void;
  onShowMessage: (msg: string, type: 'info' | 'success') => void;
  onSelectProject?: (project: Project) => void;
  onSelectArtist?: (artist: Artist) => void;
}

export default function ProjectDetailPage({
  project,
  onBack,
  onShowMessage,
  onSelectProject,
  onSelectArtist
}: ProjectDetailPageProps) {
  const pageRef = useRef<HTMLDivElement>(null);

  // Mouse coordinate parallax for subtle 3D card tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 90, damping: 20, mass: 0.8 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const cardRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [8, -8]);
  const cardRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!pageRef.current) return;
    mouseX.set((e.clientX / window.innerWidth) - 0.5);
    mouseY.set((e.clientY / window.innerHeight) - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [project.id]);

  // â”€â”€ Data from project object â”€â”€
  const study = project.caseStudy;
  const testimonials = project.testimonials || [];
  const relatedStills = project.gallery || [];
  const suggestedProjects = projectsData.filter(p => p.id !== project.id).slice(0, 2);

  // Crew list from project.casting â€” all projects have unique casting data
  const crewList = (project.casting ?? []).map(member => {
    const matchedArtist = artistsData.find(a =>
      a.name.toLowerCase().includes(member.name.toLowerCase()) || member.name.toLowerCase().includes(a.name.toLowerCase())
    );
    return { ...member, artistObj: matchedArtist };
  });

  // Infinite Horizontal Loop Slider Logic for Collaborators
  const [visibleCount, setVisibleCount] = useState(4);

  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(4);
      } else if (window.innerWidth >= 768) {
        setVisibleCount(3);
      } else if (window.innerWidth >= 640) {
        setVisibleCount(2);
      } else {
        setVisibleCount(1);
      }
    };
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  const baseLength = crewList.length;
  // Duplicate array 5 times to create a massive buffer for seamless loop sliding
  const extendedList = [...crewList, ...crewList, ...crewList, ...crewList, ...crewList];
  const startIndex = baseLength * 2;
  const [activeIndex, setActiveIndex] = useState(startIndex);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  // Testimonial slider states
  const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
  const [isTestimonialPaused, setIsTestimonialPaused] = useState(false);

  // Reset testimonial slide when project changes
  useEffect(() => {
    setActiveTestimonialIndex(0);
  }, [project.id]);

  // Autoplay timer for Testimonials Slider
  useEffect(() => {
    if (isTestimonialPaused || testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setActiveTestimonialIndex(prev => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isTestimonialPaused, testimonials.length]);

  // Reset slider index when changing projects or crew list updates
  useEffect(() => {
    setActiveIndex(baseLength * 2);
    setIsTransitioning(false);
  }, [project.id, baseLength]);

  // Autoplay timer moving right-to-left
  useEffect(() => {
    if (isPaused || baseLength === 0) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex(prev => prev + 1);
    }, 2800);
    return () => clearInterval(interval);
  }, [isPaused, baseLength]);

  // Check wrap-around state
  useEffect(() => {
    if (baseLength === 0) return;
    if (activeIndex >= baseLength * 3) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setActiveIndex(baseLength * 2 + (activeIndex % baseLength));
      }, 700);
      return () => clearTimeout(timer);
    }
  }, [activeIndex, baseLength]);

  // Re-enable transition on next tick after jumping
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <div
      ref={pageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen bg-bg-dark pb-0 text-neutral-200 select-none overflow-x-clip"
    >
      <Header project={project} cardRotateX={cardRotateX} cardRotateY={cardRotateY} />

      {/* Sections Content ──────────────────────────── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-6 md:gap-8">

        <ThreeDCardEffect
          tiltMaxAngle={4}
          className="w-full relative aspect-21/9 sm:aspect-21/8 bg-black rounded-3xl overflow-hidden border border-white/5 shadow-2xl mb-16"
        >
          <img
            src={project.image}
            alt={`${project.title} Cinematic Wide`}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-[0.8]"
            style={{ transform: 'translateZ(30px)' }}
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
        </ThreeDCardEffect>

        {/* Section Components â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€ */}
        <Content study={study} />

        <Casting
          extendedList={extendedList}
          visibleCount={visibleCount}
          activeIndex={activeIndex}
          isTransitioning={isTransitioning}
          setIsPaused={setIsPaused}
          onSelectArtist={onSelectArtist}
          onShowMessage={onShowMessage}
        />

        <Gallery relatedStills={relatedStills} />

        <Testimonials
          testimonials={testimonials}
          activeTestimonialIndex={activeTestimonialIndex}
          setActiveTestimonialIndex={setActiveTestimonialIndex}
          setIsTestimonialPaused={setIsTestimonialPaused}
        />

        <Similar
          suggestedProjects={suggestedProjects}
          onSelectProject={onSelectProject}
          onShowMessage={onShowMessage}
          onBack={onBack}
        />

      </div>

      {/* Seamless Melt/Blend Transition with the CTA's Fixed Background at the bottom */}
      <div className="relative w-full bg-bg-dark" style={{ height: '1px' }}>
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

    </div>
  );
}
