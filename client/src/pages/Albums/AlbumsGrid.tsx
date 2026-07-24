import React from 'react';
import { motion } from 'motion/react';
import { albumsData, Album } from '../../data/albums';

interface AlbumsGridProps {
  onSelectAlbum: (album: Album) => void;
}

export default function AlbumsGrid({ onSelectAlbum }: AlbumsGridProps) {
  return (
    <section
      className="relative py-24 md:py-36 z-20"
      style={{
        background: 'linear-gradient(180deg, #050505 0%, #100e07 50%, #030303 100%)'
      }}
    >
      {/* Seamless Blend Transition at top */}
      <div className="absolute top-0 left-0 right-0 h-48 -translate-y-full pointer-events-none z-10 overflow-hidden">
        <div className="w-full h-full absolute inset-0 bg-linear-to-t from-bg-dark via-bg-dark/85 to-transparent" />
        <div
          className="w-full h-32 absolute bottom-0 backdrop-blur-xs"
          style={{
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)'
          }}
        />
      </div>

      {/* Stack of Albums */}
      <div className="max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-16">
        {albumsData.map((album, index) => (
          <motion.div
            key={album.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative cursor-pointer overflow-hidden rounded-2xl md:rounded-4xl border border-white/5 hover:border-white/15 bg-neutral-950 transition-all duration-500 shadow-2xl"
            onClick={() => onSelectAlbum(album)}
          >
            {/* Cinema-scope Ultra-wide Image Panel */}
            <div className="relative w-full aspect-16/7 md:aspect-21/9 overflow-hidden">

              {/* 1. Third Image Panel (Bottom layer, stays in place, shown normally on rightmost 10% on hover) */}
              <div className="absolute inset-0 w-full h-full z-10 transition-transform duration-700 ease-[0.25,1,0.5,1] pointer-events-none">
                <img
                  src={album.photos[2]?.url || album.coverImage}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>

              {/* 2. Second Image Panel (Middle layer, slides left by 10% on hover, visible from 80% to 90%) */}
              <div className="absolute inset-0 w-full h-full z-20 border-r-2 border-neutral-950/40 group-hover:border-neutral-950 transition-transform duration-700 ease-[0.25,1,0.5,1] group-hover:translate-x-[-10%] pointer-events-none">
                <img
                  src={album.photos[1]?.url || album.coverImage}
                  alt=""
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>

              {/* 3. First Image Panel (Cover, top layer, slides left by 20% on hover, visible from 0% to 80%) */}
              <div className="absolute inset-0 w-full h-full z-30 border-r-2 border-neutral-950/40 group-hover:border-neutral-950 transition-transform duration-700 ease-[0.25,1,0.5,1] group-hover:translate-x-[-20%]">
                <img
                  src={album.coverImage}
                  alt={album.title}
                  referrerPolicy="no-referrer"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>

              {/* 4. Unified Overlay Vignette for perfect text readability */}
              <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/25 to-transparent z-35 pointer-events-none" />

              {/* 5. Info Overlay (Hidden by default, fades in and rises on hover) */}
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10 z-40 max-w-lg text-left opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0 pointer-events-none">
                {/* Category Label */}
                <span className="font-mono text-[10px] tracking-[0.25em] text-gold font-bold uppercase mb-2 block">
                  {album.category}
                </span>
                {/* Album Title */}
                <h3 className="font-display font-bold text-2xl sm:text-3xl md:text-4xl text-white tracking-tight leading-none group-hover:text-gold transition-colors duration-300">
                  {album.title}
                </h3>
              </div>

              {/* Left/Right Accent border lines for whole card */}
              <div className="absolute inset-0 border border-white/5 rounded-2xl md:rounded-4xl pointer-events-none z-50" />

            </div>
          </motion.div>
        ))}
      </div>

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
    </section>
  );
}