import React, { useState, useEffect, useRef } from 'react';
import { useScroll, useTransform, useSpring, useMotionValue } from 'motion/react';
import { Artist, artistsData } from '../../data/artists';
import { Project } from '../../types';
import { projectsData } from '../../data/portfolio';
import Header from './Header';
import Bio from './Bio';
import Content from './Content';
import Portfolio from './Portfolio';
import Gallery from './Gallery';
import Similar from './Similar';

interface ArtistDetailPageProps {
  artist: Artist;
  onBack: () => void;
  onSelectProject: (project: Project) => void;
  onShowMessage: (msg: string, type: 'info' | 'success') => void;
  onSelectArtist: (artist: Artist) => void;
}

export default function ArtistDetailPage({
  artist,
  onBack,
  onSelectProject,
  onShowMessage,
  onSelectArtist
}: ArtistDetailPageProps) {
  const pageRef = useRef<HTMLDivElement>(null);

  // Mouse coordinate parallax for clean 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { stiffness: 90, damping: 20, mass: 0.8 };
  const smoothMouseX = useSpring(mouseX, springConfig);
  const smoothMouseY = useSpring(mouseY, springConfig);

  const cardRotateX = useTransform(smoothMouseY, [-0.5, 0.5], [6, -6]);
  const cardRotateY = useTransform(smoothMouseX, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!pageRef.current) return;
    mouseX.set((e.clientX / window.innerWidth) - 0.5);
    mouseY.set((e.clientY / window.innerHeight) - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Scroll to top on mount or artist change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [artist.id]);

  // Find real portfolio projects connected to this artist
  const associatedProjects = projectsData.filter(project => {
    const isFeatured = artist.featuredWorks?.some(work =>
      work.toLowerCase() === project.title.toLowerCase() ||
      project.title.toLowerCase().includes(work.toLowerCase())
    );

    const isDirector = project.director?.toLowerCase() === artist.name.toLowerCase() ||
      project.director?.toLowerCase().includes(artist.name.toLowerCase());

    const isInCredits = project.credits?.some(credit =>
      credit.toLowerCase().includes(artist.name.toLowerCase())
    );

    const isRoleMatched = project.role?.toLowerCase().includes(artist.name.toLowerCase());

    return isFeatured || isDirector || isInCredits || isRoleMatched;
  });

  // Dynamic recommendations for similar artists
  const otherArtists = artistsData.filter(a => a.id !== artist.id).slice(0, 2);



  return (
    <div
      ref={pageRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-screen bg-bg-dark pb-0 text-neutral-200 select-none overflow-x-clip"
    >
      <Header artist={artist} cardRotateX={cardRotateX} cardRotateY={cardRotateY}>

        <Bio
          artist={artist}
        />

        <Content
          artist={artist}
          projects={associatedProjects.length > 0 ? associatedProjects : projectsData.slice(0, 4)}
        />

        <Portfolio
          projects={associatedProjects.length > 0 ? associatedProjects : projectsData.slice(0, 4)}
          onSelectProject={onSelectProject}
        />

        <Gallery
          artist={artist}
        />

        <Similar
          otherArtists={otherArtists}
          onSelectArtist={onSelectArtist}
          onShowMessage={onShowMessage}
          onBack={onBack}
        />

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