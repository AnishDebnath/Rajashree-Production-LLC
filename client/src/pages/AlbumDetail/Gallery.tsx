import React from 'react';
import { motion } from 'motion/react';
import ThreeDCardEffect from '../../components/ThreeDCardEffect';
import { Album } from '../../data/albums';

interface GalleryProps {
  album: Album;
}

export default function Gallery({ album }: GalleryProps) {
  return (
    <div className="flex flex-col gap-12 sm:gap-20 py-16">
      {album.photos.map((photo, index) => (
        <motion.div
          key={photo.id}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
        >
          <ThreeDCardEffect
            tiltMaxAngle={7}
            className="w-full relative aspect-16/10 sm:aspect-video rounded-[20px] sm:rounded-4xl bg-neutral-950 border border-white/5 hover:border-gold/25 group cursor-default transition-all duration-500 ease-out shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
          >
            <div
              className="w-full h-full rounded-[20px] sm:rounded-4xl overflow-hidden bg-neutral-950 relative"
              style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d' }}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-cover object-center scale-100 group-hover:scale-[1.015] transition-transform duration-1000 ease-out brightness-95 group-hover:brightness-100"
              />
            </div>
          </ThreeDCardEffect>
        </motion.div>
      ))}
    </div>
  );
}