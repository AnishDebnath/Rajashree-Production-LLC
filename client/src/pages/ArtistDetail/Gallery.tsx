import React from 'react';
import ThreeDCardEffect from '../../components/ThreeDCardEffect';
import { Artist } from '../../data/artists';

interface GalleryProps {
  artist: Artist;
}

export default function Gallery({ artist }: GalleryProps) {
  const stills = artist.gallery ?? [];

  if (stills.length === 0) return null;

  return (
    <>
      {/* Gallery Heading */}
      <div className="max-w-4xl mx-auto w-full my-12 px-6">
        <div className="text-left flex flex-col items-start w-full">
          <span className="font-mono text-[10px] md:text-[11px] tracking-[0.3em] text-gold font-bold uppercase mb-2 block">
            GALLERY
          </span>
          <div className="flex items-center gap-6 w-full">
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight whitespace-nowrap">
              Production Frames & Stills
            </h2>
            <div className="grow h-px bg-white/10" />
          </div>
        </div>
      </div>

      {/* Sticky Frames */}
      <div className="max-w-4xl mx-auto w-full flex flex-col gap-12 md:gap-16 mb-32 px-6">
        {stills.map((still, idx) => (
          <div
            key={idx}
            className="sticky top-24 md:top-28 w-full"
            style={{
              zIndex: (idx + 1) * 10,
            }}
          >
            <ThreeDCardEffect
              tiltMaxAngle={7}
              className="w-full relative aspect-video rounded-3xl bg-surface-dark border border-white/10 hover:border-gold/30 group/still cursor-pointer transition-all duration-500 ease-out"
            >
              <div
                className="w-full h-full rounded-3xl overflow-hidden bg-neutral-950 relative"
                style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d' }}
              >
                <img
                  src={still}
                  alt={`Production Frame ${idx + 1}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover brightness-[0.85] group-hover/still:brightness-100 group-hover/still:scale-[1.02] transition-all duration-700 ease-out"
                />
              </div>
            </ThreeDCardEffect>
          </div>
        ))}
      </div>
    </>
  );
}