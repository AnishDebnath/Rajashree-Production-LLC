import React from 'react';
import { Artist } from '../../data/artists';

interface BioProps {
  artist: Artist;
}

export default function Bio({ artist }: BioProps) {
  return (
    <div className="max-w-3xl mx-auto w-full flex flex-col items-start text-left py-16">
      <p className="font-sans text-neutral-300 text-sm sm:text-base leading-relaxed font-light mb-10">
        {artist.bio}
      </p>

      {/* Vertical Metadata Stack */}
      <div className="flex flex-col gap-6 pl-1 mb-16">
        <div className="border-l border-white/10 pl-4 py-0.5">
          <span className="block font-mono text-[8px] text-neutral-500 tracking-[0.2em] uppercase">[ROLE / DISCIPLINE]</span>
          <span className="font-sans text-sm text-neutral-200 mt-1 block font-medium">{artist.role}</span>
        </div>
        <div className="border-l border-white/10 pl-4 py-0.5">
          <span className="block font-mono text-[8px] text-neutral-500 tracking-[0.2em] uppercase">[EXPERIENCE]</span>
          <span className="font-sans text-sm text-neutral-200 mt-1 block font-medium">{artist.experience}</span>
        </div>
        <div className="border-l border-white/10 pl-4 py-0.5">
          <span className="block font-mono text-[8px] text-neutral-500 tracking-[0.2em] uppercase">[SPECIALTIES]</span>
          <span className="font-sans text-sm text-neutral-200 mt-1 block font-medium">{artist.specialties.join(', ')}</span>
        </div>
      </div>
    </div>
  );
}