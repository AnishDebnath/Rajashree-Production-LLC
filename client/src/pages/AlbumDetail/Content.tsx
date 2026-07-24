import React from 'react';
import { Album } from '../../data/albums';

interface CaseStudyProps {
  album: Album;
}

export default function CaseStudy({ album }: CaseStudyProps) {
  return (
    <div className="max-w-2xl mx-auto text-left mt-8 mb-16 space-y-12 px-4 sm:px-6">
      {/* Highlights */}
      <div className="space-y-4">
        <h3 className="text-gold font-bold text-sm tracking-wider uppercase">Highlights:</h3>
        <ul className="space-y-3">
          {album.highlights.map((item, idx) => (
            <li key={idx} className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light pl-2">
              • {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Challenges */}
      <div className="space-y-4">
        <h3 className="text-gold font-bold text-sm tracking-wider uppercase">Challenges Faced:</h3>
        <ul className="space-y-3">
          {album.challenges.map((item, idx) => (
            <li key={idx} className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light pl-2">
              • {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Behind the Scenes */}
      <div className="space-y-4">
        <h3 className="text-gold font-bold text-sm tracking-wider uppercase">Behind the Scenes:</h3>
        <ul className="space-y-3">
          {album.behindTheScenes.map((item, idx) => (
            <li key={idx} className="text-neutral-400 text-xs sm:text-sm leading-relaxed font-light pl-2">
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}