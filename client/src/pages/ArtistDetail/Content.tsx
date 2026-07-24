import React from 'react';
import { Artist } from '../../data/artists';
import { Project } from '../../types';
import ThreeDCardEffect from '../../components/ThreeDCardEffect';

interface CaseStudyProps {
    artist: Artist;
    projects: Project[];
}

export default function CaseStudy({ artist, projects }: CaseStudyProps) {
    const stillSrc = projects[0]?.image || artist.avatar;

    return (
        <>
            {/* Cinematic Still */}
            <ThreeDCardEffect
                tiltMaxAngle={4}
                className="w-full relative aspect-[21/9] sm:aspect-[21/8] bg-black rounded-3xl overflow-hidden border border-white/5 shadow-2xl mb-16"
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

            {/* Philosophy Content */}
            <div className="max-w-3xl mx-auto w-full flex flex-col gap-8 text-left text-neutral-300 font-sans text-sm sm:text-base leading-relaxed font-light mb-20 px-6">
                <div className="flex flex-col gap-4">
                    <h4 className="font-display font-bold text-lg text-white">Creative Philosophy:</h4>
                    <p className="text-neutral-400">
                        {artist.name} operates on a core belief that visual representation must honor the deep emotional textures of the environment. Every framing, camera speed decision, and lighting profile is meticulously calibrated to create an unforgettable, high-retention atmosphere that positions projects at the pinnacle of luxury, realism, and storytelling.
                    </p>
                </div>

                <div className="flex flex-col gap-4 mt-4">
                    <h4 className="font-display font-bold text-lg text-white">Core Architectural Disciplines:</h4>

                    <div className="flex flex-col gap-3 mt-2">
                        <h5 className="font-sans font-bold text-sm text-neutral-200 uppercase tracking-wider">Cinematic Execution:</h5>
                        <ul className="list-disc pl-5 flex flex-col gap-2 text-neutral-400">
                            {artist.specialties.map((spec, i) => (
                                <li key={i} className="pl-1">
                                    Expert delivery in {spec} utilizing world-class production equipment and workflows.
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-3 mt-4">
                    <h4 className="font-display font-bold text-lg text-white">Production Footprint:</h4>
                    <p className="text-neutral-400">
                        Under our production agency, {artist.name} has steered multiple legacy and commercial campaigns. These projects successfully merged raw organic light play with precision high-end editorial pacing, capturing maximum audience engagement and establishing solid luxury authority for major brands.
                    </p>
                </div>

                <p className="text-neutral-400 mt-4 italic">
                    &ldquo;Art is not just what you capture; it is how you orchestrate the silent spaces between frames.&rdquo; — {artist.name}
                </p>
            </div>
        </>
    );
}
