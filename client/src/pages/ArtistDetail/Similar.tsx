import React from 'react';
import { motion } from 'motion/react';
import { Artist } from '../../data/artists';
import ThreeDCardEffect from '../../components/ThreeDCardEffect';

interface SimilarProps {
  otherArtists: Artist[];
  onSelectArtist: (artist: Artist) => void;
  onShowMessage: (msg: string, type: 'info' | 'success') => void;
  onBack: () => void;
}

export default function Similar({ otherArtists, onSelectArtist, onShowMessage, onBack }: SimilarProps) {
  return (
    <div className="w-full flex flex-col items-center my-16 px-6">
      <div className="max-w-2xl w-full flex flex-col gap-6 text-left">
        <h3 className="font-display font-bold text-2xl text-white tracking-tight px-1">
          View Other Production Artists
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 w-full justify-center">
          {otherArtists.map((art) => (
            <div key={art.id} className="w-full max-w-77.5 mx-auto sm:mx-0 flex justify-center">
              <ThreeDCardEffect
                onClick={() => {
                  onSelectArtist(art);
                  onShowMessage(`Opening creative profile: ${art.name}`, 'info');
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }}
                tiltMaxAngle={12}
                className="group w-full aspect-4/5 cursor-pointer select-none relative"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/80 bg-neutral-950 transition-all duration-500 hover:shadow-[0_24px_50px_rgba(212,175,55,0.08)]"
                  style={{ transform: 'translateZ(25px)', transformStyle: 'preserve-3d' }}
                >
                  <img
                    src={art.avatar}
                    alt={art.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out filter brightness-[0.85] group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 bg-linear-to-t from-black/95 via-black/30 to-transparent z-10 pointer-events-none"
                    style={{ transform: 'translateZ(10px)' }}
                  />
                  <div className="absolute inset-0 bg-linear-to-tr from-accent-red/5 to-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                </div>

                {/* Overlay content */}
                <div
                  className="absolute bottom-6 left-6 right-6 z-20 flex flex-col justify-end pointer-events-none text-left"
                  style={{ transform: 'translateZ(55px)' }}
                >
                  <span className="font-mono text-[9px] uppercase tracking-widest text-gold/90 font-bold mb-1.5 drop-shadow-md">
                    {art.role}
                  </span>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight group-hover:text-gold transition-colors duration-200 whitespace-nowrap">
                    {art.name}
                  </h3>
                </div>
              </ThreeDCardEffect>
            </div>
          ))}
        </div>
      </div>

      {/* All Artists Button */}
      <div className="flex justify-center mt-10">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={onBack}
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-red hover:bg-[#ff3b3b] text-white font-sans font-bold text-[10px] sm:text-xs tracking-widest uppercase cursor-pointer select-none transition-all duration-300"
        >
          <span>All Artists</span>
        </motion.button>
      </div>
    </div>
  );
}