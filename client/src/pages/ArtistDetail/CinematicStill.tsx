import React from 'react';
import { Artist } from '../../data/artists';
import { Project } from '../../types';
import ThreeDCardEffect from '../../components/ThreeDCardEffect';

interface CinematicStillProps {
    artist: Artist;
    projects: Project[];
}

export default function CinematicStill({ artist, projects }: CinematicStillProps) {
    const stillSrc = projects[0]?.image || artist.avatar;

    return (
        <ThreeDCardEffect
            tiltMaxAngle={4}
            className="w-full relative aspect-21/9 sm:aspect-21/8 bg-black rounded-3xl overflow-hidden border border-white/5 shadow-2xl mb-16"
        >
            <img
                src={stillSrc}
                alt={`${artist.name} Cinematic Wide`}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover brightness-[0.8]"
                style={{ transform: 'translateZ(30px)' }}
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent pointer-events-none" />
        </ThreeDCardEffect>
    );
}
