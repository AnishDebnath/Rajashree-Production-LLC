import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Artist } from '../../data/artists';
import ThreeDCardEffect from '../ThreeDCardEffect';

interface ArtistCardProps {
    artist: Artist;
    onSelect: () => void;
    onShowMessage?: (msg: string, type: 'info' | 'success') => void;
    onCollaborateWithContext?: (context: string) => void;
    variant?: 'grid' | 'similar';
    enableTilt?: boolean;
    enableLayout?: boolean;
    tiltMaxAngle?: number;
    onCardClick?: () => void;
}

function GridVisual({ artist }: { artist: Artist }) {
    return (
        <div className="group w-full aspect-3/4 cursor-pointer select-none relative">
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
                <div
                    className="absolute inset-0 bg-linear-to-t from-black/90 via-black/25 to-transparent z-10 pointer-events-none"
                    style={{ transform: 'translateZ(5px)' }}
                />
            </div>
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
        </div>
    );
}

function SimilarVisual({ artist, onSelect, onCollaborateWithContext }: { artist: Artist; onSelect: () => void; onCollaborateWithContext?: (context: string) => void }) {
    return (
        <div className="group relative cursor-pointer" onClick={() => onSelect()}>
            <ThreeDCardEffect
                tiltMaxAngle={4}
                className="w-full relative aspect-16/10 rounded-2xl sm:rounded-3xl bg-neutral-950 border border-white/5 hover:border-gold/25 group overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.65)]"
            >
                <div className="w-full h-full rounded-2xl sm:rounded-3xl overflow-hidden bg-neutral-950 relative" style={{ transform: 'translateZ(15px)', transformStyle: 'preserve-3d' }}>
                    <img
                        src={artist.avatar}
                        alt={artist.name}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="w-full h-full object-cover object-center scale-100 group-hover:scale-[1.015] transition-transform duration-1000 ease-out brightness-95 group-hover:brightness-100"
                    />
                </div>

                <div className="absolute inset-0 bg-linear-to-t from-black/95 via-black/25 to-transparent z-35 pointer-events-none" />

                <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-40 max-w-xs text-left opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-3 group-hover:translate-y-0 pointer-events-none">
                    <span className="font-mono text-[10px] tracking-[0.25em] text-gold font-bold uppercase mb-1.5 block">
                        {artist.role}
                    </span>
                    <h4 className="font-display font-bold text-xl sm:text-2xl text-white tracking-tight leading-none group-hover:text-gold transition-colors duration-300">
                        {artist.name}
                    </h4>
                </div>

                {onCollaborateWithContext && (
                    <div className="absolute bottom-6 right-6 md:bottom-8 md:right-8 z-40 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                onCollaborateWithContext(artist.name);
                            }}
                            className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-red hover:bg-[#ff3b3b] text-white font-sans font-bold text-xs tracking-widest uppercase cursor-pointer select-none transition-all duration-300"
                        >
                            <span>Collaborate</span>
                            <ArrowRight className="w-3 h-3" />
                        </motion.button>
                    </div>
                )}

                <div className="absolute top-4 right-4 md:top-6 md:right-6 z-40 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={(e) => {
                            e.stopPropagation();
                            onSelect();
                        }}
                        className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-gold/30 flex items-center justify-center backdrop-blur-sm text-neutral-200 text-base"
                        aria-label={`View ${artist.name} profile`}
                    >
                        <ExternalLink className="w-5 h-5" />
                    </motion.button>
                </div>
            </ThreeDCardEffect>
        </div>
    );
}

export default function ArtistCard({
    artist,
    onSelect,
    onShowMessage,
    onCollaborateWithContext,
    variant = 'grid',
    enableTilt = true,
    enableLayout = true,
    tiltMaxAngle = 8,
    onCardClick,
}: ArtistCardProps) {
    const handleClick = onCardClick ?? (() => {
        onSelect();
        onShowMessage?.(`Opening creative profile: ${artist.name}`, 'info');
    });

    if (variant === 'grid') {
        const gridVisual = <GridVisual artist={artist} />;

        const withInteraction = enableTilt ? (
            <ThreeDCardEffect onClick={handleClick} tiltMaxAngle={tiltMaxAngle} className="w-full">
                {gridVisual}
            </ThreeDCardEffect>
        ) : (
            <div onClick={handleClick} className="w-full">
                {gridVisual}
            </div>
        );

        if (enableLayout) {
            return (
                <motion.div
                    layout
                    transition={{
                        layout: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
                    }}
                    className="w-full flex"
                >
                    {withInteraction}
                </motion.div>
            );
        }

        return withInteraction;
    }

    // similar variant — handles own clicks and tilt internally
    return (
        <SimilarVisual
            artist={artist}
            onSelect={onSelect}
            onCollaborateWithContext={onCollaborateWithContext}
        />
    );
}
