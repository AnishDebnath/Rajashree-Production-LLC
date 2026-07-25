import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../../types';
import ThreeDCardEffect from '../../components/ThreeDCardEffect';

interface PortfolioProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export default function Portfolio({ projects, onSelectProject }: PortfolioProps) {
  const baseLength = projects.length;
  if (baseLength === 0) return null;

  const extendedList = [...projects, ...projects, ...projects, ...projects, ...projects];
  const [activeIndex, setActiveIndex] = useState(baseLength * 2);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const [visibleCount, setVisibleCount] = useState(3);
  useEffect(() => {
    const updateCount = () => {
      if (window.innerWidth >= 1024) setVisibleCount(3);
      else if (window.innerWidth >= 768) setVisibleCount(2);
      else setVisibleCount(1);
    };
    updateCount();
    window.addEventListener('resize', updateCount);
    return () => window.removeEventListener('resize', updateCount);
  }, []);

  // Auto-slide carousel
  useEffect(() => {
    if (isPaused || baseLength === 0) return;
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setActiveIndex(prev => prev + 1);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused, baseLength]);

  // Handle infinite loop wrap-around
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

  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      className="max-w-7xl mx-auto w-full py-16 px-6 md:px-12"
    >
      {/* Heading */}
      <div className="text-left mb-12 flex flex-col items-start w-full">
        <span className="font-mono text-[10px] md:text-[11px] tracking-[0.3em] text-gold font-bold uppercase mb-2 block">
          PORTFOLIO
        </span>
        <div className="flex items-center gap-6 w-full">
          <h2 className="text-section-heading">
            Projects Under Our Production
          </h2>
          <div className="grow h-0.5 bg-gold/40" />
        </div>
      </div>

      {/* Carousel */}
      <div className="relative w-full overflow-hidden py-10">
        <div
          className="flex"
          style={{
            transform: `translateX(-${activeIndex * (100 / visibleCount)}%)`,
            transition: isTransitioning ? 'transform 700ms cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
          }}
        >
          {extendedList.map((member, idx) => (
            <div
              key={idx}
              className="shrink-0 px-3 md:px-3.5 select-none"
              style={{ width: `${100 / visibleCount}%` }}
            >
              <div className="w-full relative aspect-4/3">
                <ThreeDCardEffect
                  onClick={() => onSelectProject(member)}
                  tiltMaxAngle={12}
                  className="group cursor-pointer select-none relative w-full h-full"
                >
                  {/* Background image */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 bg-neutral-950 transition-all duration-500 hover:shadow-[0_24px_50px_rgba(212,175,55,0.08)]"
                    style={{ transform: 'translateZ(25px)', transformStyle: 'preserve-3d' }}
                  >
                    <img
                      src={member.image}
                      alt={`${member.title} showcase`}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-[0.93] group-hover:brightness-100"
                      loading="lazy"
                    />
                    <div
                      className="absolute inset-0 bg-linear-to-t from-black/95 via-black/30 to-transparent z-10 pointer-events-none"
                      style={{ transform: 'translateZ(10px)' }}
                    />
                  </div>

                  {/* Overlay content */}
                  <div
                    className="absolute bottom-6 left-6 right-6 z-20 flex items-end justify-between pointer-events-none"
                    style={{ transform: 'translateZ(55px)' }}
                  >
                    <div className="space-y-1 text-left">
                      <span className="font-mono text-[9px] tracking-widest text-gold/80 font-bold uppercase block mb-1">
                        {member.category}
                      </span>
                      <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight leading-none group-hover:text-gold transition-colors duration-200">
                        {member.title}
                      </h3>
                    </div>
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white group-hover:bg-gold group-hover:text-black group-hover:scale-110 transition-all duration-300 shrink-0">
                      <ArrowUpRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </div>
                  </div>
                </ThreeDCardEffect>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}