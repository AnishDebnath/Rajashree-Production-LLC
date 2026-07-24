import { motion } from 'motion/react';
import { Film, Camera, Music, Sparkles } from 'lucide-react';
import { artistsData, Artist } from '../../data/artists';
import ThreeDCardEffect from '../../components/ThreeDCardEffect';
import Hero from '../../components/common/hero/Hero';
import ArtistsGrid from './ArtistsGrid';

interface ArtistsPageProps {
  onCollaborateClick: () => void;
  onShowMessage: (msg: string, type: 'info' | 'success') => void;
  onCollaborateWithContext?: (context: string) => void;
  onSelectArtist: (artist: Artist) => void;
}

export default function ArtistsPage({ onShowMessage, onSelectArtist }: ArtistsPageProps) {

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
    <div className="relative w-full text-neutral-200">

      <Hero
        backgroundImage="/src/assets/images/kumartuli-sculptor-film.jpg"
        title="Our Artists"
        subtitle="Meet the visionary minds shaping contemporary storytelling. Directors, cinematographers, soundscapes composers, and master editors cooperating to build legacy visual content."
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Artists' }]}
      />

      {/* 3. ARTISTS GRID CONTAINER */}
      <section
        className="relative py-24 md:py-36 z-20"
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
                id={`artist-card-${artist.id}`}
              >
                <ThreeDCardEffect
                  className="group w-full aspect-3/4 cursor-pointer select-none relative"
                  onClick={() => {
                    onSelectArtist(artist);
                    onShowMessage(`Opening creative profile: ${artist.name}`, 'info');
                  }}
                  tiltMaxAngle={8}
                >
                  {/* Background image covering the full card */}
                  <div
                    className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden border border-white/10 group-hover:border-gold/30 shadow-xl bg-neutral-950 transition-all duration-300"
                    style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d' }}
                  >
                    <img
                      src={artist.avatar}
                      alt={artist.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out filter brightness-[0.9] group-hover:brightness-100"
                      loading="lazy"
                    />

                    {/* Clean Dark Gradient Overlay */}
                    <div
                      className="absolute inset-0 bg-linear-to-t from-black/90 via-black/25 to-transparent z-10 pointer-events-none"
                      style={{ transform: 'translateZ(5px)' }}
                    />
                  </div>

                  {/* Clean text overlay */}
                  <div
                    className="absolute bottom-5 left-5 right-5 z-20 flex flex-col justify-end pointer-events-none text-left"
                    style={{ transform: 'translateZ(25px)' }}
                  >
                    <span className="font-mono text-[10px] uppercase tracking-widest text-gold font-medium mb-1">
                      {artist.role}
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white tracking-tight group-hover:text-gold transition-colors duration-200">
                      {artist.name}
                    </h3>
                  </div>
                </ThreeDCardEffect>
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
    </div>
  );
}