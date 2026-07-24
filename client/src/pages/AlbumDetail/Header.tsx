import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import { ReactNode } from 'react';
import { Album } from '../../data/albums';

interface HeaderProps {
  album: Album;
  heroRotateX: MotionValue<number>;
  heroRotateY: MotionValue<number>;
  children: ReactNode;
}

export default function Header({ album, heroRotateX, heroRotateY, children }: HeaderProps) {
  const { scrollY } = useScroll();
  const backdropY = useTransform(scrollY, [0, 600], [0, 150]);
  const backdropOpacity = useTransform(scrollY, [0, 600], [0.65, 0.25]);

  return (
    <>
      {/* Immersive Fixed Parallax Backdrop Banner */}
      <div className="absolute top-0 left-0 right-0 h-[65vh] w-full overflow-hidden pointer-events-none z-0">
        <motion.div
          style={{ y: backdropY, opacity: backdropOpacity }}
          className="relative w-full h-full"
        >
          <img
            src={album.coverImage}
            alt={album.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center filter scale-[1.05] brightness-[0.45] contrast-[1.1] saturate-[0.95]"
            style={{
              WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0) 100%)',
              maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.85) 60%, rgba(0,0,0,0) 100%)',
            }}
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-linear-to-b from-bg-dark via-bg-dark/60 to-transparent pointer-events-none z-10" />
          <div className="absolute inset-x-0 bottom-0 h-64 bg-linear-to-t from-bg-dark via-bg-dark/70 to-transparent pointer-events-none z-10" />
        </motion.div>
      </div>

      {/* Decorative ambient glowing lights */}
      <div className="absolute top-[20vh] left-1/4 w-125 h-125 rounded-full bg-gold/3 blur-[150px] pointer-events-none" />
      <div className="absolute top-[50vh] right-1/4 w-150 h-150 rounded-full bg-accent-red/3 blur-[180px] pointer-events-none" />

      {/* Main Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 pt-32 sm:pt-36 flex flex-col items-stretch">

        {/* Intro Meta Info and Title Details Block */}
        <div className="max-w-3xl flex flex-col gap-4 text-left mb-12">
          <div className="flex flex-wrap items-center gap-2.5 font-mono text-[10px] tracking-[0.25em] font-bold text-gold uppercase">
            <span>{album.category}</span>
            <span className="text-white/20">•</span>
            <span>{album.location}</span>
            <span className="text-white/20">•</span>
            <span className="text-neutral-400">{album.year}</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white">
            {album.title}
          </h1>

          <p className="font-sans text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-2xl mt-2">
            "{album.description}"
          </p>
        </div>

        {/* Cover Presentation Image with mouse tilt */}
        <motion.div
          style={{ rotateX: heroRotateX, rotateY: heroRotateY, transformStyle: 'preserve-3d', perspective: 1200 }}
          className="w-full relative aspect-16/7 sm:aspect-21/9 bg-black rounded-3xl sm:rounded-4xl overflow-hidden border border-gold/15 shadow-[0_30px_60px_rgba(0,0,0,0.85),inset_0_1px_2px_rgba(255,255,255,0.05)] group/cover mb-16 sm:mb-20"
        >
          <img
            src={album.coverImage}
            alt={album.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-all duration-700 ease-out brightness-95 group-hover/cover:scale-[1.015] group-hover/cover:brightness-100"
            style={{ transform: 'translateZ(20px)' }}
          />
        </motion.div>

        {children}
      </div>
    </>
  );
}