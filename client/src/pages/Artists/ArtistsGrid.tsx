import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Film, Camera, Music, Sparkles } from 'lucide-react';
import { artistsData, Artist } from '../../data/artists';
import ArtistCard from '../../components/product/ArtistCard';

interface ArtistsGridProps {
  onSelectArtist: (artist: Artist) => void;
  onCollaborateClick: () => void;
  onShowMessage: (msg: string, type: 'info' | 'success') => void;
  onCollaborateWithContext?: (context: string) => void;
}

export default function ArtistsGrid({ onSelectArtist, onCollaborateClick, onShowMessage, onCollaborateWithContext }: ArtistsGridProps) {
  // Specialties filters - removed as requested, we showcase all artists directly now
  const getRoleIcon = (roleName: string) => {
    const name = roleName.toLowerCase();
    if (name.includes('director') && !name.includes('photography')) return <Film className="w-3.5 h-3.5 text-accent-red" />;
    if (name.includes('photography') || name.includes('cinematographer')) return <Camera className="w-3.5 h-3.5 text-gold" />;
    if (name.includes('sound') || name.includes('composer')) return <Music className="w-3.5 h-3.5 text-sky-400" />;
    return <Sparkles className="w-3.5 h-3.5 text-emerald-400" />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        ease: [0.16, 1, 0.3, 1] as const,
      }
    }
  };

  return (
    <section
      className="relative py-16 z-20"
      id="artists-grid-section"
      style={{
        background: 'linear-gradient(180deg, #050505 0%, #100e07 50%, #030303 100%)'
      }}
    >
      {/* Seamless Melt/Blend Transition with the Hero's Fixed Background */}
      <div className="absolute top-0 left-0 right-0 h-48 -translate-y-full pointer-events-none z-10 overflow-hidden">
        {/* Smooth color gradient from transparent to solid bg-bg-dark */}
        <div className="w-full h-full absolute inset-0 bg-linear-to-t from-bg-dark via-bg-dark/85 to-transparent" />

        {/* Layered progressive backdrop blurs with vertical gradient masks to 'melt' the fixed image */}
        <div
          className="w-full h-32 absolute bottom-0 backdrop-blur-xs"
          style={{
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 20%, rgba(0,0,0,0) 100%)'
          }}
        />
        <div
          className="w-full h-20 absolute bottom-0 backdrop-blur-md"
          style={{
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)'
          }}
        />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-7 pb-0 min-h-75">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {artistsData.map((artist) => (
            <motion.div
              key={artist.id}
              variants={itemVariants}
              className="w-full flex"
            >
              <ArtistCard
                artist={artist}
                onSelect={() => onSelectArtist(artist)}
                onShowMessage={onShowMessage}
                variant="grid"
              />
            </motion.div>
          ))}
        </motion.div>
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