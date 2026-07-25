import { useScroll, useTransform, motion, MotionValue } from 'motion/react';
import { ReactNode } from 'react';
import { Artist } from '../../data/artists';

interface HeaderProps {
  artist: Artist;
  cardRotateX: MotionValue<number>;
  cardRotateY: MotionValue<number>;
  children: ReactNode;
}

export default function Header({ artist, cardRotateX, cardRotateY, children }: HeaderProps) {
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
            src={artist.avatar}
            alt={artist.name}
            referrerPolicy="no-referrer"
            loading="lazy"
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

      {/* Main Page Layout Container */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12 pt-32 md:pt-36 flex flex-col">

        {/* Intro Meta Info Overlaying Parallax */}
        <div className="max-w-3xl flex flex-col gap-5 text-left">
          <div className="flex flex-wrap items-center gap-2.5 font-mono text-[10px] tracking-[0.25em] font-bold text-gold uppercase">
            <span>{artist.role}</span>
            <span className="text-white/20">â€¢</span>
            <span>{artist.experience} EXPERIENCE</span>
            <span className="text-white/20">â€¢</span>
            <span className="text-neutral-400">CREATIVE DIRECTIVE</span>
          </div>

          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-white">
            {artist.name}
          </h1>

          <p className="font-sans text-neutral-400 text-sm sm:text-base md:text-lg leading-relaxed font-light max-w-2xl">
            {artist.bio}
          </p>
        </div>

        {/* Portrait Image with mouse tilt */}
        <motion.div
          style={{ rotateX: cardRotateX, rotateY: cardRotateY, transformStyle: 'preserve-3d', perspective: 1200 }}
          className="w-full relative aspect-video bg-black rounded-4xl overflow-hidden border border-gold/15 shadow-[0_35px_70px_rgba(0,0,0,0.9),inset_0_2px_4px_rgba(255,255,255,0.05)] group/player"
        >
          <img
            src={artist.avatar}
            alt={artist.name}
            referrerPolicy="no-referrer"
            loading="lazy"
            className="w-full h-full object-cover transition-all duration-700 ease-out brightness-100 scale-100 group-hover/player:scale-[1.01]"
            style={{ transform: 'translateZ(30px)' }}
          />
        </motion.div>

        {children}
      </div>
    </>
  );
}