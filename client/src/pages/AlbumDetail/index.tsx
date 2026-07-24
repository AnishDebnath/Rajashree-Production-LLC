import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { Album } from '../../data/albums';
import Header from './Header';
import Specs from './Specs';
import Gallery from './Gallery';
import Content from './Content';

interface AlbumDetailPageProps {
  album: Album;
  onBack: () => void;
  onShowMessage: (msg: string, type: 'info' | 'success') => void;
  onSelectAlbum: (album: Album) => void;
  onCollaborateWithContext?: (albumName: string) => void;
}

export default function AlbumDetailPage({
  album,
  onBack,
  onShowMessage,
  onSelectAlbum,
  onCollaborateWithContext
}: AlbumDetailPageProps) {
  const containerRef = useRef<HTMLDivElement>(null);


  // Mouse tilt variables for card hover
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 95, damping: 22, mass: 0.7 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const heroRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [6, -6]);
  const heroRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Scroll to top instantly on mount or album change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [album]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen text-neutral-200 pb-0 overflow-x-clip antialiased select-none bg-bg-dark"
    >
      <Header album={album} heroRotateX={heroRotateX} heroRotateY={heroRotateY}>

        {/* Specification Section */}
        <Specs album={album} />

        {/* Gallery Section */}
        <Gallery album={album} />

        {/* Case Study - Highlights, Challenges, Behind the Scenes */}
        <Content album={album} />

        {/* Back Button (Return to showcase grid) */}
        <div className="flex justify-center mt-12 sm:mt-16">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBack}
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-red hover:bg-[#ff3b3b] text-white font-sans font-bold text-[10px] sm:text-xs tracking-widest uppercase cursor-pointer select-none transition-all duration-300"
          >
            <span>Other Albums</span>
          </motion.button>
        </div>

      </Header>

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
  );
}
